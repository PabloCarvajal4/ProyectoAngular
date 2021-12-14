import { Component } from '@angular/core';
import { Distribucion } from 'src/app/api/models';
import { DistribucionControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.component.html'
})
export class DistribucionComponent {
  listOfData: Distribucion[] = [];
  constructor(
    private distribucionService:DistribucionControllerService
  ){}

  ngOnInit():void{
    this.getData();
  }

  getData():void{
    this.distribucionService.find().subscribe(data=>this.listOfData=data);
  }
}
