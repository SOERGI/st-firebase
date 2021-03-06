import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ProfileService} from '../profile.service';
import {NgForm} from '@angular/forms';
import {Profile} from '../profile.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
  providers : [ProfileService]
})
export class ProfileFormComponent implements OnInit {

  selectedProfiles: Profile = new Profile();
  profiles: Observable<Profile[]>;

  constructor(private profileService: ProfileService, private tostr: ToastrService) { }

  ngOnInit() {
    this.profileService.initDb();
    this.profiles = this.profileService.getData();
    this.resetForm();
  }
  onSubmit(profileForm: NgForm) {
    // if (profileForm.value.$key == null) {
      this.profileService.addProfile(profileForm.value);
    // } else {
    //   this.profileService.updateProfile(profileForm.value);
    // }
    this.resetForm(profileForm);
    this.tostr.success('Submitted successfully', 'Profile Register');
  }

  resetForm(profileForm?: NgForm) {
    if (profileForm != null) {
      profileForm.reset();
    }
    this.selectedProfiles = {
      // $key: null,
      businessName: '',
      businessLocation: '',
      businessCategory: '',
      businessImage: '',
    };
  }

}
