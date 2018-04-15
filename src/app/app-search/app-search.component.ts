import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SearchService} from '../search.service';
import {AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Query} from '../query.model';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css'],
  providers: [SearchService]
})
export class AppSearchComponent implements OnInit {

  results: Observable<any[]>;
  currentQuery: Query = new Query();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSubmit(searchForm: NgForm) {
    this.results = this.searchService.getProfiles(this.currentQuery.businessCategory, this.currentQuery.businessLocation).valueChanges();
  }

}
