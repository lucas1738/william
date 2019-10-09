import { MenuService } from './../../menu.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/utils/error-handler.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(public auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    public menuService: MenuService) { }

    senhaInput: string;

 login(usuario: string, senha: string){
   this.auth.login(usuario, senha)
   .then(() => {
    this.menuService.reset();
     this.router.navigate(['lancamentos']);
   })
    .catch(erro => {
      this.errorHandler.handle(erro);
      this.senhaInput = '';
    })



  }

    reset(form:FormControl){
      form.reset();
    }
}


