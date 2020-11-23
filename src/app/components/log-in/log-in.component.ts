import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @ViewChild('userForm') userForm:NgForm;

  users = [];

  constructor() { }

  formData = {
    uName: '', pass: ''
  }

  showDetail = false;

  ngOnInit(): void {
  }

  onLogin(userData){
    if(this.userForm.valid){
      console.log(userData);  
      this.showDetail = true;  
      this.formData.uName = this.userForm.value.uName;  
      this.formData.pass = this.userForm.value.pass;  
      this.userForm.reset();
    } else {
      let key = Object.keys(this.userForm.controls);
      key.filter(data => {
        let control = this.userForm.controls[data];
        if(control.errors!=null){
          control.markAsTouched();
        }
      })
    }
  }

}
