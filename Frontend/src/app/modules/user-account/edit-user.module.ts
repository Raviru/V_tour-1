import { HeaderBarModule } from './../header-bar/header-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';
import { EditTravelAgentComponent } from '../../components/travelAgent/edit-travel-agent/edit-travel-agent.component';
import { EditServiceProviderComponent } from '../../components/serviceProvider/edit-service-provider/edit-service-provider.component';
import { DialogModule } from 'primeng/dialog';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    HeaderBarModule,
    DialogModule,
    CardModule
 ],
  declarations: [
    EditTravelAgentComponent,
    EditServiceProviderComponent,
    
  ],
  exports:[
    EditTravelAgentComponent,
    EditServiceProviderComponent,
    
  ]
})
export class EditUserModule { }
