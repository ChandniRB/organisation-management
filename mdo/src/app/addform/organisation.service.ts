import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor(private http:HttpClient) { }

  private baseUrl:string = 'http://localhost:7001';
  private orgUrl:string = this.baseUrl + '/org';

  createOrg(body: OrganisationRequest): Observable<Organisation> {
    let httpOptions = {
      headers: new HttpHeaders({"Content-Type": "application/json"})
    };

    return this.http.post<Organisation>(this.orgUrl+'/create', body, httpOptions );

  }
}

export class OrganisationRequest {
  mapid: string;
  orgcode: string;
  orgname: string;
  parentmapid: string;
  sborgid: string;
  sborgtype: string;
  sbrootorgid:string;
  sbsuborgtype:string;

  constructor(  mapid: string,
    orgcode: string,
    orgname: string,
    parentmapid: string,
    sborgid: string,
    sborgtype: string,
    sbrootorgid:string,
    sbsuborgtype:string) {

                  this.orgcode = orgcode;
                  this.orgname = orgname;
                  this.parentmapid = parentmapid;
                  this.sborgid = sborgid;
                  this.sborgtype = sborgtype;
                  this.sbsuborgtype = sbsuborgtype;
                  this.sbrootorgid = sbrootorgid;
                  this.mapid = mapid;
                }
}

export interface Organisation {

  orgname: string,
                orgcode: string,
                parentmapid: string,
                sborgtype: string,
                sbsuborgtype:string,
                sborgid: string,
                sbrootorgid:string,
                mapid: string 
}