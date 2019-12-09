import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ForwardComponent } from './forward/forward.component';
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';
import { BackwardComponent } from './backward/backward.component';
import { ContainerComponent } from './container/container.component';
import { ExpertoComponent } from './experto/experto.component';

@NgModule({
  declarations: [
    AppComponent,
    ForwardComponent,
    LoginComponent,
    ItemComponent,
    BackwardComponent,
    ContainerComponent,
    ExpertoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
