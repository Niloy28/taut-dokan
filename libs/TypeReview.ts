import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeReviewFields {
    author?: Contentful.EntryFields.Symbol;
    rating?: Contentful.EntryFields.Integer;
    time?: Contentful.EntryFields.Date;
    reviewBody?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    product?: Contentful.Entry<Record<string, any>>;
}

export type TypeReview = Contentful.Entry<TypeReviewFields>;
