import { Component, inject, OnInit } from '@angular/core';
import { NewsService } from '../utils/services/news.services';
import { News } from '../utils/models/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.css',
  
})
export class NewsCompoent implements OnInit{
  loading : boolean = true;
  newsItems: News[] = [];
  private newsService = inject(NewsService);

  
  ngOnInit(): void {
    this.newsService.getAllNews().subscribe({
      next: (data) => {
        this.newsItems = data;
        this.loading = false;
        console.log(this.newsItems)
      },
      error: (err) => {
        console.error('Error fetching news:', err);
        this.loading = false;
      }
    });
  }

  
}
