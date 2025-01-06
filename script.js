let radius = document.getElementById('radius');
let volume = document.getElementById('volume');
let btn = document.getElementById('submit');



function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let input = parseFloat(radius.value);
	if(input >=0){
    let volumeCalc =(4/3)*Math.PI*Math.pow(input,3) 
	volume.value = volumeCalc.toFixed(4)	
   }else{
		volume.value = 'NaN';
    }
  
} 

btn.addEventListener('click', volume_sphere);

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
