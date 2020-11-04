import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'LandingpageComponent',
    templateUrl: './landingpage.component.html',
    styleUrls:['../app.component.scss']
})

export class LandingpageComponent{
    constructor(private router: Router){}
}