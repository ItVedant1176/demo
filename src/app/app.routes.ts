import { Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { BindingsComponent } from './bindings/bindings.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { InbuiltpipesComponent } from './inbuiltpipes/inbuiltpipes.component';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';
import { SignalComponent } from './signal/signal.component';

export const routes: Routes = [
  { path: '', component: BasicComponent },  // Home route
  { path: 'bindings', component: BindingsComponent },
  { path: 'datatypes', component: DatatypesComponent },
  {
    path: 'pipes',
    component: InbuiltpipesComponent,
    children: [
      { path: '', redirectTo: 'custom', pathMatch: 'full' },
      { path: 'custom', component: StructuraldirectiveComponent },
      { path: 'form', component: SignalComponent }
    ]
  }
];
