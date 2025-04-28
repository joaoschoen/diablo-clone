import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() content: any;
  @Input() type: string = 'wide';
  @Input() disabled: boolean = false;
  @Output() buttonClick = new EventEmitter<any>(false);

  public onClick(event: Event) {
    event.preventDefault();
    this.buttonClick.emit(true);
  }
}
