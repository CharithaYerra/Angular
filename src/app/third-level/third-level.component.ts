import { Component, ViewChild, ElementRef, TemplateRef, ViewContainerRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-third-level',
  templateUrl: './third-level.component.html',
  styleUrls: ['./third-level.component.css']
})
export class ThirdLevelComponent {

  // ViewChild examples
  @ViewChild('firstName') UserFirstName!: ElementRef<HTMLInputElement>;
  @ViewChild('view') viewText!: ElementRef<HTMLElement>;

  // ContentChild example (needs projected content from parent)
  @ContentChild('heading') headingText!: ElementRef<HTMLElement>;

  // Template & Container for dynamic rendering
  @ViewChild('sample', { read: TemplateRef }) sampleText!: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef }) containerText!: ViewContainerRef;

  // Style objects
  ngStyle = { 'background-color': 'red', color: 'green' };
  divStyle = { 'background-color': 'yellow', color: 'pink' };

  // Data
  numbers = [1, 2, 3];

  btnClick() {
    console.log('First Name:', this.UserFirstName.nativeElement.value);
    console.log('View Text:', this.viewText.nativeElement.innerText);
    if (this.headingText) {
      console.log('Heading from ContentChild:', this.headingText.nativeElement.innerText);
    } else {
      console.log('No ContentChild found.');
    }
  }

  brnClicking() {
    this.containerText.clear(); // optional: clear before inserting
    this.containerText.createEmbeddedView(this.sampleText);
  }
}
