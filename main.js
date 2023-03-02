    //change text
    const text = document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a,strong, em, meta');
    for (let i = 0; i <text.length; i++) {
        text[i].style.fontFamily = "Cursive";
        text[i].style.color = "black";
    }

    //change background
    const bg = document.querySelector('body');
    bg.style.backgroundColor = "black";
    bg.style.backgroundImage = `url("https://wallpaperaccess.com/full/5053320.jpg")`;
    bg.style.opacity = 0.5;

    //Add audio
    const audio = document.createElement('audio');
    audio.setAttribute("controls", "true");
    audio.setAttribute("autoplay", "true");
    document.body.appendChild(audio);

    const source = document.createElement("source");
    source.setAttribute("src", "https://archive.org/download/MusicOfTheRevolutionaryWar/CorkHornpipe.mp3");
    source.setAttribute("type", "audio/mpeg");


    audio.appendChild(source);
    audio.play();
    document.body.addEventListener("mouseover", () => {
        audio.play();
    })
