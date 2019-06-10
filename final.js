/*let titles = [['Daily Crunch: Twitter acquires Fabula AI',
  ['passport', 'barn', 'butterfly']],
 ["This AI Uses Echolocation to Identify What You're Doing",
  ['passport', 'passport', 'butterfly']],
 ['Getaround, Facebook, AI chips, Nvidia, Africa, and immigration',
  ['butterfly', 'butterfly']],
 ['Huawei launches AI-backed database to target enterprise customers',
  ['pool', 'passport', 'lighthouse']],
 ['Pearl, the healthcare spinout from LA-based AI startup, GumGum, raises $11 million',
  ['palm_tree', 'butterfly', 'butterfly']],
 ['Amazon will use AI to help you shop for clothes with StyleSnap',
  ['passport', 'book', 'book']],
 ['SentinelOne raises $120M for its fully-autonomous, AI-based endpoint security solution',
  ['pineapple', 'palm_tree', 'angel']],
 ['Self-driving delivery van startup Gatik AI comes out of stealth with Walmart partnership',
  ['pineapple', 'butterfly', 'butterfly']],
 ['MIT and U.S. Air Force team up to launch AI accelerator',
  ['pool', 'book', 'pineapple']],
 ['For less than $10, anyone can make an AI write a fake UN speech',
  ['barn', 'frogsofa', 'butterfly']],
 ['Alibaba-backed facial recognition startup Megvii raises $750 million',
  ['palm_tree', 'pig', 'palm_tree']],
 ['Verified Expert Brand Designer: Base', ['passport', 'book', 'passport']],
 ['Sam Altman’s leap of faith', ['skull', 'bee', 'butterfly']]]*/


let title = 'SentinelOne raises $120M for its fully-autonomous, \nAI-based endpoint security solution'
let tags =  ['pineapple', 'palm_tree', 'angel']
let model;
let strokePath = null;
let x, y;
let ctx;
let canvas;
let width = 400;
let height = 400;
let imgData;
let xMax = 33;
let yMax = 50;
let backgroundColor = '#fff';
let weight = 3;

let scale = 0.3;
let i = 0
let j = 0

xSet = [100,300,200]
ySet = [50,50,250]

 function setup(){
	createCanvas(width, height);
	model = ml5.SketchRNN(tags[j], modelReady);
	x = xSet[j];
	y = 200;
	background(backgroundColor);
	stroke('#000')
	textSize(16)
	text(title, 20, 350)
}

function getBounds(x){
	if(Math.floor(x/10) < 0){
		return 0;
	}
	return Math.floor(x/10)
}
function draw(){
	
	if(strokePath != null){
		if(strokePath.pen == 'down'){
			
			strokeWeight(weight);
			line(x,y,x + strokePath.dx * scale, y + strokePath.dy * scale)

			x += strokePath.dx * scale
			y += strokePath.dy * scale

			strokePath = null;
			model.generate(genSketch)
		}
		else if(strokePath.pen == 'end'){
			j += 1
			if(j > 2){
				return
			}
			strokePath = null;
			model = ml5.SketchRNN(tags[j])
			model.reset();
			model.generate(genSketch)
			x = xSet[j]
			y = 200
		}
		else
		{
			x += strokePath.dx
			y += strokePath.dy
			strokePath = null;
			model.generate(genSketch)
		}
	}
}

function modelReady(){
	console.log('sketchRNN model ready');
	model.reset();
	model.generate(genSketch);
}



function genSketch(error, s){
	if(error){
		console.error(error)
	} else{
		strokePath = s;
	}
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}