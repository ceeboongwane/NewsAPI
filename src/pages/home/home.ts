import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsServeProvider } from '../../providers/news-serve/news-serve';
import { ModalPage } from '../modal/modal';
import Booking from '../classes/Booking';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newsArrray = [];
  data;
  img:any;
  title:any;
  author:any;
  
  
  ionViewDidLoad() {
    Booking.splice(0,6);
  }

  constructor(private navCtrl: NavController,private newsPro: NewsServeProvider) {
    this.getArticles("general");
    console.log(Booking);
  }

  getArticles(category) {
    this.newsPro.getNews(category)
    .then((data:any )=> {
      this.data = data.articles;
      this.img = this.data[0].urlToImage;
      this.title = this.data[0].title;
      this.author = this.data[0].author;
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
