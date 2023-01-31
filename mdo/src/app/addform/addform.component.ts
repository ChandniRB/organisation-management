import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEvent, Observable } from 'rxjs';
import { OrganisationRequest, OrganisationService } from './organisation.service';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {

  constructor(private orgService: OrganisationService) { }

  createOrgForm: FormGroup;
  mapid: string;
  orgcode: string;
  orgname: string;
  parentmapid: string;
  sborgid: string;
  sborgtype: string;
  sbrootorgid:string;
  sbsuborgtype:string;

  clickObservable: Observable<Event> = fromEvent(document,'click');

  ngOnInit(): void {

    this.createOrgForm = new FormGroup({
      mapid: new FormControl(''),
      orgcode: new FormControl(''),
      orgname: new FormControl(''),
      parentmapid: new FormControl(''),
      sborgid: new FormControl(''),
      sborgtype: new FormControl(''),
      sbrootorgid: new FormControl(''),
      sbsuborgtype: new FormControl('')
    });

    this.createOrgForm.valueChanges.subscribe(form => {

      this.mapid = form.mapid;
      this.orgcode = form.orgcode;
      this.orgname = form.orgname;
      this.parentmapid = form.parentmapid;
      this.sborgid = form.sborgid;
      this.sborgtype = form.sborgtype;
      this.sbrootorgid = form.sbrootorgid;
      this.sbsuborgtype = form.sbsuborgtype;

      console.log(this.orgname);
      console.log(this.mapid);
      console.log(this.parentmapid);

    });

    
    
  }

  createOrg() {
    this.orgService.createOrg(new OrganisationRequest(this.mapid,
      this.orgcode, this.orgname, this.parentmapid, this.sborgid, 
      this.sborgtype, this.sbrootorgid, this.sbsuborgtype)).subscribe(postResult => {
        console.log(postResult);
        
      });
  }

  
  
}
