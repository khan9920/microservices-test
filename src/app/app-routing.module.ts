import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNodeComponent } from './components/create-node/create-node.component';
import { NodesComponent } from './components/nodes/nodes.component';

const routes: Routes = [
  { path: '', component: NodesComponent },
  { path: 'create-node', component: CreateNodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
