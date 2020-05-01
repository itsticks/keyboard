// for(i = 0; i < 1114112; i++){
//     document.body.append(document.createTextNode(String.fromCharCode(i)));
// }

function createKeyboard(){
  
  allowButton.style.display='none';
  var keyboard = document.createElement('ul');
  keyboard.style.padding = '0';
  keyboard.style.width='100%';
  keyboard.id = keyboard;

keys.forEach((k,i) => {
  let oscillator = audioCtx.createOscillator();
  let gainNode = audioCtx.createGain();
  oscillator.type = waveSelect.value;
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  oscillator.start();
  var key = document.createElement('li');
  key.id = k.id;
  key.dataset.name = k.name;
  key.style.display = 'inline-block';
  key.style.borderWidth = '1px';
  key.style.borderStyle = 'dotted';
  let ogBorderColor = 'black';
  key.style.borderColor = ogBorderColor;

  key.style.width = (Math.floor(99/noOfKeys)).toString().concat('%');
  key.style.cursor = 'grab';
  key.style.height = k.color === 'black' ? '30%' : '50%';
  key.className = k.color;
  let ogBgColor = k.color;
  key.style.backgroundColor = ogBgColor;
  key.style.color = k.color === 'black' ? 'white' : 'black';
  key.append(document.createTextNode(k.name));
  key.innerHTML = k.name;

  key.onmousedown = (e) => {
    key.style.cursor = 'grabbing';
    key.style.backgroundColor = `red`;
    oscillator.frequency.setValueAtTime(parseInt(k.hz), audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
        1, audioCtx.currentTime + 0.01
    );     
    gainNode.gain.exponentialRampToValueAtTime(
        0.00001, audioCtx.currentTime + 4.3
    );    
    setTimeout(function(){
          key.style.cursor = 'grab';
          key.style.opacity = 1;
          key.style.backgroundColor = ogBgColor;
          key.style.borderColor = ogBorderColor;
          document.body.style.backgroundColor = `white`;
    },1000)
  }

  keyboard.append(key);
  keyElements.push(key);
});

document.getElementById('container').append(keyboard,levelSelectLabel,playButton);
}

function play(){
  keyElements.forEach(x=>{
    x.style.borderColor='black';
    x.style.borderWidth = '1px';
    x.style.borderStyle = 'dotted';
  });
  notes = keyElements.shuffle().slice(0,level+1)
  .sort((a,b)=> parseInt(a.id) - parseInt(b.id));
  notes.forEach(x=>{
    x.style.borderColor='red';
    x.style.borderWidth = '2px';
    x.style.borderStyle = 'solid';
  });
  playLevelNotes();
}

function pickNotes(){

}


function keyColour(name){
return name.indexOf('♯') > -1 ? 'black' : 'white'; 
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var notes = [];
var keyElements = [];
//
var started = false;
var animationCount = 0;
var middleC = 40;
var noOfKeys = 10;
var middlePosition = (Math.ceil(noOfKeys/2));
var keyset = pianoKeys.filter(x => x.number >= middleC-middlePosition && x.number <= middleC+middlePosition-1);
var level = 1;

const keys = 
keyset.map((x,i)=>{
  x.id=i;
  x.name=x.scientific;
  x.color=keyColour(x.scientific);
  return x;
}).reverse();


var sequence = keys.filter(x=>x.name>1);
var keyElem = null;

var colorCount = 0;
var frame = 0;
var frameL = 199; //5,7,11,37,59, 131, 137,199 (prime number selection)

var waveSelect = document.createElement('select');
waveSelect.options.add(new Option("square","square"));
waveSelect.options.add(new Option("sine","sine"));
waveSelect.options.add(new Option("sawtooth","sawtooth"));
waveSelect.options.add(new Option("triangle","triangle", true, true));

waveSelect.onchange = () => {
  oscillator.type = waveSelect.value;
}

var levelSelect = document.createElement('select');

var levelOptions = [1,2,3,4,5].map((x,i)=>{
  var option = document.createElement('option');
  option.value = x;
  option.id = 'level-'+x;
  option.append(document.createTextNode(x));
  option.selected = i==0 ? true: false;
  option.disabled = i > 0 ? true : false;
  levelSelect.append(option);
  return option;
})

levelSelect.onchange = () => {
  level = parseInt(levelSelect.value);
}

var levelSelectLabel = document.createElement('label');
levelSelectLabel.append(document.createTextNode('level '),levelSelect)

var allowButton = document.createElement('button');
allowButton.append(document.createTextNode('Keyboard'));
document.getElementById('container').append(allowButton);
var randomButton = document.createElement('button');
randomButton.append(document.createTextNode('random keys ∞'));
var playButton = document.createElement('button');
playButton.append(document.createTextNode('Play'));

allowButton.onclick = () => {
  createKeyboard();
}

playButton.onclick = () => {
  playButton.disabled = true;
  play();
}









