import { model, Model, Schema } from 'mongoose';

export interface Cookie {
    id: string;
    text: string;
}

export const CookieModelSchema = new Schema<Cookie>(
    {
        text: String,
    },
    {
        timestamps: true,
    },
);

export const CookieModelDb: Model<Cookie> = model('Cookie', CookieModelSchema);
