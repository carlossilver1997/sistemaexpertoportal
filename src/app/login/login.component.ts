import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  error: string;
  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  public loggin(){
    console.log(this.myForm.get('password'));
    if (this.myForm.valid) {
      
      if(this.myForm.get('user').value === 'admin' && this.myForm.get('password').value === '12345'){
        this.router.navigate(['/experto']);
      }
    } else {
      this.error = 'Password o user incorrecto';
    }
  }

}
