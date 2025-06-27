export interface News {
  article_id: string;
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image_url: string;
  video_url:string;
  source_name: string;
  source_url: string;
  source_icon: string;
}
export interface NewsApiResponse {
  status: string;
  totalResults: number;
  results: News[];
}