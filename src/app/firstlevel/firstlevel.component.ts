import { Component } from '@angular/core';

@Component({
  selector: 'app-firstlevel',
  templateUrl: './firstlevel.component.html',
  styleUrls: ['./firstlevel.component.css']
})
export class FirstlevelComponent {
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
    btnMouseOver(event:any){
    console.log("you are mouse in on button");
    let elementIs=event.target as HTMLButtonElement;
    console.log(elementIs);
  }

  captureData(eventDetails:any){
    // console.log("data captured")
    console.log(eventDetails);
    let datause=eventDetails.target as HTMLInputElement;
    let datais=datause.value;
    if (datais=="hi"){
      console.log("YOu have given input hi .");
    }
    
    

  }
  capture(eventDetails:KeyboardEvent,statusIs:string){
    // console.log("data captured")
    console.log(eventDetails);
    let elementData=eventDetails.target as HTMLInputElement;
    console.log(elementData);
    

  }

  placeValueIs="Event + Property Binding";

  // dual binding
  sName="divya";
  isChecked=true;
  Isselected=1;
  drpChange(){
    console.log("you changed the option")
  }
  modelChange(eventis:any){
    console.log(eventis)

  }
xyz="dual binding";
}
