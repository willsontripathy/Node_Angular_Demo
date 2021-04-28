import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, DefaultHttpUrlGenerator, EntityDataModule, EntityDataService } from '@ngrx/data';
import { entityConfig } from './stores/entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { from } from 'rxjs';
import { PostService } from './services/employee.service';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
 // root: 'https://jsonplaceholder.typicode.com/',
}

const route:Routes = [
  {path:'admin',component:AdminComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'',redirectTo:'/admin',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
    
  ],
  providers: [{
    provide: DefaultDataServiceConfig,
    useValue: defaultDataServiceConfig,
  },
  DefaultHttpUrlGenerator 
],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    entityDataService: EntityDataService,
    postservice: PostService,
) {
    entityDataService.registerService('Post', postservice);
}
 }
