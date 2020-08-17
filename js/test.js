//primitive type
var name = "jeemin";

//object
var person = {
    name: "jeemin",
    age: 3
};

var obj = {
    name2: "jeemin2",
    address: "paju",
    person2: {
        height: 170,
        weight: 20
    },
    //함수가 객체의 프로퍼티로 들어가있으면 메소드라고 함
    getFirstName: function () {
        console.log('getName');
    }
};








//호이스팅.. 만들면 최상단으로 
function setName(name) {
    console.log('setName호출' + name);
}


var getName = function () {

    console.log('222 호출');
}