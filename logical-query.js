db.users.find({ $and: [ { age: { $gte: 25 } }, { isActive: true } ] })
db.users.find({ $or: [ { name: 'Alice' }, { name: 'Charlie' } ] })
