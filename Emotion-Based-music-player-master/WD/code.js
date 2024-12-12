
var songrun=false;
var count=1;
var mod=1;
var path=["songs\\Jee Karda Badlapur 128 Kbps.mp3"
,"songs\\Aarambh Gulaal 320 Kbps.mp3"
,"songs\\Mila Toh Marega - Rakht Charitra 320 Kbps.mp3"
,"songs\\haareya.mp3"
,"songs\\ik vari aa.mp3"
,"songs\\Main Jahaan Rahoon Namastey London 128 Kbps.mp3"
,"songs\\Aayat Bajirao Mastani 320 Kbps.mp3"
,"songs\\Humdard Ek Villain 320 Kbps.mp3"
,"songs\\o sathi.mp3"
,"songs\\phir bhi.mp3"];

var sname=["Jee Karda Badlapur 128 Kbps",
"Aarambh Gulaal 320 Kbps",
"Mila Toh Marega - Rakht Charitra 320 Kbps",
"Haareya",
"Ik vari aa",
"Main Jahaan Rahoon Namastey London 128 Kbps",
"Aayat Bajirao Mastani",
"Humdard Ek Villain",
"o sathi",
"Phir Bhi"
];

var sd=["Song Name: Jee Karda<br>Album: Badlapur Singer(s): Divya Kumar",
"Artists: Song Name: Aarambh<br>Album: Gulaal Singer(s): Piyush Mishra"
,"Artists:Rakht Charitra<br>SingerDharam-Sandeep, Sandeep Patil,<br>Starcast:Shatrughan Sinha, Vivek Oberoi, Radhika Apte,"
,"Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Producer - Programming & Arranging"
,"Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017"
,"Artists: Song Name: Main Jahaan Rahoon <br>Album: Namastey London :Singer(s): Rahat Fateh Ali Khan, Krishna Beura<br>Starcast: Akshay Kumar,"
,"Artist: Arijit Singh<br>Album: Bajirao Mastan<br>Singer(s): Arijit Singh, Mujtaba Aziz Naza, Shadab, Altamash Faridi"
,"Artist: Humdard<br>Singer(s): Arijit Singh<br>Lead Star(s): Sidharth Malhotra, Shraddha Kapoor, Riteish Deshmukh"
,"Artist: Arijit Singh<br>Movie: Shab<br>Released: 2017"
,"Artists: Arijit Singh, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Written: 2001 (lyrics)<br>Lyricist(s): Manoj Muntashir<br>Composer(s): Mithoon"];


var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\1.jpg",
"images\\\\2.jpg",
"images\\\\3.jpg",
"images\\\\4.jpg",
"images\\\\5.jpg",
"images\\\\6.jpg",
"images\\\\7.jpg",
"images\\\\8.jpg",
"images\\\\9.jpg",
"images\\\\10.jpg"];

var mood=[["1","2","3"],["4","5"],["6","7","8"],["9","10"]];
var mmm=["1.png","1.png","1.png","2.png","2.png","3.png","3.png","3.png","4.png","4.png"];

var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	//ins.onclick=function(){
	//next(this);
  	//};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};
}




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;
		return;
	}
	if(bool[x]==true)
		return;

	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";

			songrun=true;
			document.getElementById("queue").removeChild(elem);
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
                else
                	moody(3);
            }


function searchSpotify() {
				// Get the input value (song name)
				var song = document.getElementById("songInput").value.trim();

				// If the input is empty, show an alert
				if (song === "") {
					alert("Please enter a song name.");
					return;
				}

				// Encode the song name to ensure it works in the URL
				var encodedSong = encodeURIComponent(song);

				// Open the Spotify search page with the song query
				var spotifySearchUrl = "https://open.spotify.com/search/" + encodedSong;

				// Redirect to Spotify search results
				window.open(spotifySearchUrl, "_blank");
			}


	// Lyrics associated with the songs
var lyrics = [
    "Jee Karda lyrics: Chalni kar de seena mera Chalni kar de seena mera Chalni kar de seena meraDaag saari goliyan ni ajj mera jee karda Marjaneya ni aaj mera jee karda Marjaneya ni mera jee karda Marjaneya ni aaj mera jee karda Mushqil kar de jeena meraMushqil kar de jeena meraMushqil kar de jeena meraHanste hanste mit jaaneya ni mera jee kardaMarjaneya ni ajj mera jee karda",

    "Aarambh lyrics: Aarambh hai prachand, bol mastako ke jhund...",
    "Mila Toh Marega lyrics: Yeh dil ka dard, samajh le yaar...",
    "Haareya lyrics: Haareya main dil haareya...",
    "Ik vari aa lyrics: Ik vari aa, meri jaan meri jaan...",
    "Main Jahaan Rahoon lyrics: Main jahaan rahoon, tere saath mein...",
    "Aayat lyrics: Ang Laga De Re, Mohe Rang Laga De Re...",
    "Humdard lyrics: Teri dard hai meri dua...",
    "O Sathi lyrics: O sathi tere bina, rahe na jina...",
    "Phir Bhi lyrics: Phir bhi tumko chaahunga..."
];

// Modify the play function to show lyrics
function play(elem) {
    console.log(elem.id);
    var x = elem.id.charAt(1);
    var z = songs[x][0];
    document.getElementById("sname").innerHTML = sname[x];
    document.getElementById("sel").src = z;
    document.getElementById("main_slider").load();
    document.getElementById("main_slider").play();
    document.getElementById("emoji").style.backgroundImage = "url('" + songs[x][3] + "')";
    songrun = true;

    // Display lyrics
    var lyricsDiv = document.getElementById("lyrics");
    var lyricsContent = document.getElementById("lyricsContent");

    if (lyrics[x]) {
        lyricsContent.innerHTML = lyrics[x];
        lyricsDiv.style.display = "block"; // Show the lyrics div
    } else {
        lyricsContent.innerHTML = "No lyrics available for this song.";
        lyricsDiv.style.display = "block"; // Show the div with a message
    }
}



