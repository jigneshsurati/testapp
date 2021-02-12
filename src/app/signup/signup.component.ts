import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  constructor(
    private _fb:FormBuilder,public router:Router) { 
      let email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      this.signupForm = this._fb.group({
        name:['',Validators.compose([Validators.required])],
        regEmail:['', Validators.compose([Validators.required, Validators.email])],
        regPassword:['',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])],
        regCpassword:['',Validators.compose([Validators.required, Validators.minLength(8)])]
      }, {validator: this.checkPasswords });
      
    }

    checkPasswords(signupForm: FormGroup) { // here we have the 'passwords' group
     let pass = signupForm.get('regPassword').value;
     let confirmPass = signupForm.get('regCpassword').value;

     return pass === confirmPass ? null : { notSame: true }     
  }
    
  ngOnInit(): void {
  }

  fnClickBtn(){
    this.router.navigate(["login"]);
  }

  onReg(){
    if(this.signupForm.valid){
      this.signupForm.get('name').value;
      this.signupForm.get('regEmail').value;
      this.signupForm.get('regPassword').value;
      this.signupForm.get('regCpassword').value;
      alert('reg')
    }else{
      this.signupForm.get('name').markAllAsTouched();
      this.signupForm.get('regEmail').markAllAsTouched();
      this.signupForm.get('regPassword').markAllAsTouched();
      this.signupForm.get('regCpassword').markAllAsTouched();
    }
  }

}
