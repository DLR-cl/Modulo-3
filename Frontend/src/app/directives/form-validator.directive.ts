import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appFormValidator]',
  standalone: true
})
export class FormValidatorDirective {

  private input : ElementRef<HTMLInputElement> = inject(ElementRef);
  ngControl = inject(NgControl, {optional: true});
  constructor(private renderer : Renderer2) {
    this.input.nativeElement
   }

   @HostListener("input", ["$event"])
   onInput(event : Event){
    const inputElement = event.target as HTMLInputElement;
    const value : string = inputElement.value;
    const regex : RegExp = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;

    if(!regex.test(value)){
      const cleanValue = value.replace(/[^0-9]/g, '');
      inputElement.value = cleanValue;
      this.ngControl?.control?.setValue(cleanValue);
    }
   }

  
}
