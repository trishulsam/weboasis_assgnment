import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public input: any;
  public name:string='';
  public username: string='';
  public password: string='';
  value=[];
  constructor(private http: HttpClient) {}

   register(){
    this.input={
      "name": this.name,
      "username": this.username,
      "password": this.password
    };
    this.http.post("http://localhost:3000/credentials", this.input).toPromise().then((data:any)=>
    console.log(data))
    // console.log(this.input)
  }
  
  ngOnInit(): void {
  }

}
