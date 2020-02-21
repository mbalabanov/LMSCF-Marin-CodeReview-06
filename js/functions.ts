/* Array Section */
let itemArray = [];

/* Classes Section */
class LocationClass {
  id: string;
  classtype: string;
  name: string;
  description: string;
  city: string;
  zip: string;
  address: string;
  photo: string;
  credits: string;
  favorite: boolean;

  constructor(id, classtype, name, description, city, zip, address, photo, credits, favorite) {
    this.id = id;
    this.classtype = classtype;
    this.name = name;
    this.description = description;
    this.city = city;
    this.zip = zip;
    this.address = address;
    this.photo = photo;
    this.credits = credits;
    this.favorite = favorite;
    itemArray.push(this);
  };
  display() {
    return `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <div class="relative">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}">
            <div class="absoluteTop">
              <h4><span class="badge badge-light text-danger">${this.classtype}</span></h4>
            </div>
            <div class="absoluteBottom">
              <p class="text-white">${this.credits}</p>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text"><strong>${this.address},<br>${this.zip} ${this.city}</strong></p>
            <p class="card-text text-left">${this.description}</p>
          </div>
        </div>
      </div>
    `;
  };
};

class Restaurant extends LocationClass {
  type: string;
  phone: string;
  web: string;

  constructor(id, classtype, name, description, city, zip, address, photo, credits,favorite, type, phone, web) {
    super(id, classtype, name, description, city, zip, address, photo, credits, favorite);
    this.type = type;
    this.phone = phone;
    this.web = web;
  };

  display() {
    return `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <div class="relative">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}">
            <div class="absoluteTop">
              <h4><span class="badge badge-light text-success">${this.classtype}</span></h4>
            </div>
            <div class="absoluteBottom">
              <p class="text-white">${this.credits}</p>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <h5 class="card-text"><span class="badge badge-success text-white">${this.type}</span></h5>
            <p class="card-text text-left">${this.description}</p>
            <p class="card-text">Tel. ${this.phone}<br><a href="${this.web}" target="_blank">${this.web}</a></p>
            <p class="card-text"><strong>${this.address},<br>${this.zip} ${this.city}</strong></p>
          </div>
        </div>
      </div>
    `;
  };
};

class EventClass extends LocationClass {
  type: string;
  eventdate: string;
  eventtime: string;
  ticketprice: string;

  constructor(id, classtype, name, description, city, zip, address, photo, credits, favorite, type, eventdate, eventtime, ticketprice) {
    super(id, classtype, name, description, city, zip, address, photo, credits, favorite);
    this.type = type;
    this.eventdate = eventdate;
    this.eventtime = eventtime;
    this.ticketprice = ticketprice;
  };

  display() {
    return `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <div class="relative">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}">
            <div class="absoluteTop">
              <h4><span class="badge badge-light text-danger">${this.classtype}</span></h4>
            </div>
            <div class="absoluteBottom">
              <p class="text-white">${this.credits}</p>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">${this.name}, ${this.city}</h4>
            <h5 class="card-text"><span class="badge badge-warning text-white">${this.type}</span></h5>
            <p class="card-text">${this.type}, ticket price €${this.ticketprice}.00</p>
            <p class="card-text">${this.eventdate}, starts at ${this.eventtime}hr</p>
            <p class="card-text">${this.address}, ${this.zip}, ${this.city}</p>
          </div>
        </div>
      </div>
    `;
  };
};

/* Objects Section */

/* Location Objects */
let arenaviolet = new LocationClass(
  'l0',
  'Location',
  'Arena Violet',
  'A mysterious building located out in the brushland.  It has been there since as long as anyone can remember.  It is rumored that in 1982 a woman who paid it a visit never returned.',
  'Klagenfurt',
  '9020',
  'Uteweg 23',
  'img/22_location.jpg',
  'Photo by Mateus Campos Felipe on Unsplash',
  false
);
let aubergeamuse = new LocationClass(
  'l1',
  'Location',
  'Augerge Amuse',
  'Someone from the future stepped ouinto this building on November 28. A catlike figure has been seen through the window. A train was found embedded in the side of the house.',
  'Wels',
  '4600',
  'Grieskirchner Str. 42',
  'img/29_location.jpg',
  'Photo by Andreas Selter on Unsplash',
  false
);
let baboonorchard = new LocationClass(
  'l2',
  'Location',
  'Baboon Orchard',
  'Rumor has it that one of the doors leads to another dimension. Confused people appear out of nowhere in the basement.',
  'Wiener Neustadt',
  '2700',
  'Zehnergürtel 12',
  'img/32_location.jpg',
  'Photo by Igor Karimov on Unsplash',
  false
);
let brucknerhof = new LocationClass(
  'l3',
  'Location',
  'Brucknerhof',
  'A repurposed bus terminal located on the outskirts of the city.  It was built in 1969.  It is reported that those who visit it eventually go irreparably insane. A scientist who went to visit came out as a different person without any memory of what happened.',
  'Linz',
  '4020',
  'Linke Brücken Str. 12',
  'img/18_location.jpg',
  'Photo by Anthony Esau on Unsplash',
  false
);
let concertvariete = new LocationClass(
  'l4',
  'Location',
  'Concert Varieté',
  'The old concert hall in a rundown part of the city. It was built in the 1891. Local people make a point of staying far away from it.',
  'Salzburg',
  '6900',
  'Haslachstraße 18',
  'img/24_location.jpg',
  'Photo by Rémi Boyer on Unsplash',
  false
);
let dapperparadise = new LocationClass(
  'l5',
  'Location',
  'Dapper Paradise',
  'Strange lights emanate from the building on the full moon nights. Lost items have been found there arranged into strange patterns in the morning. People have felt a sense of being watched in the evening.',
  'Oggau am Neusiedler See',
  '7063',
  'Seegasse 12',
  'img/28_location.jpg',
  'Photo by Lea Katharina on Unsplash',
  false
);
let embers = new LocationClass(
  'l6',
  'Location',
  'Embers',
  'Strange marks have been found on the walls of this location. Rasping noises have been heard over it occasionally. An ancient piece of technology was found floating over the roof.',
  'Eisenstadt',
  '7000',
  'Esterhazyplatz 1',
  'img/25_location.jpg',
  'Photo by Annie Spratt on Unsplash',
  false
);
let emperorslodge = new LocationClass(
  'l7',
  'Location',
  'Emperor\'s Lodge',
  'Gravity is reported to intensify around this location sporadically. Puddles of foul-smelling liquid have been found in the driveway.',
  'Hallstatt',
  '4830',
  'Salzbergstraße 21',
  'img/31_location.jpg',
  'Photo by Braedon McLeod on Unsplash',
  false
);
let gentalioromano = new LocationClass(
  'l8',
  'Location',
  'Gentalio Romano',
  'Time is reported to slow down in Gentalio Romano. Shuffling noises have been heard in the place at nicht. The old location vanished into the air in the park.',
  'Melk an der Donau',
  '3390',
  'Prinzlstraße 22',
  'img/26_location.jpg',
  'Photo by James Hose Jr on Unsplash',
  false
);
let greenhouse = new LocationClass(
  'l9',
  'Location',
  'Green House',
  'A decrepit former conservatory in a rougher part of the city.  It was built after World War II.  The area is believed by locals to have a powerful curse laid on it. An infamous murder happened here.',
  'Innsbruck',
  '6020',
  'Doktor-Glatz-Straße 20',
  'img/21_location.jpg',
  'Photo by Bruno Adamo on Unsplash',
  false
);
let hermestower = new LocationClass(
  'l10',
  'Location',
  'Hermes Tower',
  'A decrepit glas and steel building located out in the outer rim of Vienna.  It was built in 1999.  People claim to see strange lights moving around here at night. In 2002 the place was vandalized with satanic symbols. The symbols disappeared again over night.',
  'Vienna',
  '1220',
  'Donau-City-Straße 11',
  'img/17_location.jpg',
  'Photo by Rahul Bhogal on Unsplash',
  false
);
let lakestage = new LocationClass(
  'l11',
  'Location',
  'Lake Stage',
  'A modern event location at the shore of the lake. It was built in 2012. It is reported that those who visit it eventually die in strange and unforeseeable accidents. Rumor has it an old witch once lurked here.',
  'Bregenz',
  '6900',
  'Platz der Philharmoniker 1',
  'img/23_location.jpg',
  'Photo by Max Bovkun on Unsplash',
  false
);
let lemongrass = new LocationClass(
  'l12',
  'Location',
  'Lemon Grass',
  'This old military station was built in 1907.  It is claimed that the remains of a strange creature were found there awhile back. An infamous murder happened here several years ago.',
  'Schwanenstadt',
  '4690',
  'Gmundner Str. 9',
  'img/30_location.jpg',
  'Photo by Marjolein vV on Unsplash',
  false
);
let palaislang = new LocationClass(
  'l13',
  'Location',
  'Palais Lang',
  'A historic imperial palace in the heart of town. It was built in the 19the century.  It was one of the filming locations for a well-known mystery movie.',
  'Graz',
  '8010',
  'Harrachgasse 1',
  'img/20_location.jpg',
  'Photo by ilya gorborukov on Unsplash',
  false
);
let rudgerhouse = new LocationClass(
  'l14',
  'Location',
  'Rudger House',
  'A former movie theater located in a rougher part of the city.  It was built in 1954.  Some locals claim to have seen the ghost of a serial killer wandering around the premises. A teenage boy who went to visit it a few months ago vanished for weeks, only to turn up thousands of miles away with no memory of what happened.',
  'Gramatneusiedl',
  '2440',
  'Weinbergweg 19 - 21',
  'img/19_location.jpg',
  'Photo by Hardik Pandya on Unsplash',
  false
);

/* Restaurant Objects */
let backstage = new Restaurant(
  'r0',
  'Restaurant',
  'Backstage',
  'Fine Burgers, casual US comfort food, as well as steaks and the finest condiments in town.',
  'Wels',
  '4600',
  'Grieskirchner Str. 42',
  'img/01_blueberry_toast.jpg',
  'Photo by Joseph Gonzalez on Unsplash',
  false,
  'Burgers and Steaks',
  '+43(6825)777-4678',
  'backstagefood.at'
);
let boilingmoon = new Restaurant(
  'r1',
  'Restaurant',
  'Boiling Moon',
  'Exquisite Chinese cuisine for the whole family.',
  'Oggau am Neusiedler See',
  '7063',
  'Seegasse 12',
  'img/02_sandwitch_boiled_egg.jpg',
  'Photo by Joseph Gonzalez on Unsplash',
  false,
  'Chinese',
  '+43(5902)414-1766',
  'boilingtuesdays.com'
);
let harvest = new Restaurant(
  'r2',
  'Restaurant',
  'Harvest',
  'Finally a place where vegetarians can eat anything to their heart\'s desire',
  'Gramatneusiedl',
  '2440',
  'Weinbergweg 19 - 21',
  'img/03_cooked_food_black_bowl.jpg',
  'Photo by Eiliv-Sonas Aceron on Unsplash',
  false,
  'Modern Vegetarian',
  '+43(4969)762-0070',
  'restaurantharvest.at'
);
let orientalbalcony = new Restaurant(
  'r3',
  'Restaurant',
  'Oriental Balcony',
  'Orient meats occident via the Mediterannean. The best levantine offering at affordable prices.',
  'Wiener Neustadt',
  '2700',
  'Zehnergürtel 12',
  'img/04_pasta_dish_brown_plate.jpg',
  'Photo by Brooke Lark on Unsplash',
  false,
  'Levantine',
  '+43(385)552-2357',
  'orientalbalcony.at'
);
let maximus = new Restaurant(
  'r4',
  'Restaurant',
  'Maximus',
  'Italian of the highest leve. Pasta, pizza and antipasi of the highest quality.',
  'Eisenstadt',
  '7000',
  'Esterhazyplatz 1',
  'img/05_fruit_plate.jpg',
  'Photo by Brooke Lark on Unsplash',
  false,
  'Italian',
  '+43(31)207-2665',
  'maximusrestaurant.com'
);
let palmlounge = new Restaurant(
  'r5',
  'Restaurant',
  'Palm Lounge',
  'Come hungry, leave satisfied. Sizzling meat patties in soft bread with fresh salad and spicy condiments, the ideal burger!',
  'Krems an der Donau',
  '3550',
  'Dr.-Karl-Dorrek-Straße 23',
  'img/06_slider_burger.jpg',
  'Photo by Filipe de Rodrigues on Unsplash',
  false,
  'Casual American',
  '+43(4786)621-7541',
  'palmlounge.at'
);
let sushimill = new Restaurant(
  'r6',
  'Restaurant',
  'Sushi Mill',
  'Find beauty in the perfect form of the purest fish on a bed of rice. Sushi as you\'ve never tried it.',
  'Schwanenstadt',
  '4690',
  'Gmundner Str. 9',
  'img/07_mixed_fruit.jpg',
  'Photo by Stefan Johnson on Unsplash',
  false,
  'Japanese',
  '+43(486)003-3277',
  'sushimill.at'
);
let tandooriwharf = new Restaurant(
  'r7',
  'Restaurant',
  'Tandoori Wharf',
  'Explore the traditions of the Punjab region of India with the tastiest curries in town.',
  'Graz',
  '8010',
  'Harrachgasse 1',
  'img/08_baked_burger.jpg',
  'Photo by Pablo Merchán Montes on Unsplash',
  false,
  'Indian',
  '+43(8244)797-4874',
  'tandooriwharf.com'
);

/* Events Objects */

console.log(itemArray);

/* Functions Section */
function generateItems(classname) {
  let locationContent: string = '';

  for (let tempID in itemArray) {
    if (itemArray[tempID].classtype == classname) {
      locationContent += itemArray[tempID].display();
    }
  };

  $('#' + classname).replaceWith(`<div class="row text-center mt-1" id=${classname}>${locationContent}</div>`);
};
