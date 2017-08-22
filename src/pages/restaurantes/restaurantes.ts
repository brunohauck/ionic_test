import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Restaurante } from '../../domain/restaurante/restaurante';
import { Http } from '@angular/http';
import { CardapioPage } from '../cardapio/cardapio';

@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html'
})
export class RestaurantesPage {

  public restaurantes: Restaurante[];
  constructor(
    public navCtrl: NavController,
    private _http: Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController) { }
  ngOnInit() {


    let loader = this._loadingCtrl.create({
      content: 'Buscando novos carros. Aguarde ...'
    });
    loader.present();
    this._http
      .get('http://marmita.idsgeo.com/index.php/page/get_ionic')
      .map(res => res.json())
      .toPromise()
      .then(restaurantes => {
        this.restaurantes = restaurantes;
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
  seleciona(restaurante) {
    this.navCtrl.push(CardapioPage, { restauranteSelecionado: restaurante });
  }
}
