import { Component, OnInit, SimpleChanges, HostListener } from '@angular/core';
import $ from "jquery";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    private canvas: any;
    private context;
    private x: any = 0;
    i: number = 1;
    lastX = this.canvas.width/2;
    lastY = this.canvas.height/2;

    @HostListener('mousewheel', ['$event'])
    onMouseWheel(event) {
    }

    ngOnInit() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        if (this.context) {
            setInterval(() => {
                this.drawFunction();
            }, 1000/60);
        }
    }

    private drawFunction() {
        let y = 100 + 50*Math.sin(this.x/10);
        this.x = this.x + 0.01;
        this.context.fillRect(this.x, y, 2, 2);
        this.context.stroke();
    }
        
}
