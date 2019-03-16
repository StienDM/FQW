import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ControlBarComponent } from './control-bar/control-bar.component';
import { ExpItemComponent } from './control-bar/exp-item/exp-item.component';
import { SideBarHeaderComponent } from './control-bar/side-bar-header/side-bar-header.component';
import { AstService } from './ast.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ControlBarComponent,
    ExpItemComponent,
    SideBarHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ AstService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
