import { DialogConfig } from '@angular/cdk/dialog';
import { Component, OnInit , ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserServicesService } from 'src/app/user-services.service';
import { matFormFieldAnimations } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';




@Component({
  selector: 'app-jcontent',
  templateUrl: './jcontent.component.html',
  styleUrls: ['./jcontent.component.css']
})
export class JcontentComponent implements OnInit {
  title = 'mysecond';
  displayedColumns: string[] = ['jobtitle', 'joblocation', 'jdesc','skills'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private api : UserServicesService){}

    ngOnInit(): void{
      this.getAllProducts();
    }
  
  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(DialogComponent, {
  //     width: '30%',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   }).afterClosed().subscribe(val=>{
  //     if(val === 'save'){
  //       this.getAllProducts();
  //     }
  //   })
  // }
  getAllProducts(){
    this.api.getProductList()
    .subscribe({
      next:(res:any)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert('Error while fixing the records!!')
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); 

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editProduct(row : any){
   
  }

  // deleteProduct(id:any){
  //   this.api.deleteProduct(id)
  //   .subscribe({
  //     next:(res)=>{
  //       alert('Product Deleted Succesfully!!');
  //       this.getAllProducts();
  //     },
  //     error:(err)=>{
  //       alert('Error While Deleting the Product');
  //     }
  //   })
  // }
}