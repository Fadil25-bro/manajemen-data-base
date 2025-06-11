db.users.bulkWrite([
  {
    insertOne: {
      document: {
        name: 'Dave',
        age: 22,
        email: 'dave@example.com',
        isActive: false,
        registeredAt: new Date()
      }
    }
  },
  {
    updateOne: {
      filter: { name: 'Alice' },
      update: { $set: { age: 26 } }
    }
  },
  {
    deleteOne: {
      filter: { name: 'Bob' }
    }
  }
])
