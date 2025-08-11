import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import{TestComponent} from  './test-comp/test.component';
import { FormsModule } from '@angular/forms';
import { FirstlevelComponent } from './firstlevel/firstlevel.component';
import { SecondLevelComponent } from './second-level/second-level.component';
import { ThirdLevelComponent } from './third-level/third-level.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FirstlevelComponent,
    SecondLevelComponent,
    ThirdLevelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
