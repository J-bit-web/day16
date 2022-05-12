import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
  // How we use our Directive
  selector: "[appBasicBorder]",
})
export class BasicBorderDirective implements OnInit {
  // Getting access to the element we put the directive on
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Changing the styles on our element
    this.elementRef.nativeElement.style.border = "4px solid black";
  }
}
