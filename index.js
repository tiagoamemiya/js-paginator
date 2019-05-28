class Pagination {
    constructor(resultPerPage) {
        this.resultPerPage = resultPerPage;
    }

    getItems(url, urlParams, totalRecords) {
        let limit = this.resultPerPage;
        let currentPage = urlParams.page || 1;
        let totalPages = 1;

        if (totalRecords > limit) {
            totalPages = Math.ceil(totalRecords / limit);
        }

        let offset = currentPage > 1 ? (limit * (currentPage - 1)) : 0;
        let paginate = {
            limit: limit,
            offset: offset,
            totalPages: totalPages
        };

        if (currentPage < totalPages) {
            let next = Math.ceil((currentPage * limit + 1) / limit);
            let last = Math.ceil(((totalPages - 1) * limit + 1)/ limit);

            paginate.next = this.populateParamsUrl(url, urlParams, next);
            paginate.last = this.populateParamsUrl(url, urlParams, last);
            paginate.first = this.populateParamsUrl(url, urlParams, 1);
        }


        paginate.current = this.populateParamsUrl(url, urlParams, currentPage);
        if (currentPage > 1) {
            let prev = Math.ceil((((currentPage - 2) * limit + 1) / limit));
            paginate.prev = this.populateParamsUrl(url, urlParams, prev);
        }

        return paginate;
    }

    populateParamsUrl(url, params, pageNumber) {
        params.page = pageNumber;
        let paramsUrl = [];
        for (var key in params) {
            paramsUrl.push(key + '=' + params[key]);
        }

        return url + '?' + paramsUrl.join('&');
    }
}

module.exports = Pagination;