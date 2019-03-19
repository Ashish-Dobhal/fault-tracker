import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DealDataService} from "./service/deal-data.service"
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers:[DealDataService]
})
export class SharedModule { }
