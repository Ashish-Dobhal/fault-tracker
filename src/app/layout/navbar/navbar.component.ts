import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  @Input() dealReferenceNumber:FormControl;
  @Output() searchDealEvent = new EventEmitter<boolean>();

 constructor() { }

  ngOnInit() 
  {
  }
  searchForDeal($event)
  {
    this.searchDealEvent.emit(true);
  }
}
