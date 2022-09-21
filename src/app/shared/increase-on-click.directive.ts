import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appIncreaseOnClick]'
})
export class IncreaseOnClickDirective {

  @Input() appIncreaseOnClick = 10;

  constructor(private elementRef: ElementRef<HTMLElement>) {
    console.log('IncreaseOnClickDirective instanciated');

  }

  @HostListener('click')
  handleClick() {
    const domRect = this.elementRef.nativeElement.getBoundingClientRect();

    this.elementRef.nativeElement.style.flex = 'unset';
    this.elementRef.nativeElement.style.width = domRect.width * (1 + (this.appIncreaseOnClick / 100)) + 'px';
    // console.log('click in IncreaseOnClickDirective')
  }

}
