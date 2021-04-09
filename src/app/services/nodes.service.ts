import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  // sample dataset
  private nodes: any = [
    {
      _id: 1,
      user: 'Mark',
      manageNode: 'Manage Node 1',
      jumpNode: 'Jump Node 1'
    },
    {
      _id: 2,
      user: 'Jacob',
      manageNode: 'Manage Node 2',
      jumpNode: 'Jump Node 2'
    },
    {
      _id: 1,
      user: 'Larry',
      manageNode: 'Manage Node 3',
      jumpNode: 'Jump Node 3'
    }
  ];

  // array subject
  private nodesSub = new Subject<any>();

  constructor(private router: Router) { }

  // add new node
  addNode(data: any) {
    this.nodes.push(data);
    this.router.navigate(['']);
  }

  // triger get all all nodes 
  getNodes() {
    return this.nodes;
  }

  // subscribe to all nodes array
  getNodesSub() {
    return this.nodesSub.asObservable();
  }

  // search filter only by user name 'case sensitive'
  filterNodes(data: any) {
    if (data.user == '') {
      return;
    } else {
      const node = this.nodes.findIndex(function (node, index) {
        if (node.user == data.user)
          return true;
      });

      this.nodesSub.next([this.nodes[node]]);
    }
  }
}
