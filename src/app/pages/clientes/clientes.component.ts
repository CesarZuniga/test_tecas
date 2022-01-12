import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Clientes } from 'app/models/clientes';
import { ClientesService } from 'app/services/clientes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  @ViewChild('formulario', { static: true }) formulario: NgForm;
  item = new Clientes();
  clientes: Clientes[] = [];
  constructor(
    private clientSer: ClientesService,
    private toastSer: ToastrService
  ) { }

  ngOnInit() {
    this.obtenClientes();
  }
  obtenClientes() {
    this.clientSer.getItems().subscribe(
      resp => {
        this.clientes = resp;
      }
    );
  }
  creaCuenta() {
    if (this.formulario.valid) {
      this.clientSer.postItem(this.item).subscribe(
        resp => {
          this.formulario.resetForm();
          this.obtenClientes();
          this.toastSer.success('Generado Correctamente')
        }
      )
    }
  }

}
