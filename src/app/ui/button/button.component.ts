import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() type: string = 'default';
  @Input() content: any;
  @Output() buttonClick = new EventEmitter<any>(false);

  public onClick() {
    this.buttonClick.emit(true);
  }
}
