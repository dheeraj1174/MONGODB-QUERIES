
use("ecommerce");

// db.products.find({
//     "name":"Mechanical Keyboard"
// })

// db.products.find({
//     $and:[
//         {category:"Electronics"},
//         {stock:{$lt:100}}
//     ]
// })

db.products.find().sort({price:-1}).skip(1).limit(10)

// db.products.find({
//     category:"Electronics"
// })


// db.products.find({
//     price:{
//         $gte:1000,
//         $lte:3000
//     }

// })