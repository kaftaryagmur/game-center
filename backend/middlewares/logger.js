// Logger Middleware - Gelen her isteği loglar
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Bir sonraki middleware'e geç
};

module.exports = logger;
