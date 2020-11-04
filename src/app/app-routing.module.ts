import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { LotationalslipComponent } from './lotationalslip/lotationalslip.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LiquefactionComponent } from './liquefaction/liquefaction.component';

const routes: Routes = [
  {path:'',redirectTo:'page',pathMatch:'full' },
  {path:'base',component: BaseComponent },
  {path:'slip',component: LotationalslipComponent },
  {path:'page',component: LandingpageComponent },
  {path:'liq',component: LiquefactionComponent },




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
