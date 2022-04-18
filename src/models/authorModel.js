// const mongoose = require('mongoose');

// const { process_params } = require("express/lib/router");

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// // String, Number
// // Boolean, Object/json, array



// const bookbyChetanBhagat = async function(req, res){
//   const showAuthor = await authorModel.findOne({author_name: "Chetan Bhagat"});
  
//   // const getAuthorIdTemp = showAuthor.map(data => data.author_id);
//   const getAuthorID = showAuthor.author_id;
//   console.log(getAuthorID);
//   // const getAuthorID = getAuthorIdTemp[0];

//   const allBooks = await bookModel.find({ author_id: getAuthorID }).select({ bookName: 1, _id: 0 });
//   res.send( { data: allBooks } );
// }






const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {  
    author_id:{
        type: Number,
        required: true,
    },
    author_name:{
        type: String,
        unique: true,
        required: true,
    },
    age: Number,
    address: String,
    
}, { timestamps: true });
module.exports = mongoose.model('Authors', authorSchema)
    