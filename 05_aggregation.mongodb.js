
use("ecommerce");

// db.sales.insertMany([
//     {_id:1,item:"Apple",price:10,quantity:2,category:"Fruits"},
//     {_id:2,item:"Banana",price:5,quantity:5,category:"Fruits"},
//     {_id:3,item:"Orange",price:8,quantity:3,category:"Fruits"},
//     {_id:4,item:"Broccoli",price:15,quantity:1,category:"Vegetables"},
//     {_id:5,item:"Carrot",price:7,quantity:4,category:"Vegetables"}
// ]);

// db.sales.aggregate([
//     {$match: {
//         category:"Fruits"
//     }},
//     {
//         $project: {
//           _id:0,item:1,quantity:1
//         }
//     },
// ]);

//Aggregat function to calculate total sales per category
db.sales.aggregate([
    {$group:{
        _id:"$category",
        totalsales:{$sum : { $multiply: ["$price", "$quantity"]}}
    }}
])







