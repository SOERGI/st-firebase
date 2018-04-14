import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/zip";

@Injectable()
export class SearchService {

  constructor(private firebase :AngularFireDatabase ) { }

  getProfiles(): Observable<any[]> {
      return this.firebase
        .list("/profiles", ref =>
          ref
            .orderByChild("businessCategory")
        )
        .snapshotChanges()
        .map(changes => {
          return changes.map(c => {
            return { key: c.payload.key, ...c.payload.val() };
          });
        });
  }

}
