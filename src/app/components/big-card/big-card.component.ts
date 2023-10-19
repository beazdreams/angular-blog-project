import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit{
  @Input()
  id:String = "0"
  @Input()
  photoCover:String = ""
  @Input()
  photoAlt:String = ""
  @Input()
  cardTitle:String = ""
  @Input()
  cardDescription:String = ""

  constructor() { }

  ngOnInit(): void {
    
  }
}
