import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DealDataService {
readonly baseUrl= "http://localhost:8090/"
  constructor(private http: HttpClient) 
  {
   }
   getDealEntryData(dealReferenceNumber: string): Observable<any> {
//    return this.http.get('url here/' + dealReferenceNumber);
    return this.http.get(this.baseUrl+""+dealReferenceNumber);
}
  getPublisherDealData(dealReferenceNumber: string): Observable<any> {
    return this.http.get(this.baseUrl+""+dealReferenceNumber);
  }

  getSubscriberDealData(dealReferenceNumber: string): Observable<any> {
    return this.http.get(this.baseUrl+""+dealReferenceNumber);
  }
  getOwbDealData(dealReferenceNumber: string): Observable<any> {
    return this.http.get(this.baseUrl+""+dealReferenceNumber);
  }
  }
