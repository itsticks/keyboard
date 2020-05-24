var happyBirthdayLydia = {
  'notes':[
    {
      'key':'G3',
      'len':2,
      'syl':'ha',
      'pic':'A.JPG'
    },
    {
      'key':'G3',
      'len':2,
      'syl':'ha',
      'pic':'B.JPG'
    },
    {
      'key':'G3',
      'len':1,
      'syl':'ppy',
      'pic':'C.JPG'
    },
    {
      'key':'A4',
      'len':2,
      'syl':'birth',
      'pic':'D.JPG'
    },
    {
      'key':'G3',
      'len':2,
      'syl':'day',
      'pic':'E.JPG'
    },
    {
      'key':'C4',
      'len':2,
      'syl':'to',
      'pic':'F.JPG'
    },
    {
      'key':'B4',
      'len':3,
      'syl':'you',
      'pic':'G.JPG'
    },
    {
      'key':'G3',
      'len':2,
      'syl':'ha',
      'pic':'H.JPG'
    },
    {
      'key':'G3',
      'len':1,
      'syl':'ppy',
      'pic':'I.JPG'
    },
    {
      'key':'A4',
      'len':2,
      'syl':'birth',
      'pic':'J.JPG'
    },
    {
      'key':'G3',
      'len':2,
      'syl':'day',
      'pic':'K.JPG'
    },
    {
      'key':'D4',
      'len':2,
      'syl':'to',
      'pic':'L.JPG'
    },
    {
      'key':'C4',
      'len':3,
      'syl':'youu',
      'pic':'M.JPG'
    },
    {
      'key':'G3',
      'len':2,
      'syl':'ha',
      'pic':'N.JPG'
    },
    {
      'key':'G3',
      'len':2,
      'syl':'ppy',
      'pic':'O.JPG'
    },
    {
      'key':'G4',
      'len':3,
      'syl':'birthday',
      'pic':'P.JPG'
    },
    {
      'key':'E4',
      'len':3,
      'syl':'to',
      'pic':'Q.JPG'
    },
    {
      'key':'C3',
      'len':2,
      'syl':'ly',
      'pic':'R.JPG'
    },
    {
      'key':'B3',
      'len':1,
      'syl':'di',
      'pic':'S.JPG'
    },
    {
      'key':'A3',
      'len':4,
      'syl':'aa',
      'pic':'T.JPG'
    },
    {
      'key':'F3',
      'len':3,
      'syl':'ha',
      'pic':'U.JPG'
    },
    {
      'key':'F3',
      'len':2,
      'syl':'ppy',
      'pic':'V.JPG'
    },
    {
      'key':'E4',
      'len':3,
      'syl':'birth',
      'pic':'W.JPG'
    },
    {
      'key':'C4',
      'len':3,
      'syl':'day',
      'pic':'D.JPG'
    },
    {
      'key':'D4',
      'len':4,
      'syl':'to',
      'pic':'E.JPG'
    },
    {
      'key':'C4',
      'len':4,
      'syl':'you',
      'pic':'A.JPG'
    }
  ]
}

function loadImage(index){
  var song = happyBirthdayLydia;
  var arrayLength = song.notes.length;
  var img = new Image();
  img.onload = function(){
    if(index!=arrayLength-1){
      loadImage(index+1,arrayLength);
      console.log('imageLoaded')
    }
    else {
      console.log('imagesLoaded')
      return
    }
  }
  img.src = 'pics/' + song.notes[index].pic;
}

var loadImages = new Promise((loadImage) => {
    return loadImage(0);
  });


function playSong(song){
  var noteLen = 800;
  song.notes.forEach(function(n,i,arr){
var timeoutLen = arr.slice(0,i).reduce(function(accum,n2,i,arr2){
  return i>0 ? accum += arr2[i-1].len : 0
},0) * noteLen;
console.log(timeoutLen);
if(i>0){
setTimeout(function(){
  playNote(n)
},timeoutLen)
  }
  else{
    playNote(n)
  }
}
  )
}

function playNote(note){
document.getElementById(note.key).click();
document.getElementById('display').innerHTML=note.syl;
document.body.style.backgroundImage = 'url(pics/'+note.pic+')';
}

function FeedbackDelayNode(context, delay, feedback){
  this.filterNode = context.createBiquadFilter();
  this.convolver = context.createConvolver();

  this.filterNode.frequency.value = 5000;
  this.delayTime.value = delay;
  this.gainNode = context.createGain();
  this.gainNode.gain.value = feedback;
  this.connect(this.filterNode);
  this.filterNode.connect(this.gainNode);
  this.gainNode.connect(this);
}

function FeedbackDelayFactory(context, delayTime, feedback){
  var delay = context.createDelay(delayTime + 1);
  FeedbackDelayNode.call(delay, context, delayTime, feedback);
  return delay;
}

var AudioContext = window.AudioContext // Default
    || window.webkitAudioContext // Safari and old versions of Chrome
    || false; 

AudioContext.prototype.createFeedbackDelay = function(delay, feedback){
  return FeedbackDelayFactory(this, delay, feedback);
};

function makeDistortionCurve(amount) {
  var k = parseInt(amount),
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};

function createKeyboard(){
  if(audioCtx!==null){
  audioCtx.close()
  }

   audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  var keyboard = document.createElement('ul');
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
  let delayFeedbackNode = audioCtx.createGain();
  let delayNode  = audioCtx.createFeedbackDelay(2,parseFloat(delayFeedback.value))// audioCtx.createDelay(parseInt(5.0));
  let distortionNode = audioCtx.createWaveShaper();

  oscillator.connect(distortionNode);

  distortionNode.connect(gainNode);
  gainNode.connect(delayNode);

  delayNode.connect(gainNode);

  gainNode.connect(audioCtx.destination);
  delayNode.connect(audioCtx.destination);
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  oscillator.start();
  var key = document.createElement('li');
  key.id = k.name;
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
  let keyTextSpan = document.createElement('div');
  keyTextSpan.style.position = 'relative';
  keyTextSpan.style.bottom = 0;
  keyTextSpan.append(document.createTextNode(k.name));  
  key.append(keyTextSpan);
  //key.innerHTML = k.name;

  key.onclick = (e) => {
    delayNode.delayTime.setValueAtTime(parseInt(delayTime.value), audioCtx.currentTime);
    delayFeedbackNode.gain.value = parseInt(delayFeedback.value);
    
    distortionNode.curve = makeDistortionCurve(parseFloat(distortion.value));
    distortionNode.oversample = '4x';
    gainNode.gain.value = masterVolume.value;
    oscillator.type = waveSelect.value;

    key.style.cursor = 'grabbing';
    key.style.backgroundColor = `purple`;
    oscillator.frequency.setValueAtTime(parseInt(k.hz), audioCtx.currentTime);
    console.log(parseFloat(masterVolume.value), audioCtx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(parseFloat(masterVolume.value), audioCtx.currentTime + 0.01);     
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 4.3);    
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
document.getElementById('container').append(keyboard, masterVolumeLabel, waveLabel, distortionLabel,delayTimeLabel,delayFeedbackLabel,keyboardLengthLabel);
document.body.prepend(display);
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
var audioCtx = null;

var display = document.createElement('h1');
display.id = 'display';

var keyboardLengthLabel = document.createElement('label');
var keyboardLength = document.createElement('input');
var keyboardLengthDisplay = document.createElement('span');
keyboardLength.type ='range';
keyboardLength.min = 2;
keyboardLength.max=88;
keyboardLength.step=1;
keyboardLength.value = 36;
keyboardLengthDisplay.innerHTML = keyboardLength.value + " keys"
keyboardLengthLabel.append(document.createTextNode('sizeOfKeyboard '),keyboardLength,keyboardLengthDisplay)
keyboardLength.onchange = ()=> createKeyboard();
keyboardLength.oninput = () => {keyboardLengthDisplay.innerHTML = keyboardLength.value + " keys"}

var masterVolumeLabel = document.createElement('label');
var masterVolume = document.createElement('input');
var valueDisplay = document.createElement('span');
masterVolume.type ='range';
masterVolume.min = 0;
masterVolume.max=1;
masterVolume.step=0.01;
masterVolume.value = 0.5;
valueDisplay.innerHTML = parseInt(masterVolume.value*10);
masterVolumeLabel.append(document.createTextNode('volume '),masterVolume, valueDisplay)
// masterVolume.onchange = () => createKeyboard();
masterVolume.oninput = () => {valueDisplay.innerHTML = parseInt(masterVolume.value*10);}

var distortionLabel = document.createElement('label');
var distortion = document.createElement('input');
var distortionValueDisplay = document.createElement('span');

distortion.type ='range';
distortion.min = 100;
distortion.max=400;
distortion.step=1;
distortion.value = 200;
distortionValueDisplay.innerHTML = distortion.value
distortionLabel.append(document.createTextNode('distortion '),distortion, distortionValueDisplay)
// distortion.onchange = ()=> {createKeyboard();}
distortion.oninput = ()=>{distortionValueDisplay.innerHTML = distortion.value}

var delayTimeLabel = document.createElement('label');
var delayTime = document.createElement('input');
var delayTimeDisplay = document.createElement('span');
delayTime.type ='range';
delayTime.min = 0.0;
delayTime.max=5.0;
delayTime.step=0.01;
delayTime.value = 0.7;
delayTimeDisplay.innerHTML = delayTime.value;
delayTimeLabel.append(document.createTextNode('delayTime '),delayTime,delayTimeDisplay);
// delayTime.onchange = ()=> {createKeyboard();}
delayTime.oninput = ()=> {delayTimeDisplay.innerHTML = delayTime.value;}

var delayFeedbackLabel = document.createElement('label');
var delayFeedback = document.createElement('input');
var delayFeedbackDisplay = document.createElement('span');
delayFeedback.type ='range';
delayFeedback.min = 0;
delayFeedback.max=1;
delayFeedback.step=0.01;
delayFeedback.value = 0.4;
delayFeedbackDisplay.innerHTML = delayFeedback.value;
delayFeedbackLabel.append(document.createTextNode('delayFeedback '),delayFeedback,delayFeedbackDisplay);
//delayFeedback.onchange = () => {createKeyboard()}
delayFeedback.oninput = () => {delayFeedbackDisplay.innerHTML = delayFeedback.value;}

var notes = [];
var keyElements = [];
var keyElem = null;

var waveLabel = document.createElement('label');
var waveSelect = document.createElement('select');
waveSelect.options.add(new Option("square","square"));
waveSelect.options.add(new Option("sine","sine"));
waveSelect.options.add(new Option("triangle","triangle"));
waveSelect.options.add(new Option("sawtooth","sawtooth", true, true));

waveLabel.append(document.createTextNode('wave '),waveSelect)

// waveSelect.onchange = () => {createKeyboard()}

var allowButton = document.getElementById('run');

allowButton.onclick = () => loadImages.then(function(){
  console.log('imagesPromiseFulfilled');
  createKeyboard();
  setTimeout(function(){
    playSong(happyBirthdayLydia);
  },3000);
});

