import { Article } from './../models/article.model';
import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
  article: Article;
  constructor(private _news: NewsService) { }

  ngOnInit() {
    this.article = this._news.currentArticle;
  }

}
