import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{
  @Input()
  id:String = "0"
  @Input()
  photoCover:String = ""
  @Input()
  photoAlt:String = ""
  @Input()
  cardTitle:String = ""

  constructor() { }

  ngOnInit(): void {
    
  }
}
