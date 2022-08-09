const prov_Districts = {
   "Kigali" : ["Choose District",
              "Gasabo", 
              "Kicukiro",
              "Nyarugenge"
   ],
   "South" : [
             "Choose District",
             "Kamonyi",
             "Muhanga",
             "Ruhango",
             "Nyanza",
             "Huye",
             "Gisagara",
             "Nyamagabe",
             "Nyaruguru"
   ],
   "West": ["Choose District",
            "Rusizi",
            "Nyamasheke",
            "Rutsiro",
            "Karongi",
            "Rubavu",
            "Nyabihu",
            "Ngororero"
   ],
   "East" : [
            "Choose District",
            "Nyagatare",
            "Bugesera",
            "Ngoma",
            "Kirehe",
            "Kayonza",
            "Gatsibo",
            "Rwamagana"
   ],
   "North": [
            "Choose District",
            "Rulindo",
            "Gakenke",
            "Musanze",
            "Burera",
            "Gicumbi"
   ],
   "drc": ["+243"],
   "sudan": ["+249"],
   "rwanda": ["+250"],
   "kenya": ["+254"],
   "tanzania": ["+255"],
   "uganda": ["+256"],
   "burundi":["+257"]
   
};

let listDistrict = document.getElementById("select_2");
let listProvince = document.getElementById("select_1");
let listOfCountries = document.getElementById("countries");
let listOfCode = document.getElementById("chooseCode");
let assignDistrict = () => {
    
    
    listDistrict.innerHTML = "";
    let province = listProvince.value;


    for (var i = 0 ; i <  prov_Districts[province].length; i++){
         listDistrict.innerHTML += `<option value="">${prov_Districts[province][i]}</option>`;
    }
    
};

let displayCode = () => {
    listOfCode.innerHTML="";
    let Country = listOfCountries.value;

    for (var j= 0 ; j<prov_Districts[Country].length; j++){
        listOfCode.innerHTML += `<option value="">${prov_Districts[Country][j]} </option>`
    }
}
 let n1 = document.getElementById("n1");
 let n2 = document.getElementById("n2");
 
 var validate = () => {
    if (n1.value != "" && n1.value != ""){
    if (n1.value == n2.value){
        return true;
    }}
    alert("Your Password did not match");
     return false;
     
 }
 let mail = document.getElementById("mail");
 let email = mail.value;
 function validate(email){
    
    let n= email.indexOf("@gmail.com");
    if (n >=1){
        return true;
    }
    alert("Check on your Gmail");
    
 }