import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-background-image',
  imports: [],
  templateUrl: './background-image.component.html',
  host: {
    "[class]": "host_class()",
    "[style]": "host_style()",
  }
})
export class BackgroundImageComponent {
  background_height = input.required<string>()
  background_width = input.required<string>()
  url = input.required<string>()
  repeat = input<string>()
  filters = input<string>()
  additionalClasses = input<string>()

  host_style = computed(() => {
    let style = `background-image: url('${this.url()}');`
    style += `height: ${this.background_height()};`
    style += `background-size:  ${this.background_width()} ${this.background_height()};`
    if (this.repeat() !== undefined) {
      style += `background-repeat: ${this.repeat()};`
    }
    if (this.filters() !== undefined) {
      style += `filter: ${this.filters()};`
    }
    return style
  })

  host_class = computed(() => {
    let classes = `absolute top-0 left-0 w-full `
    if (this.additionalClasses() !== undefined) {
      classes += this.additionalClasses()
    }
    return classes
  })
}
