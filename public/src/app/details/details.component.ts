import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  newReview:any;
  shownObject:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this.newReview = { user: "", rating: 1, comment:"" }
    this.shownObject = {title:"", reviews:[]}
    this.getShownObject();
  }
  getShownObject(){
    let observable = this._httpService.getPrimary(this._route.snapshot.params.id);
    observable.subscribe(data =>{
      this.shownObject = data['data']
      //reviews is an array
      var sum = 0;
      for(var i = 0; i < this.shownObject.reviews.length; i++){
        sum += this.shownObject.reviews[i].rating
      }
      this.shownObject.average = sum/this.shownObject.reviews.length
      this.shownObject.reviews = this.shownObject.reviews.sort(this._httpService.dynamicSort("-rating"))
    })
  }
  onSubmit(){
    let observable = this._httpService.addSecondary(this._route.snapshot.params.id, this.newReview);
    observable.subscribe(data =>{
      this.getShownObject ();
    })
  }
}
