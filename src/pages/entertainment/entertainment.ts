import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { NewsServeProvider } from '../../providers/news-serve/news-serve';
import { ModalPage } from '../modal/modal';
import Booking from '../classes/Booking';


/**
 * Generated class for the EntertainmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entertainment',
  templateUrl: 'entertainment.html',
})
export class EntertainmentPage {

  newsArrray = [];
  data;
  img:any;
  title:any;
  date:any;
  
  ionViewDidLoad() {
    Booking.splice(0,6);
  }

  constructor(private navCtrl: NavController,private newsPro: NewsServeProvider) {
    this.getArticles("entertainment");
  }

  getArticles(category) {
    this.newsPro.getNews(category)
    .then((data:any )=> {
      this.data = data.articles;
      this.img = this.data[0].urlToImage;
      this.title = this.data[0].title;
      this.date = this.data[0].publishedAt;
      for(var i = 1; i < 20; i++){
        this.newsArrray.push(this.data[i]);
        }
    });
  }


  visitModal = function(i){
    
    Booking.push(this.newsArrray[i].urlToImage);
    Booking.push(this.newsArrray[i].title);
    Booking.push(this.newsArrray[i].url);
    Booking.push(this.newsArrray[i].description);
    Booking.push(this.newsArrray[i].publishedAt);
    Booking.push(this.newsArrray[i].author);
    this.navCtrl.push(ModalPage);
  }
}
