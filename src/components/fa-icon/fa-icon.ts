import {Component, ElementRef, Input, OnChanges, Renderer, SimpleChange, SimpleChanges} from "@angular/core";
import {Config, Ion} from "ionic-angular";

/**  Usage Example
 * Basic usage: <fa-icon name="camera-retro"></fa-icon>
 * Basic usage with color: <fa-icon name="camera-retro" color="danger"></fa-icon>
 * Larger icons: <fa-icon name="camera-retro" size="4x"></fa-icon>
 * Fixed width icons <fa-icon name="camera-retro" fixed-width></fa-icon>
 * Dynamic value: <fa-icon [name]="icon"></fa-icon>
 * Buttons: <button ion-button icon-left>
 <fa-icon name="group"></fa-icon>
 </button>
 */

@Component({
  selector: "fa-icon",
  template: "",
})
export class FaIconComponent extends Ion implements OnChanges {
  @Input() name: string;
  @Input() size: string;

  @Input("fixed-width")
  set fixedWidth(fixedWidth: string) {
    this.setElementClass("fa-fw", this.isTrueProperty(fixedWidth));
  }

  constructor(config: Config, elementRef: ElementRef, renderer: Renderer) {
    super(config, elementRef, renderer, "fa");
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.name) {
      this.unsetPrevAndSetCurrentClass(changes.name);
    }
    if (changes.size) {
      this.unsetPrevAndSetCurrentClass(changes.size);
    }
  }

  isTrueProperty(val: any): boolean {
    if (typeof val === "string") {
      val = val.toLowerCase().trim();
      return (val === "true" || val === "on" || val === "");
    }
    return !!val;
  };

  unsetPrevAndSetCurrentClass(change: SimpleChange) {
    this.setElementClass("fa-" + change.previousValue, false);
    this.setElementClass("fa-" + change.currentValue, true);
  }
}
