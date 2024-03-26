let guestlist = ["Ruma","Anna","Muskan"];
let notcome = guestlist [2];
console.log(notcome ,"Nhi A rahe");
guestlist.splice(2,1,"Ifra");
guestlist.forEach(guest => console.log(`Hello  ${guest}  Would you like to come my house for Dinner`) );