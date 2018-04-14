import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ProfileService} from "../profile.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
  providers :[ProfileService]
})
export class ProfileFormComponent implements OnInit {

  constructor(private profileService: ProfileService, private tostr: ToastrService) { }

  ngOnInit() {
    this.profileService.getData();
    this.resetForm();
  }

  onSubmit(profileForm: NgForm) {
    if (profileForm.value.$key == null)
      this.profileService.addProfile(profileForm.value);
    else
      this.profileService.updateProfile(profileForm.value);
    this.resetForm(profileForm);
    this.tostr.success('Submitted successfully', 'Profile Register');
  }

  resetForm(profileForm?: NgForm) {
    if (profileForm != null)
      profileForm.reset();
    this.profileService.selectedProfiles = {
      $key: null,
      businessName: '',
      businessLocation: '',
      businessCategory: '',
      businessImage: '',
    }
  }

}
