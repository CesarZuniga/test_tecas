import { MovimientosComponent } from './../../pages/movimientos/movimientos.component';
import { ClientesComponent } from './../../pages/clientes/clientes.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { CuentasComponent } from 'app/pages/cuentas/cuentas.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'clientes',           component: ClientesComponent },
  { path: 'cuentas',           component: CuentasComponent },
  { path: 'movimientos',           component: MovimientosComponent }
    /*{ path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }*/
];
