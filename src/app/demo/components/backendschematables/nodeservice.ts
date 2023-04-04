import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) { }

    getFilesystem() {
    return this.http.get<any>('content/showcase/filesystem.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    getLazyFilesystem() {
    return this.http.get<any>('content/showcase/filesystem-lazy.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }
}