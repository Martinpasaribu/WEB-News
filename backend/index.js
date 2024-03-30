
import  express from 'express';
import axios from 'axios'
import cors from 'cors'
import fs from 'fs'
import { readFile, writeFile } from 'fs/promises'; // Gunakan fs/promises untuk operasi baca tulis asinkron


const app = express();
const PORT =  5000;

let a = ''
let b = ''


app.use(express.json());

app.use(cors({
    origin: ["", "https://www.postman.com", "http://localhost:3000","http://localhost:3001", "http://localhost:5000", "https://web-news-client.vercel.app"],
    methods: ["POST", "GET", "PATCH", "DELETE",'PUT', "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
 }));


// Endpoint untuk meneruskan permintaan ke API berita
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; // Import modul path dengan benar

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/api/news', async (req, res) => {
  try {
    const jsonData = await readFile(path.join(__dirname, 'public', 'bisnis2.json'), 'utf8'); // Gunakan path.join untuk mengonstruksi jalur file
    const x = JSON.parse(jsonData);
    res.json(x);
  } catch (error) {
    res.status(500).json({ error: `Terjadi kesalahan saat mengambil data json news: ${error.message}` });
  }
});




  
  // Endpoint untuk meneruskan permintaan ke API berita
  app.get('/api/bisnis', async (req, res) => {
    try {
      const jsonData = await readFile('/public/teknologi.json', 'utf8');
      const x = JSON.parse(jsonData);
      b = x;
      res.json(x);
    } catch (error) {
      res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data json teknologi' });
    }
  });

  
app.get('/api/cari', async (req, res) => {
    try {
        const { author, content } = req.query;

        let x = [ ...datas,...datas2 ]
        const cek = x.filter(item => item.author === author || item.content === content  )
        // Lakukan pencarian di dalam data JSON
        const results = cek.filter(item => {
            const authorMatch = item.author.toLowerCase().includes(author.toLowerCase());
            // const contentMatch = item.content.toLowerCase().includes(content.toLowerCase());
            return authorMatch || contentMatch;
        });

        res.status(200).json(results);
        console.log('hasil', results);
    } catch (error) {
        console.error('Error searching products:', error);
        res.status(500).json({ msg: 'Kesalahan data' });
    }
});




// Endpoint untuk meneruskan permintaan ke API berita
app.get('/api/news##', async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                domains: 'wsj.com',
                apiKey: '0f9c16e6a34b47cdb1ce7892f90c929e'
            }
        });
        let tampung = response.data
        let cek = tampung.articles.filter(item => item.description !== null && item.urlToImage !== null)
        const sementara = tampung.articles
        let hasil = cek.filter(item => item.author !== 'www.wsj.com')
        a = hasil.slice(0, 7)
        // const data1 = cek.slice(0, 2);
        // const data2 = cek.slice(2, 5);

        // res.json([ data1, data2 ]);
        // res.json(cek.slice(0, 7));
        
        // console.log(data1); // Data pertama
        // console.log(data2); // Data kedua
        
        res.json(hasil)
        // console.log(tampung.articles.slice(0, 2))
  
            // Menyimpan data JSON ke dalam file
        fs.writeFile('bisnis2.json', JSON.stringify(hasil), (err) => {
        if (err) throw err;
            console.log('Data berhasil disimpan dalam file bisnis.json');
        });
       
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data berita' });
    }
});

app.get('/api/bisnis#', async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country: 'us',
                category: 'business',
                apiKey: '0f9c16e6a34b47cdb1ce7892f90c929e'
            }
        });
        let tampung = response.data
       
        let cek = tampung.articles.filter(item => item.description !== null && item.urlToImage !== null)
        b = cek.slice(0, 7)
        // const data1 = cek.slice(0, 2);
        // const data2 = cek.slice(2, 5);

        // res.json([ data1, data2 ]);
        res.json(cek.slice(0, 7));
        
        // console.log(data1); // Data pertama
        // console.log(data2); // Data kedua
        
        // res.json(cek)
        // console.log(tampung.articles.slice(0, 2))
  
        // Menyimpan data JSON ke dalam file
        fs.writeFile('teknologi.json', JSON.stringify(b), (err) => {
        if (err) throw err;
            console.log('Data berhasil disimpan dalam file teknologi.json');
        });
       
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data berita' });
    }
});

app.get('/api/data', async (req, res) => {
    try {
        let tampung = [...b, ...a  ];

        // Mengonversi format tanggal
        tampung.forEach(item => {
            item.publishedAt = isoToCustomFormat(item.publishedAt);
        });

        res.json(tampung);
       
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil seluruh data berita' });
    }
});

// Fungsi untuk mengonversi format ISO 8601 ke format yang diinginkan
const isoToCustomFormat = (isoDateString) => {
    const date = new Date(isoDateString);
    const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const dayName = dayNames[date.getDay()];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${dayName}, ${day} ${month} ${hours}.${minutes}`;
}





app.use('/', (req,res)=> {
    res.send(" Server Untuk Data Colection 2 Berjalan dengan Baik ")
})

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
