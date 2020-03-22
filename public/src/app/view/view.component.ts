import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  movie= [];
  id:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getMovie();
  }
  getMovie(){
    const id = this._route.snapshot.paramMap.get('id');
    let observable = this._httpService.getPrimary(id);
    observable.subscribe(data=>{
      this.movie = data['data'];
    })
  }
  // deleteReview(x){
  //   console.log(x);
  //   let observable = this._httpService.deleteSecondary(x);
  // }
  deleteMovie(q){
    let observable = this._httpService.deletePrimary(q);
    observable.subscribe()
  }
}
