import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  listOfObjects:any;
  selectedObject:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this.getObjects();
  }
  getObjects(){
    let observable = this._httpService.getPrimaries();
    observable.subscribe(data => {
      // this.listOfObjects = data['data']
      this.listOfObjects = data['data'].sort(this._httpService.dynamicSort("title"));
    })
  }
  onShow(x){
    this._router.navigate(['/products/'+x._id+'/details'])
  }
  onEdit(x){
    this._router.navigate(['/products/edit',x._id])
  }
  onDelete(x){
    let observable = this._httpService.deletePrimary(x._id);
    observable.subscribe(data => {
      this.getObjects();
    })
  }
  onSelectForChild(x){
    this.selectedObject = x;
  }
  ReceivedChildMessage(event){
    if(event == true){
      this.selectedObject = null;
      //you can also run other functions to refresh the parent's lists and whatever
    }
  }
}
