import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  userForm:FormGroup;

  constructor(private fb:FormBuilder){
    this.userForm=this.fb.group({
     username:["",[Validators.required,Validators.minLength(4)]] ,
     email:["",[Validators.required,Validators.email]],
     password:["",[Validators.required,Validators.minLength(6)]],
     confirmPassword:["",[Validators.required]]
    },{validator:this.passwordMatchValidator});
  }

  passwordMatchValidator(group:FormGroup):{[key:string]:boolean}|null{
    const password=group.get('password');
    const confirmPassword=group.get('confirmPassword');
    return password && confirmPassword && password.value!==confirmPassword.value?{'passwordMisMatch':true}:null;
  }

  onSubmit():void{
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
    else{
      console.log("Form is invalid");
    }
  }

}
