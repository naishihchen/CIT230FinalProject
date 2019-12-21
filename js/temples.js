const requestURL = 'https://naishihchen.github.io/CIT230FinalProject/js/temples.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const templedata = jsonObject['temples'];
    for (let i = 0; i < templedata.length; i++ ) {
      if (templedata[i].availability == "closed") {
    	  let cardSection = document.createElement('section');
        let card = document.createElement('div');
		    let h2 = document.createElement('h3');
        let closures = document.createElement('p');

		    h2.textContent = "Closures";
            closures.textContent = templedata[i].name + " - " + templedata[i].dates;

    		card.appendChild(h2);
        card.appendChild(closures);

        cardSection.appendChild(card)
      
		    document.querySelector('div.cards').appendChild(cardSection);
        }
    	}
  });