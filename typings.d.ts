interface Category{

    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _type: 'category';
    slug: {
        _type: 'slug';
        current: string;
    };
    title:string
}

interface Image{
    _key: string;
    _type: 'image';
    asset: {
        url: string;
    };
}


interface Product{

    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _type: 'product';
    price:number
    slug: {
        _type: 'slug';
        current: string;
    };
    description: string;
    category: {
        _type: 'reference';
        _ref: string;
    }
    title: string
    image: Image[];
}

interface StripeProduct{
    id: string;
    amount_discount: number;
    amount_subtotal: number;
    amount_tax: number;
    amount_total: number;
    currency: string;
    quantity: number;
    object: string;
    description: string;
    price: {
        unit_amount: number;
    };
}