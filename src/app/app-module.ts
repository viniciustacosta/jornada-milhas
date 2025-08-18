import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Banner } from './shared/banner/banner';
import { Card } from './shared/card/card';
import { Container } from './shared/container/container';
import { Home } from './pages/home/home';
import { CardBusca } from './shared/card-busca/card-busca';
import { CardDepoimento } from './shared/card-depoimento/card-depoimento';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Banner,
    Card,
    Container,
    Home,
    CardBusca,
    CardDepoimento
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
