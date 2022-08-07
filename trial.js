const prov_Districts = {
   "Kigali" : [
              "Gasabo", 
              "Kicukiro",
              "Nyarugenge"
   ],
   "South" : [
             "Kamonyi",
             "Muhanga",
             "Ruhango",
             "Nyanza",
             "Huye",
             "Gisagara",
             "Nyamagabe",
             "Nyaruguru"
   ],
   "West": [
            "Rusizi",
            "Nyamasheke",
            "Rutsiro",
            "Karongi",
            "Rubavu",
            "Nyabihu",
            "Ngororero"
   ],
   "East" : [
            "Rwamagana",
            "Bugesera",
            "Ngoma",
            "Kirehe",
            "Kayonza",
            "Gatsibo",
            "Nyagatare"
   ],
   "North": [
            "Rulindo",
            "Gakenke",
            "Musanze",
            "Burera",
            "Gicumbi"
   ]
   
};

let listDistrict = document.getElementById("select_2");
let listProvince = document.getElementById("select_1");
let assignDistrict = () => {
    listDistrict.innerHTML = "";
    let province = listProvince.value;

    for (var i = 0 ; i <  prov_Districts[province].length; i++){
         listDistrict.innerHTML += `<option value="">${prov_Districts[province][i]}</option>`;
    }
};