
 const quote = document.querySelector('.quote');
 const author = document.querySelector('.author');
 const button = document.querySelector('.bt');
 const song = document.querySelector('#song');
 const playicon = document.getElementById('playicon');
 const text = document.querySelector('.text');
console.log(4+6);

 const getquotes = async () =>{
    try{
        const res = await fetch('https://type.fit/api/quotes');
        const data = await res.json();
        console.log(data);
        let ran = Math.ceil(Math.random()*1642);
        const motquote = data[ran].text;
        const authorname = data[ran].author;
        quote.innerText = motquote;
        author.innerText = authorname;
    }catch(err){
        console.log(err);
    } 
 }
 const played =() =>{
    if(song.paused){
        song.play();
        playicon.src = "pause.png";
        text.innerText = "Click here to pause music"
    }
    else{
        song.pause();
        playicon.src = "play.png";
    }
 }

 button.addEventListener('click',getquotes);
 playicon.addEventListener('click',played);
 getquotes();
