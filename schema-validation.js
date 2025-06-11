db.createCollection("validatedUsers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "email", "isActive", "registeredAt"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        age: {
          bsonType: "int",
          minimum: 18,
          maximum: 100,
          description: "must be an integer in [18, 100] and is required"
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+$",
          description: "must be a valid email and is required"
        },
        isActive: {
          bsonType: "bool",
          description: "must be a boolean and is required"
        },
        registeredAt: {
          bsonType: "date",
          description: "must be a date and is required"
        }
      }
    }
  }
})
