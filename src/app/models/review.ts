export interface Review {
    id: number;
    reviewId: string;
    reviewFullText: string;
    reviewText: string;
    numLikes: number;
    numComments: number;
    numShares: number;
    rating: number;
    reviewCreatedOn: string;
    reviewCreatedOnDate: string;
    reviewCreatedOnTime: number;
    reviewerId?: any;
    reviewerUrl?: any;
    reviewerName: string;
    reviewerEmail?: any;
    sourceType: string;
    isVerified: boolean;
    source: string;
    sourceName: string;
    sourceId: string;
    tags: any[];
    href?: any;
    logoHref?: any;
    photos: any[];
  }