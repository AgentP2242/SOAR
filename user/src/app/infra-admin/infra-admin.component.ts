import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infra-admin',
  templateUrl: './infra-admin.component.html',
  styleUrls: ['./infra-admin.component.css']
})
export class InfraAdminComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }
  
}
