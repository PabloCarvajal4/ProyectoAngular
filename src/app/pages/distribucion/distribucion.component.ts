import { Component } from '@angular/core';
import { Distribucion } from 'src/app/api/models';
import { DistribucionControllerService } from 'src/app/api/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.component.html'
})
export class DistribucionComponent {
  listOfData: Distribucion[] = [];
  form!: FormGroup;
  
  constructor(
    private distribucionService:DistribucionControllerService,
    private nzMessageService: NzMessageService,
    private formBuilder: FormBuilder
  ){this.buildForm();}

  private buildForm() {
    this.form = this.formBuilder.group({
      lugar: [''],
      producto: [''],
      personaCargo: [''],
      correo: [null],
      tienda: ['']
    });
  }
  ngOnInit():void{
    this.getData();
  }

  getData():void{
    this.distribucionService.find().subscribe(data=>this.listOfData=data);
  }
  
}
