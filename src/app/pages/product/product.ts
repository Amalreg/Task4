import { Component } from '@angular/core';
import { Card } from '../../components/card/card';
import { FakeApi } from '../../fake-api';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  data:any[]=[];

  constructor(private Api: FakeApi, private cdr: ChangeDetectorRef){}
  ngOnInit(){
    this.Api.getFakeProducts().subscribe((res:any)=>{
      this.data=res;
      this.cdr.detectChanges();
    })
  }

}
