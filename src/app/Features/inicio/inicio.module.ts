import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { SharedModule } from "src/app/shared/shared.module";
import { InicioComponent } from "./inicio.component";
import { EffectsModule } from "@ngrx/effects";



@NgModule({
    declarations: [
        InicioComponent
    ],
    imports: [
        InfiniteScrollModule,
        EffectsModule.forRoot([]),
        FormsModule,
        SharedModule
    ],
})

export class InicioModule { }
