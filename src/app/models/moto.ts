export interface IMoto{
    id:string
    name: string,
    type: string,
    image: string,
    lastRacePlace:string;
}

export class MotoBlog implements IMoto{
    id:string;
    name: string;
    type: string;
    lastRacePlace:string;
    image: string;
    blogTitle: string;
    description: string;
    date: string;
}