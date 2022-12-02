
// // Question : 1)
// // a)

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res = result.filter((ele) => ele.region === "Asia");
  console.log(res);
};

// // b)

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res = result.filter((ele) => ele.population<200000);
  var res1 = res.map((ele)=>ele.name.common)
  console.log(res1);
};

// // C)

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res = result.forEach((ele)=>{console.log(`${ele.name.common}${ele.capital}${ele.flag}`)});
}

// // D)

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res = result.reduce((acc, cv)=>acc+cv.population,0)
  console.log(res);
}

// E)
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res = result.filter((ele)=>{ 
    for(let key in ele.currencies){
        if(ele.currencies[key].code ==="USD"){
            console.log(ele.name)
        }}
  })
}