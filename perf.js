// https://en.wikipedia.org/wiki/Piano_key_frequencies
// https://roelhollander.eu/tuning-frequency/sound-light-colour/
const pianoKeys = JSON.parse('[{"number":"108","helmholtz":"b′′′′′","scientific":"B8","hz":"7902.133","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"107","helmholtz":"a♯′′′′′/b♭′′′′′","scientific":"A♯8/B♭8","hz":"7458.620","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"106","helmholtz":"a′′′′′","scientific":"A8","hz":"7040.000","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"105","helmholtz":"g♯′′′′′/a♭′′′′′","scientific":"G♯8/A♭8","hz":"6644.875","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"104","helmholtz":"g′′′′′","scientific":"G8","hz":"6271.927","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"103","helmholtz":"f♯′′′′′/g♭′′′′′","scientific":"F♯8/G♭8","hz":"5919.911","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"102","helmholtz":"f′′′′′","scientific":"F8","hz":"5587.652","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"101","helmholtz":"e′′′′′","scientific":"E8","hz":"5274.041","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"100","helmholtz":"d♯′′′′′/e♭′′′′′","scientific":"D♯8/E♭8","hz":"4978.032","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"99","helmholtz":"d′′′′′","scientific":"D8","hz":"4698.636","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"98","helmholtz":"c♯′′′′′/d♭′′′′′","scientific":"C♯8/D♭8","hz":"4434.922","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"88","helmholtz":"c′′′′′ 5-line octave","scientific":"C8 Eighth octave","hz":"4186.009","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"87","helmholtz":"b′′′′","scientific":"B7","hz":"3951.066","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"86","helmholtz":"a♯′′′′/b♭′′′′","scientific":"A♯7/B♭7","hz":"3729.310","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"85","helmholtz":"a′′′′","scientific":"A7","hz":"3520.000","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"84","helmholtz":"g♯′′′′/a♭′′′′","scientific":"G♯7/A♭7","hz":"3322.438","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"83","helmholtz":"g′′′′","scientific":"G7","hz":"3135.963","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"82","helmholtz":"f♯′′′′/g♭′′′′","scientific":"F♯7/G♭7","hz":"2959.955","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"81","helmholtz":"f′′′′","scientific":"F7","hz":"2793.826","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"80","helmholtz":"e′′′′","scientific":"E7","hz":"2637.020","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"79","helmholtz":"d♯′′′′/e♭′′′′","scientific":"D♯7/E♭7","hz":"2489.016","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"78","helmholtz":"d′′′′","scientific":"D7","hz":"2349.318","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"77","helmholtz":"c♯′′′′/d♭′′′′","scientific":"C♯7/D♭7","hz":"2217.461","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"76","helmholtz":"c′′′′ 4-line octave","scientific":"C7 Double high C","hz":"2093.005","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"75","helmholtz":"b′′′","scientific":"B6","hz":"1975.533","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"74","helmholtz":"a♯′′′/b♭′′′","scientific":"A♯6/B♭6","hz":"1864.655","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"73","helmholtz":"a′′′","scientific":"A6","hz":"1760.000","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"72","helmholtz":"g♯′′′/a♭′′′","scientific":"G♯6/A♭6","hz":"1661.219","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"71","helmholtz":"g′′′","scientific":"G6","hz":"1567.982","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"70","helmholtz":"f♯′′′/g♭′′′","scientific":"F♯6/G♭6","hz":"1479.978","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"69","helmholtz":"f′′′","scientific":"F6","hz":"1396.913","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"68","helmholtz":"e′′′","scientific":"E6","hz":"1318.510","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"67","helmholtz":"d♯′′′/e♭′′′","scientific":"D♯6/E♭6","hz":"1244.508","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"66","helmholtz":"d′′′","scientific":"D6","hz":"1174.659","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"65","helmholtz":"c♯′′′/d♭′′′","scientific":"C♯6/D♭6","hz":"1108.731","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"64","helmholtz":"c′′′ 3-line octave","scientific":"C6 Soprano C (High C)","hz":"1046.502","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"63","helmholtz":"b′′","scientific":"B5","hz":"987.7666","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"62","helmholtz":"a♯′′/b♭′′","scientific":"A♯5/B♭5","hz":"932.3275","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"61","helmholtz":"a′′","scientific":"A5","hz":"880.0000","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"60","helmholtz":"g♯′′/a♭′′","scientific":"G♯5/A♭5","hz":"830.6094","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"59","helmholtz":"g′′","scientific":"G5","hz":"783.9909","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"58","helmholtz":"f♯′′/g♭′′","scientific":"F♯5/G♭5","hz":"739.9888","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"57","helmholtz":"f′′","scientific":"F5","hz":"698.4565","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"56","helmholtz":"e′′","scientific":"E5","hz":"659.2551","violin":"E","viola":"","cello":"","bass":"","guitar":""},{"number":"55","helmholtz":"d♯′′/e♭′′","scientific":"D♯5/E♭5","hz":"622.2540","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"54","helmholtz":"d′′","scientific":"D5","hz":"587.3295","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"53","helmholtz":"c♯′′/d♭′′","scientific":"C♯5/D♭5","hz":"554.3653","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"52","helmholtz":"c′′ 2-line octave","scientific":"C5 Tenor C","hz":"523.2511","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"51","helmholtz":"b′","scientific":"B4","hz":"493.8833","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"50","helmholtz":"a♯′/b♭′","scientific":"A♯4/B♭4","hz":"466.1638","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"49","helmholtz":"a′","scientific":"A4 A440","hz":"440.0000","violin":"A","viola":"A","cello":"","bass":"","guitar":""},{"number":"48","helmholtz":"g♯′/a♭′","scientific":"G♯4/A♭4","hz":"415.3047","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"47","helmholtz":"g′","scientific":"G4","hz":"391.9954","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"46","helmholtz":"f♯′/g♭′","scientific":"F♯4/G♭4","hz":"369.9944","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"45","helmholtz":"f′","scientific":"F4","hz":"349.2282","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"44","helmholtz":"e′","scientific":"E4","hz":"329.6276","violin":"","viola":"","cello":"","bass":"","guitar":"High E"},{"number":"43","helmholtz":"d♯′/e♭′","scientific":"D♯4/E♭4","hz":"311.1270","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"42","helmholtz":"d′","scientific":"D4","hz":"293.6648","violin":"D","viola":"D","cello":"","bass":"","guitar":""},{"number":"41","helmholtz":"c♯′/d♭′","scientific":"C♯4/D♭4","hz":"277.1826","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"40","helmholtz":"c′ 1-line octave","scientific":"C4 Middle C","hz":"261.6256","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"39","helmholtz":"b","scientific":"B3","hz":"246.9417","violin":"","viola":"","cello":"","bass":"","guitar":"B"},{"number":"38","helmholtz":"a♯/b♭","scientific":"A♯3/B♭3","hz":"233.0819","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"37","helmholtz":"a","scientific":"A3","hz":"220.0000","violin":"","viola":"","cello":"A","bass":"","guitar":""},{"number":"36","helmholtz":"g♯/a♭","scientific":"G♯3/A♭3","hz":"207.6523","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"35","helmholtz":"g","scientific":"G3","hz":"195.9977","violin":"G","viola":"G","cello":"","bass":"","guitar":"G"},{"number":"34","helmholtz":"f♯/g♭","scientific":"F♯3/G♭3","hz":"184.9972","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"33","helmholtz":"f","scientific":"F3","hz":"174.6141","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"32","helmholtz":"e","scientific":"E3","hz":"164.8138","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"31","helmholtz":"d♯/e♭","scientific":"D♯3/E♭3","hz":"155.5635","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"30","helmholtz":"d","scientific":"D3","hz":"146.8324","violin":"","viola":"","cello":"D","bass":"","guitar":"D"},{"number":"29","helmholtz":"c♯/d♭","scientific":"C♯3/D♭3","hz":"138.5913","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"28","helmholtz":"c small octave","scientific":"C3","hz":"130.8128","violin":"","viola":"C","cello":"","bass":"","guitar":""},{"number":"27","helmholtz":"B","scientific":"B2","hz":"123.4708","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"26","helmholtz":"A♯/B♭","scientific":"A♯2/B♭2","hz":"116.5409","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"25","helmholtz":"A","scientific":"A2","hz":"110.0000","violin":"","viola":"","cello":"","bass":"","guitar":"A"},{"number":"24","helmholtz":"G♯/A♭","scientific":"G♯2/A♭2","hz":"103.8262","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"23","helmholtz":"G","scientific":"G2","hz":"97.99886","violin":"","viola":"","cello":"G","bass":"G","guitar":""},{"number":"22","helmholtz":"F♯/G♭","scientific":"F♯2/G♭2","hz":"92.49861","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"21","helmholtz":"F","scientific":"F2","hz":"87.30706","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"20","helmholtz":"E","scientific":"E2","hz":"82.40689","violin":"","viola":"","cello":"","bass":"","guitar":"Low E"},{"number":"19","helmholtz":"D♯/E♭","scientific":"D♯2/E♭2","hz":"77.78175","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"18","helmholtz":"D","scientific":"D2","hz":"73.41619","violin":"","viola":"","cello":"","bass":"D","guitar":""},{"number":"17","helmholtz":"C♯/D♭","scientific":"C♯2/D♭2","hz":"69.29566","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"16","helmholtz":"C great octave","scientific":"C2 Deep C","hz":"65.40639","violin":"","viola":"","cello":"C","bass":"","guitar":""},{"number":"15","helmholtz":"B͵","scientific":"B1","hz":"61.73541","violin":"","viola":"","cello":"","bass":"","guitar":"Low B (7 string)"},{"number":"14","helmholtz":"A♯͵/B♭͵","scientific":"A♯1/B♭1","hz":"58.27047","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"13","helmholtz":"A͵","scientific":"A1","hz":"55.00000","violin":"","viola":"","cello":"","bass":"A","guitar":""},{"number":"12","helmholtz":"G♯͵/A♭͵","scientific":"G♯1/A♭1","hz":"51.91309","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"11","helmholtz":"G͵","scientific":"G1","hz":"48.99943","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"10","helmholtz":"F♯͵/G♭͵","scientific":"F♯1/G♭1","hz":"46.24930","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"9","helmholtz":"F͵","scientific":"F1","hz":"43.65353","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"8","helmholtz":"E͵","scientific":"E1","hz":"41.20344","violin":"","viola":"","cello":"","bass":"E","guitar":""},{"number":"7","helmholtz":"D♯͵/E♭͵","scientific":"D♯1/E♭1","hz":"38.89087","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"6","helmholtz":"D͵","scientific":"D1","hz":"36.70810","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"5","helmholtz":"C♯͵/D♭͵","scientific":"C♯1/D♭1","hz":"34.64783","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"4","helmholtz":"C͵ contra-octave","scientific":"C1 Pedal C","hz":"32.70320","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"3","helmholtz":"B͵͵","scientific":"B0","hz":"30.86771","violin":"","viola":"","cello":"","bass":"B (5 string)","guitar":""},{"number":"2","helmholtz":"A♯͵͵/B♭͵͵","scientific":"A♯0/B♭0","hz":"29.13524","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"1","helmholtz":"A͵͵","scientific":"A0","hz":"27.50000","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"97","helmholtz":"G♯͵͵/A♭͵͵","scientific":"G♯0/A♭0","hz":"25.95654","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"96","helmholtz":"G͵͵","scientific":"G0","hz":"24.49971","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"95","helmholtz":"F♯͵͵/G♭͵͵","scientific":"F♯0/G♭0","hz":"23.12465","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"94","helmholtz":"F͵͵","scientific":"F0","hz":"21.82676","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"93","helmholtz":"E͵͵","scientific":"E0","hz":"20.60172","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"92","helmholtz":"D♯͵͵/E♭͵͵","scientific":"D♯0/E♭0","hz":"19.44544","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"91","helmholtz":"D͵͵","scientific":"D0","hz":"18.35405","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"90","helmholtz":"C♯͵͵/D♭͵͵","scientific":"C♯0/D♭0","hz":"17.32391","violin":"","viola":"","cello":"","bass":"","guitar":""},{"number":"89","helmholtz":"C͵͵ sub-contra-octave","scientific":"C0 Double Pedal C","hz":"16.35160","violin":"","viola":"","cello":"","bass":"","guitar":""}]');



const keysElement = (keys,oscillator,gainNode) => {
    oscillator.start();
    var keyboard = document.createElement('ul');
    keyboard.id = keyboard;
keys.forEach((k,i)=>{
    var key = document.createElement('li');
    key.style.display = 'inline-block';
    key.style.border = '1px dotted black';
    key.style.width='30px';
    key.style.height='100px';
    key.className = k.name.length > 1 ? 'black' : 'white';
    key.style.backgroundColor = k.name.length > 1 ? 'black' : 'white';
    key.style.color = k.name.length > 1 ? 'white' : 'black';
    key.append(document.createTextNode(k.name));
    key.innerHTML = k.name

    key.onclick = (e) => {
        let ogColor = key.style.backgroundColor;
        document.body.style.backgroundColor = `rgb(${k.color.r},${k.color.g},${k.color.b})`;
        oscillator.frequency.setValueAtTime(parseInt(k.hz), audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
            1, audioCtx.currentTime + 0.1
          );     
          gainNode.gain.exponentialRampToValueAtTime(
            0.00001, audioCtx.currentTime + 0.5
          );
        key.style.opacity=0.5;
      //  
        const timeout = setTimeout(function(){
            key.style.opacity=1;
            key.style.backgroundColor = ogColor;
           
        },2000)
    }

    keyboard.append(key);
})
return keyboard;
}
var octaveMiddleC = pianoKeys.filter((x,i) => x.number>=40 && x.number <= 51).reverse();

const keys = [
    {id:1, name:'c', color: {r:217,g:29,b:2}},
    {id:2, name:'c♯', color: {r:255,g:34,b:0}},
    {id:3, name:'d', color:{r:255,g:78,b:1}},
    {id:4, name:'d♯', color:{r:255,g:148,b:0}},
    {id:5, name:'e', color:{r:255,g:200,b:0}},
    {id:6, name:'f',color:{r:255,g:251,b:0}},
    {id:7, name:'f♯',color:{r:203,g:250,b:0}},
    {id:8, name:'g', color:{r:0,g:249,b:0}},
    {id:9, name:'g♯', color:{r:0,g:147,b:147}},
    {id:10, name:'a',color:{r:1,g:48,b:255}},
    {id:11, name:'b♭',color:{r:80,g:35,b:205}},
    {id:12, name:'b',color:{r:151,g:28,b:147}}
].map((x,i)=>{x.hz=octaveMiddleC[i].hz; return x;});

var sequence = octaveMiddleC;

var real = new Float32Array(2);
var imag = new Float32Array(2);
real[0] = 0;
imag[0] = 0.5;
real[1] = 0.3;
imag[1] = 0;

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);

var wave = audioCtx.createPeriodicWave(real, imag);
//oscillator.setPeriodicWave(wave);
oscillator.type='square';
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
var colorCount = 0;

function go(){
var keyElem = keysElement(keys,oscillator,gainNode);
var keyElements = [].slice.call(keyElem.getElementsByTagName('li'));
document.body.append(keyElem);

var frame = 0;
var frameL = 11; //37,59, 

// oscillator.frequency.setValueAtTime(parseInt(sequence[0].hz), audioCtx.currentTime); 

window.requestAnimationFrame(step);

//oscillator.start();

function step(){

if(frame%frameL==0){
 //   var index = frame/frameL;
 //   var color = keys[index].color
 //   document.body.style.backgroundColor = `rgb(${color.r},${color.g},${color.b})`;
 //   oscillator.frequency.setValueAtTime(parseInt(sequence[index].hz), audioCtx.currentTime);
 keyElements[Math.floor(Math.random()*keyElements.length)].click();
 console.log('clicking',Math.floor(Math.random()*keyElements.length))
}

frame++;

if(frame >= keyElements.length*frameL){ frame = 0 }

 window.requestAnimationFrame(step);
}

}