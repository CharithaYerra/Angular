import { Component } from '@angular/core';

@Component({
  selector: 'app-second-level',
  templateUrl: './second-level.component.html',
  styleUrls: ['./second-level.component.css']
})
export class SecondLevelComponent {
level="second-level works!";
divBack="yellow";
fontColor="red";
divText="ngStyle Usage";
divText2="ngStyle with event Binding";


divBack2="yellow";
fontColor2="red";
changeColor(){
this.divBack2="green";
this.fontColor2="black";
}
resetChange(){
  this.divBack2="yellow";
  this.fontColor2="red";
}
Other(){
  this.divBack2="pink";
  this.fontColor2="violet";
}

isStatus=false;
changePara(){
    this.isStatus = !this.isStatus;
}
divText3="ngClass Usage";
isDarkMode = true;

  getStyles() {
    return {
      'color': 'red',
      'background-color': this.isDarkMode ? 'black' : 'white',
      'font-weight': 'bold'
    };
  }

  //Usage of ngIf
  customerEligibilty = true;

  isLoggedIn = true; // Change to false to test


     //Let me define the method here.


     answer = "";

     evtClick(el:HTMLParagraphElement){
      //console.log(el);
      //console.log(el.innerText);
      if(el.innerText == "Hey !! How are you doing?"){
        this.answer = "Yeah!!! I am good";
      }
      else{
        this.answer = "NO Answer";
      }
     }



     foodDefaultValue = 2;
     setValue = -1;
     
     data = [
      "Dosa",
      "Idly",
      "Rice",
     ]

  evtDecideFood(){
    this.foodDefaultValue = this.setValue
  }


   data1DefaultValue = 'CA103';
   
   columnNames = ["Item No" , "Item Name"];
   data1 = [
        { itemNo : 'CA101' , itemName:"Dosa"  } ,
        { itemNo : 'CA102' , itemName:"Idly"  } ,
        { itemNo : 'CA103' , itemName:"Rice-1"} ,
        { itemNo : 'CA104' , itemName:"Rice-2"} ,
     ]


    customerId =85 ;


}



  
