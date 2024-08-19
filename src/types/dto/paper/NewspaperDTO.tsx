export interface NewspaperDTO {
  id: number;
  isHotArticleBanner: boolean;
  title: string;
  image: string;
  summaries: string[];
  tags: string[];
  date: string;
  sector: string;
  publishedAt: string;
  createdAt: string;
  likeNum: number;
}
