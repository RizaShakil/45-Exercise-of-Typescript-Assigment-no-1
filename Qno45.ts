
function cardetails (manufacturer :string , modelname :string , ...additionalinfo){
      const car = {
        manufacturer , modelname , ...Object.fromEntries(additionalinfo)
      }

      return car
};

const cardetail = cardetails("Farari","Farari", ["color","black"],["year",2022]);

console.log(cardetail);