import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmprestimo } from './cadastro-emprestimo';

describe('CadastroEmprestimo', () => {
  let component: CadastroEmprestimo;
  let fixture: ComponentFixture<CadastroEmprestimo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEmprestimo],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroEmprestimo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
