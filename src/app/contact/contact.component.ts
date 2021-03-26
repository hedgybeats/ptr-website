import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  emailForm: FormGroup;
  ngOnInit(): void {
    this.emailForm = this.fb.group({
      Message: ['', Validators.required],
    });
  }

  get Message(): AbstractControl {
    return this.emailForm.get('Message');
  }

  public SendEmail(): void {
    if (this.emailForm.valid) {
      Email.send({
        Host: 'smtp.gmail.com',
        Username: 'pallettruckrepairsnoreply@gmail.com',
        Password: 'Lay1245369',
        To: 'laytonhedges119@gmail.com',
        From: 'pallettruckrepairsnoreply@gmail.com',
        Subject: 'Customer email',
        Body: this.Message.value,
      }).then((message) => this.ClearInput());
    }
  }

  public ClearInput(): void {
    this.Message.patchValue('');
  }
}
