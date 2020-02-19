<div>Teachable Machine Audio Model - p5.js and ml5.js</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
<script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>
<script type="text/javascript">
  // Global variable to store the classifier
let classifier;

// Label
let label = 'listening...';
let emoji="💬";
// Teachable Machine model URL:
let soundModel = 'https://teachablemachine.withgoogle.com/models/WLn57aHS/';


function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
}

function setup() {
  createCanvas(320, 240);
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
}

function draw() {
  background(0);
  // Draw the label in the canvas
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(emoji, width / 2, height / 2);
}


// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  if (label=="Conversation"){
    emoji="🗣"
  }
  if (label=="Music"){
    emoji="🎸"
  }
  if(label=="Silence"){
    emoji="🤐"
  }
}
</script>
