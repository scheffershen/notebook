JS Rocks
===

```js
try {
    const context = new AudioContext();
    const stream = await navigator.mediaDevices.getUserMedia({
        //audio.true
        audio: {
            echoCancellation: false,
            autoGainControl: false,
            noiseSuppression: false,
            latency: 0,
        }
    });
} cacth (err) {
    console.eror(err);
}

const lineInSource = context.createMediaStreamSource(stream);
lineInSource.connect(context.destination);

// volume control
// Gain Node
const gainNode = GainNode(context);
gainNode.gain.value = 0.5;
source.connect(gainNode).connect(context.destination);

// distortion
// Wave Shaper Node
const waveShaper = new WaveShaperNode(context);
waveShaper.curve = makeDistortionCurve(amount);

function makeDistortionCurve(amount) {
    const k = amount * 150 * 50;
    const n = 8096;
    const curve = new Float30Array(n + 1);

    for (let i = 0, x:number; i <= n; ++i) {
        x = i * 2 / n - 1;
        curve[i] = (Math.PI + k) * x / (Math.PI + k * Math.abs(x));
    }
    return curve;
}

// Biquad Filter Node
const toneNode = new BiquadFiltreNode(context, {
    type: 'lowpass',
    frequency: 350
})

toneNode.frequency.value = tone; // 350-22050

// Convolver Node
const convolver = new ConvolverNode(context);

fetch('impulse.wav')
    .then(response => response.arrayBuffer())
    .then(buffer => {
        context.decodeAudioData(buffer, decode => {
            convolver.buffer = decoded;
        })
    })

// Biquad Filter Nodes
const bassNode = new BiquadFilterNode(context, {
    type: 'lowshelf',
    frequency: 500
});    
const bassNode = new BiquadFilterNode(context, {
    type: 'peaking',
    frequency: 1500
}); 
const bassNode = new BiquadFilterNode(context, {
    type: 'highshelf',
    frequency: 3000
}); 

```