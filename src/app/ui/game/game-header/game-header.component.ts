import { Component, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '@ui/button/button.component';
import { BackgroundImageComponent } from "../../../components/background-image/background-image.component";

@Component({
  selector: 'app-game-header',
  imports: [BackgroundImageComponent, ButtonComponent, RouterModule],
  templateUrl: './game-header.component.html',
})
export class GameHeaderComponent {
  currentZoneName = input.required<string>()

  public constructor(private router: Router) { }

  public exitGame() {
    this.router.navigate(['/character-selection']);
  }
}
