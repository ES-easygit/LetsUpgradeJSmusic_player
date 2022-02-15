var songs=[
     
  {
    id:1,
    imgsrc:"./images/backstreet-boys-thumbnail.png",
    sngsrc:"./Songs/Blue - One Love (Lyrics _ Lyric Video).mp3",
    title:"One Love - BackStreet Boys"

  },

  {
    id:2,
    imgsrc:"./images/bajrangibhaijaan.jpg",
    sngsrc:"./Songs/'Bhar Do Jholi Meri' FULL VIDEO Song - Adnan Sami _ Bajrangi Bhaijaan _ Salman Khan Pritam.mp3",
    title:"Bhardo Jholi - Adnan Sami"
  },

  {
    id:3,
    imgsrc:"./images/brokenangel.jpeg",
    sngsrc:"./Songs/Arash - Broken Angel ( Feat.Helena) ( Full English version lyrics ).mp3",
    title:"Broken Angel - Arash"
  },

  {
    id:4,
    imgsrc:"./images/ed_sharan.jpeg",
    sngsrc:"./Songs/Ed Sheeran - Shape of You (Lyrics).mp3",
    title:"ed-sharan - Ed Sharan"
  },

  {
     id:5,
     imgsrc:"./images/guru.webp",
     sngsrc:"./Songs/A.R. Rahman - Barso Re Best Video_Guru_Aishwarya Rai_Shreya Ghoshal_Uday Mazumdar.mp3",
     title:"Barso Re - Shreya Ghoshal"

  },

  {
    id:6,
    imgsrc:"./images/kedarnath.jpeg",
    sngsrc:"./Songs/Namo Namo - Lyrical _ Kedarnath _ Sushant Rajput _ Sara Ali Khan _ Amit Trivedi _ Amitabh B.mp3",
    title:"Namo Namo - Amit Trivedi"
  },

  {
    id:7,
    imgsrc:"./images/pk.jpeg",
    sngsrc:"./Songs/'Bhagwan Hai Kahan Re Tu' FULL VIDEO Song _ PK _ Aamir Khan _ Anushka Sharma _ T-series.mp3",
    title:"Bhagwan Hai - Sonu Nigam"
  },

  {
    id:8,
    imgsrc:"./images/rangdebasanti.jpg",
    sngsrc:"./Songs/A.R. Rahman - Luka Chuppi Best Audio Song_Rang De Basanti_Aamir Khan_Lata Mangeshkar_Soha.mp3",
    title:"Luka Chuppi - Lata Mangeshkar"
  },

  {
    id:9,
    imgsrc:"./images/taal-et00055411-30-03-2017-06-27-40.webp",
    sngsrc:"./Songs/Taal Se Taal Lyrical - Taal _ Aishwarya Rai, Akshaye Khanna, Anil Kapoor _A R Rahman _ Anand Bakshi.mp3",
    title:"Taal Se Taal - Alka Yagnik"
  },
]

function playAudio(songid){
  var song = songs.find(function(song,index)
  {
    return song.id===songid
  });
  document.getElementById("img").src=song.imgsrc;
  document.getElementById("sng").src=song.sngsrc;
  document.getElementById("title1").innerText=song.title;
  document.getElementById("sng").play();
}