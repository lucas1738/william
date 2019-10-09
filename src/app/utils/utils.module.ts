import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ValidacaoFormComponent } from './validacao-form/validacao-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessageComponent } from './message/message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModToastComponent } from './mod-toast/mod-toast.component';
import { ModMessageComponent } from './mod-message/mod-message.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ErrorHandlerService } from './error-handler.service';
import { NaoAutorizadoComponent } from './nao-autorizado/nao-autorizado.component';
import { PanelMenuModule, MessageModule, InputMaskModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { AppModule } from '../app.module';





@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PanelMenuModule,
    FormsModule,
    ToastModule,
    MessageModule

  ],
  declarations: [
    MenuComponent,
    NavbarComponent,
    // AppModule,
    MessageComponent,
    SidebarComponent,
    ValidacaoFormComponent,
    ModToastComponent,
    ModMessageComponent,
    BreadcrumbComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent,


  ],
  exports: [
    MenuComponent,
    MessageComponent,
    NavbarComponent,
    SidebarComponent,
    ValidacaoFormComponent,
    PaginaNaoEncontradaComponent,
    ModToastComponent,
    ModMessageComponent,
    BreadcrumbComponent,
    NaoAutorizadoComponent


  ],
  providers: [
    MessageService,
    ErrorHandlerService
  ]
})
export class UtilsModule { }
