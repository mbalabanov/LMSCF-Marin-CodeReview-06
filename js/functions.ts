/*──────────────────────────────────────────────────────┐
│  _______                _____           _       _     │
│ |__   __|              / ____|         (_)     | |    │
│    | |_   _ _ __   ___| (___   ___ _ __ _ _ __ | |_   │
│    | | | | | '_ \ / _ \\___ \ / __| '__| | '_ \| __|  │
│    | | |_| | |_) |  __/____) | (__| |  | | |_) | |_   │
│    |_|\__, | .__/ \___|_____/ \___|_|  |_| .__/ \__|  │
│        __/ | |                           | |          │
│       |___/|_|                           |_|          │
│               __  __            _                     │
│              |  \/  |          (_)                    │
│              | \  / | __ _ _ __ _ _ __                │
│              | |\/| |/ _` | '__| | '_ \               │
│              | |  | | (_| | |  | | | | |              │
│              |_|  |_|\__,_|_|  |_|_| |_|              │
└──────────────────────────────────────────────────────*/

/* Arrays and Variables defined here for later use */
let itemArray: string[] = [];
let specialSorting: string = '';

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
  creationdate: string;

  constructor(id, classtype, name, description, city, zip, address, photo, credits, creationdate) {
    this.id = id;
    this.classtype = classtype;
    this.name = name;
    this.description = description;
    this.city = city;
    this.zip = zip;
    this.address = address;
    this.photo = photo;
    this.credits = credits;
    this.creationdate = creationdate;

    // This pushes the new object into the array for later use
    itemArray.push(this);
  };
  display() {

    // Uses MomentJS to make the creation date human readable through sensible formatting.
    let prettydate = moment(this.creationdate).format('MMM Do, YYYY, h:mm a');

    // Generates the Location card and the modal (not shown until clicked).
    return `
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div class="card h-100">
          <div class="relative d-none d-md-block d-lg-block">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}"  data-toggle="modal" data-target="#modal${this.id}">
            <div class="absoluteTop">
              <h4><span class="badge badge-light text-primary">${this.classtype}</span></h4>
            </div>
            <div class="absoluteBottom">
              <p class="text-white text-left"><span class="badge badge-dark text-white">${this.credits}</span></p>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title" data-toggle="modal" data-target="#modal${this.id}">${this.name}</h4>
            <p class="card-text"><strong>${this.address},<br>${this.zip} ${this.city}</strong></p>
            <p class="card-text d-md-none d-lg-none"><button class="btn btn-info" data-toggle="modal" data-target="#modal${this.id}">Details</button>
          </div>
          <div class="card-footer">
            <small>Created: ${prettydate}</small>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="modal${this.id}" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modallabel${this.id}">${this.name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="relative">
                <img class="card-img-top" src="${this.photo}" alt="${this.name}">
                <div class="absoluteTop">
                  <h4><span class="badge badge-light text-primary">${this.classtype}</span></h4>
                </div>
                <div class="absoluteBottom">
                  <p class="text-white text-left"><span class="badge badge-dark text-white">${this.credits}</span></p>
                </div>
              </div>
              <h4 class="pt-3">${this.name}</h4>
              <p><strong>${this.address}, ${this.zip} ${this.city}</strong></p>
              <p>${this.description}</p>
            </div>
            <div class="modal-footer">
              <small>Created: ${prettydate}</small>
            </div>
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

  constructor(id, classtype, name, description, city, zip, address, photo, credits, creationdate, type, phone, web) {
    super(id, classtype, name, description, city, zip, address, photo, credits, creationdate);
    this.type = type;
    this.phone = phone;
    this.web = web;
  };

  display() {

    // Uses MomentJS to make the creation date human readable through sensible formatting.
    let prettydate = moment(this.creationdate).format('MMM Do, YYYY, h:mm a');

    // Generates the Restaurant card and the modal (not shown until clicked).
    return `
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div class="card h-100">
          <div class="relative d-none d-md-block d-lg-block">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}" data-toggle="modal" data-target="#modal${this.id}">
            <div class="absoluteTop">
              <h4><span class="badge badge-light text-success">${this.classtype}</span></h4>
            </div>
            <div class="absoluteBottom">
              <p class="text-white text-left"><span class="badge badge-dark text-white">${this.credits}</span></p>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title" data-toggle="modal" data-target="#modal${this.id}">${this.name}</h4>
            <p class="card-text"><strong>${this.address},<br>${this.zip} ${this.city}</strong></p>
            <h5 class="card-text"><span class="badge badge-success text-white">${this.type}</span></h5>
            <p class="card-text"><strong>Tel. ${this.phone}<br><a href="http://${this.web}" target="_blank">${this.web}</a></strong></p>
            <p class="card-text d-md-none d-lg-none"><button class="btn btn-info" data-toggle="modal" data-target="#modal${this.id}">Details</button>
          </div>
          <div class="card-footer">
            <small>Created: ${prettydate}</small>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="modal${this.id}" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modallabel${this.id}">${this.name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="relative">
                <img class="card-img-top" src="${this.photo}" alt="${this.name}">
                <div class="absoluteTop">
                  <h4><span class="badge badge-light text-success">${this.classtype}</span></h4>
                </div>
                <div class="absoluteBottom">
                  <p class="text-white text-left"><span class="badge badge-dark text-white">${this.credits}</span></p>
                </div>
              </div>
              <h4 class="pt-3">${this.name}</h4>
              <p><strong>${this.address}, ${this.zip} ${this.city}</strong></p>
              <h5><span class="badge badge-success text-white">${this.type}</span></h5>
              <p><strong>Tel. ${this.phone}, <a href="http://${this.web}" target="_blank">${this.web}</a></strong></p>
              <p>${this.description}</p>
            </div>
            <div class="modal-footer">
              <small>Created: ${prettydate}</small>
            </div>
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

  constructor(id, classtype, name, description, city, zip, address, photo, credits, creationdate, type, eventdate, eventtime, ticketprice) {
    super(id, classtype, name, description, city, zip, address, photo, credits, creationdate);
    this.type = type;
    this.eventdate = eventdate;
    this.eventtime = eventtime;
    this.ticketprice = ticketprice;
  };

  display() {
    // Uses MomentJS to make the creation and event dates as well as the event time human readable through sensible formatting.
    let prettydate = moment(this.creationdate).format('MMM Do, YYYY, h:mm a');
    let prettyeventdate =  moment(this.eventdate).format('dddd, MMMM Do, YYYY');
    let prettyeventtime =  moment(this.eventdate).format('h:mm a');

    // Generates the Event card and the modal (not shown until clicked).
    return `
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div class="card h-100">
          <div class="relative d-none d-md-block d-lg-block">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}" data-toggle="modal" data-target="#modal${this.id}">
            <div class="absoluteTop">
              <h4><span class="badge badge-light text-danger">${this.classtype}</span></h4>
            </div>
            <div class="absoluteBottom">
              <p class="text-white text-left"><span class="badge badge-dark text-white">${this.credits}</span></p>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title" data-toggle="modal" data-target="#modal${this.id}">${this.name}</h4>
            <p class="card-text"><strong>${this.address},<br>${this.zip} ${this.city}</strong></p>
            <h5 class="card-text"><span class="badge badge-danger text-white">${this.type}</span></h5>
            <h5 class="card-text">€${this.ticketprice}</h5>
            <p class="card-text"><strong>${prettyeventdate}, ${prettyeventtime}</strong></p>
            <p class="card-text d-md-none d-lg-none"><button class="btn btn-info" data-toggle="modal" data-target="#modal${this.id}">Details</button>
          </div>
          <div class="card-footer">
            <small>Created: ${prettydate}</small>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="modal${this.id}" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modallabel${this.id}">${this.name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="relative">
                <img class="card-img-top" src="${this.photo}" alt="${this.name}">
                <div class="absoluteTop">
                  <h4><span class="badge badge-light text-danger">${this.classtype}</span></h4>
                </div>
                <div class="absoluteBottom">
                  <p class="text-white text-left"><span class="badge badge-dark text-white">${this.credits}</span></p>
                </div>
              </div>
              <h4 class="py-4" >${this.name}</h4>
              <p><strong>${this.address}, ${this.zip} ${this.city}</strong></p>
              <h5><span class="badge badge-danger text-white">${this.type}</span></h5>
              <h5><strong>€${this.ticketprice}</strong><br>${prettyeventdate}, ${prettyeventtime}</h5>
              <p>${this.description}</p>
            </div>
            <div class="modal-footer">
              <small>Created: ${prettydate}</small>
            </div>
          </div>
        </div>
      </div>
      `;
  };
};

/* Objects section */
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
  'Photo: Mateus Campos Felipe',
  '2020-02-09 14:01'
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
  'Photo: Andreas Selter',
  '2020-01-12 17:12'
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
  'Photo: Igor Karimov',
  '2020-02-01 11:21'
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
  'Photo: Anthony Esau',
  '2019-12-28 09:34'
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
  'Photo: Rémi Boyer',
  '2020-01-14 13:57'
);
let dapperparadise = new LocationClass(
  'l5',
  'Location',
  'Dapper Paradise',
  'Strange lights emanate from the building on the full moon nights. Lost items have been found there arranged into strange patterns in the morning. People have felt a sense of being watched in the evening.',
  'Oggau am See',
  '7063',
  'Seegasse 12',
  'img/28_location.jpg',
  'Photo: Lea Katharina',
  '2020-01-14 10:54'
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
  'Photo: Annie Spratt',
  '2020-01-09 09:23'
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
  'Photo: Braedon McLeod',
  '2020-01-10 08:03'
);
let estadioromano = new LocationClass(
  'l8',
  'Location',
  'Estadio Romano',
  'Time is reported to slow down in Estadio Romano. Shuffling noises have been heard in the place at nicht. The old location vanished into the air in the park.',
  'Melk an der Donau',
  '3390',
  'Prinzlstraße 22',
  'img/26_location.jpg',
  'Photo: James Hose Jr',
  '2020-02-14 12:10'
);
let greenhouse = new LocationClass(
  'l9',
  'Location',
  'Green House',
  'A decrepit former conservatory in a rougher part of the city.  It was built after World War II.  The area is believed by locals to have a powerful curse laid on it.',
  'Innsbruck',
  '6020',
  'Doktor-Glatz-Straße 20',
  'img/21_location.jpg',
  'Photo: Bruno Adamo',
  '2020-01-12 15:12'
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
  'Photo: Rahul Bhogal',
  '2020-01-07 08:34'
);
let lakestage = new LocationClass(
  'l11',
  'Location',
  'Lake Stage',
  'A modern event location at the shore of the lake. It was built in 2012. It is reported that those who visit it eventually die in strange and unforeseeable accidents. Rumor has it an old witch once lurked here.',
  'Bregenz',
  '6900',
  'Philharmoniker Platz 1',
  'img/23_location.jpg',
  'Photo: Max Bovkun',
  '2020-02-04 13:14'
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
  'Photo: Marjolein vV',
  '2020-01-06 09:13'
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
  'Photo: ilya gorborukov',
  '2020-02-08 09:14'
);
let rudgerhouse = new LocationClass(
  'l14',
  'Location',
  'Rudger House',
  'A former movie theater located in a rougher part of the city.  It was built in 1954.  Some locals claim to have seen the ghost of a serial killer wandering around the premises.',
  'Gramatneusiedl',
  '2440',
  'Weinbergweg 19 - 21',
  'img/19_location.jpg',
  'Photo: Hardik Pandya',
  '2020-01-27 17:47'
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
  'Photo: Joseph Gonzalez',
  '2020-01-07 13:12',
  'Burgers and Steaks',
  '+43(6825)777-4678',
  'backstagefood.at'
);
let boilingmoon = new Restaurant(
  'r1',
  'Restaurant',
  'Boiling Moon',
  'Exquisite Chinese cuisine for the whole family. A large selection, a great location and even a playground for the kids.',
  'Oggau am See',
  '7063',
  'Seegasse 12',
  'img/02_sandwitch_boiled_egg.jpg',
  'Photo: Joseph Gonzalez',
  '2020-02-02 11:34',
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
  'Photo: Eiliv-Sonas Aceron',
  '2020-01-27 09:27',
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
  'Photo: Brooke Lark',
  '2020-02-22 15:27',
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
  'Photo: Brooke Lark',
  '2020-01-24 13:47',
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
  'Photo: Filipe de Rodrigues',
  '2020-01-14 10:07',
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
  'Photo: Stefan Johnson',
  '2020-02-20 12:17',
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
  'Photo: Pablo Merchán Montes',
  '2020-01-25 10:41',
  'Indian',
  '+43(8244)797-4874',
  'tandooriwharf.com'
);

/* Events Objects */
let rainbowmusical = new EventClass(
  'e0',
  'Event',
  'Rainbow Musical',
  'Discover the world of color in music. How the hues turn to blues, how pigments turn to imaginary figments.',
  'Klagenfurt',
  '9020',
  'Uteweg 23',
  'img/12_musical.jpg',
  'Photo: Ahmad Odeh',
  '2020-01-08 08:47',
  'Musical',
  '2020-03-23',
  '19:00',
  '36'
);
let bent = new EventClass(
  'e1',
  'Event',
  'Bent',
  'The millenial musical. How can reality be bent to fullfill the dreams and wishes that this generations is entitled to?',
  'Salzburg',
  '6900',
  'Haslachstraße 18',
  'img/13_musical.jpg',
  'Photo: NeONBRAND',
  '2020-01-07 11:07',
  'Musical',
  '2020-03-11',
  '20:00',
  '46'
);
let armsoflight = new EventClass(
  'e2',
  'Event',
  'Arms of Light',
  'Spreading their arms out to the audience to envelope them in a warm shower of music, Arms of Light proves again that music will melt even the coldest heart.',
  'Bregenz',
  '6900',
  'Philharmoniker Platz 1',
  'img/09_rock_concert.jpg',
  'Photo: Dan Gold',
  '2020-02-06 16:36',
  'Rock Concert',
  '2020-03-16',
  '19:30',
  '52'
);
let thedefensive = new EventClass(
  'e3',
  'Event',
  'The Defensive',
  'In Germany and Austria, <strong>The Defencive</strong> is the most successful act in history, measured by the number of their number 1 hits.',
  'Graz',
  '8010',
  'Harrachgasse 1',
  'img/10_rock_concert.jpg',
  'Photo: m',
  '2020-01-05 15:45',
  'Rock Concert',
  '2020-04-07',
  '20:00',
  '60'
);
let thenicegals = new EventClass(
  'e4',
  'Event',
  'The Nice Gals',
  'These ladies with “a bass guitar hung damn low” are coming with a compact rock show as part of their world tour with their brand new album "Out of Control". There is nothing for the fans of this band\'s classic hits to be sad about, as they will also be singing essential songs from their repertoire.',
  'Melk an der Donau',
  '3390',
  'Prinzlstraße 22',
  'img/11_rock_concert.jpg',
  'Photo: Jonathan Tieh',
  '2020-02-14 14:44',
  'Concert',
  '2020-04-16',
  '20:00',
  '42'
);
let compositions = new EventClass(
  'e5',
  'Event',
  'Compositions',
  'Our family concert offers a spectacular change of perspective. As the name suggests, children aged eight years and upwards have the unique opportunity to sit among the orchestral musicians and look over their shoulder.',
  'Bregenz',
  '6900',
  'Philharmoniker Platz 1',
  'img/14_concert.jpg',
  'Photo: Aditya Chinchure',
  '2020-02-03 13:23',
  'Classical Concert',
  '2020-05-03',
  '20:00',
  '72'
);
let classicalevening = new EventClass(
  'e6',
  'Event',
  'A Classical Evening',
  'An orchestra, a large choir and solo artists will present music from across the centuries of classical music.',
  'Graz',
  '8010',
  'Harrachgasse 1',
  'img/15_concert.jpg',
  'Photo: Jonathan Tieh',
  '2020-01-02 12:27',
  'Classical Concert',
  '2020-05-06',
  '19:00',
  '60'
);
let analogjazz = new EventClass(
  'e7',
  'Event',
  'Analog Jazz',
  'Jazz by the Lincoln Center Orchestra & Wynton Marsalis: <em>The Music of Thelonious Monk</em>. The group describes its style as being "loud jazz". The ensemble sounds like Hiromi would play with Snarky Puppy, but in a trio.',
  'Melk an der Donau',
  '3390',
  'Prinzlstraße 22',
  'img/16_concert.jpg',
  'Photo: Corey Young',
  '2020-02-01 11:14',
  'Classical Concert',
  '2020-05-12',
  '20:00',
  '80'
);

/* Functions Section */

/* This function iterates through the array of objects and picks out the objects with the specified class in the attribute.
  Then it calls the method to create the HTML for the card and pushes it into a temporary array for the content.
  Finally, the div with the ID based on the specified class name is grabbed by jQuery and the HTML from the temporary content array is rendered into it. */
function renderHTML(classname) {
  let locationContent: string = '';

  for (let tempID in itemArray) {
    if (itemArray[tempID].classtype == classname) {
      locationContent += itemArray[tempID].display();
    };
  };

  $('#' + classname).replaceWith(`<div class="row text-center mt-1" id=${classname}>${locationContent}</div>`);
};

/* This function only served to set the right sort order based on the value in the variable specialSorting.
  It then passes the class name to the function renderHTML, that does all the work. */
function generateItems(classname) {
  if (specialSorting == 'asc') {
    itemArray.sort((a, b) => (a.creationdate > b.creationdate) ? 1 : -1);
    renderHTML(classname);
  } else if (specialSorting == 'desc') {
    itemArray.sort((a, b) => (b.creationdate > a.creationdate) ? 1 : -1);
    renderHTML(classname);
  } else {
    itemArray.sort((a, b) => (a.name > b.name) ? 1 : -1);
    renderHTML(classname);
  };
};
