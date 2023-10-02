import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoggerTesterComponent} from "./hisb-logger-tester/components/logger-tester/logger-tester.component";

const routes: Routes = [
  {
    path: 'hisb-logger',
    component: LoggerTesterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
