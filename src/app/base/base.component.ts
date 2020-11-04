import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'BaseComponent',
    templateUrl: './base.component.html',
    styleUrls:['../app.component.scss','./base.component.scss']
})

export class BaseComponent{
    constructor(private router: Router){}
}

