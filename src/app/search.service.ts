import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/zip';
import {AngularFirestore} from 'angularfire2/firestore';
import {Profile} from './profile.model';

@Injectable()
export class SearchService {

  constructor(private firestore: AngularFirestore ) { }

  getProfiles(category: string, location: string) {
      return this.firestore.collection<Profile>('profiles',
          ref => {
            return ref
              .where('businessCategory', '==', category)
              .where('businessLocation', '==', location);
          });
  }

}
