import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appRandomColor]',
})
export class RandomColorDirective {
  constructor(private ref: ElementRef) {}

  @Input() colore: string = 'blue';

  ngOnInit() {
    this.ref.nativeElement.style.backgroundColor =
      this.getRandomColors() || this.colore;
  }

  getRandomColors(): string {
    const lettersAndNumbers = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++)
      color += lettersAndNumbers[Math.floor(Math.random() * 16)];
    return color;
  }
}
