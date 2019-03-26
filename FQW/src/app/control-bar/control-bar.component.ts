import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.scss']
})
export class ControlBarComponent implements OnInit {
  public expressionList: Array<any> = [
    {
      expression: '2*x',
    }
  ]

  constructor() { }

  ngOnInit() {}

}
