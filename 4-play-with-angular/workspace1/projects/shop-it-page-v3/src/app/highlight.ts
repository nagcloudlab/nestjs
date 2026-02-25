import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  @Input() appHighlight!: string;

  constructor(private element: ElementRef) {
    // console.log("Highlight::constructor::element", this.element);
  }
  ngOnInit() {
    // console.log("Highlight::ngOnInit::element", this.element);
    // this.element.nativeElement.addEventListener('mouseover', () => {
    //   console.log(this.appHighlight)
    //   this.element.nativeElement.style.backgroundColor = this.appHighlight || 'yellow';
    // });
    // this.element.nativeElement.addEventListener('mouseout', () => {
    //   this.element.nativeElement.style.backgroundColor = '';
    // });
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.element.nativeElement.style.backgroundColor = this.appHighlight || 'yellow';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.element.nativeElement.style.backgroundColor = '';
  }

}
