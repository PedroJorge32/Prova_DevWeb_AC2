import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // para o ngModel
import { RouterLink } from '@angular/router'; // para o routerLink
import { LivroService } from '../livro-service';

@Component({
  selector: 'app-cadastro-emprestimo',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro-emprestimo.html',
  styleUrl: './cadastro-emprestimo.css',
})
export class CadastroEmprestimo {
  NomeLivro = ''; 
  DataDevolucao = ''; 
  nomePessoa = ''; 
  mensagem = '';
  
  constructor(private livroService: LivroService) {}
  cadastrar(): void {
  if (!this.nomePessoa.trim()) { 
  this.nomePessoa = 'Informe o nome da pessoa.';
  return; 
  }
  this.livroService.adicionar(this.NomeLivro.trim(), this.DataDevolucao, this.nomePessoa.trim());
  this.mensagem = `Livro "${this.NomeLivro.trim()}" Cadastrado!!`;
  this.NomeLivro = ''; 
  this.DataDevolucao = '';
  this.nomePessoa = '';
  }
}
