// Hata Yönetimi Middleware - Hataları yakalar ve yanıt olarak döner
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Sunucu Hatası!', error: err.message });
  };
  
  module.exports = errorHandler;
  