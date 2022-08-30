import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-authoritylogin',
  templateUrl: './authoritylogin.component.html',
  styleUrls: ['./authoritylogin.component.css']
})
export class AuthorityloginComponent implements OnInit {
  employeeId:number;
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
    this.password='';
  }
 login(){
  this.employee.employeeId=this.employeeId;
  this.employee.password=this.password;
  this.employee.role=this.role;
  // console.log(this.username+" "+this.password+" "+this.role)
  this.authService.login(this.employee).subscribe(res=>
    {
      if(res==null){
        alert("login failed,check username/password");
        this.ngOnInit();
      }else{
        console.log("login successful");
        localStorage.setItem("token",res.token);
        if(this.role=='Infrastructure Admin'){
          this.route.navigate(['/infra-admin']);
        }
        if(this.role=='Software Developer'){
          this.route.navigate(['/soft-dev']);
        }if(this.role=='Manager'){
          this.route.navigate(['/manager']);
        }if(this.role=='Employee Admin'){
          this.route.navigate(['/employee-admin']);
        }

      }

    },error=>{
      alert("login failed");
      this.ngOnInit();
    }
    )
 }
}
