import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-admin',
  templateUrl: './employee-admin.component.html',
  styleUrls: ['./employee-admin.component.css']
})
export class EmployeeAdminComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }
}
