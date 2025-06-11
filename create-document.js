db.users.insertMany([
  {
    name: 'Alice',
    age: 24,
    email: 'alice@example.com',
    isActive: true,
    registeredAt: new Date()
  },
  {
    name: 'Bob',
    age: 30,
    email: 'bob@example.com',
    isActive: false,
    registeredAt: new Date()
  },
  {
    name: 'Charlie',
    age: 29,
    email: 'charlie@example.com',
    isActive: true,
    registeredAt: new Date()
  }
