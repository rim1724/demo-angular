import { Routes } from '@angular/router';

import { Lifecycle } from './component/lifecycle/lifecycle';
import { Controlflow } from './component/controlflow/controlflow';
import { Reactiveform } from './component/reactiveform/reactiveform';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lifecycle',
    pathMatch: 'full',
  },
  {
    path: 'lifecycle',
    component: Lifecycle,
  },
  {
    path: 'controlflow',
    component: Controlflow,
  },
    {
    path: 'reactiveform',
    component: Reactiveform,
  },
];