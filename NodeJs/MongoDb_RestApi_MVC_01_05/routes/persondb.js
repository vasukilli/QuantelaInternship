const express = require("express");
const route = express.Router();
const {
    handlePostAllPerson,
    handleGetAllData,
    handleGetByIdData,
    handleGetDataFromHtml,
    handleUpdateThedata,
    handleDeleteById
                      } = require('./controllers/person.js');

    route.post('/',handlePostAllPerson);
    route.get('/',handleGetAllData);

    route.get('/:id',handleGetByIdData);
    route.patch('/:id',handleUpdateThedata);
    route.delete('/:id',handleDeleteById);

    route.get('/data',handleGetDataFromHtml);

    module.exports = route;