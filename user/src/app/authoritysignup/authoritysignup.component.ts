import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-authoritysignup',
  templateUrl: './authoritysignup.component.html',
  styleUrls: ['./authoritysignup.component.css']
})
export class AuthoritysignupComponent implements OnInit {

   employeeId:number;
   name:string="";
   emailId:string="";
   password:string="";
   role:string="";
   roles:string[];

   employee:Employee=new Employee();
  constructor(private authService:AuthService,private route:Router) {
    this.roles=[
      "Infrastructure Admin",
      "Manager",
      "Software Developer",
      "Employee Admin"
    ]
   }

  ngOnInit():void{
    this.employeeId=null;
    this.emailId='';
    this.name='';
    this.password='';
  }
 signup(){
  console.log(this.employeeId);
  console.log(this.emailId);
  
  this.employee.employeeId=this.employeeId;
  this.employee.name=this.name;
  this.employee.emailId=this.emailId;
  this.employee.password=this.password;
  this.employee.role=this.role;
  this.authService.signUp(this.employee).subscribe(res=>{
    if(res==null){
      alert("Registartion failed.")
      this.ngOnInit();
    }else{
      console.log("reg successful");
      this.route.navigate(['/'])
    }
  },
  error=>{
    alert("Error:Registartion failed.")
    this.ngOnInit();
  })
  // console.log(this.Name+" "+this.EmailId);
 }
}
