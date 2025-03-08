# game-center
📦 C:\Users\kafta\Masaüstü\game-center
 ┣ 📂 apps (Frontend ve Oyunlar)
 ┃ ┣ 📂 game-center-web (React Uygulaması)
 ┃ ┃ ┣ 📂 node_modules             # React bağımlılıkları
 ┃ ┃ ┣ 📂 public                   # Sabit dosyalar (index.html, favicon, vb.)
 ┃ ┃ ┣ 📂 src                      # Uygulama kaynak kodları
 ┃ ┃ ┃ ┣ 📂 pages                  # Ana ekranlar (Login, Home, GameDetail)
 ┃ ┃ ┃ ┃ ┣ ⚛️ Login.tsx            # Giriş ekranı
 ┃ ┃ ┃ ┃ ┣ ⚛️ Home.tsx             # Ana ekran (Oyun listesi)
 ┃ ┃ ┃ ┣ 📂 components             # Ortak bileşenler (Button, Modal vb.)
 ┃ ┃ ┃ ┣ 📂 context                # Tema ve diğer React Context API dosyaları
 ┃ ┃ ┃ ┃ ┗ ⚛️ ThemeContext.tsx
 ┃ ┃ ┃ ┣ ⚛️ App.tsx                # Ana React bileşeni
 ┃ ┃ ┃ ┣ ⚛️ main.tsx               # Uygulama giriş dosyası
 ┃ ┃ ┃ ┣ 📄 theme.ts               # Material UI tema ayarları
 ┃ ┃ ┃ ┗ 📄 index.css              # Global stiller
 ┃ ┃ ┣ {} package.json             # Frontend bağımlılıkları ve scriptler
 ┃ ┃ ┣ {} tsconfig.json            # TypeScript yapılandırması
 ┃ ┃ ┣ {} tsconfig.app.json        # Uygulama (React tarafı) için TypeScript yapılandırması
 ┃ ┃ ┣ {} tsconfig.node.json       # Node.js (backend) tarafı için TypeScript yapılandırması
 ┃ ┃ ┣ 📄 eslint.config.js         # TypeScript kod kalitesini ve standartlarını kontrol eden bir linting aracı
 ┃ ┃ ┗ 📄 vite.config.ts           # Vite proje yapılandırması
 ┃ ┗ 📂 games (İleride oyunlar için ayrı paket)
 ┣ 📂 backend (Node.js Middleware)
 ┃ ┣ 📂 node_modules               # Backend bağımlılıkları
 ┃ ┣ 📂 middlewares                # Middleware dosyaları
 ┃ ┃ ┣ 📄 logger.js                # API isteklerini loglayan middleware
 ┃ ┃ ┣ 📄 auth.js                  # Kimlik doğrulama middleware'i
 ┃ ┃ ┗ 📄 errorHandler.js          # Hata yönetimi middleware'i
 ┃ ┣ 📂 routes                     # API endpoint tanımları (login, games vb.)
 ┃ ┣ 📂 controllers                # API iş mantığı (business logic)
 ┃ ┣ 📄 server.js                  # Node.js sunucu dosyası
 ┃ ┣ {} package.json               # Backend bağımlılıkları ve scriptler
 ┃ ┗ ⚙️ .env                       # Ortam değişkenleri (PORT, SESSION_SECRET vb.)
 ┣ 📂 shared (Ortak Bileşenler ve Yardımcı Araçlar)
 ┃ ┣ 📂 components                 # Ortak React bileşenleri (Button, Modal vb.)
 ┃ ┣ 📂 utils                      # Yardımcı fonksiyonlar (formatDate, apiClient vb.)
 ┃ ┣ 📂 hooks                      # Özel React hook'ları (useAuth, useFetch vb.)
 ┃ ┗ ℹ️ README.md                  # Shared klasörü hakkında açıklamalar
 ┣ 📄 .gitignore                   # Gereksiz dosyaları git'e dahil etmemek için
 ┣ {} lerna.json                   # Lerna monorepo ayarları
 ┣ {} package.json                 # Ana proje bağımlılıkları ve scriptler
 ┣ {} package-lock.json            # Bağımlılıkların kilit dosyası
 ┗ ℹ️ README.md                    # Proje genel açıklama ve kurulum talimatları