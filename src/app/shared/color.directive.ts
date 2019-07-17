import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    console.log(this.element);
    this.element.nativeElement.style.color = 'green';
  }
}
