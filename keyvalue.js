use finalfadil
switched to db finalfadil
db.createCollection("Makanan");
{ ok: 1 }
db.Makanan.insertMany([{ _id: "makanan:1", value: "Nasi Goreng" },
  { _id: "makanan:2", value: "Sate Ayam" },
  { _id: "makanan:3", value: "Bakso" },
  { _id: "makanan:4", value: "Rendang" },
  { _id: "makanan:5", value: "Soto Ayam" }])
{
  acknowledged: true,
  insertedIds: {
    '0': 'makanan:1',
    '1': 'makanan:2',
    '2': 'makanan:3',
    '3': 'makanan:4',
    '4': 'makanan:5'
  }
}
db.Makanan.find();
{
  _id: 'makanan:1',
  value: 'Nasi Goreng'
}
{
  _id: 'makanan:2',
  value: 'Sate Ayam'
}
{
  _id: 'makanan:3',
  value: 'Bakso'
}
{
  _id: 'makanan:4',
  value: 'Rendang'
}
