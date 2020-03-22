import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newObject: any;
  newReview: any;
  errorBoolean = false;
  errorMessage = "";
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newObject = { title: "", reviews: [] }
    this.newReview = { user: "", rating: 1, comment:"" }

  }
  onSubmit() {
    if (this.newObject.title.length < 3) {
      this.errorBoolean = true;
    } else {
      //this will create the object with an initial review
      this.newObject.reviews.push(this.newReview);
      let observable = this._httpService.addNew(this.newObject);
      observable.subscribe(data => {
        console.log(data);
        if (data['errorMsg']) {
          this.errorMessage = data['errorMsg']
        } else {
          this._router.navigate(['/movies'])
        }
      })
    }

  }
  // //sample of regular observable with routing after data comes back (no validation)
  // onSubmit() {
  //   let observable = this._httpService.addNew(this.newObject);
  //   observable.subscribe(data => {
  //     console.log(data);
  //     this._router.navigate(['/products'])
  //   })
  // }
  // // front-end validation (you can add more fields to check with else if)
  // onSubmit() {
  //   if (this.newObject.title.length < 3) {
  //     this.errorBoolean = true;
  //   } else {
  //     //this will create the object with an initial review
  //     this.newObject.reviews.push(this.newReview);
  //     let observable = this._httpService.addNew(this.newObject);
  //     observable.subscribe(data => {
  //       console.log(data);
  //       this._router.navigate(['/products'])
  //     })
  //   }
  // }
  // //sample of detecting errorMsg on mainController and setting errorMessage variable here to be that message for front-end rendering;
  // onSubmit() {
  //     //this will create the object with an initial review
  //     this.newObject.reviews.push(this.newReview);
  //     let observable = this._httpService.addNew(this.newObject);
  //     observable.subscribe(data => {
  //       console.log(data);
  //       if (data['errorMsg']) {
  //         this.errorMessage = data['errorMsg']
  //       } else {
  //         this._router.navigate(['/products'])
  //       }
  //     })
  //   }

  // }
}
