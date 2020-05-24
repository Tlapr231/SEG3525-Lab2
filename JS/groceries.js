/* Une portion de ce code a été pris de https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery (Caroline Barriere) */

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

//Note that i went on the metro grecery store web site for the prices on the items. https://www.metro.ca/en/online-grocery/
var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		vegan: true,
		dairyF: true,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		vegan: false,
		dairyF: false,
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: true,
		price: 9.99
	},
	{
		name: "Bananas",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		vegan: true,
		dairyF: true,
		price: 2.46
	},
	{
		name: "Tomatoe",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		vegan: true,
		dairyF: true,
		price: 1.32
	},
	{
		name: "Raspberries",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		vegan: true,
		dairyF: true,
		price: 3.99
	},
	{
		name: "Onion",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		vegan: true,
		dairyF: true,
		price: 1.65
	},
	{
		name: "Milk",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: false,
		price: 4.49
	},
	{
		name: "Eggs",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: true,
		price: 2.69
	},
	{
		name: "Butter",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: false,
		price: 4.49
	},
	{
		name: "Shredded Cheese",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: false,
		price: 5.99
	},
	{
		name: "Whole Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		vegan: false,
		dairyF: true,
		price: 13.14
	},
	{
		name: "T-Bone Steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: true,
		price: 14.78
	},
	{
		name: "Bacon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: true,
		price: 3.99
	}
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
// Restriction is an array of boolean values : [Vegetarian, GlutenFree, organic, Vegan, Dairy Free]

//Si une restriction est en place et l'item ne repond pas au exigence, on le skip (avec continue)
//s'il remplie toute les condition, on l'ajoute a la liste. 

function restrictListProducts(prods, restriction) {
	let restrictedProduct = [];
	for (let i=0; i<prods.length; i+=1) {
		//Vegetarian
		if ((restriction[0]) && (!prods[i].vegetarian)){
			continue;
		}
		//Gluten-Free
		if ((restriction[1]) && (!prods[i].glutenFree)){
			continue;
		}
		//organic
		if ((restriction[2]) && (!prods[i].organic)){
			continue;
		}
		//vegan 
		if ((restriction[3]) && (!prods[i].vegan)){
			continue;
		}
		//dairy Free
		if ((restriction[4]) && (!prods[i].dairyF)){
			continue;
		}
		restrictedProduct.push(prods[i]);
	}
	return restrictedProduct;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let index=0; index<products.length; index+=1) {
		if (chosenProducts.indexOf(products[index].name) > -1){
			totalPrice += products[index].price;
		}
	}
	// I was getting a weird price bug here sometimes so this line is needed
	totalPrice = Math.round(totalPrice * 100) / 100;
	return totalPrice;
}