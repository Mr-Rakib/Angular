import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements AfterViewInit {

  @Input() Data: any ;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;
  constructor(){
    console.log(this.Data)
  }
  ngAfterViewInit() {
    console.log('after - ', this.Data)
    this.dataSource = new MatTableDataSource<any>(this.Data);
    this.dataSource.paginator = this.paginator;
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
