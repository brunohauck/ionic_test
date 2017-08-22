import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Cardapio } from '../../domain/cardapio/cardapio';

@Component({
  selector: 'page-fazerpedido',
  templateUrl: 'fazerpedido.html'
})
export class FazerpedidoPage {

  public data;
  public http; 
  public cardapio: Cardapio;
  constructor(public navCtrl: NavController, 
              http: Http,
              public navParams: NavParams ) {

    this.cardapio = this.navParams.get('cardapioSelecionado');
    this.data = {};
    this.data.name = '';
    this.data.response = '';
    this.http = http;
  }
  submit() {
      console.log("entrou 01");
      var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
      var data = JSON.stringify({username: this.data.name });
      
      this.http.post(link, data)
      .subscribe(data => {
          this.data.response = data._body;
      }, error => {
          console.log("Oooops!");
      });
  }
  
}
