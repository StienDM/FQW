import { Component, OnInit } from '@angular/core';
import { AstService } from 'src/app/ast.service';

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.scss']
})
export class ExpItemComponent implements OnInit {

  constructor(private ast: AstService) { }

  ngOnInit() {}

  onClick(exp) {
    this.ast.parseAst(exp, 5);
  }

}
