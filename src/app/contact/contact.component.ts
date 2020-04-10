import { FormGroup, FormControl } from '@angular/forms';

import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  //Declare empty form values
  contact = {
    name: '',
    age: '',
    comments: '',
  };

  submitted = false;

  constructor() {
    this.createForm();
  }

  //lets create form controllers
  createForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, [
        Validators.required,
        //no digit allowed
        Validators.pattern('[^0-9]*'),
      ]),
      age: new FormControl(this.contact.age, [
        Validators.required,
        //only two digits allowed
        Validators.pattern('[1-9][0-9]'),
      ]),
      comments: new FormControl(this.contact.comments, [
        Validators.required,
        // no more than 30 characters
        Validators.maxLength(30),
      ]),
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }
}
