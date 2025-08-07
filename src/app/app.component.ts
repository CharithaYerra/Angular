import { Component } from '@angular/core';

@Component({
  selector: 'app-reader',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBasics';
  classdate='05082025';
  getStudentRoll(){
    return 23339;
  }

  propertyBind='Binded';
  inputType='checkbox';
  bool=true;
  btnClick(){
  console.log("event binding");
    
  }
  btnMouse(){
    console.log("you are mouse in on button");
  }
}
