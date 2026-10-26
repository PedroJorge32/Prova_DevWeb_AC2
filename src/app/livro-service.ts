import { Injectable } from '@angular/core';
import { Livro } from '../app/livro-interface'


@Injectable({
  providedIn: 'root',
})
export class LivroService {

private livros: Livro[] = [];
private proximoId = 1;

listar(): Livro[] {
return this.livros;
}

adicionar(TituloLivro: string, nomePessoa: string, DataDevolucao: string): void {
this.livros.push({
id: this.proximoId++, 
nomePessoa,
TituloLivro, 
DataDevolucao,
devolvido: false 
});
}

remover(id: number): void {
this.livros = this.livros.filter(l => l.id !== id);  // filter: cria um array novo sem a fruta desse id (ela some)
}

// marcarConcluida: liga o campo concluida
registrarDevolucao(id: number): void {
const livro = this.buscar(id);
if (livro) livro.devolvido = true;
}

private buscar(id: number): Livro | undefined{
return this.livros.find(l => l.id === id);
}

}
