import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {

  @Input() content: any;
  @Input() type: string = 'wide';
  @Input() disabled: boolean = false;
  @Output() buttonClick = new EventEmitter<any>(false);

  public destroy$ = new Subject<boolean>();

  public onClick(event: Event) {
    event.preventDefault();
    this.buttonClick.emit(true);
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
