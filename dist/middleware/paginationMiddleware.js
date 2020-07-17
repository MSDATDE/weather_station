"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPage = exports.getPerPage = exports.pagination = exports.paginate = void 0;
const typeorm_1 = require("typeorm");
exports.paginate = async (builder, page, per_page) => {
    let skip = per_page * (page - 1);
    const total = builder;
    const count = await total.getCount();
    let res = await builder.skip(skip).take(per_page).getMany();
    return {
        from: skip <= count ? skip + 1 : null,
        to: (count > skip + per_page) ? skip + per_page : count,
        per_page,
        total: count,
        current_page: page,
        prev_pag: page > 1 ? (page - 1) : null,
        next_page: count > (skip + per_page) ? page + 1 : null,
        data: res || []
    };
};
function pagination(req, res, next) {
    typeorm_1.SelectQueryBuilder.prototype.paginate = async function (per_page) {
        let current_page = exports.getPage(req);
        if (!per_page) {
            per_page = exports.getPerPage(req);
        }
        else {
            per_page = exports.getPage(req, per_page);
        }
        return await exports.paginate(this, current_page, per_page);
    };
    next();
}
exports.pagination = pagination;
exports.getPerPage = (req, defaultPerPage = 20) => {
    return parseInt(req.query.per_page) || defaultPerPage;
};
exports.getPage = (req, defaultPage = 1) => {
    return parseInt(req.query.page) || defaultPage;
};
