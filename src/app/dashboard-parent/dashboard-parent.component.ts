import { Component, OnInit } from '@angular/core';
import { DealDataService } from 'src/app/shared/service/deal-data.service';
import { FormControl } from '@angular/forms';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { SimpleChange } from '@angular/core';

@Component({
  selector: 'app-dashboard-parent',
  templateUrl: './dashboard-parent.component.html',
  styleUrls: ['./dashboard-parent.component.css']
})
export class DashboardParentComponent implements OnInit,OnChanges {
   dealEntryData:any[]=null;
   subscriberData:any[]=null;
   publisherData:any[]=null; 
   owbDealData:any[]=null;
   dealNotFound:boolean = false;
   readonly dealNotFoundError: "Deal with reference number does not exist in db";
  constructor(private dealDataService: DealDataService) { }
  
  @Input("dealReferenceNumber") _dealReferenceNumber:FormControl;
  @Input() searchForDeal:boolean;
  
  ngOnInit() 
  {
   this._dealReferenceNumber.valueChanges.subscribe(vlaue=>
    {
      this.dealNotFound = false;
    });
  }
get dealReferenceNumber()
{
return this._dealReferenceNumber.value;
}
  ngOnChanges(changes:SimpleChanges)
  {
    console.log(changes["searchForDeal"]);
    const searchForDealChange:SimpleChange = changes["searchForDeal"];
    if(searchForDealChange.currentValue=== true)
    {
      this.dealNotFound = false;
      // get deal entry data for the given reference number from various ng systems
      this.getDealEntryData();
    }
  }
  getDealEntryData()
  {
    this.dealDataService.getDealEntryData(this.dealReferenceNumber).subscribe(data=>
      {
        this.dealEntryData = data;
        this.getPublisherData();
        this.getSubscriberData();
        this.getOwbData();
      },error=>
      {
        this.dealNotFound = true;
        console.log("No deal data found for the given deal reference number");
      });
  }

  getPublisherData()
  {
    this.dealDataService.getPublisherDealData(this.dealReferenceNumber).subscribe(data=>
      {
        console.table(data);
        this.publisherData = data;
      },error=>
      {
        console.log("No deal data found for the given deal reference number");
      });
  }
  getSubscriberData()
  {
    this.dealDataService.getSubscriberDealData(this.dealReferenceNumber).subscribe(data=>
      {
        console.table(data);
        this.subscriberData = data;
      },error=>
      {
        console.log("No deal data found for the given deal reference number");
      });
  }
  getOwbData()
  {
    this.dealDataService.getSubscriberDealData(this.dealReferenceNumber).subscribe(data=>
      {
        console.table(data);
        this.owbDealData = data;
      },error=>
      {
        console.log("No deal data found for the given deal reference number");
      });
  }
}
