import { Routes } from '@angular/router';
import { CadastroEmprestimo } from './cadastro-emprestimo/cadastro-emprestimo';
import { ListaEmprestimos } from './lista-emprestimos/lista-emprestimos';


export const routes: Routes = [

    {path: 'cadastro', component: CadastroEmprestimo},
    {path: 'listar', component: ListaEmprestimos}

    
];