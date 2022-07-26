import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData: any = {};
  constructor(private dataService : DataService, private routes: Router) { }
  loginData: any;
  ngOnInit(): void {
  }

  onSubmit(){
    this.dataService.login(this.formData.email, this.formData.pswd).subscribe(
      res => {
        if(res.result.status == "true"){
          localStorage.setItem('username', res.result.User_Name)
          this.routes.navigate(['/home']);
        }else{
          this.routes.navigate(['/login']);
        }
      }
    );
  }
}