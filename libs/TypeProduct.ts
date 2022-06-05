import * as Contentful from "contentful";

export interface TypeProductFields {
    id: Contentful.EntryFields.Symbol;
    name?: Contentful.EntryFields.Symbol;
    description?: Contentful.EntryFields.Text;
    category?: Contentful.EntryFields.Symbol;
    imgSrc?: Contentful.Asset;
    price?: Contentful.EntryFields.Number;
    inStock?: Contentful.EntryFields.Integer;
    review?: Contentful.Entry<Record<string, any>>[];
}

export type TypeProduct = Contentful.Entry<TypeProductFields>;
