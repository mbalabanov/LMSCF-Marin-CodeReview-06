let locationArray = [];
let restaurantArray = [];
let eventArray = [];

class Location {
  id: string;
  name: string;
  description: string;
  city: string;
  zip: string;
  address: string;
  photo: string;
  favorite: boolean;

  constructor(id, name, city, zip, address, photo, favorite) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.zip = zip;
    this.address = address;
    this.photo = photo;
    this.favorite = favorite;
    locationArray.push(this);
  }
  display() {
    return `
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <div class="relative">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}">
            <div class="absolute">
              <img src="img/heart-${this.favorite}.png" onclick="addFavorite(${this.id})" class="img-fluid peopleHeart">
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">${this.name}, ${this.city}</h4>
            <p class="card-text">${this.address}, ${this.zip}, ${this.city}</p>
          </div>
        </div>
      </div>
    `;
  }
}

class Restaurant extends Location {
  type: string;
  locationid: string;
  phone: string;
  web: string;

  constructor(id, name, favorite, type, locationid, phone, web) {
    super(id, name, favorite);
    this.type = type;
    this.locationid = locationid;
    this.phone = phone;
    this.web = web;
    restaurantArray.push(this);
  }

  display() {
    return `
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <div class="relative">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}">
            <div class="absolute">
              <img src="img/heart-${this.favorite}.png" onclick="addFavorite(${this.id})" class="img-fluid peopleHeart">
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">${this.name}, ${this.city}</h4>
            <p class="card-text">${this.type}</p>
            <p class="card-text">${this.phone}, ${this.web}</p>
            <p class="card-text">${this.address}, ${this.zip}, ${this.city}</p>
          </div>
        </div>
      </div>
    `;
  }

}

class Event extends Location {
  type: string;
  eventdate: string;
  eventtime: string;
  ticketprice: string;

  constructor(id, name, type, city, zip, address, eventdate, eventtime, favorite, ticketprice) {
    super(id, name, city, zip, address, favorite);
    this.type = type;
    this.eventdate = eventdate;
    this.eventtime = eventtime;
    this.ticketprice = ticketprice;
    eventArray.push(this);
  }

  display() {
    return `
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <div class="relative">
            <img class="card-img-top" src="${this.photo}" alt="${this.name}">
            <div class="absolute">
              <img src="img/heart-${this.favorite}.png" onclick="addFavorite(${this.id})" class="img-fluid peopleHeart">
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">${this.name}, ${this.city}</h4>
            <p class="card-text">${this.type}, ticket price €${this.ticketprice}.00</p>
            <p class="card-text">${this.eventdate}, starts at ${this.eventtime}hr</p>
            <p class="card-text">${this.address}, ${this.zip}, ${this.city}</p>
          </div>
        </div>
      </div>
    `;
  }

}