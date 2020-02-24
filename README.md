# LMSCF-Marin-CodeReview-06

## Version: 1.0, February 22nd, 2020
The finished result can be viewed here:  https://mbalabanov.github.io/LMSCF-Marin-CodeReview-06/

## 1. Goal (Must have)
A travel blog site with a list of locations, restaurants and events. The purpose is to practice using objects, classes and subclasses.

### 1.1 User Experience (Must have)
Three Areas on the Page:
- An area with *locations* as cards with a _photo_, a _name_ and an _address_. The bottom of the card shows the _creation date_. When you click on the photo or the name, a modal opens with additional information.
- An area with *restaurants* as cards with a _photo_, a _name_ and an _address_. The bottom of the card shows the _creation date_. Additionally, the _type of cuisine_ served in the restaurant should be visible. When you click on the photo or the name, a modal opens with additional information.
- An area with  *events* as cards with a _photo_, a _name_ and an _address_. The bottom of the card shows the _creation date_. Additionally, this type of card shows the _type of event_ (e.g. musical, rock concert, classical concert), the _ticket price_, the _event date_ and the _event time_. When you click on the photo or the name, a modal opens with additional information.

### 1.2 Two Pages with different Sorting (Should have)
There should be two additional pages called _index-asc.html_ and _index-desc.html_ that show the items sorted by their date of creation. The former should show the items in ascending order of creation, the latter should show the items in descending order of creation.

### 1.3 Nice to Have
A Jumbotron promotion at the top of the page with a welcome text would be nice.

## 2. Data Structure (Must have)
- Object class for *location* with the following attributes:
    - *id:* string
    - *classtype:* string (e.g. location, restaurant, event)
    - *name:* string
    - *description:* string
    - *city:* string
    - *zip:* string
    - *address:* string
    - *photo:* string (photos from Unsplash)
    - *credits:* string (photo credits on Unsplash)
    - *creationdate:* string

- This object class needs a method to push each created object into an array for later use.

*Two subclasses* are needed:
- *Restaurant* with the following attributes:
    - *type:* string (type of cuisine e.g. italian, asian, etc.)
- *Event* with the following attributes:
    - *price:* string (price of ticket)
    - *event date:* string
    - *event time:* string

## 3. Technologies
- Bootstrap
- jQuery
- TypeScript

## 4. Out of Scope (Won't have)
We will *not* use a JSON file. The data for the dating persons will be created as objects based on the classes/subclasses defined.
