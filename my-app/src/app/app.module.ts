import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHighLightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './beter-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { ServersSection11Service } from './services/servers-section11.service';
import { HomeSection11Component } from './home-section11/home-section11.component';
import { EditServerSection11Component } from './servers-section11/edit-server-section11/edit-server-section11.component';
import { ServerSection11Component } from './servers-section11/server-section11/server-section11.component';
import { ServersSection11Component } from './servers-section11/servers-section11.component';
import { UserSection11Component } from './users-section11/user-section11/user-section11.component';
import { UsersSection11Component } from './users-section11/users-section11.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers-section11/edit-server-section11/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers-section11/server-section11/server-resolver.service';




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighLightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    HomeSection11Component,
    UsersSection11Component,
    ServersSection11Component,
    UserSection11Component,
    EditServerSection11Component,
    ServerSection11Component,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AccountsService, LoggingService, ServersSection11Service, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
