import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Profile} from "./profile.model";


@Injectable()
export class ProfileService {

  profileList: AngularFireList<any>;
  selectedProfiles: Profile = new Profile();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.profileList = this.firebase.list('profiles');
    return this.profileList;
  }

  addProfile(profile : Profile)
  {
    this.profileList.push({
      businessName : profile.businessName,
      businessLocation : profile.businessLocation,
      businessCategory : profile.businessCategory,
      businessImage : profile.businessImage
    });
  }

  updateProfile(profile : Profile){
    this.profileList.update(profile.$key,
      {
        businessName : profile.businessName,
        businessLocation : profile.businessLocation,
        businessCategory : profile.businessCategory,
        businessImage : profile.businessImage
      });
  }

  removePofile($key : string){
    this.profileList.remove($key);
  }

}
