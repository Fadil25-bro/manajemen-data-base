use finalfadil2
switched to db finalfadil2
db.createCollection("Makanan");
{ ok: 1 }
db.Makanan.insertMany([{
    nama: "Nasi Goreng",
    kategori: "Makanan Berat",
    kalori: 500,
    harga: 15000,
    halal: true
  },
  {
    nama: "Sate Ayam",
    kategori: "Makanan Berat",
    kalori: 400,
    harga: 20000,
    halal: true
  },
  {
    nama: "Bakso",
    kategori: "Makanan Berat",
    kalori: 450,
    harga: 18000,
    halal: true
  },
  {
    nama: "Rendang",
    kategori: "Makanan Berat",
    kalori: 550,
    harga: 25000,
    halal: true
  },
  {
    nama: "Soto Ayam",
    kategori: "Makanan Berat",
    kalori: 350,
    harga: 16000,
    halal: true
  }
])
🖥️ Output:
json
Copy
Edit
{
  "nama": "Nasi Goreng",
  "kategori": "Makanan Berat",
  "kalori": 500,
  "harga": 15000,
  "halal": true
}])
SyntaxError: Unexpected character '🖥'. (37:0)

[0m [90m 35 |[39m   }
 [90m 36 |[39m ])
[31m[1m>[22m[39m[90m 37 |[39m 🖥️ [33mOutput[39m[33m:[39m
 [90m    |[39m [31m[1m^[22m[39m
 [90m 38 |[39m json
 [90m 39 |[39m [33mCopy[39m
 [90m 40 |[39m [33mEdit[39m[0m
