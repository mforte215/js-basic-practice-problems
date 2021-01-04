let base = 0;
let height = 0;
let area = 0;


calculateTriangle = () => {
    height = document.getElementById("height").value;
    base = document.getElementById("base").value;
    console.log('Called Calculate Function');
    console.log(typeof(height));
    console.log(typeof(base));
    console.log(height);
    console.log(base);
    if( !isNaN(Number(height)) && !isNaN(Number(base))) {
        console.log("Both are numbers!")
        area = (.5)*base*height;
        document.getElementById("areaLabel").innerHTML = 'Area: ' + area;
    }

}


