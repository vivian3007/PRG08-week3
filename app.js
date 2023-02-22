const image = document.getElementById('output')
const fileButton = document.querySelector("#file")
const classifyButton = document.getElementById('classifyButton')
const section = document.getElementById('section')

fileButton.addEventListener("change", (event)=>{
    image.src = URL.createObjectURL(event.target.files[0])
})

classifyButton.addEventListener("click", ()=>{
    startImageScan()
});

image.addEventListener('load', () => userImageUploaded())

function userImageUploaded(){
    console.log("The image is now visible in the DOM")
}


// function startImageScan() {
//     // Create a variable to initialize the ml5.js image classifier with MobileNet
//     const classifier = ml5.imageClassifier('model.json', 'model.weights.bin').then(classifier => {
//         console.log('Model Loaded!');
//
//     const file = document.getElementById("file")
//
//     // Scan the uploaded image
//     classifier.classify(file , imageScanResult);
//     section.innerHTML = "";
// })}
//
// // Check for errors and display the results if there aren't any
// function imageScanResult(error, results) {
//     if (error) {
//         section.innerHTML = error;
//     } else {
//         let num = results[0].confidence * 100;
//         section.innerHTML = results[0].label + " Confidence: " + num.toFixed(0) + "%";
//     }
// }

// Create a variable containing the result container
const element = document.getElementById("imageResult");

function startImageScan() {
    // Create a variable to initialize the ml5.js image classifier with MobileNet
    const classifier = ml5.imageClassifier('./model.json', './model.weights.bin');

    // Scan the uploaded image
    classifier.classify(document.getElementById("uploadedImage"), imageScanResult);
    element.innerHTML = "...";
}

// Check for errors and display the results if there aren't any
async function imageScanResult(error, results) {
    if (error) {
        element.innerHTML = error;
    } else {
        let num = await results[0].confidence * 100;
        element.innerHTML = results[0].label + "Confidence: " + num.toFixed(0) + "%";
    }
}
3