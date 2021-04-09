import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { NodesService } from 'src/app/services/nodes.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent implements OnInit, OnDestroy {

  public nodes: any = [];
  private nodesSub: Subscription;

  constructor(private nodesService: NodesService) { }

  ngOnInit(): void {
    this.nodes = this.nodesService.getNodes();
    this.nodesSub = this.nodesService.getNodesSub().subscribe(result => {
      this.nodes = result;
    });
  }

  onSearch(form: NgForm) {
    this.nodesService.filterNodes(form.value);
  }

  ngOnDestroy() {
    this.nodesSub.unsubscribe();
  }
}
