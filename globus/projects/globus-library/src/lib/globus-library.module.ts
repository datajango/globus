import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlobusLibraryComponent } from './globus-library.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [GlobusLibraryComponent, ButtonComponent],
  imports: [
    BrowserModule 
  ],
  exports: [GlobusLibraryComponent, ButtonComponent]
})
export class GlobusLibraryModule { }
