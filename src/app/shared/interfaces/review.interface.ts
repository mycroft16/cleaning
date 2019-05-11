export interface IReview {
    id: number;
    schedule: number;
    created: string;
    reviewedBy: number;
    reviewBody: string;
    reviewRating: number;
}