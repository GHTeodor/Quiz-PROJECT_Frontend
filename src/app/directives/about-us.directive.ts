import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAboutUs]'
})
export class AboutUsDirective implements AfterViewInit {
  @Input() textColour: string = 'cornflowerblue';

  constructor(private readonly element: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.style.color = `${this.textColour}`;
    this.element.nativeElement.style.boxShadow = `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`;
  }
}
