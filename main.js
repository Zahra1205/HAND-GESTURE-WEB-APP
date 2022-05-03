var prediction_1="";
var prediction_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function Take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='snapshot' src='"+data_uri+"'>";
    });
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zt3xBFNTo/model.json",model_loded);
function model_loded(){
    console.log("model loded");
}
function speak(){
    var synth=window.SpeechSynthesis;
    var speak_data1="The first prediction is "+prediction_1;
    var speak_data2=" and the second prediction is "+prediction_2;
    var utter_this=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utter_this);
}