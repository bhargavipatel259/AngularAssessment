import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StockServiceService, Stock } from './stock-service.service';
import { MatSort, Sort} from '@angular/material';
import { staticViewQueryIds } from '@angular/compiler';


@Component({
  selector: 'app-search-stock',
  templateUrl: './search-stock.component.html',
  styleUrls: ['./search-stock.component.scss']
})
export class SearchStockComponent implements OnInit {
  stockItems: Stock[] = [];
  displayedColumns: any;
  dataSource: any;
  constructor(private StockList: StockServiceService) {}

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {

    this.StockList.getDisplayStocks().subscribe(response => {
      this.stockItems = response;
      console.log(response);
      this.displayedColumns = ['id', 'name', 'age'];
      this.dataSource = new MatTableDataSource(this.stockItems);
    });
    this.dataSource.sort = this.sort;

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
