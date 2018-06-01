import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.productAddForm = new FormGroup({
      name: new FormControl(''),
      color: new FormControl('')
    })
  }

  addProduct() {
    this.dataService.addItem(this.productAddForm.value).subscribe(res=>{
      this.router.navigate(['..'], {relativeTo: this.route})
    })
  }

}
