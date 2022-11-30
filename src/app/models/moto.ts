export interface IMoto{
    name: string,
    type: string,
    image: string,
}

export class MotoBlog implements IMoto{
    name: string;
    type: string;
    image: string;
    blogTitle: string;
    description: string;
    date: string;
}