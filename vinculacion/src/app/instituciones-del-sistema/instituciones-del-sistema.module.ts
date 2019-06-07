import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InstitucionesDelSistemaPage } from './instituciones-del-sistema.page';

const routes: Routes = [
  {
    path: '',
    component: InstitucionesDelSistemaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InstitucionesDelSistemaPage]
})
export class InstitucionesDelSistemaPageModule {}
