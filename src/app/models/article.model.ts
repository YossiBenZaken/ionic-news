export class Article {
    author: string;
    content: string;
    description: string;
    publishedAt: Date;
    source: Source[];
    title: string;
    url: string;
    urlToImage: string;
}
export class Source {
    id: number;
    name: string;
}