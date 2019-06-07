import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'subseccion', 
    loadChildren: './subseccion/subseccion.module#SubseccionPageModule' 
},
  { 
    path: 'instituciones-del-sistema', 
    loadChildren: './instituciones-del-sistema/instituciones-del-sistema.module#InstitucionesDelSistemaPageModule' 
},
  { path: 'contaminacion-suelo', 
    loadChildren: './contaminacion-suelo/contaminacion-suelo.module#ContaminacionSueloPageModule' 
  },
  { path: 'contaminacion-aire', 
    loadChildren: './contaminacion-aire/contaminacion-aire.module#ContaminacionAirePageModule' 
  },
  { path: 'contaminacion-agua', 
    loadChildren: './contaminacion-agua/contaminacion-agua.module#ContaminacionAguaPageModule' 
  },
  { path: 'nacionalidades', 
    loadChildren: './nacionalidades/nacionalidades.module#NacionalidadesPageModule'
  },
  { path: 'grupos-priorizarios', 
    loadChildren: './grupos-priorizarios/grupos-priorizarios.module#GruposPriorizariosPageModule' 
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
