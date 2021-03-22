import { RegisterComponent } from './../register/register.component';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public input: any;
  username: string = '';
  password: string = '';
  res: {};

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    this.http.get("http://localhost:3000/credentials").subscribe(data => {
      // console.log(data)
      for (let index in data) {
        // console.log(data[index]['name'])
        if ((data[index]['username'] == this.username) && (data[index]['password'] == this.password)) {
          this.router.navigate(['home'])
          break;
        }
        else {
          alert("invalid credentials")
        }

      }
      // data.forEach(element => {

      // });
    })


    // if((this.res.some(code=>code.username==this.username))&& (this.res.some(code=>code.password==this.password))){
    //   this.router.navigate(['home'])
    // }
    // else {
    //   alert("invalid credentials")
    // }
  }



  ngOnInit(): void {
  }

}
