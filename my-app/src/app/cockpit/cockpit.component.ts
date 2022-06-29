import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName:string = '';
  newServerContent: string = '';
  
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>;

  age: number = 0;
  @ViewChild('ageContentInput') ageContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverContentInput:HTMLInputElement){
    //console.log(serverContentInput.value)
    this.serverCreated.emit({serverName: this.newServerName, serverContent: serverContentInput.value});
  }

  onAddBlueprint(serverContentInput:HTMLInputElement){
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: serverContentInput.value});
  }

  //viewchild
  onAddAge(){
    //console.log(this.ageContentInput.nativeElement.value);
    this.age = this.ageContentInput.nativeElement.value;
  }

}
