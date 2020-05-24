/* Une portion de ce code a été pris de https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery (Caroline Barriere) */

// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

// I am using inspiration from BootStraps Cards to display the items (https://getbootstrap.com/docs/4.0/components/card/) 
// However all of the css is mine. only the html is form bootsrap (i didnt want to import bootstrap mid-project

// Here is my template
/* 

<div class="card">
	<img class="card" src="images/brocoli.png" alt="Brocoli">
	<div class="card-body">
		<h2>Brocoli</h2>
  		<label class="card">
			10.99 $
			<input class="css-checkbox" type="checkbox" name="" id="">
  		</label>
	</div>
</div> 

*/


function populateListProductChoices(slct1, slct2) {
    var booleanArray = slct1;
    var productTab = document.getElementById(slct2);
	
	// productTab represents the <div> in the Products tab, which shows the product list, so we first set it empty
	productTab.innerHTML = "";
	
	// Sort method by https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value
	// Edited by Thierry Laprade #300067788
	products.sort(function(a, b) {
		var keyA = a.price;
		var keyB = b.price;
		// Compare the 2 prices
		if (keyA < keyB) return -1;
		if (keyA > keyB) return 1;
		return 0;
	});

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, booleanArray);
		
	for (i = 0; i < optionArray.length; i++) {
		var divCard = document.createElement("div");
		divCard.className  = "card";

		var image = document.createElement("img");
		image.className  = "card";
		image.src = `images/${optionArray[i].name}.png`;
		image.alt = optionArray[i].name;
		divCard.appendChild(image);

		var divCardBody = document.createElement("div");
		divCardBody.className  = "card-body";
		
		var labelCard = document.createElement("label");
		labelCard.className  = "card";
		
		var h2Card = document.createElement("h2");
		h2Card.innerText = optionArray[i].name;
		labelCard.appendChild(h2Card);
		
		labelCard.innerHTML += optionArray[i].price;

		var inputCard = document.createElement("input");
		inputCard.type = "checkbox";
		inputCard.name = "product";
		inputCard.value = optionArray[i].name;
		labelCard.appendChild(inputCard);

		divCardBody.appendChild(labelCard);

		divCard.appendChild(divCardBody);

		productTab.appendChild(divCard);
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var cart = document.getElementById('displayCart');
	cart.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("p");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	cart.appendChild(para);

	var cartBody = document.createElement("div");
	cartBody.className = "products";

	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {

			// find the product object
			for (let j=0; j<products.length; j+=1) {
				if (ele[i].value.indexOf(products[j].name) > -1){
					cartBody.appendChild(populateCartWithProduct(products[j]));
				}
			}

			chosenProducts.push(ele[i].value);
		}
	}
	// add paragraph and total price
	cart.appendChild(cartBody);
	cart.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}


function populateCartWithProduct(product) {
	var divCard = document.createElement("div");
	divCard.className  = "card";

	var image = document.createElement("img");
	image.className  = "card";
	image.src = `images/${product.name}.png`;
	image.alt = product.name;
	divCard.appendChild(image);

	var divCardBody = document.createElement("div");
	divCardBody.className  = "card-body";
	
	var h2Card = document.createElement("h2");
	h2Card.innerText = product.name;
	divCardBody.appendChild(h2Card);

	var labelCard = document.createElement("label");
	labelCard.className  = "card";
	labelCard.innerText = product.price;

	divCardBody.appendChild(labelCard);

	divCard.appendChild(divCardBody);

	return divCard;
}