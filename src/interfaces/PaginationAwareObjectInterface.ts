interface PaginationAwareObject {
    from: any,
    to: any,
    per_page: any,
    total: number | any,
    current_page: number,
    prev_pag?: number | null,
    next_page?: number | null,
    data: Array<object | any> | any
}

export default PaginationAwareObject