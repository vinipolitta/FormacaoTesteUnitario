import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniqueIdService } from 'src/app/shared/services/unique-id/unique-id.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [],
  providers: [
    UniqueIdService
  ]
})
export class LikeWidgetModule { }
