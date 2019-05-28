# Paginator

```javascript

const resultsPerPage = 10;

const paginator = require('paginator');
const pagination = new paginator(resultsPerPage);

const url = 'http://locahost:3333/users';
let urlParams = {
    name : 'teste',
    active: 'yes',
    ...
    page: 1
}

let totalRecords = 100;

let paginate = pagination.getItems(url, urlParams, totalRecords);
```