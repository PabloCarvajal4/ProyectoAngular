import { Component } from '@angular/core';
import { Empleados } from 'src/app/api/models';
import { EmpleadosControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent {
  listOfData: Empleados[] = [];
  http: any;
  form!: FormGroup;
  visible = false;
  accion:boolean=true;
  idModificar:string='';

  constructor(
    private empleadosService:EmpleadosControllerService,
    private nzMessageService: NzMessageService,
    private formBuilder: FormBuilder
  ){}

  private buildForm() {
    this.form = this.formBuilder.group({
      dni: [''],
      nombre: [''],
      apellido : [''],
      edad: [null],
      cargo: ['']
    });
  }
  ngOnInit():void{
    this.getData();

  }

  getData():void{
    this.empleadosService.find().subscribe(data=>this.listOfData=data);
  }
   
  }
