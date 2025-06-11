db.users.aggregate([
  { $match: { isActive: true } },
  { $group: { _id: null, averageAge: { $avg: "$age" } } }
])
