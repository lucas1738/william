import { ModMessageComponent } from './../utils/mod-message/mod-message.component';
import { ModToastComponent } from './../utils/mod-toast/mod-toast.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { MessagesModule, BreadcrumbModule, TooltipModule, SelectButtonModule, InputMaskModule} from 'primeng/primeng';
import {MessageModule} from 'primeng/message';
import { PessoasAtualizacaoComponent } from './pessoas-atualizacao/pessoas-atualizacao.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/components/table/table';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    RouterModule,
    TableModule,
    BreadcrumbModule,
    UtilsModule,
    TooltipModule,
    SelectButtonModule,
    InputMaskModule,
    ReactiveFormsModule

  ],
  declarations: [
    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    PessoasAtualizacaoComponent
  ],
  exports: [
    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    PessoasAtualizacaoComponent
  ]

})
export class PessoasModule { }
