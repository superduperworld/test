alert('version 1.5 (x-haaaaaaaKT)')

const API_FILTERS = [
  // Gamla 1
  'filter=%7B"key"%3A"price"%2C"range"%3A%7B"start"%3A"20000"%2C"end"%3A"100000"%7D%7D&filter=%7B"key"%3A"sellerType"%2C"values"%3A%5B"Privat"%5D%7D&filter=%7B"key"%3A"milage"%2C"range"%3A%7B"start"%3A""%2C"end"%3A"34999"%7D%7D&filter=%7B"key"%3A"chassi"%2C"values"%3A%5B"Kombi"%2C"Halvkombi"%2C"Sedan"%2C"SUV"%2C"Familjebuss"%2C"Coupé"%5D%7D',

  // Gamla 2
  'filter=%7B"key"%3A"chassi"%2C"values"%3A%5B"SUV"%2C"Familjebuss"%5D%7D&filter=%7B"key"%3A"price"%2C"range"%3A%7B"start"%3A"19999"%2C"end"%3A"120000"%7D%7D&filter=%7B"key"%3A"sellerType"%2C"values"%3A%5B"Privat"%5D%7D',

  // Gamla 3
  'filter=%7B"key"%3A"price"%2C"range"%3A%7B"start"%3A"19999"%2C"end"%3A"120000"%7D%7D&filter=%7B"key"%3A"sellerType"%2C"values"%3A%5B"Privat"%5D%7D&filter=%7B"key"%3A"make"%2C"values"%3A%5B"Audi"%2C"BMW"%2C"Chevrolet"%2C"Citroën"%2C"Fiat"%2C"Ford"%2C"Honda"%2C"Hyundai"%2C"Kia"%2C"Land+Rover"%2C"Lexus"%2C"Mercedes-Benz"%2C"Mitsubishi"%2C"Nissan"%2C"Opel"%2C"Peugeot"%2C"Renault"%2C"Skoda"%2C"Suzuki"%2C"Toyota"%2C"Volkswagen"%2C"Volvo"%2C"Övriga+märken"%5D%7D&filter=%7B"key"%3A"models"%2C"values"%3A%5B"A1"%2C"A2"%2C"A3"%2C"A4"%2C"A5"%2C"A6"%2C"A7"%2C"A8"%2C"Q2"%2C"Q3"%2C"Q5"%2C"Q7"%2C"Övriga+Audi"%2C"1-serien"%2C"116"%2C"118"%2C"118i"%2C"120"%2C"123"%2C"3-serien"%2C"316"%2C"318"%2C"320"%2C"323"%2C"325"%2C"328"%2C"330"%2C"335"%2C"335i"%2C"5-serien"%2C"520"%2C"523"%2C"525"%2C"528"%2C"530"%2C"535"%2C"540"%2C"545"%2C"550"%2C"X-serien"%2C"X1"%2C"X3"%2C"X5"%2C"Avalanche"%2C"Captiva"%2C"Övriga+Chevrolet"%2C"Berlingo"%2C"C-Crosser"%2C"C1"%2C"C2"%2C"C3"%2C"C4"%2C"C5"%2C"C6"%2C"C8"%2C"DS3"%2C"DS4"%2C"DS5"%2C"500"%2C"500L"%2C"500X"%2C"500c"%2C"500e"%2C"Freemont"%2C"Övriga+Fiat"%2C"B-Max"%2C"C-Max"%2C"Focus"%2C"Galaxy"%2C"Kuga"%2C"S-Max"%2C"Accent"%2C"H-1"%2C"Tucson"%2C"i10"%2C"i20"%2C"i30"%2C"i40"%2C"ix20"%2C"ix35"%2C"Övriga+Hyundai"%2C"Defender"%2C"ASX"%2C"L200"%2C"Outlander"%2C"Juke"%2C"King+Cab%2FNavara"%2C"Leaf"%2C"Micra"%2C"Note"%2C"Pathfinder"%2C"Patrol"%2C"Primastar"%2C"Qashqai"%2C"Qashqai%2B2"%2C"Terrano"%2C"X-Trail"%2C"Övriga+Nissan"%2C"Agila"%2C"Insignia"%2C"Meriva"%2C"Mokka"%2C"Övriga+Peugeot"%2C"Citigo"%2C"Fabia"%2C"Kamiq"%2C"Octavia"%2C"Praktik"%2C"Rapid"%2C"Roomster"%2C"Superb"%2C"Yeti"%2C"Övriga+Skoda"%2C"Grand+Vitara"%2C"Jimny"%2C"SX4"%2C"Vitara"%2C"Övriga+Suzuki"%5D%7D',

  // Nya 1
  'filter=%7B%22key%22%3A%22price%22%2C%22range%22%3A%7B%22start%22%3A%2220000%22%2C%22end%22%3A%22100000%22%7D%7D&filter=%7B%22key%22%3A%22sellerType%22%2C%22values%22%3A%5B%22Privat%22%5D%7D&filter=%7B%22key%22%3A%22milage%22%2C%22range%22%3A%7B%22start%22%3A%22%22%2C%22end%22%3A%2234999%22%7D%7D&filter=%7B%22key%22%3A%22chassi%22%2C%22values%22%3A%5B%22Kombi%22%2C%22Halvkombi%22%2C%22Sedan%22%2C%22SUV%22%2C%22Familjebuss%22%2C%22Coup%C3%A9%22%5D%7D&filter=%7B%22key%22%3A%22region%22%2C%22values%22%3A%5B%22Dalarna%22%2C%22Gotland%22%2C%22G%C3%A4vleborg%22%2C%22G%C3%B6teborg%22%2C%22J%C3%B6nk%C3%B6ping%22%2C%22Kalmar%22%2C%22Kronoberg%22%2C%22Skaraborg%22%2C%22Stockholm%22%2C%22S%C3%B6dermanland%22%2C%22Uppsala%22%2C%22V%C3%A4rmland%22%2C%22V%C3%A4stmanland%22%2C%22%C3%96rebro%22%2C%22%C3%96sterg%C3%B6tland%22%5D%7D',

  // Nya 2
  'filter=%7B%22key%22%3A%22chassi%22%2C%22values%22%3A%5B%22SUV%22%2C%22Familjebuss%22%5D%7D&filter=%7B%22key%22%3A%22price%22%2C%22range%22%3A%7B%22start%22%3A%2219999%22%2C%22end%22%3A%22120000%22%7D%7D&filter=%7B%22key%22%3A%22sellerType%22%2C%22values%22%3A%5B%22Privat%22%5D%7D&filter=%7B%22key%22%3A%22region%22%2C%22values%22%3A%5B%22Dalarna%22%2C%22Gotland%22%2C%22G%C3%A4vleborg%22%2C%22G%C3%B6teborg%22%2C%22J%C3%B6nk%C3%B6ping%22%2C%22Kalmar%22%2C%22Kronoberg%22%2C%22Skaraborg%22%2C%22Stockholm%22%2C%22S%C3%B6dermanland%22%2C%22Uppsala%22%2C%22V%C3%A4rmland%22%2C%22V%C3%A4stmanland%22%2C%22%C3%96rebro%22%2C%22%C3%96sterg%C3%B6tland%22%5D%7D',

  // Nya 3
  'filter=%7B%22key%22%3A%22price%22%2C%22range%22%3A%7B%22start%22%3A%2219999%22%2C%22end%22%3A%22120000%22%7D%7D&filter=%7B%22key%22%3A%22sellerType%22%2C%22values%22%3A%5B%22Privat%22%5D%7D&filter=%7B%22key%22%3A%22make%22%2C%22values%22%3A%5B%22Audi%22%2C%22BMW%22%2C%22Cadillac%22%2C%22Chevrolet%22%2C%22Chrysler%22%2C%22Citro%C3%ABn%22%2C%22Dacia%22%2C%22Fiat%22%2C%22Ford%22%2C%22Honda%22%2C%22Hyundai%22%2C%22Jeep%22%2C%22Kia%22%2C%22Lancia%22%2C%22Land+Rover%22%2C%22Lexus%22%2C%22Mazda%22%2C%22Mercedes-Benz%22%2C%22Mini%22%2C%22Mitsubishi%22%2C%22Nissan%22%2C%22Opel%22%2C%22Peugeot%22%2C%22Renault%22%2C%22Saab%22%2C%22SEAT%22%2C%22Skoda%22%2C%22Smart%22%2C%22Ssang+Yong%22%2C%22Subaru%22%2C%22Suzuki%22%2C%22Toyota%22%2C%22Volkswagen%22%2C%22Volvo%22%2C%22%C3%96vriga+m%C3%A4rken%22%5D%7D&filter=%7B%22key%22%3A%22models%22%2C%22values%22%3A%5B%22A1%22%2C%22A2%22%2C%22A3%22%2C%22A4%22%2C%22A5%22%2C%22A6%22%2C%22Q3%22%2C%22Q5%22%2C%22Q7%22%2C%22S-modeller%22%2C%22S3%22%2C%22S4%22%2C%22S5%22%2C%22TT%22%2C%22%C3%96vriga+Audi%22%2C%221-serien%22%2C%22116%22%2C%22118%22%2C%22118i%22%2C%22120%22%2C%22123%22%2C%22130%22%2C%223-serien%22%2C%22316%22%2C%22318%22%2C%22320%22%2C%22323%22%2C%22325%22%2C%22328%22%2C%22330%22%2C%225-serien%22%2C%22518%22%2C%22520%22%2C%22523%22%2C%22525%22%2C%22528%22%2C%22530%22%2C%22535%22%2C%22540%22%2C%22545%22%2C%22X-serien%22%2C%22X1%22%2C%22X3%22%2C%22X5%22%2C%22i-serien%22%2C%22i3%22%2C%22%C3%96vriga+BMW%22%2C%22BLS%22%2C%22CTS%22%2C%22SRX%22%2C%22%C3%96vriga+Cadillac%22%2C%22Avalanche%22%2C%22Aveo%22%2C%22Captiva%22%2C%22Cruze%22%2C%22Kalos%22%2C%22Nubira%22%2C%22Orlando%22%2C%22Uplander%22%2C%22%C3%96vriga+Chevrolet%22%2C%22300-serien%22%2C%22Grand+Voyager%22%2C%22PT+Cruiser%22%2C%22Sebring%22%2C%22Stratus%22%2C%22Town+%26+Country%22%2C%22Voyager%22%2C%22Voyager-serien%22%2C%22%C3%96vriga+Chrysler%22%2C%22Berlingo%22%2C%22C-Crosser%22%2C%22C1%22%2C%22C2%22%2C%22C3%22%2C%22C4%22%2C%22C5%22%2C%22C8%22%2C%22DS3%22%2C%22DS5%22%2C%22Jumper%22%2C%22Jumpy%22%2C%22Nemo%22%2C%22Xsara%22%2C%22%C3%96vriga+Citro%C3%ABn%22%2C%22Dokker%22%2C%22Duster%22%2C%22Lodgy%22%2C%22Logan%22%2C%22Sandero%22%2C%22500%22%2C%22500L%22%2C%22500X%22%2C%22500c%22%2C%22Bravo%22%2C%22Fiorino%22%2C%22Freemont%22%2C%22Panda%22%2C%22Punto%22%2C%22Tipo%22%2C%22%C3%96vriga+Fiat%22%2C%22B-Max%22%2C%22C-Max%22%2C%22Fiesta%22%2C%22Focus%22%2C%22Fusion%22%2C%22Galaxy%22%2C%22Ka%22%2C%22Kuga%22%2C%22Maverick%22%2C%22Mondeo%22%2C%22Mustang%22%2C%22Ranger%22%2C%22S-Max%22%2C%22Tourneo%22%2C%22Transit%22%2C%22%C3%96vriga+Ford%22%2C%22Accord%22%2C%22CR-V%22%2C%22Civic%22%2C%22FR-V%22%2C%22Jazz%22%2C%22%C3%96vriga+Honda%22%2C%22Accent%22%2C%22Atos%22%2C%22Getz%22%2C%22H-1%22%2C%22Santa+Fe%22%2C%22Sonata%22%2C%22Trajet%22%2C%22Tucson%22%2C%22i10%22%2C%22i20%22%2C%22i30%22%2C%22i40%22%2C%22ix20%22%2C%22ix35%22%2C%22Cherokee%22%2C%22Compass%22%2C%22Grand+Cherokee%22%2C%22Wrangler%22%2C%22Carens%22%2C%22Carnival%22%2C%22Cee%27d%22%2C%22Magentis%22%2C%22Picanto%22%2C%22Rio%22%2C%22Sorento%22%2C%22Soul%22%2C%22Sportage%22%2C%22Venga%22%2C%22%C3%96vriga+Kia%22%2C%22Voyager%22%2C%22Defender%22%2C%22Discovery%22%2C%22Freelander%22%2C%22Range+Rover%22%2C%22Range+Rover+Sport%22%2C%22CT%22%2C%22GS%22%2C%22IS%22%2C%22RX%22%2C%222%22%2C%223%22%2C%22323%22%2C%225%22%2C%226%22%2C%22626%22%2C%22CX-5%22%2C%22CX-60%22%2C%22CX-7%22%2C%22MX-5%22%2C%22RX-8%22%2C%22%C3%96vriga+Mazda%22%2C%22A-klass%22%2C%22B-klass%22%2C%22C-klass%22%2C%22CLC%22%2C%22CLK%22%2C%22E-klass%22%2C%22GL%22%2C%22GLK%22%2C%22ML%22%2C%22R-klass%22%2C%22S-klass%22%2C%22SLK%22%2C%22Vito%22%2C%22%C3%96vriga+Mercedes-Benz%22%2C%22Clubman%22%2C%22Cooper%22%2C%22Countryman%22%2C%22One%22%2C%22%C3%96vriga+Mini%22%2C%22ASX%22%2C%22Colt%22%2C%22Grandis%22%2C%22L200%22%2C%22Lancer%22%2C%22Outlander%22%2C%22Pajero%22%2C%22Space+Star%22%2C%22Space-serien%22%2C%22200+SX%22%2C%22Almera%22%2C%22Interstar%22%2C%22Juke%22%2C%22King+Cab%2FNavara%22%2C%22Kubistar%22%2C%22Leaf%22%2C%22Micra%22%2C%22Murano%22%2C%22NV200%22%2C%22NV300%22%2C%22NV400%22%2C%22Note%22%2C%22Patrol%22%2C%22Primastar%22%2C%22Primera%22%2C%22Pulsar%22%2C%22Qashqai%22%2C%22Qashqai%2B2%22%2C%22Sunny%22%2C%22X-Trail%22%2C%22%C3%96vriga+Nissan%22%2C%22Adam%22%2C%22Agila%22%2C%22Astra%22%2C%22Corsa%22%2C%22Insignia%22%2C%22Meriva%22%2C%22Mokka%22%2C%22Movano%22%2C%22Vectra%22%2C%22Zafira%22%2C%22%C3%96vriga+Opel%22%2C%221007%22%2C%22107%22%2C%222008%22%2C%22206%22%2C%22207%22%2C%22208%22%2C%223008%22%2C%22307%22%2C%22308%22%2C%224008%22%2C%22407%22%2C%225008%22%2C%22508%22%2C%22607%22%2C%22807%22%2C%22%C3%96vriga+Peugeot%22%2C%22Captur%22%2C%22Clio%22%2C%22Kadjar%22%2C%22Kangoo%22%2C%22Laguna%22%2C%22M%C3%A9gane%22%2C%22Sc%C3%A9nic%22%2C%22Talisman%22%2C%22Zoe%22%2C%22%C3%96vriga+Renault%22%2C%229-3%22%2C%229-5%22%2C%22900%22%2C%229000%22%2C%22%C3%96vriga+Saab%22%2C%22Alhambra%22%2C%22Altea%22%2C%22Altea+XL%22%2C%22Ibiza%22%2C%22Leon%22%2C%22Toledo%22%2C%22%C3%96vriga+SEAT%22%2C%22Fabia%22%2C%22Octavia%22%2C%22Rapid%22%2C%22Roomster%22%2C%22Superb%22%2C%22Yeti%22%2C%22Fortwo%22%2C%22Kyron%22%2C%22Tivoli%22%2C%22%C3%96vriga+Ssang+Yong%22%2C%22Forester%22%2C%22Impreza%22%2C%22Justy%22%2C%22Legacy%2FOutback%22%2C%22Tribeca%22%2C%22XV%22%2C%22Alto%22%2C%22Grand+Vitara%22%2C%22Jimny%22%2C%22S-Cross%22%2C%22SX4%22%2C%22Swift%22%2C%22Vitara%22%2C%22%C3%96vriga+Suzuki%22%2C%22Auris%22%2C%22Avensis%22%2C%22Aygo%22%2C%22Camry%22%2C%22Corolla%22%2C%22Hiace%22%2C%22Hilux%22%2C%22IQ%22%2C%22Land+Cruiser-serien%22%2C%22Previa%22%2C%22Prius%22%2C%22Prius%2B%22%2C%22Proace%22%2C%22RAV4%22%2C%22Urban+Cruiser%22%2C%22Verso%22%2C%22Verso-S%22%2C%22Yaris%22%2C%22%C3%96vriga+Toyota%22%2C%22Amarok%22%2C%22CC%22%2C%22Caddy%22%2C%22Caddy+Maxi%22%2C%22E-golf%22%2C%22Eos%22%2C%22Fox%22%2C%22Golf%22%2C%22Jetta%22%2C%22Lupo%22%2C%22Passat%22%2C%22Polo%22%2C%22Scirocco%22%2C%22Sharan%22%2C%22Tiguan%22%2C%22Touareg%22%2C%22Touran%22%2C%22Transporter%2FCaravelle%22%2C%22Up%22%2C%22e-UP%22%2C%22%C3%96vriga+Volkswagen%22%2C%22850%22%2C%22940+%26+960%22%2C%22960%22%2C%22C30%22%2C%22C70%22%2C%22S40%22%2C%22S60%22%2C%22S70%22%2C%22S80%22%2C%22V40%22%2C%22V40+Cross+Country%22%2C%22V50%22%2C%22V60%22%2C%22V70%22%2C%22V90%22%2C%22XC60%22%2C%22XC70%22%2C%22XC90%22%2C%22%C3%96vriga+Volvo%22%5D%7D&filter=%7B%22key%22%3A%22region%22%2C%22values%22%3A%5B%22Dalarna%22%2C%22G%C3%A4vleborg%22%2C%22G%C3%B6teborg%22%2C%22Gotland%22%2C%22J%C3%B6nk%C3%B6ping%22%2C%22Kalmar%22%2C%22Kronoberg%22%2C%22Skaraborg%22%2C%22Stockholm%22%2C%22S%C3%B6dermanland%22%2C%22Uppsala%22%2C%22V%C3%A4rmland%22%2C%22V%C3%A4stmanland%22%2C%22%C3%96rebro%22%2C%22%C3%96sterg%C3%B6tland%22%5D%7D',

  // Nya 4
  'filter=%7B%22key%22%3A%22chassi%22%2C%22values%22%3A%5B%22Yrkesfordon%22%5D%7D&filter=%7B%22key%22%3A%22make%22%2C%22values%22%3A%5B%22Volkswagen%22%2C%22Mercedes-Benz%22%2C%22Ford%22%2C%22Renault%22%2C%22Peugeot%22%2C%22Citro%C3%ABn%22%2C%22Nissan%22%2C%22Opel%22%2C%22Toyota%22%2C%22Fiat%22%2C%22Iveco%22%2C%22Isuzu%22%2C%22Maxus%22%2C%22Chevrolet%22%2C%22%C3%96vriga+m%C3%A4rken%22%2C%22Mitsubishi%22%5D%7D&filter=%7B%22key%22%3A%22models%22%2C%22values%22%3A%5B%22Connect%22%2C%22Courier%22%2C%22Custom%22%2C%22F150%22%2C%22F250%22%2C%22F450%22%2C%22Ranger%22%2C%22Raptor%22%2C%22Tourneo%22%2C%22Transit%22%2C%22%C3%96vriga+Ford%22%2C%22Doblo%22%2C%22Ducato%22%2C%22E-scudo%22%2C%22Fiorino%22%2C%22Fullback%22%2C%22Scudo%22%2C%22Strada%22%2C%22Talento%22%2C%22Tipo%22%2C%22%C3%96vriga+Fiat%22%2C%22Avalanche%22%2C%22S10%22%2C%22Silverado%22%2C%22%C3%96vriga+Chevrolet%22%5D%7D&filter=%7B%22key%22%3A%22modelYear%22%2C%22range%22%3A%7B%22start%22%3A%222017%22%2C%22end%22%3A%22%22%7D%7D&filter=%7B%22key%22%3A%22price%22%2C%22range%22%3A%7B%22start%22%3A%2230000%22%2C%22end%22%3A%22%22%7D%7D&filter=%7B%22key%22%3A%22milage%22%2C%22range%22%3A%7B%22start%22%3A%22%22%2C%22end%22%3A%2222000%22%7D%7D&filter=%7B%22key%22%3A%22sellerType%22%2C%22values%22%3A%5B%22Privat%22%2C%22F%C3%B6retag%22%5D%7D',

  // Nya 5
  'filter=%7B%22key%22%3A%22price%22%2C%22range%22%3A%7B%22start%22%3A%2210000%22%2C%22end%22%3A%22150000%22%7D%7D&filter=%7B%22key%22%3A%22milage%22%2C%22range%22%3A%7B%22start%22%3A%22%22%2C%22end%22%3A%2229999%22%7D%7D&filter=%7B%22key%22%3A%22modelYear%22%2C%22range%22%3A%7B%22start%22%3A%222007%22%2C%22end%22%3A%22%22%7D%7D&filter=%7B%22key%22%3A%22sellerType%22%2C%22values%22%3A%5B%22Privat%22%5D%7D&filter=%7B%22key%22%3A%22engineEffect%22%2C%22range%22%3A%7B%22start%22%3A%22%22%2C%22end%22%3A%22250%22%7D%7D&filter=%7B%22key%22%3A%22make%22%2C%22values%22%3A%5B%22Audi%22%2C%22BMW%22%2C%22Chevrolet%22%2C%22Dacia%22%2C%22Dodge%22%2C%22Fiat%22%2C%22Ford%22%2C%22Honda%22%2C%22Hyundai%22%2C%22Kia%22%2C%22Lexus%22%2C%22Mazda%22%2C%22Mercedes-Benz%22%2C%22Mitsubishi%22%2C%22Nissan%22%2C%22Opel%22%2C%22Peugeot%22%2C%22Renault%22%2C%22SEAT%22%2C%22Skoda%22%2C%22Subaru%22%2C%22Suzuki%22%2C%22Toyota%22%2C%22Volkswagen%22%2C%22Volvo%22%5D%7D&filter=%7B%22key%22%3A%22models%22%2C%22values%22%3A%5B%22A3%22%2C%22A4%22%2C%22A5%22%2C%22A6%22%2C%22Q3%22%2C%22Q5%22%2C%22%C3%96vriga+Audi%22%2C%221-serien%22%2C%22116%22%2C%22118%22%2C%22118i%22%2C%22120%22%2C%22123%22%2C%22125%22%2C%225-serien%22%2C%22520%22%2C%22523%22%2C%22525%22%2C%22X-serien%22%2C%22X1%22%2C%22X3%22%2C%22X5%22%2C%22Captiva%22%2C%22Uplander%22%2C%22%C3%96vriga+Chevrolet%22%2C%22Duster%22%2C%22Lodgy%22%2C%22Logan%22%2C%22Sandero%22%2C%22Journey%22%2C%22Freemont%22%2C%22%C3%96vriga+Fiat%22%2C%22Galaxy%22%2C%22S-Max%22%2C%22%C3%96vriga+Ford%22%2C%22CR-V%22%2C%22Civic%22%2C%22%C3%96vriga+Honda%22%2C%22Atos%22%2C%22Ioniq%22%2C%22Santa+Fe%22%2C%22Tucson%22%2C%22i10%22%2C%22i20%22%2C%22i30%22%2C%22i40%22%2C%22ix20%22%2C%22ix35%22%2C%22Carens%22%2C%22Carnival%22%2C%22Cee%27d%22%2C%22Niro%22%2C%22Optima%22%2C%22Sorento%22%2C%22Sportage%22%2C%22Venga%22%2C%22%C3%96vriga+Kia%22%2C%223%22%2C%226%22%2C%22CX-3%22%2C%22CX-5%22%2C%22CX-7%22%2C%22MX-30%22%2C%22C-klass%22%2C%22CLA%22%2C%22E-klass%22%2C%22GLK%22%2C%22ASX%22%2C%22L200%22%2C%22Outlander%22%2C%22Juke%22%2C%22King+Cab%2FNavara%22%2C%22Leaf%22%2C%22Murano%22%2C%22NV200%22%2C%22NV300%22%2C%22NV400%22%2C%22Qashqai%22%2C%22Qashqai%2B2%22%2C%22X-Trail%22%2C%22e-NV200%22%2C%22%C3%96vriga+Nissan%22%2C%22Adam%22%2C%22Crossland%22%2C%22Insignia%22%2C%22Meriva%22%2C%22Mokka%22%2C%22Zafira%22%2C%222008%22%2C%223008%22%2C%224008%22%2C%225008%22%2C%22508%22%2C%22%C3%96vriga+Peugeot%22%2C%22Captur%22%2C%22Kadjar%22%2C%22Laguna%22%2C%22M%C3%A9gane%22%2C%22Talisman%22%2C%22%C3%96vriga+Renault%22%2C%22Alhambra%22%2C%22Altea%22%2C%22Altea+XL%22%2C%22%C3%96vriga+SEAT%22%2C%22Fabia%22%2C%22Octavia%22%2C%22Superb%22%2C%22Yeti%22%2C%22Forester%22%2C%22Legacy%2FOutback%22%2C%22Tribeca%22%2C%22XV%22%2C%22Grand+Vitara%22%2C%22S-Cross%22%2C%22SX4%22%2C%22Auris%22%2C%22Avensis%22%2C%22Aygo%22%2C%22C-HR%22%2C%22Camry%22%2C%22Corolla%22%2C%22Hilux%22%2C%22IQ%22%2C%22Prius%22%2C%22Prius%2B%22%2C%22Proace%22%2C%22RAV4%22%2C%22Urban+Cruiser%22%2C%22Verso%22%2C%22Verso-S%22%2C%22Yaris%22%2C%22%C3%96vriga+Toyota%22%2C%22Amarok%22%2C%22Caddy%22%2C%22Caddy+Maxi%22%2C%22Golf%22%2C%22Jetta%22%2C%22Passat%22%2C%22Sharan%22%2C%22Tiguan%22%2C%22Touareg%22%2C%22Touran%22%2C%22%C3%96vriga+Volkswagen%22%2C%22S60%22%2C%22S60+Cross+Country%22%2C%22S80%22%2C%22V40%22%2C%22V40+Cross+Country%22%2C%22V50%22%2C%22V60%22%2C%22V60+Cross+Country%22%2C%22V70%22%2C%22V90%22%2C%22XC60%22%2C%22XC70%22%2C%22XC90%22%5D%7D&filter=%7B%22key%22%3A%22chassi%22%2C%22values%22%3A%5B%22Kombi%22%2C%22Halvkombi%22%2C%22SUV%22%2C%22Sedan%22%2C%22Familjebuss%22%2C%22Coup%C3%A9%22%5D%7D',
]

const MESSAGE_1 = (price) => `Hej, hoppas allt är väl! 😊

Mitt namn är Jan, och jag skriver till er angående er bil.

Ni har en fin bil som verkligen motsvarar det jag letar efter. Jag ser på nätet och förstår att den säkert är värd prislappen ni begär, och att den lockar många spekulanter.

Nu till det mindre roliga: Tyvärr är min inköpsbudget något begränsat, vilket gör att jag inte helt kan nå upp till ert begärda pris. Normalt sett skulle jag självklart vilja titta på bilen innan vi diskuterar pris, men eftersom jag har några mil att åka vill jag vara öppen och ärlig redan nu. Därför undrar jag om det finns möjlighet att landa på ${price} kr?

Om det är möjligt och ni känner att er ekonomi tillåter en prissänkning kan jag garantera en snabb och smidig affär – vi pratar om en omgående affär redan idag utan vidare diskussion. Jag är även redo att betala en handpenning direkt för att låsa affären och visa att jag är seriös, så att ni inte upplever att jag bara kontaktar er utan att följa upp.

Jag ber om ursäkt för mitt lägre bud, och tackar om ni överväger mitt förslag. Jag ser fram emot ert svar!

Med vänliga hälsningar,
Jan Mankell`

// const MESSAGE_2 = (price) => `Hej!

// Mitt namn är John C och jag tänkte kort berätta lite om vem vi är. Vi på BilBuffén (Bilfirma) är en mindre bilfirma som värdesätter smidiga och trygga affärer för båda parter. Vi har sett er bil och är mycket intresserade av att köpa den och undrar om ni skulle kunna tänka er ett bud på ${price} kr

// Vi köper bilen i befintligt skick och utan krav på ångerrätt, klagomål eller återköp, vilket gör processen snabb och enkel för er. Det enda vi önskar är att bilen inte har några dolda fel, och om det finns några kända anmärkningar eller defekter, ser vi gärna att ni informerar oss om dessa i förväg om det finns.

// Vi är medvetna om att vårt bud kanske är något lägre än vad ni hade hoppats på men med det i utbyte erbjuder vi en snabb, problemfri och seriös affär. Ni slipper visningar, spekulanter och "sista pris kompisar" Vi kan ordna allt enligt era önskemål – ni är varmt välkomna att besöka oss på vår bilfirma, eller så kommer vi direkt till er för att slutföra affären.

// Tack för att ni tar er tid att överväga vårt erbjudande. Vi ser fram emot att få höra från er och hoppas på en positiv respons!

// Med vänliga hälsningar Neo D,
// BilBuffén AB
// Spångavägen 308
// 16346 Spånga`

const MESSAGE_3 = (price) => `Hej och hoppas allt väl :)

Mitt namn är Jan och är intresserad av er bil. Den ser supertrevlig ut, precis en sådan jag letar efter.  
Priset verkar rimligt, dock är min budget lite begränsad och undrar om ni skulle kunna tänka er godta ett bud på ${price} kr?

Om ja, så garanterar jag en smidig och krångelfri affär redan idag. Jag kan även betala en handpenning för att visa att jag är seriös. 

Ursäkta mitt lägre bud, men hoppas ni kan överväga det. Jag ser fram emot ert svar!

Vänliga hälsningar,
Jan M`

const SUPPORTED_USERS = [
  'andreaslarson@live.se',
  'jan_dolbysound@outlook.com',
  'patricia.atanasio@icloud.com',
  'neodolinskii@icloud.com',
  'diamanta_d@hotmail.com',
  //'bilbuffen@gmail.com'
]

const DEFAULT_BARGAIN_RANGES = [
  { min: 0, max: 9999, bargain: 5000 },
  { min: 10000, max: 19999, bargain: 7000 },
  { min: 20000, max: 29999, bargain: 12000 },
  { min: 30000, max: 39999, bargain: 13000 },
  { min: 40000, max: 49999, bargain: 15000 },
  { min: 50000, max: 59999, bargain: 17000 },
  { min: 60000, max: 69999, bargain: 17000 },
  { min: 70000, max: 79999, bargain: 23000 },
  { min: 80000, max: 89999, bargain: 23000 },
  { min: 90000, max: 99999, bargain: 23000 },
  { min: 100000, max: 109999, bargain: 23000 },
  { min: 110000, max: 119999, bargain: 23000 },
  { min: 120000, max: 9999999, bargain: 23000 },
]

;(async function run() {
  try {
    const LOCAL_STORAGE_KEY = 'crippo_repliedAdIds'
    const LIMIT_PER_RUN = 59

    if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]))
    }

    const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    const asyncQuerySelector = async (selectorCallback, timeout = 20000) => {
      let element = selectorCallback()

      await new Promise((resolve, reject) => {
        const timestamp = Date.now()
        const interval = setInterval(() => {
          if (!element) {
            element = selectorCallback()

            if (Date.now() - timestamp > timeout) {
              clearInterval(interval)
              reject('Kunde inte hitta elementet...')
            }
          } else {
            resolve()
            clearInterval(interval)
          }
        }, 100)
      })

      return element
    }

    const calculateBargainPrice = (price, bargainRanges) =>
      price -
      (bargainRanges
        .map((range) => (price >= range.min && price <= range.max ? range.bargain : undefined))
        .filter(Boolean)[0] || 1)

    const typeTextToInput = async (inputElement, text, extraAttempts = 3) => {
      for (let index = 0; index < text.length; index++) {
        const nextValue = inputElement.value + text.charAt(index)

        const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set

        inputElement.focus()
        setter.call(inputElement, nextValue)
        inputElement.dispatchEvent(new Event('input', { bubbles: true }))
        inputElement.dispatchEvent(new Event('change', { bubbles: true }))

        inputElement.scrollTo(0, inputElement.scrollHeight)
        await sleep(5)
      }

      if (inputElement.value !== text) {
        if (extraAttempts > 0) {
          inputElement.value = ''
          await typeTextToInput(inputElement, text, extraAttempts - 1)
        } else {
          throw new Error('Meddelandet skrevs inte korrekt!')
        }
      }

      await sleep(100)
    }

    const searchResultsType = prompt(
      'Vilka sökresultat ska den välja? Ange SENASTE eller MITTEN!',
      'MITTEN',
    )

    if (!['SENASTE', 'MITTEN'].includes(searchResultsType)) {
      alert('Måste vara SENASTE eller MITTEN! Ladda om sidan och försök igen!')
      return
    }

    const apiFilterNumber = prompt(
      `Vilket filter ska användas? (ange nummer)
      
      1. Gamla 1: Alla bilar - hela Sverige  
      2. Gamla 2: Suvar & 7-sits bilar - hela Sverige
      3. Gamla 3: Valda lättsålda märken -  hela Sverige
      4. Nya 1: Alla bilar - Angränsande län
      5. Nya 2: Suvar & 7-Sits bilar - Angränsande län
      6. Nya 3: Manuellt valda lättsålda märken - Angränsande län
      7. Nya 4: Yrkesbilar - POLEN
      8. Nya 5: Manuellt valda lättsålda märken - POLEN

      `,
      1,
    )

    const apiFilter = API_FILTERS[apiFilterNumber - 1]

    console.log(apiFilter)

    if (!apiFilter) {
      alert('Något blev fel när filtret sattes, ladda om sidan och försök igen!')
      return
    }

    const bargainRanges = DEFAULT_BARGAIN_RANGES.map((range) => ({
      ...range,
      bargain: parseInt(
        prompt(
          `Hur mycket ska prutas när priset är mellan ${range.min} och ${range.max}?`,
          range.bargain,
        ),
      ),
    }))

    if (!Object.values(bargainRanges).every((range) => Number.isInteger(range.bargain))) {
      alert('Alla värden måste anges i endast siffror! Ladda om sidan och försök igen!')
      return
    }

    if (document.querySelector('#crippo_popup')) {
      document.querySelector('#crippo_popup').remove()
    }
    document.querySelector('body').style = 'background: #000; overflow: hidden'

    const wrapper = document.createElement('div')
    wrapper.id = 'wrapper'
    document.body.prepend(wrapper)

    while (wrapper.nextSibling) {
      wrapper.appendChild(wrapper.nextSibling)
    }

    document.querySelector('#wrapper').style = 'opacity: 0.3; filter: blur(4px);'

    const popupElement = document.createElement('div')
    popupElement.id = 'crippo_popup'
    popupElement.style = `
      box-sizing: border-box; 
      width: calc(100% - 100px); 
      height: calc(100% - 100px); 
      background: #fff; 
      position: fixed; 
      top: 0; 
      left: 0; 
      padding: 20px;
      margin: 50px;
  `
    document.body.appendChild(popupElement)

    const popupInnerElement = document.createElement('div')
    popupInnerElement.style = `
      position: relative;
      width: 100%;
      height: 100%;
  `
    popupElement.appendChild(popupInnerElement)

    const iframeElement = document.createElement('iframe')
    iframeElement.tabIndex = -1
    iframeElement.style = `
      box-sizing: border-box;
      display: inline-block; 
      position: absolute; 
      width: 60%; 
      height: 100%;
      opacity: 0;
      transition: opacity 3s;
      border: 5px solid #000; 
      pointer-events: none;
  `

    iframeElement.src = 'https://www.blocket.se/'

    popupInnerElement.appendChild(iframeElement)

    const consoleElement = document.createElement('textarea')
    consoleElement.readOnly = true
    consoleElement.style = `
      font-family: 'Courier New', monospace; 
      font-size: 16px; 
      box-sizing: border-box; 
      background: #000;
      position: absolute;
      right: 0;
      transition: width 2s;
      overflow-y: scroll; 
      display: inline-block; 
      width: 100%;
      height: 100%; 
      color: #00f200; 
      padding: 3%;
      resize: none;
  `

    popupInnerElement.appendChild(consoleElement)

    const writeToConsole = async (text) => {
      for (let index = 0; index < text.length; index++) {
        consoleElement.value += text.charAt(index)
        consoleElement.scrollTop = consoleElement.scrollHeight
        await sleep(5)
      }
    }

    await writeToConsole(
      `'##::::'##::::::::::'##::::'##::::'###:::::::'###:::::::'###:::::'######::'##:::'##:'########:
. ##::'##::::::::::: ##:::: ##:::'## ##:::::'## ##:::::'## ##:::'##... ##: ##::'##::... ##..::
:. ##'##:::::::::::: ##:::: ##::'##:. ##:::'##:. ##:::'##:. ##:: ##:::..:: ##:'##:::::: ##::::
::. ###::::::::::::: #########:'##:::. ##:'##:::. ##:'##:::. ##: ##::::::: #####::::::: ##::::
:: ## ##:::::::::::: ##.... ##: #########: #########: #########: ##::::::: ##. ##:::::: ##::::
: ##:. ##::::::::::: ##:::: ##: ##.... ##: ##.... ##: ##.... ##: ##::: ##: ##:. ##::::: ##::::
 ##:::. ##:'#######: ##:::: ##: ##:::: ##: ##:::: ##: ##:::: ##:. ######:: ##::. ##:::: ##::::
..:::::..::.......::..:::::..::..:::::..::..:::::..::..:::::..:::......:::..::::..:::::..:::::                                                                                                                                                                                                             

=====================================

👋 Hej, tänd ciggen nu så kör vi...`,
    )

    await sleep(1000)

    consoleElement.style.width = 'calc(40% - 20px)'

    iframeElement.style.opacity = 1

    await writeToConsole(`\n\n⏳ Hämtar annonserna...`)

    const baseApiUrl =
      'https://www.blocket.se/mobility/search/api/search/SEARCH_ID_CAR_USED?rows=20&dealer_segment=3&'

    const firstPage = await (
      await fetch(
        baseApiUrl +
          //apiFilter +
          '&page=' +
          1,
      )
    ).json()

    const middlePages = await Promise.all(
      [1, 2, 3, 4, 5].map((i) =>
        fetch(
          baseApiUrl +
            //apiFilter +
            '&page=' +
            i,
        ),
      ),
    ).then(async (responses) => Promise.all(responses.map((response) => response.json())))

    const ads = middlePages.flatMap((d) => d.docs)

    await writeToConsole('\n\n=====================================\n\n')

    let sentThisRun = 0

    for (let index = 0; index < ads.length; index++) {
      const ad = ads[index]
      if (sentThisRun === LIMIT_PER_RUN) {
        break
      }

      if (iframeElement.contentDocument === null) {
        break
      }
      try {
        const adId = ad.id
        const adUrl = ad.canonical_url
        const adNewMessageUrl = '/messages/new/' + adId

        await writeToConsole(`⏳ Laddar annons ${index + 1}/${ads.length}: ${adUrl}`)

        if (!JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).includes(adId)) {
          iframeElement.src = adUrl

          await sleep(1500)

          iframeElement.src = adNewMessageUrl

          await writeToConsole('\n\n🖱️ Klickar på skicka meddelande knappen')

          await sleep(1000)

          await writeToConsole('\n\n⏳ Laddar...')

          if (index === 0) {
            await sleep(1000)
            await writeToConsole('\n\n🙃 Annars då? Gjort mycket beats på senaste?')
            await sleep(1000)
          }

          await sleep(1000)

          await writeToConsole('\n\n📝 Skriver meddelande...')

          const price = ad.price.amount

          const givenPrice = calculateBargainPrice(price, bargainRanges)
          const msg = (() => {
            console.log('apiFilterNumber', apiFilterNumber)
            switch (apiFilterNumber) {
              case '1':
              case '2':
              case '3':
                return MESSAGE_1(givenPrice)
              case '4':
              case '5':
              case '6':
              case '7':
              case '8':
                return MESSAGE_3(givenPrice)
              default:
                throw Error('JÄVLA SKIT!')
            }
          })()

          const messageInputElement = iframeElement.contentDocument.querySelector(
            'textarea[data-testid="text-area"]',
          )

          messageInputElement.style.height = '300px'

          await typeTextToInput(messageInputElement, msg)

          await writeToConsole('\n\n⏳ Skickar meddelande...')

          await sleep(500)

          if ('user' !== 'andreaslarson@live.se') {
            console.log('skicka här')
          }

          localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify([...JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)), adId]),
          )

          sentThisRun++

          const minutesToWait = ((items) => items[Math.floor(Math.random() * items.length)])([
            1, 2, 3,
          ])
          //const minutesToWaitInMs = minutesToWait * 60000
          const minutesToWaitInMs = 0

          await writeToConsole(`\n\n😁 Meddelande ${sentThisRun} av ${LIMIT_PER_RUN} skickat!`)
          messageInputElement.style.height = '50px'

          await sleep(1000)

          await writeToConsole(
            `\n\n⏳ Väntar ${minutesToWait} minuter, till klockan ${new Date(Date.now() + minutesToWaitInMs).toLocaleTimeString()}, innan vi går vidare till nästa annons...`,
          )

          await sleep(minutesToWaitInMs)
        } else {
          await writeToConsole(
            '\n\n😏 Okej! Vi verkar redan ha svarat på den här annonsen, så vi drar till nästa!',
          )
        }

        await writeToConsole('\n\n=====================================\n\n')

        await sleep(1000)
      } catch (e) {
        await writeToConsole(
          `\n\n😱 Någonting gick åt helvete, provar nästa annons. Felmeddelande: ${e}`,
        )
        await writeToConsole('\n\n=====================================\n\n')
      }
    }

    if (iframeElement.contentDocument !== null) {
      alert('Klart! Ladda om sidan och kör programmet igen för svara på nya annonser!')
    }
  } catch (e) {
    console.error('Failed: ', e)
  }
})()

// (async () => {
//   const selector =
//     'textarea[aria-label="Skriv ditt meddelande och tryck på Retur för att skicka"]';

//   const field = document.querySelector(selector);

//   if (!field) {
//     console.error("Hittade inte Blockets meddelandefält.");
//     return;
//   }

//   // Fyll i meddelandet via webbläsarens inbyggda setter.
//   const setter = Object.getOwnPropertyDescriptor(
//     HTMLTextAreaElement.prototype,
//     "value"
//   ).set;

//   field.focus();
//   setter.call(field, "hej");
//   field.dispatchEvent(new Event("input", { bubbles: true }));
//   field.dispatchEvent(new Event("change", { bubbles: true }));

//   // Kontrollera att texten faktiskt finns i fältet.
//   if (field.value !== "hej") {
//     console.error("Kunde inte fylla i meddelandet.");
//     return;
//   }

//   // Skicka endast efter uttrycklig bekräftelse.
//   if (!confirm('Skicka meddelandet "hej" till säljaren på Blocket?')) {
//     console.log("Avbrutet. Inget meddelande skickades.");
//     return;
//   }

//   // Använd Enter, vilket fältets instruktion anger som skickkommando.
//   field.focus();
//   field.dispatchEvent(new KeyboardEvent("keydown", {
//     key: "Enter",
//     code: "Enter",
//     keyCode: 13,
//     which: 13,
//     bubbles: true,
//     cancelable: true
//   }));

//   console.log(
//     "Enter skickades till fältet. Kontrollera konversationen för att se om meddelandet skickades."
//   );
// })();
