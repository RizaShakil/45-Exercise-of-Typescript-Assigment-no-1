//Define the make album function
function musicalbum (artist_name : string , albumtitle : string , tracks? : number){
let album : {artist:string , title :string , tracks?:number} = {
    artist : artist_name,
    title : albumtitle,
};
if (tracks != undefined){
    album.tracks = tracks;
}
return album;
}

//callinng three function and cretaing three variable with different value

 let album1 = musicalbum("Riza","Album title 1");

 let album2 = musicalbum("Ruma","Album title 2");

 let album3 = musicalbum("Anna","Album title 3" , 22);

 //print value of our object created by function

 console.log(album1);

 console.log(album2);

 console.log(album3);
