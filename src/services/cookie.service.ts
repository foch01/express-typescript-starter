import { Cookie, CookieModelDb } from '../model/cookie.model';

class CookieService {
    public static async createOneCustom(text: string): Promise<Cookie> {
        const cookie = new CookieModelDb();
        cookie.text = text;
        await cookie.save();
        return cookie;
    }

    public static async findLast(): Promise<Cookie[]> {
        return CookieModelDb.find().sort({_id:-1}).limit(1);
    }

    public static async deleteOne(id: string): Promise<void> {
        await CookieModelDb.deleteOne({ id });
    }
}

export default CookieService;
