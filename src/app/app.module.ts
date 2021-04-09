import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodesComponent } from './components/nodes/nodes.component';
import { CreateNodeComponent } from './components/create-node/create-node.component';


@NgModule({
  declarations: [
    AppComponent,
    NodesComponent,
    CreateNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
