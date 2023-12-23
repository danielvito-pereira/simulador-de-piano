const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".valolume-slider input") //volume


const keysCheckd = document.querySelector(".keys-check input")


let mapedkyes = [];


let audio = new Audio("/src/tunes/a.wav")

const playTune = (key) => {
  audio.src = `/src/tunes/${key}.wav`
  audio.play();


  const clickedkey = document.querySelector(`[data-key="${key}"]`)//pegando o elemento data-key equivalente a letra para adicionar a classe css
  clickedkey.classList.add("active")//adiciona a classe 
  setTimeout(() =>{//cria um contador que remove a classe em 150 mile segundos 
    clickedkey.classList.remove("active")
  },150)
};

pianoKeys.forEach((key) =>{
  key.addEventListener("click",()=>playTune(key.dataset.key))
  mapedkyes.push(key.dataset.key)
})

document.addEventListener("keydown",(e)=>{
  if(mapedkyes.includes(e.key)){
    playTune(e.key)
  }

})

const showHidekeys = () => {
  pianoKeys.forEach((key)=> 
  key.classList.toggle("hide"));
}

const handlevolume = (e) =>{//controla o volume 
  audio.volume = e.target.value;
}


volumeSlider.addEventListener("input", handlevolume);

keysCheckd.addEventListener("click", showHidekeys);