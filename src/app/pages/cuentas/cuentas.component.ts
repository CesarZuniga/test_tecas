import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Clientes } from 'app/models/clientes';
import { Cuentas } from 'app/models/cuentas';
import { ClientesService } from 'app/services/clientes.service';
import { CuentasService } from 'app/services/cuentas.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  @ViewChild('formulario', { static: true }) formulario: NgForm;
  item = new Cuentas();
  clientes: Clientes[] = [];
  cuentas: Cuentas[] = [];
  constructor(
    private clientSer: ClientesService,
    private cuentasSer: CuentasService,
    private toastSer: ToastrService
  ) { }

  ngOnInit() {
    this.obtenClientes();
    this.obtenCuentas();
  }
  obtenClientes() {
    this.clientSer.getItems().subscribe(
      resp => {
        this.clientes = resp;
      }
    );
  }
  obtenCuentas() {
    this.cuentas = [];
    this.cuentasSer.getItems(this.item.clienteId).subscribe(
      resp => {
        this.cuentas = resp;
      }
    );
  }
  creaCuenta() {
    if (this.formulario.valid) {
      this.cuentasSer.postItem(this.item).subscribe(
        resp => {
          this.formulario.controls['numeroCuenta'].reset();
          this.formulario.controls['saldoActual'].reset();
          this.obtenCuentas();
          this.toastSer.success('Generado Correctamente')
        }
      )
    }
  }

}
