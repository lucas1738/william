import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import {JwtHelperService} from '@auth0/angular-jwt';
import { JwtModule } from "@auth0/angular-jwt";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoneyHttpInterceptor } from '../seguranca/money-http-interceptor';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AuthService,
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MoneyHttpInterceptor,
      multi: true
  },
  AuthGuard


  ]
})
export class SegurancaModule { }
