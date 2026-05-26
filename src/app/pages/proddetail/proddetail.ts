import { Component } from '@angular/core';
import { FakeApi } from '../../fake-api';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proddetail',
  imports: [],
  templateUrl: './proddetail.html',
  styleUrl: './proddetail.css',
})
export class Proddetail {
  productDetails:any;
  id:any;

  constructor(private Api: FakeApi,private cdr: ChangeDetectorRef,private route: ActivatedRoute){}
  ngOnInit(){
    this.id=this.route.snapshot.paramMap.get('id');
    this.Api.getFakeProductById(this.id).subscribe((res:any)=>{
      this.productDetails=res;
      this.cdr.detectChanges();
    });
  }
  
}

