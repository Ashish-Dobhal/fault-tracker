import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'deal-fault-tracker';
  dealReferenceNumber: FormControl = new FormControl;
  searchForDeal: boolean = false;

  ngOnInit() {
  }
  searchDeal()
  {
    this.searchForDeal = true;
  }
}


