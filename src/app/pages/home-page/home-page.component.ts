import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, ButtonComponent, RouterModule],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnDestroy {

  public destroy$ = new Subject<boolean>();

  public constructor(private router: Router) { }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public singlePlayer() {
    this.router.navigate(['/character-selection']);
  }
}
