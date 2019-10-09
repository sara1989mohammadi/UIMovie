import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {
  movies;
  constructor(private http: HttpClient, private form: FormBuilder) {}



  formSearch = this.form.group({
    SearchString: ['']
  });

  Search() {
    this.http.get('http://localhost:5000/api/movie/Search?searchString=' + this.formSearch.value.SearchString).subscribe(
      res => {
        this.movies = res;
        console.log(this.movies);
      }
    );
  }
}
