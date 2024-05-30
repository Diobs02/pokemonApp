import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BuscarPage } from './buscar.page';
import { BuscarPageRoutingModule } from './buscar-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BuscarPageRoutingModule
  ],
  declarations: [BuscarPage]
})
export class BuscarPageModule {}
