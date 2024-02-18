export interface ICourse {
    id: number;
    description: string;
    longDescription: string;
    category: CategoryType;
    lessonsCount: number;
    imageUrl: string;
}

export enum CategoryType {
    beginners = 1,
    advanced = 2
}
