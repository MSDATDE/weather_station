import { NextFunction, Request, Response } from 'express';
import { SelectQueryBuilder } from 'typeorm';
import PaginationAwareObject from '../interfaces/PaginationAwareObjectInterface';


declare module "typeorm" {
    export interface SelectQueryBuilder<Entity> {
        paginate(per_page?: number | null): Promise<PaginationAwareObject>
    }
}


export const paginate = async (builder: SelectQueryBuilder<any>, page: number, per_page: number): Promise<PaginationAwareObject> => {
    let skip = per_page * (page - 1);
    const total = builder;
    const count = await total.getCount();
    let res = await builder.skip(skip).take(per_page).getMany()
    return {
        from: skip <= count ? skip + 1 : null,
        to: (count > skip + per_page) ? skip + per_page : count,
        per_page,
        total: count,
        current_page: page,
        prev_pag: page > 1 ? (page - 1) : null,
        next_page: count > (skip + per_page) ? page + 1 : null,
        data: res || []
    }

}

export function pagination(req: Request, res: Response, next: NextFunction): void {
    SelectQueryBuilder.prototype.paginate = async function (per_page: number | null): Promise<PaginationAwareObject> {
        let current_page = getPage(req);
        if (!per_page) {
            per_page = getPerPage(req)
        } else {
            per_page = getPage(req, per_page);
        }
        return await paginate(this, current_page, per_page);
    }
    next();
}

export const getPerPage = (req: Request, defaultPerPage: number = 20) => {
    return parseInt(req.query.per_page as string) || defaultPerPage
}

export const getPage = (req: Request, defaultPage: number = 1) => {
    return parseInt(req.query.page as string) || defaultPage
}