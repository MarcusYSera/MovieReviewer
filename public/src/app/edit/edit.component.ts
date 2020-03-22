import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editingObject:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    //this will just avoid error (make sure it is first before the function for getting things);
    this.editingObject = {title:"", url: "" , reviews:[]}
    this.getSpecificObject();
  }
  getSpecificObject(){
    let observable = this._httpService.getPrimary(this._route.snapshot.params.id);
    observable.subscribe(data =>{
      this.editingObject = data['data']
    })
  }
  onSubmit(){
    //when editing double check if the right fields are being updated on the controller.
    let observable = this._httpService.editPrimary(this._route.snapshot.params.id,this.editingObject);
    observable.subscribe(data =>{
      this.editingObject = data['data']
    })
  }
}
