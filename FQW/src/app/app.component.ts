import { Component, OnInit, HostListener } from '@angular/core';
import { AstService } from './ast.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers:  [ AstService ],
})
export class AppComponent implements OnInit {

    @HostListener('mousewheel', ['$event'])
        onMouseWheel(event) {
    }

    constructor(private ast: AstService) {}

    ngOnInit() {
        this.ast.parseAst('(x+2)+(x-6)');
    }

}
