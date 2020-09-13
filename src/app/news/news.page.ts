import { Articles } from './../models/articles.model';
import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: Articles;
  constructor(private _news: NewsService, private _router: Router, private _menu: MenuController) { }

  ngOnInit() {
    this._menu.enable(true, 'first');
    // this._menu.open('first');
    this._news.getData('top-headlines?country=il').subscribe(data => this.data = data);
  }
  onGoToNewsSinglePage(article: Article) {
    this._news.currentArticle = article;
    this._router.navigate(['/news-single']);
  }
  changeNews(category: string) {
    this._news.getData('top-headlines?country=il&category=' + category).subscribe(data => this.data = data);
    this._menu.close('first');
  }
}
