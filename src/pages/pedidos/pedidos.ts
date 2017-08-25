import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Cardapio } from '../../domain/cardapio/cardapio';
import { Restaurante } from '../../domain/restaurante/restaurante';
import { Http } from '@angular/http';

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {

  public cardapio: Cardapio;
  public url: string;
  constructor(
    public navCtrl: NavController,
    private _http: Http,
    public navParams: NavParams,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController) {
    this.cardapio = this.navParams.get('cardapioSelecionado');
    this.url = "http://marmita.idsgeo.com/index.php/page/get_ionic_cardapio_json/1";
  }

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Buscando cardapio. Aguarde ...'
    });
    loader.present();
    this._http
      .get(this.url)
      .map(res => res.json())
      .toPromise()
      .then(cardapios => {
        this.cardapio = cardapios;
        loader.dismiss();
      })
      .catch(err => {
        console.log(err);
        loader.dismiss();
        this._alertCtrl
          .create({
            title: 'Falha na conexão',
            buttons: [{ text: 'Estou ciente!' }],
            subTitle: 'Não foi possível obter a lista de carros. Tente mais tarde.'
          }).present();
      });
  }
  submit(cardapio) {
    //this.navCtrl.push(FazerpedidoPage, { restauranteSelecionado: cardapio });
  }
  
}
