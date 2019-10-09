import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "detial",
  templateUrl: "./detail.component.html"
})
export class DetialComponent implements OnInit {
  id;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
  }

  valeu;
  name;
  year;
  genre;
  releaseDate;
  imDbRating;
  imDbvotes;
  runTime;
  synopsis;
  poster;

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/movie/' + this.id ).subscribe(res => {
      this.valeu = res;
      this.name = this.valeu.name;
      this.year = this.valeu.yearvvv;
      this.genre = this.valeu.genre;
      this.releaseDate = this.valeu.releaseDate;
      this.imDbRating = this.valeu.imDbRating;
      this.imDbvotes = this.valeu.imDbvotes;
      this.runTime = this.valeu.runTime;
      this.synopsis = this.valeu.synopsis;
      this.poster = this.valeu.poster;
    });
  }
}
