import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  companyName: string = "Koala Car Services";
  imgUrl: string = "../../assets/images/Koala.jpg";
  toggleFlag: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
    if(!this.toggleFlag){
      this.companyName = 'Penguin Restaurant';
      this.imgUrl = "../../assets/images/Penguins.jpg";
    }else{
      this.companyName = "Koala Restaurant";
      this.imgUrl = "../../assets/images/Koala.jpg";
    }
    this.toggleFlag = !this.toggleFlag;
  }

}
