import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { BackgroundImageComponent } from "../../components/background-image/background-image.component";

@Component({
  selector: 'app-button',
  imports: [CommonModule, BackgroundImageComponent],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  type = input<string>('wide')
  disabled = input<boolean>(false)
  buttonClick = output()
  bg_width_wide = "360px"
  button_width_wide = "364px"
  bg_width_medium = "166px"
  button_width_medium = "170px"
  bg_url_wide = "/assets/button/button_wide.png"
  bg_url_medium = "/assets/button/button_wide.png"

  buttonBackgroundImage = computed(() => {
    let classes = ""
    if (this.type() === "wide") {
      classes += " bg-[url('/assets/button/button_wide.png')]"
    } else {
      classes += " bg-[url('/assets/button/button_medium.png')]"
    }
  })

  buttonClass = computed(() => {
    let classes = `
      flex
      flex-row
      items-center
      justify-center
      relative
      h-[50px]
      border-l 
      border-2 
      bg-cover rounded 
      cursor-pointer 
      disabled:cursor-not-allowed
      bg-[#282421]
      hover:border-[#E9C964] 
      disabled:hover:border-[#D4D0C5]
      disabled:hover:bg-[#757172] 
      `
    if (this.disabled()) {
      classes += " brightness-70"
    }
    return classes
  })

  buttonStyle = computed(() => {
    let style = "cursor: url('/assets/cursor/cursor.cur'), auto;"

    if (this.type() === "wide") {
      style += ` width:${this.button_width_wide};`
    } else {
      style += ` width:${this.button_width_medium};`
    }
    return style
  })

  public onClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.buttonClick.emit();
  }

}
