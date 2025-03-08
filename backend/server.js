const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const MemoryStore = require('memorystore')(session);
const cors = require('cors');
require('dotenv').config();

// Middleware'leri içe aktar
const logger = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Genel Middleware'ler
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger); // İstekleri loglayan middleware

// Oturum Yönetimi
app.use(session({
  store: new MemoryStore({ checkPeriod: 86400000 }),
  secret: process.env.SESSION_SECRET || 'secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 86400000 }
}));

// Basit bir API endpoint
app.get('/', (req, res) => {
  res.send('Backend API Çalışıyor!');
});

// Kimlik doğrulama gerektiren endpoint
app.get('/protected', auth, (req, res) => {
  res.send('Bu sayfayı sadece yetkili kullanıcılar görebilir.');
});

// Hatalı route yakalama
app.use((req, res, next) => {
  res.status(404).json({ message: 'Sayfa Bulunamadı!' });
});

// Hata yönetimi middleware'i
app.use(errorHandler);

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
});
