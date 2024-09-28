const express = require('express');
const router  = express.Router();


const {createToDo}=require('../controller/CreateDo');
const {getToDo,getToDoById}=require('../controller/getToDo');
const {updateToDo} = require('../controller/updateToDo');
const { deleteToDo } = require('../controller/deleToDo');

router.post('/createToDo',createToDo);

router.get('/getToDo',getToDo)

router.get('/getToDo/:id',getToDoById);

router.post('/updateToDo/:id',updateToDo);

router.post('/deleteToDo/:id',deleteToDo)


module.exports = router;