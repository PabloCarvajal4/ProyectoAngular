import { Component } from '@angular/core';
import { Produccion } from 'src/app/api/models';
import { ProduccionControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.component.html'
})
export class ProduccionComponent {
  listOfData: Produccion[] = [];
  constructor(
    private produccionService:ProduccionControllerService
  ){}

  ngOnInit():void{
    this.getData();
  }

  getData():void{
    this.produccionService.find().subscribe(data=>this.listOfData=data);
  }
}
