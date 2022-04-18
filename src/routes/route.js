const express = require('express');
const BookController= require("../controllers/bookController")
const router = express.Router();


router.post("/createBook", BookController.createBook)
router.post("/addAuthor", BookController.addAuthor)
router.get("/bookByChetanBhagat", BookController.bookByChetanBhagat)
router.get("/fndAndUpdateTwoStates", BookController.fndAndUpdateTwoStates)
router.get("/findsBooks", BookController.findsBooks)

module.exports = router;











// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

