import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'LiquefactionComponent',
    templateUrl: './liquefaction.component.html',
    styleUrls:['../app.component.scss']
})

export class LiquefactionComponent{
    constructor(private router: Router){}
}