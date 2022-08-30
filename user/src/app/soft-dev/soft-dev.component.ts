import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soft-dev',
  templateUrl: './soft-dev.component.html',
  styleUrls: ['./soft-dev.component.css']
})
export class SoftDevComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }
}
