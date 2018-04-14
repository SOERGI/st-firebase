import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {SearchService} from "../search.service";
import {AngularFireList} from "angularfire2/database";

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css'],
  providers: [SearchService]
})
export class AppSearchComponent implements OnInit {

  resultList: AngularFireList<any>;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSubmit(searchForm: NgForm) {
    this.resultList = this.searchService.getProfiles();
  }

}
