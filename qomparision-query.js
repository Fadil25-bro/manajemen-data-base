db.users.find({ age: { $gt: 25 } }) // usia > 25
db.users.find({ age: { $lte: 30 } }) // usia <= 30
