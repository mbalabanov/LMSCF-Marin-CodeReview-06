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
/* Array to be used for all objects */
var itemArray = [];
/* Classes Section */
var LocationClass = /** @class */ (function () {
    function LocationClass(id, classtype, name, description, city, zip, address, photo, credits, favorite, creationdate) {
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
        this.creationdate = creationdate;
        itemArray.push(this);
    }
    ;
    LocationClass.prototype.display = function () {
        var prettydate = moment(this.creationdate).format('MMM Do YYYY, hh:mm');
        return "\n      <div class=\"col-lg-3 col-md-6 col-sm-12 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"relative d-none d-md-block d-lg-block\">\n            <img class=\"card-img-top\" src=\"" + this.photo + "\" alt=\"" + this.name + "\"  data-toggle=\"modal\" data-target=\"#modal" + this.id + "\">\n            <div class=\"absoluteTop\">\n              <h4><span class=\"badge badge-light text-primary\">" + this.classtype + "</span></h4>\n            </div>\n            <div class=\"absoluteBottom\">\n              <p class=\"text-white text-left\"><span class=\"badge badge-dark text-white\">" + this.credits + "</span></p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\" data-toggle=\"modal\" data-target=\"#modal" + this.id + "\">" + this.name + "</h4>\n            <p class=\"card-text\"><strong>" + this.address + ",<br>" + this.zip + " " + this.city + "</strong></p>\n            <p class=\"card-text d-md-none d-lg-none\"><button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal" + this.id + "\">Details</button>\n          </div>\n          <div class=\"card-footer\">\n            <small>Created: " + prettydate + "</small>\n          </div>\n        </div>\n      </div>\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"modal" + this.id + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"modallabel" + this.id + "\">" + this.name + "</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"relative\">\n                <img class=\"card-img-top\" src=\"" + this.photo + "\" alt=\"" + this.name + "\">\n                <div class=\"absoluteTop\">\n                  <h4><span class=\"badge badge-light text-primary\">" + this.classtype + "</span></h4>\n                </div>\n                <div class=\"absoluteBottom\">\n                  <p class=\"text-white text-left\"><span class=\"badge badge-dark text-white\">" + this.credits + "</span></p>\n                </div>\n              </div>\n              <h4 class=\"pt-3\">" + this.name + "</h4>\n              <p><strong>" + this.address + ", " + this.zip + " " + this.city + "</strong></p>\n              <p>" + this.description + "</p>\n            </div>\n            <div class=\"modal-footer\">\n              <small>Created: " + prettydate + "</small>\n            </div>\n          </div>\n        </div>\n      </div>\n    ";
    };
    ;
    return LocationClass;
}());
;
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(id, classtype, name, description, city, zip, address, photo, credits, favorite, creationdate, type, phone, web) {
        var _this = _super.call(this, id, classtype, name, description, city, zip, address, photo, credits, favorite, creationdate) || this;
        _this.type = type;
        _this.phone = phone;
        _this.web = web;
        return _this;
    }
    ;
    Restaurant.prototype.display = function () {
        var prettydate = moment(this.creationdate).format('MMM Do YYYY, hh:mm');
        return "\n      <div class=\"col-lg-3 col-md-6 col-sm-12 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"relative d-none d-md-block d-lg-block\">\n            <img class=\"card-img-top\" src=\"" + this.photo + "\" alt=\"" + this.name + "\" data-toggle=\"modal\" data-target=\"#modal" + this.id + "\">\n            <div class=\"absoluteTop\">\n              <h4><span class=\"badge badge-light text-success\">" + this.classtype + "</span></h4>\n            </div>\n            <div class=\"absoluteBottom\">\n              <p class=\"text-white text-left\"><span class=\"badge badge-dark text-white\">" + this.credits + "</span></p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\" data-toggle=\"modal\" data-target=\"#modal" + this.id + "\">" + this.name + "</h4>\n            <p class=\"card-text\"><strong>" + this.address + ",<br>" + this.zip + " " + this.city + "</strong></p>\n            <h5 class=\"card-text\"><span class=\"badge badge-success text-white\">" + this.type + "</span></h5>\n            <p class=\"card-text\"><strong>Tel. " + this.phone + "<br><a href=\"http://" + this.web + "\" target=\"_blank\">" + this.web + "</a></strong></p>\n            <p class=\"card-text d-md-none d-lg-none\"><button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal" + this.id + "\">Details</button>\n          </div>\n          <div class=\"card-footer\">\n            <small>Created: " + prettydate + "</small>\n          </div>\n        </div>\n      </div>\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"modal" + this.id + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"modallabel" + this.id + "\">" + this.name + "</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"relative\">\n                <img class=\"card-img-top\" src=\"" + this.photo + "\" alt=\"" + this.name + "\">\n                <div class=\"absoluteTop\">\n                  <h4><span class=\"badge badge-light text-success\">" + this.classtype + "</span></h4>\n                </div>\n                <div class=\"absoluteBottom\">\n                  <p class=\"text-white text-left\"><span class=\"badge badge-dark text-white\">" + this.credits + "</span></p>\n                </div>\n              </div>\n              <h4 class=\"pt-3\">" + this.name + "</h4>\n              <p><strong>" + this.address + ", " + this.zip + " " + this.city + "</strong></p>\n              <h5><span class=\"badge badge-success text-white\">" + this.type + "</span></h5>\n              <p><strong>Tel. " + this.phone + ", <a href=\"http://" + this.web + "\" target=\"_blank\">" + this.web + "</a></strong></p>\n              <p>" + this.description + "</p>\n            </div>\n            <div class=\"modal-footer\">\n              <small>Created: " + prettydate + "</small>\n            </div>\n          </div>\n        </div>\n      </div>\n      ";
    };
    ;
    return Restaurant;
}(LocationClass));
;
var EventClass = /** @class */ (function (_super) {
    __extends(EventClass, _super);
    function EventClass(id, classtype, name, description, city, zip, address, photo, credits, favorite, creationdate, type, eventdate, eventtime, ticketprice) {
        var _this = _super.call(this, id, classtype, name, description, city, zip, address, photo, credits, favorite, creationdate) || this;
        _this.type = type;
        _this.eventdate = eventdate;
        _this.eventtime = eventtime;
        _this.ticketprice = ticketprice;
        return _this;
    }
    ;
    EventClass.prototype.display = function () {
        var prettydate = moment(this.creationdate).format('MMM Do YYYY, hh:mm');
        var prettyeventdate = moment(this.eventdate).format('dddd, MMMM Do YYYY');
        return "\n      <div class=\"col-lg-3 col-md-6 col-sm-12 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"relative d-none d-md-block d-lg-block\">\n            <img class=\"card-img-top\" src=\"" + this.photo + "\" alt=\"" + this.name + "\" data-toggle=\"modal\" data-target=\"#modal" + this.id + "\">\n            <div class=\"absoluteTop\">\n              <h4><span class=\"badge badge-light text-danger\">" + this.classtype + "</span></h4>\n            </div>\n            <div class=\"absoluteBottom\">\n              <p class=\"text-white text-left\"><span class=\"badge badge-dark text-white\">" + this.credits + "</span></p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\" data-toggle=\"modal\" data-target=\"#modal" + this.id + "\">" + this.name + "</h4>\n            <p class=\"card-text\"><strong>" + this.address + ",<br>" + this.zip + " " + this.city + "</strong></p>\n            <h5 class=\"card-text\"><span class=\"badge badge-danger text-white\">" + this.type + "</span></h5>\n            <h5 class=\"card-text\">\u20AC" + this.ticketprice + "</h5>\n            <p class=\"card-text\"><strong>" + prettyeventdate + ", " + this.eventtime + " Hr.</strong></p>\n            <p class=\"card-text d-md-none d-lg-none\"><button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal" + this.id + "\">Details</button>\n          </div>\n          <div class=\"card-footer\">\n            <small>Created: " + prettydate + "</small>\n          </div>\n        </div>\n      </div>\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"modal" + this.id + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"modallabel" + this.id + "\">" + this.name + "</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"relative\">\n                <img class=\"card-img-top\" src=\"" + this.photo + "\" alt=\"" + this.name + "\">\n                <div class=\"absoluteTop\">\n                  <h4><span class=\"badge badge-light text-danger\">" + this.classtype + "</span></h4>\n                </div>\n                <div class=\"absoluteBottom\">\n                  <p class=\"text-white text-left\"><span class=\"badge badge-dark text-white\">" + this.credits + "</span></p>\n                </div>\n              </div>\n              <h4 class=\"py-4\" >" + this.name + "</h4>\n              <p><strong>" + this.address + ", " + this.zip + " " + this.city + "</strong></p>\n              <h5><span class=\"badge badge-danger text-white\">" + this.type + "</span></h5>\n              <h5><strong>\u20AC" + this.ticketprice + "</strong><br>" + prettyeventdate + ", " + this.eventtime + " Hr.</h5>\n              <p>" + this.description + "</p>\n            </div>\n            <div class=\"modal-footer\">\n              <small>Created: " + prettydate + "</small>\n            </div>\n          </div>\n        </div>\n      </div>\n      ";
    };
    ;
    return EventClass;
}(LocationClass));
;
/* Objects Section */
/* Location Objects */
var arenaviolet = new LocationClass('l0', 'Location', 'Arena Violet', 'A mysterious building located out in the brushland.  It has been there since as long as anyone can remember.  It is rumored that in 1982 a woman who paid it a visit never returned.', 'Klagenfurt', '9020', 'Uteweg 23', 'img/22_location.jpg', 'Photo: Mateus Campos Felipe', false, '2020-02-09 14:01');
var aubergeamuse = new LocationClass('l1', 'Location', 'Augerge Amuse', 'Someone from the future stepped ouinto this building on November 28. A catlike figure has been seen through the window. A train was found embedded in the side of the house.', 'Wels', '4600', 'Grieskirchner Str. 42', 'img/29_location.jpg', 'Photo: Andreas Selter', false, '2020-01-12 17:12');
var baboonorchard = new LocationClass('l2', 'Location', 'Baboon Orchard', 'Rumor has it that one of the doors leads to another dimension. Confused people appear out of nowhere in the basement.', 'Wiener Neustadt', '2700', 'Zehnergürtel 12', 'img/32_location.jpg', 'Photo: Igor Karimov', false, '2020-02-01 11:21');
var brucknerhof = new LocationClass('l3', 'Location', 'Brucknerhof', 'A repurposed bus terminal located on the outskirts of the city.  It was built in 1969.  It is reported that those who visit it eventually go irreparably insane. A scientist who went to visit came out as a different person without any memory of what happened.', 'Linz', '4020', 'Linke Brücken Str. 12', 'img/18_location.jpg', 'Photo: Anthony Esau', false, '2019-12-28 09:34');
var concertvariete = new LocationClass('l4', 'Location', 'Concert Varieté', 'The old concert hall in a rundown part of the city. It was built in the 1891. Local people make a point of staying far away from it.', 'Salzburg', '6900', 'Haslachstraße 18', 'img/24_location.jpg', 'Photo: Rémi Boyer', false, '2020-01-14 13:57');
var dapperparadise = new LocationClass('l5', 'Location', 'Dapper Paradise', 'Strange lights emanate from the building on the full moon nights. Lost items have been found there arranged into strange patterns in the morning. People have felt a sense of being watched in the evening.', 'Oggau am See', '7063', 'Seegasse 12', 'img/28_location.jpg', 'Photo: Lea Katharina', false, '2020-01-14 10:54');
var embers = new LocationClass('l6', 'Location', 'Embers', 'Strange marks have been found on the walls of this location. Rasping noises have been heard over it occasionally. An ancient piece of technology was found floating over the roof.', 'Eisenstadt', '7000', 'Esterhazyplatz 1', 'img/25_location.jpg', 'Photo: Annie Spratt', false, '2020-01-09 09:23');
var emperorslodge = new LocationClass('l7', 'Location', 'Emperor\'s Lodge', 'Gravity is reported to intensify around this location sporadically. Puddles of foul-smelling liquid have been found in the driveway.', 'Hallstatt', '4830', 'Salzbergstraße 21', 'img/31_location.jpg', 'Photo: Braedon McLeod', false, '2020-01-10 08:03');
var estadioromano = new LocationClass('l8', 'Location', 'Estadio Romano', 'Time is reported to slow down in Estadio Romano. Shuffling noises have been heard in the place at nicht. The old location vanished into the air in the park.', 'Melk an der Donau', '3390', 'Prinzlstraße 22', 'img/26_location.jpg', 'Photo: James Hose Jr', false, '2020-02-14 12:10');
var greenhouse = new LocationClass('l9', 'Location', 'Green House', 'A decrepit former conservatory in a rougher part of the city.  It was built after World War II.  The area is believed by locals to have a powerful curse laid on it.', 'Innsbruck', '6020', 'Doktor-Glatz-Straße 20', 'img/21_location.jpg', 'Photo: Bruno Adamo', false, '2020-01-12 15:12');
var hermestower = new LocationClass('l10', 'Location', 'Hermes Tower', 'A decrepit glas and steel building located out in the outer rim of Vienna.  It was built in 1999.  People claim to see strange lights moving around here at night. In 2002 the place was vandalized with satanic symbols. The symbols disappeared again over night.', 'Vienna', '1220', 'Donau-City-Straße 11', 'img/17_location.jpg', 'Photo: Rahul Bhogal', false, '2020-01-07 08:34');
var lakestage = new LocationClass('l11', 'Location', 'Lake Stage', 'A modern event location at the shore of the lake. It was built in 2012. It is reported that those who visit it eventually die in strange and unforeseeable accidents. Rumor has it an old witch once lurked here.', 'Bregenz', '6900', 'Philharmoniker Platz 1', 'img/23_location.jpg', 'Photo: Max Bovkun', false, '2020-02-04 13:14');
var lemongrass = new LocationClass('l12', 'Location', 'Lemon Grass', 'This old military station was built in 1907.  It is claimed that the remains of a strange creature were found there awhile back. An infamous murder happened here several years ago.', 'Schwanenstadt', '4690', 'Gmundner Str. 9', 'img/30_location.jpg', 'Photo: Marjolein vV', false, '2020-01-06 09:13');
var palaislang = new LocationClass('l13', 'Location', 'Palais Lang', 'A historic imperial palace in the heart of town. It was built in the 19the century.  It was one of the filming locations for a well-known mystery movie.', 'Graz', '8010', 'Harrachgasse 1', 'img/20_location.jpg', 'Photo: ilya gorborukov', false, '2020-02-08 09:14');
var rudgerhouse = new LocationClass('l14', 'Location', 'Rudger House', 'A former movie theater located in a rougher part of the city.  It was built in 1954.  Some locals claim to have seen the ghost of a serial killer wandering around the premises.', 'Gramatneusiedl', '2440', 'Weinbergweg 19 - 21', 'img/19_location.jpg', 'Photo: Hardik Pandya', false, '2020-01-27 17:47');
/* Restaurant Objects */
var backstage = new Restaurant('r0', 'Restaurant', 'Backstage', 'Fine Burgers, casual US comfort food, as well as steaks and the finest condiments in town.', 'Wels', '4600', 'Grieskirchner Str. 42', 'img/01_blueberry_toast.jpg', 'Photo: Joseph Gonzalez', false, '2020-01-07 13:12', 'Burgers and Steaks', '+43(6825)777-4678', 'backstagefood.at');
var boilingmoon = new Restaurant('r1', 'Restaurant', 'Boiling Moon', 'Exquisite Chinese cuisine for the whole family. A large selection, a great location and even a playground for the kids.', 'Oggau am See', '7063', 'Seegasse 12', 'img/02_sandwitch_boiled_egg.jpg', 'Photo: Joseph Gonzalez', false, '2020-02-02 11:34', 'Chinese', '+43(5902)414-1766', 'boilingtuesdays.com');
var harvest = new Restaurant('r2', 'Restaurant', 'Harvest', 'Finally a place where vegetarians can eat anything to their heart\'s desire', 'Gramatneusiedl', '2440', 'Weinbergweg 19 - 21', 'img/03_cooked_food_black_bowl.jpg', 'Photo: Eiliv-Sonas Aceron', false, '2020-01-27 09:27', 'Modern Vegetarian', '+43(4969)762-0070', 'restaurantharvest.at');
var orientalbalcony = new Restaurant('r3', 'Restaurant', 'Oriental Balcony', 'Orient meats occident via the Mediterannean. The best levantine offering at affordable prices.', 'Wiener Neustadt', '2700', 'Zehnergürtel 12', 'img/04_pasta_dish_brown_plate.jpg', 'Photo: Brooke Lark', false, '2020-02-22 15:27', 'Levantine', '+43(385)552-2357', 'orientalbalcony.at');
var maximus = new Restaurant('r4', 'Restaurant', 'Maximus', 'Italian of the highest leve. Pasta, pizza and antipasi of the highest quality.', 'Eisenstadt', '7000', 'Esterhazyplatz 1', 'img/05_fruit_plate.jpg', 'Photo: Brooke Lark', false, '2020-01-24 13:47', 'Italian', '+43(31)207-2665', 'maximusrestaurant.com');
var palmlounge = new Restaurant('r5', 'Restaurant', 'Palm Lounge', 'Come hungry, leave satisfied. Sizzling meat patties in soft bread with fresh salad and spicy condiments, the ideal burger!', 'Krems an der Donau', '3550', 'Dr.-Karl-Dorrek-Straße 23', 'img/06_slider_burger.jpg', 'Photo: Filipe de Rodrigues', false, '2020-01-14 10:07', 'Casual American', '+43(4786)621-7541', 'palmlounge.at');
var sushimill = new Restaurant('r6', 'Restaurant', 'Sushi Mill', 'Find beauty in the perfect form of the purest fish on a bed of rice. Sushi as you\'ve never tried it.', 'Schwanenstadt', '4690', 'Gmundner Str. 9', 'img/07_mixed_fruit.jpg', 'Photo: Stefan Johnson', false, '2020-02-20 12:17', 'Japanese', '+43(486)003-3277', 'sushimill.at');
var tandooriwharf = new Restaurant('r7', 'Restaurant', 'Tandoori Wharf', 'Explore the traditions of the Punjab region of India with the tastiest curries in town.', 'Graz', '8010', 'Harrachgasse 1', 'img/08_baked_burger.jpg', 'Photo: Pablo Merchán Montes', false, '2020-01-25 10:41', 'Indian', '+43(8244)797-4874', 'tandooriwharf.com');
/* Events Objects */
var rainbowmusical = new EventClass('e0', 'Event', 'Rainbow Musical', 'Discover the world of color in music. How the hues turn to blues, how pigments turn to imaginary figments.', 'Klagenfurt', '9020', 'Uteweg 23', 'img/12_musical.jpg', 'Photo: Ahmad Odeh', false, '2020-01-08 08:47', 'Musical', '2020-03-23', '19:00', '36');
var bent = new EventClass('e1', 'Event', 'Bent', 'The millenial musical. How can reality be bent to fullfill the dreams and wishes that this generations is entitled to?', 'Salzburg', '6900', 'Haslachstraße 18', 'img/13_musical.jpg', 'Photo: NeONBRAND', false, '2020-01-07 11:07', 'Musical', '2020-03-11', '20:00', '46');
var armsoflight = new EventClass('e2', 'Event', 'Arms of Light', 'Spreading their arms out to the audience to envelope them in a warm shower of music, Arms of Light proves again that music will melt even the coldest heart.', 'Bregenz', '6900', 'Philharmoniker Platz 1', 'img/09_rock_concert.jpg', 'Photo: Dan Gold', false, '2020-02-06 16:36', 'Rock Concert', '2020-03-16', '19:30', '52');
var thedefensive = new EventClass('e3', 'Event', 'The Defensive', 'In Germany and Austria, <strong>The Defencive</strong> is the most successful act in history, measured by the number of their number 1 hits.', 'Graz', '8010', 'Harrachgasse 1', 'img/10_rock_concert.jpg', 'Photo: m', false, '2020-01-05 15:45', 'Rock Concert', '2020-04-07', '20:00', '60');
var thenicegals = new EventClass('e4', 'Event', 'The Nice Gals', 'These ladies with “a bass guitar hung damn low” are coming with a compact rock show as part of their world tour with their brand new album "Out of Control". There is nothing for the fans of this band\'s classic hits to be sad about, as they will also be singing essential songs from their repertoire.', 'Melk an der Donau', '3390', 'Prinzlstraße 22', 'img/11_rock_concert.jpg', 'Photo: Jonathan Tieh', false, '2020-02-14 14:44', 'Concert', '2020-04-16', '20:00', '42');
var compositions = new EventClass('e5', 'Event', 'Compositions', 'Our family concert offers a spectacular change of perspective. As the name suggests, children aged eight years and upwards have the unique opportunity to sit among the orchestral musicians and look over their shoulder.', 'Bregenz', '6900', 'Philharmoniker Platz 1', 'img/14_concert.jpg', 'Photo: Aditya Chinchure', false, '2020-02-03 13:23', 'Classical Concert', '2020-05-03', '20:00', '72');
var classicalevening = new EventClass('e6', 'Event', 'A Classical Evening', 'An orchestra, a large choir and solo artists will present music from across the centuries of classical music.', 'Graz', '8010', 'Harrachgasse 1', 'img/15_concert.jpg', 'Photo: Jonathan Tieh', false, '2020-01-02 12:27', 'Classical Concert', '2020-05-06', '19:00', '60');
var analogjazz = new EventClass('e7', 'Event', 'Analog Jazz', 'Jazz by the Lincoln Center Orchestra & Wynton Marsalis: <em>The Music of Thelonious Monk</em>. The group describes its style as being "loud jazz". The ensemble sounds like Hiromi would play with Snarky Puppy, but in a trio.', 'Melk an der Donau', '3390', 'Prinzlstraße 22', 'img/16_concert.jpg', 'Photo: Corey Young', false, '2020-02-01 11:14', 'Classical Concert', '2020-05-12', '20:00', '80');
console.log(itemArray);
/* Functions Section */
function generateItems(classname) {
    var locationContent = '';
    for (var tempID in itemArray) {
        if (itemArray[tempID].classtype == classname) {
            locationContent += itemArray[tempID].display();
        }
    }
    ;
    $('#' + classname).replaceWith("<div class=\"row text-center mt-1\" id=" + classname + ">" + locationContent + "</div>");
}
;
