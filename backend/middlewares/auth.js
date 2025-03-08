// Kimlik Doğrulama Middleware - Belirli rotalara erişimi kontrol eder
const auth = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (token && token === 'Bearer mysecrettoken') {
      next(); // Token geçerli, devam et
    } else {
      res.status(403).json({ message: 'Yetkisiz erişim!' });
    }
  };
  
  module.exports = auth;
  