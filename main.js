https://teachablemachine.withgoogle.com/models/
Webcam.set({
    width:350,height:300,image_format:'png',png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach("camera");
function takesnapshot(){
    Webcam.snap(function(data_url){
document.getElementById("result").innerHTML="<img id='img1' src='"+ data_url+"'>";
    });
}
console.log("ml5.version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3OAmpi6ph/model.json",modelloaded)
