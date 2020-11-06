import { Component,ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'LotationalslipComponent',
    templateUrl: './lotationalslip.component.html',
    styleUrls:['../app.component.scss']
})

export class LotationalslipComponent implements AfterViewInit{
    constructor(private router: Router){}

    ngAfterViewInit() {
        window.scroll(0,0);
    }
}
