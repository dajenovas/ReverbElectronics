import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModulesModule } from "../shared-modules/shared-modules.module";
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
    declarations: [
        ProductPageComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModulesModule,
    ]
})
export class ProductsModule { }
