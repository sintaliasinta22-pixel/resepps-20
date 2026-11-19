const recipes = [
  {
    title: "Beef Stroganoff Klasik",
    category: "Hidangan Utama",
    time: "30 Menit • 3 Porsi",
    image: "../images/beef.jpg",
    ingredients: [
      "350 gr daging sapi has dalam, iris tipis memanjang",
      "150 gr jamur kancing, iris tipis",
      "1 buah bawang bombay, cincang halus",
      "2 sdm mentega tawar",
      "150 ml kaldu sapi hangat",
      "3 sdm krim asam (sour cream) atau cooking cream",
      "1 sdt garam dan lada hitam tumbuk"
    ],
    steps: [
      "Panaskan mentega di wajan lebar, tumis irisan daging sapi dengan api besar selama 2 menit hingga berubah warna. Angkat dan sisihkan.",
      "Di wajan yang sama, tumis bawang bombay dan jamur hingga layu dan kecokelatan.",
      "Tuangkan kaldu sapi, aduk perlahan sambil mengikis sisa bumbu di dasar wajan.",
      "Kecilkan api, masukkan kembali daging sapi beserta krim. Aduk rata selama 3 menit hingga saus mengental.",
      "Bumbui dengan garam dan lada hitam sebelum disajikan bersama kentang tumbuk atau nasi hangat."
    ],
    note: "Jangan memasak daging terlalu lama agar teksturnya tetap empuk dan juicy."
  },
  {
    title: "Nasi Goreng Kampung Rempah",
    category: "Sarapan & Makan Malam",
    time: "15 Menit • 2 Porsi",
    image:"../images/nasi goreng.jpg",
    ingredients: [
      "2 piring nasi putih dingin (sisa semalam)",
      "2 butir telur ayam",
      "4 siung bawang merah, iris tipis",
      "2 siung bawang putih, cincang",
      "1/2 sdt terasi bakar (opsional)",
      "2 sdm kecap manis",
      "Garam, kaldu jamur, dan irisan daun bawang"
    ],
    steps: [
      "Panaskan minyak secukupnya, buat telur orak-arik lalu sisihkan di tepi wajan.",
      "Tumis bawang merah, bawang putih, dan terasi hingga harum matang.",
      "Masukkan nasi putih dingin, tekan-tekan agar tidak menggumpal.",
      "Tuangkan kecap manis, garam, dan kaldu jamur. Besarkan api dan aduk cepat selama 3 menit.",
      "Taburi daun bawang iris, aduk sebentar, lalu angkat."
    ],
    note: "Gunakan nasi yang sudah dingin dari kulkas agar hasil nasi goreng bertekstur pera dan tidak lembek."
  },
  {
    title: "Panna Cotta Saus Berry",
    category: "Hidangan Penutup",
    time: "20 Menit (+2 Jam Dingin)",
    image: "../images/berry.jpg",
    ingredients: [
      "250 ml whipping cream cair",
      "100 ml susu cair full cream",
      "3 sdm gula pasir",
      "1 sdt ekstrak vanila",
      "1,5 sdt bubuk gelatin (larutkan dengan 2 sdm air hangat)",
      "Selai stroberi atau buah berry segar untuk topping"
    ],
    steps: [
      "Campurkan whipping cream, susu cair, dan gula pasir di dalam panci kecil.",
      "Masak dengan api kecil sambil terus diaduk hingga gula larut (jangan sampai mendidih).",
      "Matikan api, masukkan ekstrak vanila dan larutan gelatin, lalu aduk hingga rata.",
      "Tuang ke dalam gelas saji, dinginkan di dalam kulkas minimal 2 jam hingga set.",
      "Sajikan dingin dengan siraman saus berry di atasnya."
    ],
    note: "Pastikan susu tidak sampai mendidih agar tekstur panna cotta tetap lembut dan tidak pecah."
  },
{
title:"soto ayam bening",
category: "hidangan utama",
time: "45 menit . 4 porsi",
image: "../images/soto bening.jpg",
ingredients: [
    "500 gram daging ayam",
    "2 liter air",
    "2 batang serai, memarkan",
    "3 lembar daun jeruk",
    "garam,gula,dan kaldu bubuk secukupnya"
],
steps:[
    "rebus ayam bersama serai dan daun jeruk hingga empuk dan keluar kaldunya.",
    "angkat ayam,suwir suwir dagingnya,lalu sisihkan.",
    "bumbui kuah kaldu dengan garam,gula,dan kaldu bubuk,masak hingga mendidih.",
    "sajikan kuah panas bersama suwiran ayam,soun, dan taburan bawang goreng."
],
note: "tambahkan perasan jeruk nipis sambal rawit ssat disajikan agar lebih segar."
},
{
    title:"Rendang Daging Sapi",
    category:"hidangan utama",
    time:"2 jam .6 porsi",
    image:"../images/rendang.jpg",
    ingredients:[
        "500 gr daging sapi has dalam,potong kotak sedang",
        "500 ml santan kental dari 1 butir kelapa",
        "2 batang serai,memarkan",
        "4 lembar daun jeruk dan 2 lembar daun salam",
        "1 lembar daun kunyit, ikat simpul",
        "bumbu halus: 8 bawang merah, 4 bawa garam dan gula merah secukpnya"

    ], 
steps: [
      "Tumis bumbu halus bersama serai, daun jeruk, daun salam, dan daun kunyit hingga harum dan matang.",
      "Masukkan potongan daging sapi, aduk hingga daging berubah warna dan kaku.",
      "Tuangkan santan kental, bumbui dengan garam dan sedikit gula merah.",
      "Masak dengan api kecil sambil sesekali diaduk agar santan tidak pecah hingga kuah menyusut.",
      "Terus aduk perlahan hingga bumbu mengering, berminyak, dan berwarna cokelat gelap."
    ],
    note: "Gunakan api paling kecil saat santan mulai mengental agar bumbu meresap sempurna tanpa gosong di dasar wajan."
  },
  {
    title: "Sayur Asem Jakarta",
    category: "Menu Rumahan",
    time: "30 Menit • 4 Porsi",
    image: "../images/SAYUR ASEM.jpg",
    ingredients: [
      "100 gr melinjo dan daun melinjo muda",
      "1 buah jagung manis, potong 4 bagian",
      "100 gr kacang panjang, potong 3 cm",
      "100 gr labu siam, potong dadu",
      "3 sdm air asam jawa",
      "Bumbu halus: 5 bawang merah, 3 bawang putih, 3 cabai merah, 2 butir kemiri, 1/2 sdt terasi bakar",
      "1,5 liter air, lengkuas memar, daun salam, garam, dan gula merah"
    ],
    steps: [
      "Didihkan air di panci, masukkan jagung manis dan buah melinjo hingga setengah empuk.",
      "Masukkan bumbu halus, lengkuas, dan daun salam, masak hingga harum.",
      "Tambahkan labu siam, kacang panjang, dan daun melinjo.",
      "Tuangkan air asam jawa, garam, dan gula merah sesuai selera.",
      "Masak sebentar hingga semua sayuran matang namun tetap renyah, lalu angkat."
    ],
    note: "Sajikan sayur asem bersama ikan asin goreng, tempe goreng, dan sambal terasi untuk rasa yang pas."
  },
  {
    title: "Martabak Telur Mini",
    category: "Cemilan",
    time: "25 Menit • 8 Buah",
    image: "../images/MARTABAK.jpg",
    ingredients: [
      "8 lembar kulit lumpia siap pakai",
      "3 butir telur bebek atau telur ayam",
      "3 batang daun bawang, iris halus",
      "150 gr daging ayam cincang atau kornet",
      "2 siung bawang putih, cincang halus",
      "1/2 sdt bubuk kari (opsional), garam, dan merica"
    ],
    steps: [
      "Tumis bawang putih dan daging ayam cincang hingga matang, angkat dan dinginkan.",
      "Kocok lepas telur di mangkuk, campurkan irisan daun bawang, ayam tumis, garam, dan merica.",
      "Siapkan selembar kulit lumpia, beri 2 sdm adonan isian di tengahnya, lalu lipat membentuk amplop kotak.",
      "Goreng dalam minyak panas dengan api sedang hingga kedua sisinya berwarna kuning keemasan dan renyah.",
      "Angkat, tiriskan minyaknya, dan sajikan hangat bersama cabai rawit."
    ],
    note: "Pastikan minyak sudah panas saat martabak dimasukkan agar kulit lumpia langsung renyah dan tidak menyerap banyak minyak."
  },
  {
    title: "Es Pisang Ijo",
    category: "Hidangan Penutup",
    time: "45 Menit • 4 Porsi",
    image: "../images/PISANG IJO.jpg",
    ingredients: [
      "4 buah pisang raja matang, kukus lalu kupas",
      "Bahan kulit: 100 gr tepung beras, 50 gr tepung terigu, 250 ml santan, 50 ml air daun pandan, 2 sdm gula pasir",
      "Bahan bubur sumsum: 50 gr tepung beras, 500 ml santan, 1/2 sdt garam, 1 lembar daun pandan",
      "Pelengkap: Es batu serut, sirup cocopandan merah, dan susu kental manis"
    ],
    steps: [
      "Campur semua bahan kulit hingga licin, lalu masak dengan api kecil sambil terus diaduk hingga kalis dan tidak lengket.",
      "Pipihkan adonan kulit hijau di atas plastik, letakkan pisang di tengahnya, lalu gulung hingga pisang tertutup rapat.",
      "Kukus gulungan pisang selama 15 menit hingga matang, angkat dan dinginkan, lalu potong-potong.",
      "Masak santan, tepung beras, garam, dan daun pandan untuk bubur sumsum hingga mengental meletup-letup.",
      "Tata bubur sumsum, potongan pisang ijo, es serut, sirup merah, dan susu kental manis di dalam mangkuk saji."
    ],
    note: "Olesi permukaan plastik dengan sedikit minyak sayur saat memipihkan adonan hijau agar tidak lengket di tangan."
  },
  {
    title: "Perkedel Kentang",
    category: "Lauk Pendamping",
    time: "35 Menit • 10 Buah",
    image: "../images/PERKEDEL.jpg",
    ingredients: [
      "500 gr kentang kupas, potong-potong",
      "2 batang seledri, iris halus",
      "2 sdm bawang merah goreng, remas halus",
      "1 butir telur ayam (pisahkan kuning dan putihnya)",
      "Bumbu halus: 3 siung bawang putih goreng, 1/2 sdt merica bubuk, 1/4 sdt pala bubuk, garam dan kaldu jamur secukupnya"
    ],
    steps: [
      "Goreng kentang hingga empuk dan matang, angkat lalu haluskan selagi masih panas.",
      "Campurkan kentang halus, seledri, bawang goreng, bumbu halus, dan kuning telur hingga rata.",
      "Ambil adonan secukupnya, bentuk bulat pipih sesuai selera hingga adonan habis.",
      "Celupkan bulatan perkedel ke dalam putih telur yang sudah dikocok lepas.",
      "Goreng dalam minyak panas dengan api sedang hingga berwarna kuning kecokelatan, lalu angkat dan tiriskan."
    ],
    note: "Goreng kentang terlebih dahulu daripada merebusnya agar adonan perkedel tidak berair dan tidak hancur saat digoreng."
  },
  {
    title: "Pepes Ikan Mas Kemangi",
    category: "Hidangan Utama",
    time: "50 Menit • 2 Porsi",
    image: "../images/pepeas.jpg",
    ingredients: [
      "2 ekor ikan mas segar (bersihkan sisik dan insangnya, lumuri air jeruk nipis dan garam)",
      "2 ikat daun kemangi, petik daunnya",
      "2 batang serai, memarkan dan iris serong",
      "4 lembar daun salam dan 4 lembar daun jeruk",
      "6 buah cabai rawit merah utuh dan 2 buah tomat merah, potong-potong",
      "Bumbu halus: 8 bawang merah, 4 bawang putih, 4 butir kemiri sangrai, 3 cm kunyit bakar, 2 cm jahe, garam dan gula secukupnya",
      "Daun pisang dan tusuk gigi secukupnya untuk membungkus"
    ],
    steps: [
      "Lumuri seluruh permukaan dan bagian dalam perut ikan mas dengan bumbu halus hingga merata, diamkan selama 15 menit.",
      "Siapkan dua lembar daun pisang yang sudah dilayukan di atas api agar tidak mudah sobek.",
      "Tata daun salam, irisan serai, dan sebagian daun kemangi di atas daun pisang, lalu letakkan ikan mas di atasnya.",
      "Taburi sisa daun kemangi, potongan tomat, cabai rawit utuh, dan sisa bumbu di atas ikan, lalu gulung dan semat ujungnya dengan tusuk gigi.",
      "Kukus pepes selama 30 menit hingga matang, kemudian bakar sebentar di atas teflon atau bara api hingga daun pisang harum."
    ],
    note: "Membakar pepes sebentar setelah dikukus akan mengurangi kadar air di dalamnya dan mengeluarkan aroma daun pisang yang sedap."
  },
  {
    title: "Sate Lilit Ayam Khas Bali",
    category: "Hidangan Utama",
    time: "45 Menit • 4 Porsi",
    image: "../images/SATE LILIT BALI.jpg",
    ingredients: [
      "500 gram daging ayam giling bagian paha",
      "100 gram kelapa parut setengah tua, sangrai sebentar",
      "15 batang serai ukuran sedang untuk tusukan sate",
      "3 lembar daun jeruk, buang tulang daunnya dan iris sangat tipis",
      "2 sdm santan kental",
      "Bumbu halus (Base Genep): 8 bawang merah, 4 bawang putih, 3 butir kemiri sangrai, 3 cm kunyit bakar, 2 cm kencur, 2 cm jahe, 2 cm lengkuas, 3 cabai merah keriting, 1/2 sdt terasi bakar, garam dan gula merah secukupnya"
    ],
    steps: [
      "Tumis bumbu halus hingga harum dan matang, lalu angkat dan biarkan hingga suhu ruang.",
      "Campurkan daging ayam giling, kelapa parut, irisan daun jeruk, santan kental, dan bumbu tumis dalam wadah, aduk hingga adonan kalis.",
      "Ambil sekitar satu sendok makan adonan, lalu lilitkan dan kepalkan pada bagian pangkal batang serai hingga menempel padat.",
      "Panaskan panggangan atau teflon datar yang sudah diolesi sedikit minyak.",
      "Bakar sate lilit dengan api sedang sambil sesekali dibalik hingga matang merata dan berwarna kecokelatan."
    ],
    note: "Gunakan daging ayam bagian paha yang sedikit berlemak agar tekstur sate lilit tetap lembut dan tidak kering saat dibakar."
  },
  {
    title: "Nasi Goreng Kampung Terasi",
    category: "Hidangan Utama",
    time: "20 Menit • 2 Porsi",
    image: "../images/NASI GORENG TERASI.jpg",
    ingredients: [
      "2 piring nasi putih dingin (nasi sisa semalam lebih baik)",
      "2 butir telur ayam, kocok lepas",
      "100 gram daging ayam suwir atau bakso iris",
      "2 batang daun bawang, iris tipis",
      "1 sdm kecap manis dan 1 sdt saus tiram",
      "Bumbu halus: 5 bawang merah, 3 bawang putih, 4 cabai rawit merah, 2 cabai merah keriting, 1 sdt terasi bakar, garam dan kaldu jamur secukupnya",
      "Pelengkap: kerupuk udang, irisan timun, tomat, dan bawang goreng"
    ],
    steps: [
      "Panaskan 2 sendok makan minyak di wajan, masukkan telur kocok lalu buat orak-arik dan sisihkan ke pinggir wajan.",
      "Masukkan bumbu halus ke tengah wajan, tumis hingga harum dan benar-benar matang.",
      "Tambahkan suwiran ayam dan daun bawang, aduk rata bersama telur orak-arik.",
      "Masukkan nasi putih dingin, kecap manis, dan saus tiram, lalu besarkan api kompor.",
      "Aduk cepat dan terus-menerus selama 3 hingga 5 menit hingga nasi berasap, bumbu tercampur rata, dan butiran nasi terpisah."
    ],
    note: "Memasak nasi goreng dengan api besar di tahap akhir akan memberikan aroma smokey yang khas seperti masakan pedagang kaki lima."
  },
  {
    title: "Es Cendol Dawet Gula Aren",
    category: "Minuman",
    time: "30 Menit • 4 Porsi",
    image: "../images/CENDOL.jpg",
    ingredients: [
      "250 gram cendol hijau siap pakai, tiriskan airnya",
      "500 ml santan dari 1/2 butir kelapa, rebus dengan 1 lembar daun pandan dan 1/4 sdt garam lalu dinginkan",
      "200 gram gula aren merah, sisir halus",
      "100 ml air matang untuk melarutkan gula",
      "1 lembar daun pandan, ikat simpul",
      "3 mata buah nangka matang, potong dadu kecil",
      "Es batu serut atau es batu kristal secukupnya"
    ],
    steps: [
      "Rebus gula aren sisir bersama 100 ml air dan daun pandan di atas api kecil hingga gula larut dan mengental, lalu saring dan dinginkan.",
      "Siapkan gelas saji, tuangkan 3 hingga 4 sendok makan sirup gula aren di dasar gelas.",
      "Masukkan cendol hijau dan potongan buah nangka secukupnya ke dalam gelas.",
      "Tambahkan es batu hingga gelas hampir penuh.",
      "Siram dengan kuah santan gurih di atasnya dan sajikan segera."
    ],
    note: "Pastikan kuah santan sudah benar-benar dingin sebelum dituang agar es batu tidak cepat mencair dan rasa santan tetap segar."
  },
  {
    title: "Ayam Betutu Khas Gilimanuk",
    category: "Hidangan Utama",
    time: "120 Menit • 4 Porsi",
    image: "../images/AYAM BEUTUTUT.jpg",
    ingredients: [
      "1 ekor ayam kampung utuh, bersihkan dan tusuk-tusuk dengan garpu",
      "2 batang serai, memarkan dan ikat simpul",
      "4 lembar daun jeruk dan 2 lembar daun salam",
      "3 sdm minyak kelapa untuk menumis",
      "500 ml air atau kaldu ayam",
      "Bumbu rajang kasar (Base Genep): 10 bawang merah, 6 bawang putih, 6 cabai rawit merah, 4 cabai merah besar, 3 cm kunyit, 3 cm kencur, 3 cm jahe, 3 cm lengkuas, 3 butir kemiri, 1 sdt ketumbar sangrai, 1/2 sdt terasi bakar, garam dan gula merah secukupnya"
    ],
    steps: [
      "Tumis bumbu rajang kasar bersama serai, daun jeruk, dan daun salam dengan minyak kelapa hingga harum dan matang.",
      "Lumuri seluruh permukaan luar dan dalam rongga perut ayam dengan sebagian besar bumbu tumis hingga merata, diamkan selama 30 menit.",
      "Masukkan sisa bumbu tumis beserta daun-daunan ke dalam rongga perut ayam.",
      "Rebus ayam dalam panci tertutup dengan 500 ml air menggunakan api kecil selama 60 hingga 90 menit hingga daging sangat empuk dan kuah menyusut.",
      "Angkat ayam dan sajikan hangat bersama sisa kuah bumbu serta plecing kangkung."
    ],
    note: "Bumbu betutu otentik menggunakan teknik rajang kasar atau ulek kasar agar tekstur rempahnya terasa saat disantap."
  },
  {
    title: "Gado-Gado Siram Surabaya",
    category: "Sayuran",
    time: "40 Menit • 4 Porsi",
    image: "../images/GADO GADO.jpg",
    ingredients: [
      "1 ikat kangkung, siangi dan rebus sebentar",
      "100 gram tauge, seduh air panas",
      "100 gram kol, iris kasar dan rebus",
      "1 buah kentang rebus, potong dadu",
      "2 butir telur rebus, belah dua",
      "2 buah tahu putih dan 1 papan tempe, goreng lalu potong kotak",
      "Bahan saus kacang: 200 gram kacang tanah goreng, 4 siung bawang putih goreng, 3 cabai merah keriting rebus, 50 gram gula merah sisir, 2 sdm air asam jawa, 250 ml santan encer, garam secukupnya",
      "Pelengkap: lontong, kerupuk udang, emping melinjo, dan bawang goreng"
    ],
    steps: [
      "Haluskan kacang tanah goreng, bawang putih goreng, dan cabai merah hingga lembut.",
      "Masak kacang halus bersama santan encer, gula merah, air asam jawa, dan garam di atas api kecil sambil terus diaduk hingga mengental dan berminyak.",
      "Tata potongan lontong, sayuran rebus, tahu, tempe, dan kentang di atas piring saji.",
      "Siram saus kacang hangat secara merata di atas susunan sayuran.",
      "Tambahkan potongan telur rebus, taburan bawang goreng, kerupuk udang, dan emping sebelum disajikan."
    ],
    note: "Memasak saus kacang dengan santan membuat teksturnya lebih lembut dan tidak mudah mengeras saat dingin."
  },
  {
    title: "Cumi Saus Padang Pedas Manis",
    category: "Hidangan Utama",
    time: "25 Menit • 3 Porsi",
    image: "../images/CUMII.jpg",
    ingredients: [
      "500 gram cumi segar, bersihkan tinta dan kulitnya lalu potong cincin",
      "1 buah jeruk nipis untuk melumuri cumi",
      "1/2 buah bawang bombay, iris memanjang",
      "1 batang daun bawang, iris serong",
      "2 sdm saus sambal, 2 sdm saus tomat, dan 1 sdm saus tiram",
      "100 ml air dan 1 sdt tepung maizena larutkan dengan sedikit air",
      "Bumbu halus: 6 bawang merah, 4 bawang putih, 5 cabai merah keriting, 4 cabai rawit merah, 2 cm jahe, garam dan gula pasir secukupnya"
    ],
    steps: [
      "Lumuri cumi yang sudah dipotong dengan air jeruk nipis selama 10 menit, lalu bilas bersih dan tiriskan.",
      "Tumis bumbu halus dan irisan bawang bombay hingga harum dan matang.",
      "Masukkan saus sambal, saus tomat, saus tiram, gula, garam, dan air, aduk hingga mendidih.",
      "Masukkan potongan cumi, masak dengan api besar selama 2 hingga 3 menit saja agar cumi tidak alot.",
      "Tuangkan larutan tepung maizena dan irisan daun bawang, aduk cepat hingga saus mengental lalu segera angkat."
    ],
    note: "Jangan memasak cumi terlalu lama (cukup 2-3 menit) karena daging cumi akan berubah keras dan kenyal seperti karet."
  },
  {
    title: "Tumis Kangkung Terasi Belacan",
    category: "Sayuran",
    time: "15 Menit • 3 Porsi",
    image: "../images/KANGKUNG.jpg",
    ingredients: [
      "2 ikat kangkung segar, petik daun dan batang mudanya lalu cuci bersih",
      "5 butir bawang merah, iris tipis",
      "3 siung bawang putih, cincang kasar",
      "5 buah cabai rawit merah dan 2 buah cabai merah keriting, iris serong",
      "1 sdt terasi udang bakar, haluskan",
      "1 sdm saus tiram dan 1/2 sdt gula pasir",
      "50 ml air matang dan 2 sdm minyak goreng"
    ],
    steps: [
      "Panaskan minyak goreng di wajan dengan api besar hingga benar-benar panas.",
      "Tumis bawang merah, bawang putih, cabai iris, dan terasi bakar hingga harum.",
      "Masukkan kangkung sekaligus ke dalam wajan, aduk cepat selama 1 menit hingga mulai layu.",
      "Tambahkan saus tiram, gula pasir, dan sedikit air, lalu aduk rata selama 30 detik.",
      "Segera angkat dan pindahkan ke piring saji agar warna kangkung tetap hijau cerah dan renyah."
    ],
    note: "Memasak sayuran hijau dengan api besar dalam waktu singkat mencegah daun kangkung berubah warna menjadi kehitaman."
  },
  {
    title: "Perkedel Kentang Daging Cincang",
    category: "Camilan",
    time: "40 Menit • 5 Porsi",
    image: "../images/DAGING PERKEDEL.jpg",
    ingredients: [
      "500 gram kentang kupas, potong-potong",
      "100 gram daging sapi cincang, tumis sebentar hingga matang",
      "2 batang seledri, iris halus",
      "2 sdm bawang merah goreng, remas kasar",
      "1 butir kuning telur untuk campuran adonan",
      "1 butir putih telur kocok lepas untuk bahan pencelup",
      "Bumbu halus: 3 siung bawang putih goreng, 1/2 sdt merica bubuk, 1/4 sdt pala bubuk, garam dan kaldu bubuk secukupnya"
    ],
    steps: [
      "Goreng potongan kentang dalam minyak panas hingga matang dan empuk, lalu tiriskan.",
      "Haluskan kentang selagi masih panas menggunakan ulekan atau garpu hingga lembut.",
      "Campurkan kentang halus dengan bumbu halus, daging cincang tumis, seledri, bawang goreng, dan kuning telur hingga rata.",
      "Ambil adonan secukupnya, bentuk bulat pipih dengan permukaan yang padat agar tidak pecah saat digoreng.",
      "Celupkan perkedel ke dalam putih telur kocok, lalu goreng dalam minyak panas dengan api sedang hingga kuning kecokelatan."
    ],
    note: "Menggoreng kentang terlebih dahulu (bukan direbus) membuat kadar airnya rendah sehingga perkedel tidak mudah hancur saat digoreng."
  },
  {
    title: "Bakwan Jagung Manis Renyah",
    category: "Camilan",
    time: "25 Menit • 5 Porsi",
    image: "../images/BAKWAN JAGUNG.jpg",
    ingredients: [
      "2 bonggol jagung manis, sisir bijinya",
      "100 gram tepung terigu protein rendah",
      "2 sdm tepung beras agar tekstur lebih renyah",
      "1 butir telur ayam",
      "2 batang daun bawang dan 1 batang seledri, iris tipis",
      "100 ml air matang",
      "Bumbu halus: 4 bawang merah, 2 bawang putih, 1/2 sdt ketumbar, 1/2 sdt merica, garam dan kaldu bubuk secukupnya"
    ],
    steps: [
      "Ulek kasar sebagian jagung manis agar sari manisnya keluar, lalu campurkan dengan sisa jagung pipil utuh.",
      "Masukkan tepung terigu, tepung beras, telur, daun bawang, seledri, dan bumbu halus ke dalam wadah berisi jagung.",
      "Tuangkan air sedikit demi sedikit sambil diaduk hingga adonan tercampur rata dan cukup kental.",
      "Panaskan minyak goreng dalam jumlah cukup banyak dengan api sedang.",
      "Sendokkan adonan ke pinggir wajan secara melebar agar tipis dan garing, lalu goreng hingga keemasan."
    ],
    note: "Menuangkan adonan di pinggiran wajan yang terendam minyak tipis akan menghasilkan pinggiran bakwan yang krispi dan keriting."
  },
  {
    title: "Klepon Ketan Gula Merah",
    category: "Camilan",
    time: "45 Menit • 4 Porsi",
    image: "../images/KLEPON.jpg",
    ingredients: [
      "250 gram tepung ketan putih",
      "50 gram tepung beras agar tekstur tidak terlalu lembek",
      "200 ml air hangat yang sudah dicampur pasta pandan atau jus daun pandan suji",
      "150 gram gula merah, sisir halus untuk isian",
      "1/2 butir kelapa parut setengah tua, kukus selama 15 menit dengan 1/4 sdt garam dan 1 lembar daun pandan"
    ],
    steps: [
      "Campurkan tepung ketan dan tepung beras, lalu tuangkan air pandan hangat sedikit demi sedikit sambil diuleni hingga adonan kalis dan bisa dipulung.",
      "Ambil sejumput adonan sebesar kelereng besar, pipihkan, lalu isi bagian tengahnya dengan gula merah sisir.",
      "Tutup rapat adonan dan bulatkan kembali dengan lembut agar gula merah tidak bocor saat direbus.",
      "Didihkan air dalam panci, masukkan bola-bola klepon dan masak hingga mengapung ke permukaan.",
      "Angkat klepon yang sudah mengapung, tiriskan sebentar, lalu gulingkan ke atas kelapa parut kukus hingga terbalut rata."
    ],
    note: "Pastikan gula merah disisir sangat halus agar mudah meleleh lumer di dalam saat klepon direbus."
  },
 


   













];

let filteredRecipes = [...recipes];
let currentIndex = 0;

// Elemen DOM
const bookSpread = document.getElementById("bookSpread");
const tocSelect = document.getElementById("tocSelect");
const searchInput = document.getElementById("searchInput");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Isi Dropdown Daftar Isi
function populateTOC() {
  tocSelect.innerHTML = "";
  filteredRecipes.forEach((recipe, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `Bab ${index + 1}: ${recipe.title}`;
    tocSelect.appendChild(option);
  });
}

// Render Halaman Buku
function renderBookPage(index) {
  if (filteredRecipes.length === 0) {
    document.getElementById("recipeTitle").textContent = "Resep Tidak Ditemukan";
    document.getElementById("recipeIngredients").innerHTML = "<li>Coba kata kunci lain di kolom pencarian.</li>";
    document.getElementById("recipeSteps").innerHTML = "";
    document.getElementById("pageIndicator").textContent = "0 dari 0";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  const recipe = filteredRecipes[index];
  
  // Efek transisi halus saat ganti halaman
  bookSpread.style.opacity = 0.4;
  
  setTimeout(() => {
    document.getElementById("recipeCategory").textContent = recipe.category;
    document.getElementById("recipeTitle").textContent = recipe.title;
    document.getElementById("recipeTime").textContent = `⏱️ ${recipe.time}`;
    document.getElementById("recipeImg").src = recipe.image;
    document.getElementById("recipeNote").textContent = recipe.note;

    // Nomor Halaman Kiri & Kanan
    document.getElementById("leftPageNum").textContent = `Hal. ${index * 2 + 1}`;
    document.getElementById("rightPageNum").textContent = `Hal. ${index * 2 + 2}`;

    // Daftar Bahan
    const ingList = document.getElementById("recipeIngredients");
    ingList.innerHTML = recipe.ingredients.map(item => `<li>${item}</li>`).join("");

    // Cara Membuat
    const stepList = document.getElementById("recipeSteps");
    stepList.innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join("");

    // Update Indikator & Tombol
    document.getElementById("pageIndicator").textContent = `Resep ${index + 1} dari ${filteredRecipes.length}`;
    tocSelect.value = index;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === filteredRecipes.length - 1;

    bookSpread.style.opacity = 1;
  }, 150);
}

// Navigasi Tombol
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderBookPage(currentIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < filteredRecipes.length - 1) {
    currentIndex++;
    renderBookPage(currentIndex);
  }
});

// Pilih dari Daftar Isi
tocSelect.addEventListener("change", (e) => {
  currentIndex = parseInt(e.target.value);
  renderBookPage(currentIndex);
});

// Pencarian Resep
searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  filteredRecipes = recipes.filter(r => 
    r.title.toLowerCase().includes(keyword) || 
    r.category.toLowerCase().includes(keyword)
  );
  currentIndex = 0;
  populateTOC();
  renderBookPage(currentIndex);
});

// Inisialisasi Awal
populateTOC();
renderBookPage(currentIndex);



