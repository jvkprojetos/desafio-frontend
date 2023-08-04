import { Thumbnails } from "./Thumbnails";
import { Localized } from "./Localized";


export interface Snippet {
    tags?: string[];
    categoryId?: string;
    liveBroadcastContent?: string;
    defaultLanguage?: string;
    localized?: Localized;
    defaultAudioLanguage?: string;
    publishedAt?: string;
    channelId?: string;
    title?: string;
    description?: string;
    channelTitle?: string;
    thumbnails: Thumbnails;
}
