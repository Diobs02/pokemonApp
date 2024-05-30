import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BatalharPage } from './batalhar.page';

import { BatalharPageRoutingModule } from './batalhar-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoService } from '../services/photo.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BatalharPageRoutingModule
  ],
  declarations: [BatalharPage],
  providers: [
    PhotoService
  ]
})
export class BatalharPageModule {}
