import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantesPage } from '../restaurantes/restaurantes';
import { PedidosPage } from '../pedidos/pedidos';
import { EuPage } from '../eu/eu';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = RestaurantesPage;
  tab2Root: any = PedidosPage;
  tab3Root: any = EuPage;
  constructor(public navCtrl: NavController) {
  }
  
}
