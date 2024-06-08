import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModulesModule } from "../shared-modules/shared-modules.module";
import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
    declarations: [
        ContactusComponent
    ],
    imports: [
        CommonModule,
        ContactusRoutingModule,
        SharedModulesModule
    ]
})
export class ContactusModule { }
