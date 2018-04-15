import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Profile} from './profile.model';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ProfileService {

  private profileListCol: AngularFirestoreCollection<Profile>;
  constructor(private firestore: AngularFirestore ) { }

  initDb() {
    this.profileListCol = this.firestore.collection<Profile>('profiles');
  }

  getData() {
    return this.profileListCol.valueChanges();
  }

  addProfile(profile: Profile) {
    this.profileListCol.add({
      businessName : profile.businessName,
      businessLocation : profile.businessLocation,
      businessCategory : profile.businessCategory,
      businessImage : profile.businessImage
    });
  }

  updateProfile(profile: Profile) {
    // this.profileList.update(profile.$key,
    //   {
    //     businessName : profile.businessName,
    //     businessLocation : profile.businessLocation,
    //     businessCategory : profile.businessCategory,
    //     businessImage : profile.businessImage
    //   });
  }

  removePofile($key: string) {
    // this.profileList.remove($key);
  }

}
