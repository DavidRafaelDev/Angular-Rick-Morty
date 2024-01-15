import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { FavoritosComponent } from "./favoritos.component";
import { RouterModule, Routes } from "@angular/router";


@NgModule({
    declarations: [
        FavoritosComponent
    ],
    imports: [
        FormsModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: FavoritosComponent },
        ]),
    ],
    exports: [RouterModule]

})

export class FavoritosModule { }
