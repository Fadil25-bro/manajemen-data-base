db.users.find() // Ambil semua dokumen
db.users.findOne({ name: 'Alice' })
db.users.find({ age: { $gte: 25 } })
