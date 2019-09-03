import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { StockServiceService, Stock } from "./stock-service.service";


@Component({
  selector: "app-search-stock",
  templateUrl: "./search-stock.component.html",
  styleUrls: ["./search-stock.component.scss"]
})
export class SearchStockComponent implements OnInit {
  stockItems: Stock[] = [];
  displayedColumns: any
  dataSource: any 
  constructor(private StockList: StockServiceService) {}

  ngOnInit() {
    this.StockList.getDisplayStocks().subscribe(response => {
      this.stockItems = response;
      console.log(response);
      this.displayedColumns = ["id", "name", "age"];
      this.dataSource = new MatTableDataSource(this.stockItems);
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
