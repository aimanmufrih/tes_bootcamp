var biodata= {name:"Aiman Mufrih Hidayat", age:24,address: "KP Jembatan Cinangneng", hobbies :["Berenang","Browsing"], is_married:false, list_school:[{name:"IPB University",year_in:2013,year_out:2018,major:"Marine Science And Technology"}], skills:[{skill_name:"PHP",level:"Beginner"}], interest_in_coding:true};

function data(name,age){
return name+","+"age:"+age;
}
console.log(data(name="Aiman Mufrih Hidayat", age=24));
var biodataJson = JSON.stringify(biodata);
console.log(biodataJson)


