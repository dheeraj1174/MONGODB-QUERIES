
use('ecommerce')

db.dropDatabase();


db.products.insertMany([
    {
    name:"Mechanical Keyboard",
    price:2500,
    category:"Electronics",
    stock:80,
    ratings:4.7,
    tags:["keyboard","computer","mechanical"],
    createdAt:new Date()
},
{
    name:"USB-C Charging Cable",
    price:350,
    category:"Electronics",
    stock:200,
    ratings:4.3,
    tags:["charger","mobile","cable"],
    createdAt:new Date()
},
{
    name:"Bluetooth Headphones",
    price:1800,
    category:"Electronics",
    stock:60,
    ratings:4.6,
    tags:["audio","wireless","headphones"],
    createdAt:new Date()
},
{
    name:"Laptop Stand",
    price:900,
    category:"Electronics",
    stock:110,
    ratings:4.4,
    tags:["laptop","stand","accessory"],
    createdAt:new Date()
},
{
    name:"Webcam HD",
    price:1600,
    category:"Electronics",
    stock:70,
    ratings:4.2,
    tags:["camera","streaming","computer"],
    createdAt:new Date()
},
{
    name:"Portable Power Bank",
    price:1200,
    category:"Electronics",
    stock:150,
    ratings:4.5,
    tags:["power","battery","mobile"],
    createdAt:new Date()
},
{
    name:"Wireless Keyboard",
    price:1400,
    category:"Electronics",
    stock:90,
    ratings:4.1,
    tags:["keyboard","wireless","computer"],
    createdAt:new Date()
},
{
    name:"Gaming Mouse Pad",
    price:500,
    category:"Electronics",
    stock:180,
    ratings:4.6,
    tags:["gaming","mouse","accessory"],
    createdAt:new Date()
},
{
    name:"Smartphone Holder",
    price:450,
    category:"Electronics",
    stock:220,
    ratings:4.0,
    tags:["mobile","holder","stand"],
    createdAt:new Date()
},
{
    name:"External Hard Drive 1TB",
    price:4200,
    category:"Electronics",
    stock:50,
    ratings:4.8,
    tags:["storage","harddrive","backup"],
    createdAt:new Date()
}
])

    db.contacts.insertMany([
        {
        name:"Alice Johnson",
        message:"Loved this website",
        phone:"9898112345",
        createdAt:new Date()
        },
        {
        name:"Rahul Sharma",
        message:"Great service and fast response",
        phone:"9876543210",
        createdAt:new Date()
    },
    {
        name:"Neha Verma",
        message:"Very user friendly interface",
        phone:"9123456789",
        createdAt:new Date()
    },
    {
        name:"Aman Gupta",
        message:"Support team was very helpful",
        phone:"9988776655",
        createdAt:new Date()
    }   
])