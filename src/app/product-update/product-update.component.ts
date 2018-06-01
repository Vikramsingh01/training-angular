import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
//import { relative } from 'path';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productAddForm: FormGroup;
  productId;
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.productId = param['id'];
      this.dataService.getItem(this.productId).subscribe(res=>{
        this.productAddForm.patchValue(res.json());
      })
    })

    this.productAddForm = new FormGroup({
      name: new FormControl(''),
      color: new FormControl('')
    })
  }

  updateProduct() {
    this.dataService.updateItem(this.productAddForm.value, this.productId ).subscribe(res=>{
      this.router.navigate(['../..'], {relativeTo: this.route})
    });
  }

}
