import { RouterModule } from '@angular/router';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LancamentoAtualizacaoComponent } from './lancamento-atualizacao/lancamento-atualizacao.component';
import { CalendarModule, SelectButtonModule, MessageModule, DropdownModule, BreadcrumbModule, InputMaskModule } from 'primeng/primeng';
import { UtilsModule } from '../utils/utils.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { TableModule } from 'primeng/components/table/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CalendarModule,
    SelectButtonModule,
    MessageModule,
    UtilsModule,
    DropdownModule,
    BreadcrumbModule,
    TableModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  declarations:
  [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentoAtualizacaoComponent,
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentoAtualizacaoComponent
  ]

})
export class LancamentosModule { }
