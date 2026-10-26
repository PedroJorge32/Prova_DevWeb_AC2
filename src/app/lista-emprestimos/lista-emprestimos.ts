import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LivroService } from '../livro-service';
import { Livro } from '../livro-interface';

@Component({
  selector: 'app-lista-emprestimos',
  imports: [RouterLink],
  templateUrl: './lista-emprestimos.html',
  styleUrl: './lista-emprestimos.css',
})
export class ListaEmprestimos {
  constructor(private LivroService: LivroService) {}

get livros(): Livro[] {
return this.LivroService.listar();
}
// contador
get total(): number {
return this.livros.length;
}
get concluidas(): number {
return this.livros.filter(l => l.devolvido).length;
}
get pendentes(): number {
return this.livros.filter(l => !l.devolvido).length;
}

concluir(id: number): void {
this.LivroService.registrarDevolucao(id);
}
remover(id: number): void {
this.LivroService.remover(id);
}
}
