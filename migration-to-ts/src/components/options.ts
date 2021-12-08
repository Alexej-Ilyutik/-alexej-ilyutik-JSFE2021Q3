export type Options = {
    [key: string]: string;
};

export type Key = keyof InOptions;

export type Callback<T> = (data: T) => void;

export type InOptions = {
    baseLink?: string;
    options?: Options;
};
export interface DataNews {
    status: string;
    totalResults: number;
    articles: Array<Text>;
}

export interface DataSource {
    status: string;
    sources: Array<Article>;
}

export type Text = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
};

export type Article = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};
