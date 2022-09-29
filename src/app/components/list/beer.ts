export interface IBeer{
    code: string,
    name: string,
    type: string,
    price: number,
    stock: number,
    image: string,
    cleareance:boolean
}

export class Beer implements IBeer{
    code: string;
    name: string;
    type: string;
    price: number;
    stock: number;
    image: string;
    cleareance: boolean;
    quantity: number
}