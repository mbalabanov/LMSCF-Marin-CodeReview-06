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
var personArray = [];
var Person = /** @class */ (function () {
    function Person(a, b, c, d, e, f, g, h) {
        this.id = a;
        this.name = b;
        this.age = c;
        this.phrase = d;
        this.photo = e;
        this.location = f;
        this.hobbies = g;
        this.favorite_music = h;
    }
    return Person;
}());
var Woman = /** @class */ (function (_super) {
    __extends(Woman, _super);
    function Woman(id, name, age, phrase, photo, location, hobbies, favorite_music, favorite) {
        var _this = _super.call(this, id, name, age, phrase, photo, location, hobbies, favorite_music) || this;
        _this.favorite = favorite;
        personArray.push(_this);
        return _this;
    }
    Woman.prototype.personInfo = function () {
        return "\n      <div class=\"col-lg-3 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"relative\">\n            <img class=\"card-img-top\" src=\"" + this.photo + "\" alt=\"" + this.name + "\">\n            <div class=\"absolute\">\n              <img src=\"img/heart-" + this.favorite + ".png\" onclick=\"addFavorite(" + this.id + ")\" class=\"img-fluid peopleHeart\">\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">" + this.name + "</h4>\n            <p class=\"card-text\">" + this.phrase + "</p>\n          </div>\n        </div>\n      </div>\n    ";
    };
    Woman.prototype.personDetails = function () {
        return "\n      <div class=\"col-lg-6 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"relative\">\n            <img class=\"card-img-top\" src=\"" + this.photo + "\" alt=\"" + this.name + "\">\n            <div class=\"absolute\">\n              <img src=\"img/heart-" + this.favorite + ".png\" onclick=\"addFavorite(" + this.id + ")\" class=\"img-fluid favoritesHeart\">\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Name: " + this.name + "</h4>\n            <p class=\"card-text\">Age: " + this.age + "</p>\n            <p class=\"card-text\">Location: " + this.location + "</p>\n            <p class=\"card-text\">Hobbies: " + this.hobbies + "</p>\n            <p class=\"card-text\">Favorite Music: " + this.favorite_music + "</p>\n          </div>\n        </div>\n      </div>\n    ";
    };
    return Woman;
}(Person));
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(id, name, age, phrase, photo, location, hobbies, favorite_music, favorite) {
        var _this = _super.call(this, id, name, age, phrase, photo, location, hobbies, favorite_music) || this;
        _this.favorite = favorite;
        personArray.push(_this);
        return _this;
    }
    Man.prototype.personInfo = function () {
        return "\n      <div class=\"col-lg-3 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"relative\">\n            <img class=\"card-img-top\" src=\"" + this.photo + "\" alt=\"" + this.name + "\">\n            <div class=\"absolute\">\n              <img src=\"img/heart-" + this.favorite + ".png\" onclick=\"addFavorite(" + this.id + ")\" class=\"img-fluid peopleHeart\">\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">" + this.name + "</h4>\n            <p class=\"card-text\">" + this.phrase + "</p>\n          </div>\n        </div>\n      </div>\n    ";
    };
    ;
    Man.prototype.personDetails = function () {
        return "\n      <div class=\"col-lg-6 col-md-6 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"relative\">\n            <img class=\"card-img-top\" src=\"" + this.photo + "\" alt=\"" + this.name + "\">\n            <div class=\"absolute\">\n              <img src=\"img/heart-" + this.favorite + ".png\" onclick=\"addFavorite(" + this.id + ")\" class=\"img-fluid favoritesHeart\">\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Name: " + this.name + "</h4>\n            <p class=\"card-text\">Age: " + this.age + "</p>\n            <p class=\"card-text\">Location: " + this.location + "</p>\n            <p class=\"card-text\">Hobbies: " + this.hobbies + "</p>\n            <p class=\"card-text\">Favorite Music: " + this.favorite_music + "</p>\n          </div>\n        </div>\n      </div>\n    ";
    };
    ;
    return Man;
}(Person));
;
var daryl = new Man(0, 'Daryl ', 30, 'Driving fast on the highway', 'img/1m.jpg', 'Graz', 'Movies, concerts, swimming', 'Queen, Radiohead, Elton John', false);
var vicky = new Woman(1, 'Vicky', 24, 'I like walks in the forest.', 'img/1f.jpg', 'Vienna', 'Jogging, reading, traveling', 'Bach, Beethoven, Wagner', false);
var wayne = new Man(2, 'Wayne', 22, 'I\'m selfish, impatient and a little insecure.', 'img/2m.jpg', 'Salzburg', 'Knitting, Crocheting, Holiday Crafts', 'Daftpunk, Kraftwerk, Yello', false);
var shelly = new Woman(3, 'Shelly', 27, 'You\'ve gotta dance like there\'s nobody watching.', 'img/2f.jpg', 'Paris', 'Quilting, Paper Crafts, Collecting badges', 'DJ Ötzi, Andreas Gabalier, Helene Fischer', false);
var jayson = new Man(4, 'Jayson', 29, 'You only live once, but if you do it right, once is enough.', 'img/3m.jpg', 'Düsseldorf', 'Holiday Crafts, Sewing, Quilting', 'Imagine dragons, Juli, Oomph!', false);
var ada = new Woman(5, 'Ada', 27, 'It does not do to dwell on dreams and forget to live.', 'img/3f.jpg', 'Berlin', 'Jogging, reading, traveling', 'Bach, Beethoven, Wagner', false);
var john = new Man(6, 'John', 22, 'Insane means fewer cameras!.', 'img/4m.jpg', 'Salzburg', 'Knitting, Crocheting, Holiday Crafts', 'Panic at the Disco, Classics, Beatles', false);
var elma = new Woman(7, 'Elma', 31, 'Act first, explain later.', 'img/4f.jpg', 'Paris', 'Cycling, Crafts, Reading', 'Queen, Imagine dragons, Juli', false);
function generatePeople() {
    var peopleContent = '';
    for (var tempID in personArray) {
        peopleContent += personArray[tempID].personInfo();
    }
    ;
    $('#personContainer').replaceWith("<div class=\"row text-center mt-5\" id=\"personContainer\">" + peopleContent + "</div>");
}
;
function addFavorite(id) {
    if (personArray[id].favorite == false) {
        personArray[id].favorite = true;
        generatePeople();
        generateFavorites();
    }
    else if (personArray[id].favorite == true) {
        personArray[id].favorite = false;
        generatePeople();
        generateFavorites();
    }
    ;
}
;
function generateFavorites() {
    var favoriteContent = '';
    for (var tempID in personArray) {
        console.log('Foo! Outside the IF statement');
        if (personArray[tempID].favorite == true) {
            console.log('Foo! Inside the IF statement');
            favoriteContent += personArray[tempID].personDetails();
        }
    }
    ;
    $('#favoritesContainer').replaceWith("<div class=\"row text-center py-2\" id=\"favoritesContainer\">" + favoriteContent + "</div>");
}
