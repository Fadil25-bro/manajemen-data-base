db.users.updateOne(
  { name: 'Bob' },
  { $set: { isActive: true } }
