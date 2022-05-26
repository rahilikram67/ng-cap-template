import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { materialImports } from '../material.imports';
import { SidebuttonComponent } from "./sidebutton/sidebutton.component"
const arr = [
    SidebuttonComponent
]
@NgModule({
    imports: [...materialImports],
    declarations: arr,
    exports: arr
})
export class SharedModule { }