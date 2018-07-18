import { Component, OnInit } from '@angular/core';
import { CoolcarService } from '../shared/coolcar/coolcar.service';

@Component({
  selector: 'app-coolcar',
  templateUrl: './coolcar.component.html',
  styleUrls: ['./coolcar.component.css']
})
export class CoolcarComponent implements OnInit {
  cars: Array<any>;

  constructor(private carService: CoolcarService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.cars = data;
    });
  }
}
