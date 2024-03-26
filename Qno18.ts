//making a arry of countries and place it original order
let countrytoexplore:string[] = ["Maldives","Turkey","Saudia","China"];
console.log("Original Order",countrytoexplore)
//Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order",[...countrytoexplore].sort());
//Show that your array is still in its original order by printing it.
console.log("stille in original order",countrytoexplore);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("reverse order",[...countrytoexplore].reverse());
//Show that your array is still in its original order by printing it again.
console.log("stille in original order",countrytoexplore);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Original arry reverse",countrytoexplore.reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to original order",countrytoexplore.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("sorted in alphabetical order",countrytoexplore.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Original arry reverse again",countrytoexplore.reverse());
