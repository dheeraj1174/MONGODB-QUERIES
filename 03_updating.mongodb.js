

use("ecommerce");

// db.products.updateOne({
//     name:"Smartphone Holder",
// },{
//     $set:{price:899}
// }
// )


// db.products.updateMany({
//     category:"Electronics",
// },{
//     $inc:{stock:10}
// }
// )

db.products.updateMany({
    name:"Mechanical Keyboard",
},{
    $push:{tags:"mouse"}
}
)