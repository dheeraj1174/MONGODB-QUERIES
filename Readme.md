# 📘 MongoDB Queries – Complete Learning Guide

---

## 📌 1. MongoDB Basics

### What is MongoDB?

* MongoDB is a **NoSQL**, **document-based** database
* Data is stored in **BSON (JSON-like format)**
* Uses **Collections** instead of tables

### Key Terms

| SQL      | MongoDB    |
| -------- | ---------- |
| Database | Database   |
| Table    | Collection |
| Row      | Document   |
| Column   | Field      |

---

## 📌 2. Database Commands

### Show Databases

```js
show dbs
```

### Create / Switch Database

```js
use myDatabase
```

### Current Database

```js
db
```

### Delete Database

```js
db.dropDatabase()
```

---

## 📌 3. Collection Commands

### Show Collections

```js
show collections
```

### Create Collection

```js
db.createCollection("users")
```

### Drop Collection

```js
db.users.drop()
```

---

## 📌 4. Insert Queries

### Insert One Document

```js
db.users.insertOne({
  name: "Alice",
  age: 25,
  email: "alice@gmail.com"
})
```

### Insert Many Documents

```js
db.users.insertMany([
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
])
```

---

## 📌 5. Read (Find) Queries

### Find All Documents

```js
db.users.find()
```

### Find with Pretty Format

```js
db.users.find().pretty()
```

### Find with Condition

```js
db.users.find({ age: 25 })
```

### Find One Document

```js
db.users.findOne({ name: "Alice" })
```

---

## 📌 6. Comparison Operators

| Operator | Description        |
| -------- | ------------------ |
| `$eq`    | Equal              |
| `$ne`    | Not equal          |
| `$gt`    | Greater than       |
| `$gte`   | Greater than equal |
| `$lt`    | Less than          |
| `$lte`   | Less than equal    |

```js
db.users.find({ age: { $gt: 25 } })
```

---

## 📌 7. Logical Operators

### AND (default)

```js
db.users.find({ age: { $gt: 20 }, name: "Bob" })
```

### OR

```js
db.users.find({
  $or: [{ age: 25 }, { name: "Alice" }]
})
```

### NOT

```js
db.users.find({ age: { $not: { $gt: 30 } } })
```

---

## 📌 8. Update Queries

### Update One

```js
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 26 } }
)
```

### Update Many

```js
db.users.updateMany(
  { age: { $gt: 25 } },
  { $set: { isActive: true } }
)
```

### Increment Value

```js
db.users.updateOne(
  { name: "Bob" },
  { $inc: { age: 1 } }
)
```

---

## 📌 9. Delete Queries

### Delete One

```js
db.users.deleteOne({ name: "Alice" })
```

### Delete Many

```js
db.users.deleteMany({ age: { $lt: 18 } })
```

---

## 📌 10. Projection (Select Fields)

```js
db.users.find({}, { name: 1, age: 1, _id: 0 })
```

---

## 📌 11. Sorting, Limiting & Skipping

### Sort

```js
db.users.find().sort({ age: -1 })
```

### Limit

```js
db.users.find().limit(5)
```

### Skip

```js
db.users.find().skip(5)
```

---

## 📌 12. Aggregation Framework

### Basic Aggregation

```js
db.users.aggregate([
  { $match: { age: { $gt: 20 } } },
  { $group: { _id: "$age", count: { $sum: 1 } } }
])
```

### Common Aggregation Stages

| Stage      | Purpose       |
| ---------- | ------------- |
| `$match`   | Filter        |
| `$group`   | Group data    |
| `$project` | Select fields |
| `$sort`    | Sort          |
| `$limit`   | Limit         |

---

## 📌 13. Indexes

### Create Index

```js
db.users.createIndex({ email: 1 })
```

### Show Indexes

```js
db.users.getIndexes()
```

---

## 📌 14. Relationships

### Embedded Document

```js
{
  name: "John",
  address: { city: "Delhi", pin: 110001 }
}
```

### Reference Document

```js
{
  userId: ObjectId("...")
}
```

---

## 📌 15. MongoDB Backup & Restore

### Backup

```bash
mongodump
```

### Restore

```bash
mongorestore
```

---

## 📌 16. MongoDB Best Practices

* Use indexes wisely
* Avoid large documents
* Use aggregation for analytics
* Validate schema if needed

---

