import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NodeService } from './nodeservice';

@Component({
  selector: 'jhi-backendschematables',
  templateUrl: './backendschematables.component.html',
  styleUrls: ['./backendschematables.component.scss'],
})
export class BackendschematablesComponent implements OnInit {

  files: TreeNode[] = [];

  cols: any[] = [];

  constructor(private nodeService: NodeService
    ) {}

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => (this.files = files));
    this.cols = [
      { field: 'name', header: 'Name' },
      // { field: 'size', header: 'Size' },
      // { field: 'type', header: 'Type' }
    ];

  }

  //sql query to get
  protected onQueryError(): void {
    // Api for inheritance.
    this.messageService.add({ severity: 'error', summary: 'query failure', detail: 'problem while query execution, please check query' });
  }

  protected onQueryFinalize(): void {
    // this.appSettings.setLoading(false);
  }

  
}
