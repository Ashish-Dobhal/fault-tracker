import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DashboardParentComponent } from '../app/dashboard-parent/dashboard-parent.component';
import { ReactiveFormsModule } from '@angular/forms';
// MDB Angular Free
import { BadgeModule, IconsModule, WavesModule,CardsFreeModule  } from 'angular-bootstrap-md'

import {SharedModule} from "./shared/shared.module"
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardParentComponent,
    
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,MatTabsModule,MatMenuModule
  ,BadgeModule, IconsModule, WavesModule, CardsFreeModule,SharedModule,ReactiveFormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
