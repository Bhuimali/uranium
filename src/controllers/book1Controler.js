const express = require('express');
const router = express.Router();
const authorModel= require("../models/authorModel.js")
const bookModel= require("../models/bookModel")


const createBook = async function (req, res) {
    const newbooks = req.body;
    const showBooks = await bookModel.create(newbooks)
    res.send({ data: showBooks });
    }

const addAuthor = async function (req, res){
    const authors = req.body;
    const showAuthor = await authorModel.create(authors);
    res.send ({ data: showAuthor })
    }
    
const bookByChetanBhagat = async function (req, res) {
        const showAuthor = await authorModel.findOne ({ author_name: "Chetan Bhagat" })
        const getAuthorId = showAuthor.author_id;
        const allBooks = await bookModel.find ({ author_id: getAuthorId }).select ({ bookName: 1, _id: 0 });
        res.send({ data: allBooks })
    }

const findAndUpdateTwoStates = async function (req, res){
            const findUpdate = await bookModel.findOneAndUpdate(
            { bookName: "Two states"},
            {$set: { price: 100 }},
            {new: true}
        )
            const getAuthorId = findUpdate.author_id;
            const getUpdatePrice = await bookModel .findOne({ author_id: getAuthorId }).select ({ author_name: 1, _id: 0})

            const allBooks = await authorModel .findOne({ author_id: getAuthorId }).select ({ author_name: 1, _id: 0});
            res.send({ data: [allBooks, getUpdatePrice] });

        }

const findBooks = async function (req, res){
            const getBookPrice = await bookModel.find({price: {$gte: 50, $lte: 100} } ).select({author_id: 1, _id: 0});
            const getAuthorId = findUpdate.author_id;
            const getUpdatePrice = await bookModel .findOne({ author_id: getAuthorId }).select ({ author_name: 1, _id: 0})

            let getAuthorNames = [ ]
            for ( let i = 0; i < getBookPrice.length; i++){
                const getAuthorId = getBooksPrice[i].author_id;
                let temp = await authorModel.findOne({author_id: getAuthorId}).select({ author_name: 1, _id: 0});
                getAuthorNames.push(temp)

            }
            res.send({data: getAuthorNames});
        }

module.exports.createBook = createBook;
module.exports.addAuthor = addAuthor;
module.exports.bookByChetanBhagat = bookByChetanBhagat;
module.exports.findAndUpdateTwoStates = findAndUpdateTwoStates;
module.exports.findBooks = findBooks;


        module.exports = router;