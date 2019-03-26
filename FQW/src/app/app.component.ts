import { Component, OnInit, HostListener } from '@angular/core';
import { AstService } from './ast.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers:  [ AstService ],
})
export class AppComponent implements OnInit {

    constructor(private ast: AstService) {}

    ngOnInit() {
        // this.ast.parseAst('x*sin((x^2)+(x-7))', null);
    }

}
