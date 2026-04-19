import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Employee, EmployeeService } from '../../core/services/employee';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees implements OnInit {
  employees: Employee[] = [];
  showModal = false;
  editingId: string | null = null;
  loading = false;
  saving = false;

  private toast = inject(ToastService);
  form;

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this.fb.nonNullable.group({
      name:   ['', [Validators.required, Validators.minLength(2)]],
      email:  ['', [Validators.required, Validators.email]],
      phone:  ['', [Validators.required, Validators.minLength(8)]],
      salary: [0,  [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() { this.loadEmployees(); }

  ctrl(name: string): AbstractControl { return this.form.get(name)!; }

  isInvalid(name: string): boolean {
    const c = this.ctrl(name);
    return c.invalid && (c.dirty || c.touched);
  }

  errorMsg(name: string): string {
    const c = this.ctrl(name);
    if (c.hasError('required'))  return 'Campo obrigatório.';
    if (c.hasError('email'))     return 'E-mail inválido.';
    if (c.hasError('minlength')) return `Mínimo ${c.getError('minlength').requiredLength} caracteres.`;
    if (c.hasError('min'))       return 'Valor deve ser maior ou igual a 0.';
    return '';
  }

  loadEmployees() {
    this.loading = true;
    this.employeeService.getAll().subscribe({
      next: (data) => { this.employees = data; this.loading = false; this.cdr.markForCheck(); },
      error: () => { this.toast.error('Erro ao carregar funcionários.'); this.loading = false; this.cdr.markForCheck(); }
    });
  }

  openNew() {
    this.editingId = null;
    this.form.reset({ salary: 0 });
    this.showModal = true;
  }

  openEdit(emp: Employee) {
    this.editingId = emp.id!;
    this.form.setValue({ name: emp.name, email: emp.email, phone: emp.phone, salary: emp.salary });
    this.showModal = true;
  }

  closeModal() { this.showModal = false; this.form.markAsUntouched(); }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const data = this.form.getRawValue();
    this.saving = true;

    const req = this.editingId
      ? this.employeeService.update({ ...data, id: this.editingId })
      : this.employeeService.create(data);

    const successMsg = this.editingId ? 'Funcionário atualizado!' : 'Funcionário criado!';

    req.subscribe({
      next: () => {
        this.toast.success(successMsg);
        this.loadEmployees(); this.closeModal();
        this.saving = false; this.cdr.markForCheck();
      },
      error: () => {
        this.toast.error('Erro ao salvar funcionário.');
        this.saving = false; this.cdr.markForCheck();
      }
    });
  }

  delete(id: string) {
    if (!confirm('Deseja excluir este funcionário?')) return;
    this.employeeService.delete(id).subscribe({
      next: () => {
        this.employees = this.employees.filter(e => e.id !== id);
        this.toast.success('Funcionário excluído.');
        this.cdr.markForCheck();
      },
      error: () => { this.toast.error('Erro ao excluir funcionário.'); this.cdr.markForCheck(); }
    });
  }
}
