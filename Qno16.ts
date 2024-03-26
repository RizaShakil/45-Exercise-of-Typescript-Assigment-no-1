
//create a guestlist array
let guestlist = ["Anna","Ruma","Ifra","Muskan"];
//make variable for the guest who can't came
let notcome= guestlist[2];
//print the name of the guest who can't come
console.log(notcome,"Nhi A Sakti");
//add a new person name in a array and remove one name
guestlist.splice(1,2, "samia");
//print the message of all guest and tell them that we have a big table 
console.log("i have a Good News ! We have found a bigger table for a Dinner in my house");
//add a guest in a beggining of array
guestlist.unshift("Samia");
//add a guest in a end of the array
guestlist.push("Sehar");
//get a middle pont of our guest list array
let middleguest:number = Math.floor( guestlist.length/2);
//add a guest in the middle of the array
guestlist.splice(middleguest,0,"Dua");
//confirm our update is write or not
console.log("updated guestlist of our dinner");
//print and send a message of our guest to invite for dinner
guestlist.forEach(newone => console.log(`Asalam o Alikum ${newone} Would you like to come for a dinner in my house`));
