import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _fb:FormBuilder, public router:Router) { 
    let email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    this.loginForm = this._fb.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])]
    });
  }

  ngOnInit(): void {
  }

  fnClickBtn(){
    this.router.navigate(["signup"]);
  }
  
  onSubmit(){
    
    if(this.loginForm.valid){
      this.loginForm.get('email').value == 'admin';
      this.loginForm.get('password').value == '123';
      alert('123')
      this.router.navigate(['dashboard']);
    }else{
      this.loginForm.get('email').markAllAsTouched();
      this.loginForm.get('password').markAllAsTouched();
    }
  }

}
