import { Component, OnInit,Inject,Input } from '@angular/core';
// import { Mat_Dialog_Data } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input("i") i;
  @Input("day") day;
  @Input("days") days;
  @Input("global") global;

  ngOnInit(): void {
  }
  curBtn(ind){
    this.global.seletedDay=ind;
    this.global.currentDay=ind;
    this.global.currentTopic=0;
    this.global.selectedTopic=0;
    this.global.isTopicSelected=true;
    console.log(this.global.currentDay,this.global.seletedDay);
  }
  rmvDay(){
    this.days.splice(this.i,1);
    this.global.currentDay=0;
    this.global.isTopicSelected=false;
    this.global.noOfDays = this.days.length;
    //console.log(this.days,this.global.currentDay,this.global.isTopicSelected);
  }
}
