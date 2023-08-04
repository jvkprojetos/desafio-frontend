export interface Video {
    kind?: string;
    etag?: string;
    items?: Items[]
}

export interface Items {
    kind?: string
    etag?: string
    id?: string
    snippet?: Snippet 
}

export interface Snippet {
    tags?: string[]
    categoryId?: string
    liveBroadcastContent?: string
    defaultLanguage?: string
    localized?: Localized
    defaultAudioLanguage?: string
    publishedAt?: string
    channelId?: string
    title?: string
    description?: string,
    channelTitle?: string,
    thumbnails: Thumbnails
}

export interface Localized {
    title?: string
    description?: string
}

export interface Thumbnails {
    maxres: Maxres
}

export interface Maxres {
    url?: string
    width?: number
    height?: number
}
