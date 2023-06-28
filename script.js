


let songIndex = 0;
let audioElement = new Audio('songs/0.m4a');
let progressBar = document.getElementById('progressBar');
let masterplay = document.getElementById('masterPlay');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let index= 0;
let Art =document.getElementById('AlbumArt');
let masterSongName = document.getElementById('masterSongName');
let time = document.getElementById('time');
let duration = document.getElementById('duration');



let songs =[
    {songName: "PurpleHearts", filePath:"songs/Purple Hearts - Summer Walker, Kendrick Lamar, Ghostface Killah", coverPath: "covers/0.jpg"},
    {songName: "Count Me Out", filePath:"songs/Count Me Out - Kendrick Lamar", coverPath: "covers/1.jpg"},
    {songName: "Alright", filePath:"songs/Alright - Kendrick Lamar", coverPath: "covers/2.jpg"},
    {songName: "Die Hard", filePath:"songs/Die Hard - Amanda Reifer, Blxst, Kendrick Lamar", coverPath: "covers/3.jpg"},
    {songName: "N95", filePath:"N95 - Kendrick Lamar", coverPath: "covers/4.jpg"},
    {songName: "HUMBLE", filePath:"songs/HUMBLE - Kendrick Lamar", coverPath: "covers/5.jpg"},
    {songName: "Mirror", filePath:"songs/Mirror - Kendrick Lamar", coverPath: "covers/6.jpg"},
    {songName: "untitled 08 09062014", filePath:"songs/untitled 08 09062014 - Kendrick Lamar", coverPath: "covers/7.jpg"},
    {songName: "family ties", filePath:"songs/family ties - Baby Keem, Kendrick Lamar", coverPath: "covers/8.jpg"},
    {songName: "King Kunta", filePath:"songs/King Kunta - Kendrick Lamar", coverPath: "covers/9.jpg"},


]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



//audioElement.play();
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audioElement.pause()
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');

        }
    
    
})






audioElement.addEventListener('timeupdate', ()=>{
    console.log(audioElement.duration);

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;   
     console.log(audioElement.currentTime) ;
     let minsec = convertTime(audioElement.currentTime);
     time.innerText = minsec;
     let totalTime = convertTime(audioElement.duration);
     duration.innerText = totalTime;
     
    

})



let convertTime = function(num){

    let minutes = Math.floor(num/60);
    if(minutes.toString().length === 1){
        minutes = '0' + minutes;
    }

    let seconds = Math.floor(num % 60);
    if(seconds.toString().length === 1){
        seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`;

}

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
    
    

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songlistplay')).forEach((element)=>{
        // console.log("11111",element.querySelector('.songItemPlay').classList);
        element.querySelector('.songItemPlay').classList.add('fa-play');
        element.querySelector('.songItemPlay').classList.remove('fa-pause');

    }
)}

Array.from(document.getElementsByClassName('songlistplay')).forEach((element) =>{
    element.querySelector('.songItemPlay').addEventListener('click', (e)=>{
        
        // console.log("123123", e.target.classList);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`songs/${index}.m4a`;
        audioElement.currentTime= 0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        Art.src=songs[index].coverPath;
        masterSongName.innerText= songs[index].songName;
        totalTime = convertTime(audioElement.duration);
        duration.innertext = audioElement.duration;
       
        

    })
})

document.getElementById('next').addEventListener('click', (e)=>{
    console.log(index)
    if(index>9){
        index=0;
    }
    else{
        index+=1;

    }
    masterSongName.innerText= songs[index].songName;
    audioElement.src=`songs/${index}.m4a`;
    audioElement.currentTime= 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    
    Art.src=songs[index].coverPath;
    
 

})

document.getElementById('previous').addEventListener('click', ()=>{

    if(index<=0){
        index=0;
    }
    else{
        index-=1;

    }
    masterSongName.innerText= songs[index].songName;
    audioElement.src=`songs/${index}.m4a`;
    audioElement.currentTime= 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    
    Art.src=songs[index].coverPath;
    
    

})

