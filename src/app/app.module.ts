import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './Core/Components/header/header.component';
import { charactersReducer } from './shared/NgRx/favoriteCharacter/character.reducer';
import { SharedModule } from './shared/shared.module';
import { InicioModule } from './Features/inicio/inicio.module';
import { FavoritosModule } from './Features/favoritos/favoritos.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({ characters: charactersReducer } as any),
    FormsModule,
    SharedModule,
    InicioModule,
    FavoritosModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
