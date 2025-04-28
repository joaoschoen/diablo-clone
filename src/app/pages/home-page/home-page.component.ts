import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, ButtonComponent, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
    
  public constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public singlePlayer() {
    this.router.navigate(['/character-selection']);
  }
}
