function generateItems() {
  let itemContent: string = '';

  for (let tempID in locationArray) {
    itemContent += itemArray[tempID].display();
  };

  $('#personContainer').replaceWith(`<div class="row text-center mt-5" id="personContainer">${peopleContent}</div>`);
};

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
