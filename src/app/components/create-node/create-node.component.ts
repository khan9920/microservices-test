import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NodesService } from 'src/app/services/nodes.service';

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.scss']
})
export class CreateNodeComponent {

  constructor(private nodesService: NodesService) { }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      window.alert('Please fill all required fields');
      return;
    }

    this.nodesService.addNode(form.value);
  }
}
