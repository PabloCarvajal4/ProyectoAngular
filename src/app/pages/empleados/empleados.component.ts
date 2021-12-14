import { Component } from '@angular/core';
import { Empleados } from 'src/app/api/models';
import { EmpleadosControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent {
  listOfData: Empleados[] = [];
  constructor(
    private empleadosService:EmpleadosControllerService
  ){}

  ngOnInit():void{
    this.getData();
  }

  getData():void{
    this.empleadosService.find().subscribe(data=>this.listOfData=data);
  }
}
