var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Array Section */
var locationArray = [];
var restaurantArray = [];
var eventArray = [];
/* Classes Section */
var LocationClass = /** @class */ (function () {
    function LocationClass(id, name, description, city, zip, address, photo, favorite) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.photo = photo;
        this.favorite = favorite;
        locationArray.push(this);
    }
    ;
    LocationClass.prototype.display = function () {
        return "\n      <div class=\"col-lg-3 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"relative\">\n            <img class=\"card-img-top\" src=\"" + this.photo + "\" alt=\"" + this.name + "\">\n            <div class=\"absolute\">\n              <img src=\"img/heart-" + this.favorite + ".png\" onclick=\"addFavorite(" + this.id + ")\" class=\"img-fluid peopleHeart\">\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">" + this.name + ", " + this.city + "</h4>\n            <p class=\"card-text\">" + this.address + ", " + this.zip + ", " + this.city + "</p>\n          </div>\n        </div>\n      </div>\n    ";
    };
    ;
    return LocationClass;
}());
;
var RestaurantClass = /** @class */ (function (_super) {
    __extends(RestaurantClass, _super);
    function RestaurantClass(id, name, description, city, zip, address, photo, favorite, type, locationid, phone, web) {
        var _this = _super.call(this, id, name, description, city, zip, address, photo, favorite) || this;
        _this.type = type;
        _this.locationid = locationid;
        _this.phone = phone;
        _this.web = web;
        restaurantArray.push(_this);
        return _this;
    }
    ;
    RestaurantClass.prototype.display = function () {
        return "\n      <div class=\"col-lg-3 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"relative\">\n            <img class=\"card-img-top\" src=\"" + this.photo + "\" alt=\"" + this.name + "\">\n            <div class=\"absolute\">\n              <img src=\"img/heart-" + this.favorite + ".png\" onclick=\"addFavorite(" + this.id + ")\" class=\"img-fluid peopleHeart\">\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">" + this.name + ", " + this.city + "</h4>\n            <p class=\"card-text\">" + this.type + "</p>\n            <p class=\"card-text\">" + this.phone + ", " + this.web + "</p>\n            <p class=\"card-text\">" + this.address + ", " + this.zip + ", " + this.city + "</p>\n          </div>\n        </div>\n      </div>\n    ";
    };
    ;
    return RestaurantClass;
}(LocationClass));
;
var EventClass = /** @class */ (function (_super) {
    __extends(EventClass, _super);
    function EventClass(id, name, description, city, zip, address, photo, favorite, type, eventdate, eventtime, ticketprice) {
        var _this = _super.call(this, id, name, description, city, zip, address, photo, favorite) || this;
        _this.type = type;
        _this.eventdate = eventdate;
        _this.eventtime = eventtime;
        _this.ticketprice = ticketprice;
        eventArray.push(_this);
        return _this;
    }
    ;
    EventClass.prototype.display = function () {
        return "\n      <div class=\"col-lg-3 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"relative\">\n            <img class=\"card-img-top\" src=\"" + this.photo + "\" alt=\"" + this.name + "\">\n            <div class=\"absolute\">\n              <img src=\"img/heart-" + this.favorite + ".png\" onclick=\"addFavorite(" + this.id + ")\" class=\"img-fluid peopleHeart\">\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">" + this.name + ", " + this.city + "</h4>\n            <p class=\"card-text\">" + this.type + ", ticket price \u20AC" + this.ticketprice + ".00</p>\n            <p class=\"card-text\">" + this.eventdate + ", starts at " + this.eventtime + "hr</p>\n            <p class=\"card-text\">" + this.address + ", " + this.zip + ", " + this.city + "</p>\n          </div>\n        </div>\n      </div>\n    ";
    };
    ;
    return EventClass;
}(LocationClass));
;
/* Objects Section */
/* Location Objects */
var arenaviolet = new LocationClass('l0', 'Arena Violet', 'A mysterious building located out in the brushland.  It has been there since as long as anyone can remember.  It is rumored that in 1982 a woman who paid it a visit never returned.', 'Klagenfurt', '9020', 'Uteweg 23', 'img/22_location.jpg', false);
var aubergeamuse = new LocationClass('l1', 'Augerge Amuse', 'Someone from the future stepped ouinto this building on November 28. A catlike figure has been seen through the window. A train was found embedded in the side of the house.', 'Wels', '4600', 'Grieskirchner Str. 42', 'img/29_location.jpg', false);
var baboonorchard = new LocationClass('l2', 'Baboon Orchard', 'Rumor has it that one of the doors leads to another dimension. Confused people appear out of nowhere in the basement.', 'Wiener Neustadt', '2700', 'Zehnergürtel 12', 'img/32_location.jpg', false);
var brucknerhof = new LocationClass('l3', 'Brucknerhof', 'A repurposed bus terminal located on the outskirts of the city.  It was built in 1969.  It is reported that those who visit it eventually go irreparably insane. A scientist who went to visit came out as a different person without any memory of what happened.', 'Linz', '4020', 'Linke Brücken Str. 12', 'img/18_location.jpg', false);
var concertvariete = new LocationClass('l4', 'Concert Varieté', 'The old concert hall in a rundown part of the city. It was built in the 1891. Local people make a point of staying far away from it.', 'Salzburg', '6900', 'Haslachstraße 18', 'img/24_location.jpg', false);
var dapperparadise = new LocationClass('l5', 'Dapper Paradise', 'Strange lights emanate from the building on the full moon nights. Lost items have been found there arranged into strange patterns in the morning. People have felt a sense of being watched in the evening.', 'Oggau am Neusiedler See', '7063', 'Seegasse 12', 'img/28_location.jpg', false);
var embers = new LocationClass('l6', 'Embers', 'Strange marks have been found on the walls of this location. Rasping noises have been heard over it occasionally. An ancient piece of technology was found floating over the roof.', 'Eisenstadt', '7000', 'Esterhazyplatz 1', 'img/25_location.jpg', false);
var emperorslodge = new LocationClass('l7', 'Emperor\'s Lodge', 'Gravity is reported to intensify around this location sporadically. Puddles of foul-smelling liquid have been found in the driveway.', 'Hallstatt', '4830', 'Salzbergstraße 21', 'img/31_location.jpg', false);
var fantasario = new LocationClass('l8', 'Fantasario', 'Mysterious objects have been found strewn about the entrance. A spicy scent always hangs around the building. Beings with claws have been known to appear out of nowhere in the stock room on the summer solstice.', 'Krems an der Donau', '3550', 'Dr.-Karl-Dorrek-Straße 23', 'img/25_location.jpg', false);
var gentalioromano = new LocationClass('l9', 'Gentalio Romano', 'Time is reported to slow down in Gentalio Romano. Shuffling noises have been heard in the place at nicht. The old location vanished into the air in the park.', 'Melk an der Donau', '3390', 'Prinzlstraße 22', 'img/26_location.jpg', false);
var greenhouse = new LocationClass('l10', 'Green House', 'A decrepit former conservatory in a rougher part of the city.  It was built after World War II.  The area is believed by locals to have a powerful curse laid on it. An infamous murder happened here.', 'Innsbruck', '6020', 'Doktor-Glatz-Straße 20', 'img/21_location.jpg', false);
var hermestower = new LocationClass('l11', 'Hermes Tower', 'A decrepit glas and steel building located out in the outer rim of Vienna.  It was built in 1999.  People claim to see strange lights moving around here at night. In 2002 the place was vandalized with satanic symbols. The symbols disappeared again over night.', 'Vienna', '1220', 'Donau-City-Straße 11', 'img/17_location.jpg', false);
var lakestage = new LocationClass('l12', 'Lake Stage', 'A modern event location at the shore of the lake. It was built in 2012. It is reported that those who visit it eventually die in strange and unforeseeable accidents. Rumor has it an old witch once lurked here.', 'Bregenz', '6900', 'Platz der Philharmoniker 1', 'img/23_location.jpg', false);
var lemongrass = new LocationClass('l13', 'Lemon Grass', 'This old military station was built in 1907.  It is claimed that the remains of a strange creature were found there awhile back. An infamous murder happened here several years ago.', 'Schwanenstadt', '4690', 'Gmundner Str. 9', 'img/30_location.jpg', false);
var palaislang = new LocationClass('l14', 'Palais Lang', 'A historic imperial palace in the heart of town. It was built in the 19the century.  It was one of the filming locations for a well-known mystery movie.', 'Graz', '8010', 'Harrachgasse 1', 'img/20_location.jpg', false);
var rudgerhouse = new LocationClass('l15', 'Rudger House', 'A former movie theater located in a rougher part of the city.  It was built in 1954.  Some locals claim to have seen the ghost of a serial killer wandering around the premises. A teenage boy who went to visit it a few months ago vanished for weeks, only to turn up thousands of miles away with no memory of what happened.', 'Gramatneusiedl', '2440', 'Weinbergweg 19 - 21', 'img/19_location.jpg', false);
/* Restaurant Objects */
var backstage = new RestaurantClass('r0', 'Backstage', false, 'Burgers and Steaks', 'l1', '+43(6825)777-4678', 'backstagefood.at');
var boilingmoon = new RestaurantClass('r1', 'Boiling Moon', false, 'Chinese', 'l5', '+43(5902)414-1766', 'boilingtuesdays.com');
var harvest = new RestaurantClass('r2', 'Harvest', false, 'Modern Vegetarian', 'l15', '+43(4969)762-0070', 'restaurantharvest.at');
var orientalbalcony = new RestaurantClass('r3', 'Oriental Balcony', false, 'Levantine', 'l2', '+43(385)552-2357', 'orientalbalcony.at');
var maximus = new RestaurantClass('r4', 'Maximus', false, 'Italian', 'l6', '+43(31)207-2665', 'maximusrestaurant.com');
var palmlounge = new RestaurantClass('r5', 'Palm Lounge', false, 'Casual American', 'l8', '+43(4786)621-7541', 'palmlounge.at');
var sushimill = new RestaurantClass('r6', 'Sushi Mill', false, 'Japanese', 'l13', '+43(486)003-3277', 'sushimill.at');
var tandooriwharf = new RestaurantClass('r7', 'Tandoori Wharf', false, 'Indian', '', '+43(8244)797-4874', 'tandooriwharf.com');
/* Events Objects */
/* Functions Section */
function generateItems() {
    var locationContent = '';
    for (var tempID in locationArray) {
        locationContent += locationArray[tempID].display();
    }
    ;
    $('#personContainer').replaceWith("<div class=\"row text-center mt-5\" id=\"locationContainer\">" + locationContent + "</div>");
}
;
/*
function addFavorite(id) {
  if (personArray[id].favorite == false) {
    personArray[id].favorite = true;
    generatePeople();
    generateFavorites()
  } else if (personArray[id].favorite == true) {
    personArray[id].favorite = false;
    generatePeople();
    generateFavorites()
  };
};

function generateFavorites() {
  let favoriteContent: string = '';
  for (let tempID in personArray) {
    if (personArray[tempID].favorite == true) {
      favoriteContent += personArray[tempID].personDetails();
    }
  };
  $('#favoritesContainer').replaceWith(`<div class="row text-center py-2" id="favoritesContainer">${favoriteContent}</div>`);
}
*/
