import { AuthService } from './../../seguranca/auth.service';
import { FormControl } from '@angular/forms';
import { PessoaService, PessoaFiltro } from './../pessoa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/utils/error-handler.service';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  ngOnInit(){
    this.title.setTitle('Pequisar Pessoas');
  }

  totalRegistros = 0;
  filtro = new PessoaFiltro();
  pessoas = [];

  @ViewChild('pesquisaPessoas', {static: true}) grid;


  constructor(private pessoaService: PessoaService,
              private toasty: ToastyService,
              private confirmation: ConfirmationService,
              private errorHandler: ErrorHandlerService,
              private title: Title,
              public auth: AuthService

    ) {}

  reset(form){
    form.reset();
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
      .then(resultado => {
          this.totalRegistros = resultado.total;
          this.pessoas = resultado.pessoas;
        })
        .catch(erro => this.errorHandler.handle(erro));

  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.codigo)
    .then(() => {
      this.grid.reset();

      this.toasty.success(`Pessoa ${pessoa.nome} com sucesso`);
    })
    .catch(erro => this.errorHandler.handle(erro));

  }

  mudarStatus(pessoa: any): void {
    const novoStatus = !pessoa.ativo;
    this.pessoaService.mudarStatus(pessoa.codigo, novoStatus)
    .then(() => {
      const acao = novoStatus ? 'ativado' : 'desativado';
      pessoa.ativo = novoStatus;
      this.toasty.success(`Status de ${pessoa.nome} ${acao} com sucesso!`);

    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(pessoa: any) {

    this.confirmation.confirm({
        message: `<b>Nome:</b> ${pessoa.nome}
         <br> <b>Cidade:</b> ${pessoa.endereco.cidade}
         <br> <b>Estado:</b> ${pessoa.endereco.estado}`,
                header: 'Tem certeza que deseja excluir a pessoa?',
        accept: () => {
            this.excluir(pessoa);
        }
    });


}


}
