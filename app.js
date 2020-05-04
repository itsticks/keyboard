function createKeyboard(){
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  allowButton.style.display='none';
  var keyboard = document.createElement('ul');
//  keyboard.style.padding = '0';
//  keyboard.style.width='100%';
  keyboard.id = 'keyboard'; 

  var middleC = 40;
  var noOfKeys = keyboardLength.value;
  var middlePosition = (Math.ceil(noOfKeys/2));
  var keyset = pianoKeys.filter(x => x.number >= middleC-middlePosition && x.number <= middleC+middlePosition-1);

const keys = 
keyset.map((x,i)=>{
  x.id=i;
  x.name=(x.scientific.split('/').length>1?x.scientific.split('/')[0] : x.scientific).substring(0,2);
  x.color=keyColour(x.scientific);
  return x;
}).reverse();


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
  key.style.borderWidth = '1px';
  key.style.borderStyle = 'solid';
  let ogBorderColor = 'black';
  key.style.borderColor = ogBorderColor;

  key.style.width = (Math.floor(90/noOfKeys)).toString().concat('%');
  key.style.marginLeft = (k.color=='white' && keys[i-1]!=undefined && keys[i-1].color=='white') ? 0 : (-(Math.floor(90/noOfKeys))/4).toString().concat('%');
  key.style.cursor = 'grab';
  key.style.height = k.color === 'black' ? '70%' : '100%';
  key.className = k.color;
  let ogBgColor = k.color;
  key.style.backgroundColor = ogBgColor;
  key.style.color = k.color === 'black' ? 'white' : 'black';
  key.append(document.createTextNode(k.name));
  key.innerHTML = k.name;

  key.onmousedown = (e) => {
    key.style.cursor = 'grabbing';
    key.style.backgroundColor = `gold`;
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
document.getElementById('container').innerHTML = "";
document.getElementById('container').append(keyboard, keyboardLengthLabel, waveLabel);
}

function play(){
  keyElements.forEach(x=>{
    x.style.borderColor='black';
    x.style.borderWidth = '1px';
    x.style.borderStyle = 'solid';
  });
  notes = keyElements.shuffle().slice(0,level+1)
  .sort((a,b)=> parseInt(a.id) - parseInt(b.id));
  notes.forEach(x=>{
    x.style.borderColor='gold';
    x.style.borderWidth = '2px';
    x.style.borderStyle = 'solid';
  });
  playLevelNotes();
}

function pickNotes(){}

function keyColour(name){
return name.indexOf('♯') > -1 ? 'black' : 'white'; 
}

var keyboardLengthLabel = document.createElement('label');
var keyboardLength = document.createElement('input');
keyboardLength.type ='range';
keyboardLength.min = 2;
keyboardLength.max=88;
keyboardLength.step=1;
keyboardLength.value = 12;

keyboardLengthLabel.append(document.createTextNode('keyboardLength '),keyboardLength)

keyboardLength.onchange = ()=> createKeyboard();
var notes = [];
var keyElements = [];

var keyElem = null;

var waveLabel = document.createElement('label');
var waveSelect = document.createElement('select');
waveSelect.options.add(new Option("square","square"));
waveSelect.options.add(new Option("sine","sine"));
waveSelect.options.add(new Option("sawtooth","sawtooth"));
waveSelect.options.add(new Option("triangle","triangle", true, true));

waveLabel.append(document.createTextNode('waveForm '),waveSelect)

waveSelect.onchange = () => {
  createKeyboard()
}

var allowButton = document.createElement('button');
allowButton.append(document.createTextNode('Keyboard'));
document.getElementById('container').append(allowButton);

var playButton = document.createElement('button');
playButton.append(document.createTextNode('Play'));

allowButton.onclick = () => createKeyboard();


playButton.onclick = () => {
  playButton.disabled = true;
  play();
}