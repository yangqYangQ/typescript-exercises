export class Database<T> {
    protected filename: string;
    protected fullTextSearchFieldNames: Array<keyof T>;

    constructor(filename: string, fullTextSearchFieldNames: Array<keyof T>) {
        this.filename = filename;
        this.fullTextSearchFieldNames = fullTextSearchFieldNames;
    }

    async find(query: Query<T>): Promise<T[]> {
        return [];
    }
}

type Query<T> = { [K in keyof T]?: FieldQuery<T[K]> } & {
    $and?: Query<T>[];
    $or?: Query<T>[];
    $text?: string;
}

type FieldQuery<FT> = { $eq: FT } | { $gt: FT } | { $lt: FT } | { $in: FT[] };
