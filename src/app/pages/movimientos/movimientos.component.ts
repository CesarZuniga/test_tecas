import { ToastrService } from 'ngx-toastr';
import { TipoMovimientoService } from './../../services/tipo-movimiento.service';
import { CuentasService } from './../../services/cuentas.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovimientosService } from 'app/services/movimientos.service';
import { ClientesService } from 'app/services/clientes.service';
import { TipoMovimiento } from 'app/models/tipo-movimiento';
import { Movimientos } from 'app/models/movimientos';
import { Clientes } from 'app/models/clientes';
import { Cuentas } from 'app/models/cuentas';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {

  // form
  @ViewChild('formulario', { static: true }) formulario: NgForm;
  tipoMovimiento: TipoMovimiento[] = [];
  movimientos: Movimientos[] = [];
  clientes: Clientes[] = [];
  cuentas: Cuentas[] = [];
  item = new Movimientos();
  constructor(private movSer: MovimientosService,
    private clientSer: ClientesService,
    private cuentasSer: CuentasService,
    private tipoService: TipoMovimientoService,
    private toastSer: ToastrService
  ) { }

  ngOnInit() {
    this.obtenClientes();
    this.obtenTipoMovimiento();

  }
  obtenTipoMovimiento() {
    this.tipoService.getItems().subscribe(
      resp => {
        this.tipoMovimiento = resp;
      }
    );
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
    if (this.item.clienteId) {
      this.cuentasSer.getItems(this.item.clienteId).subscribe(
        resp => {
          this.cuentas = resp;
        }
      );
    }
  }
  obtenMovimientos() {
    this.movimientos = [];
    if(this.item.cuentaId){
      this.movSer.getItems(this.item.cuentaId, this.item.tipoId).subscribe(
        resp => {
          this.movimientos = resp;
        }
      );

    }

  }
  crearMovimiento(){
    if(this.formulario.valid){
      this.movSer.postItem(this.item).subscribe(
        resp => {
          this.formulario.controls['monto'].reset();
          this.obtenMovimientos();
          this.toastSer.success('Generado Correctamente')
        }
      );

    }

  }
  cambioCliente(){
    this.formulario.controls['cuenta'].reset();
    this.obtenCuentas();
  }
  cambioCuenta(){
    this.obtenMovimientos();
  }


}
