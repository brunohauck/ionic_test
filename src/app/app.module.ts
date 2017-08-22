import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { EuPage } from '../pages/eu/eu';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CardapioPage } from '../pages/cardapio/cardapio';
import { FazerpedidoPage } from '../pages/fazerpedido/fazerpedido';
import { LoginPage } from '../pages/login/login';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    RestaurantesPage,
    PedidosPage,
    EuPage,
    CardapioPage,
    TabsControllerPage,
    CadastroPage,
    LoginPage,
    FazerpedidoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RestaurantesPage,
    PedidosPage,
    CardapioPage,
    EuPage,
    TabsControllerPage,
    CadastroPage,
    LoginPage,
    FazerpedidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }