var buah = [];
// var sayuran = ["Timun", "Wortel", "Tomat"];
var tkt = [];
function kalkulasi(tkthasil){
    // var a = parseInt(document.getElementById('txtBuah1').value);
    // var b = parseInt(document.getElementById("txtBuah1").value);
    var lstBuah = "";
    var txtBuah1=tkthasil;
     for (var z = 0; z < parseInt(tkthasil); z++) {
         // lstBuah = lstBuah + "<li>" + buah[z] + "<button onclick='tbladd()'>Click Me</button>" + "</li>" + "  <div id='boxisidata' style='display:none;'> This is my DIV element. </div>" ; 
         lstBuah = lstBuah + "<td>"+tambah(0,0)+"</td>"; 
     }
  
   
    console.log(lstBuah);
    document.getElementById("hasilnya1").innerHTML = lstBuah;
    
}
function tambah(a,b){
    return a*b;
}

  function tbladd(namabox) {
    namabox="boxisidata";
    var x = document.getElementById(namabox);
    // console.log("auuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
    console.log(x);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  //mulai disini

createListBuah(tkt);

// document.getElementById("boxisidata").style.display="none";
function createListBuah(tkt1) {
    var lstBuah0 = "";
    var lstBuah = "";
    var lstBuah2 = "";
//    var txtBuah1="buah"+tkt1;
    for (var z = 0; z < parseInt(tkt1); z++) {
    // lstBuah = lstBuah + "<li>" + buah[z] + "<button onclick='tbladd()'>Click Me</button>" + "</li>" + "  <div id='boxisidata' style='display:none;'> This is my DIV element. </div>" ; 
      lstBuah0 = lstBuah0 + "<td><input type='text' id='txtBuah0"+[z]+"'/></td>"; ;
    
    }
    for (var z = 0; z < parseInt(tkt1); z++) {
        // lstBuah = lstBuah + "<li>" + buah[z] + "<button onclick='tbladd()'>Click Me</button>" + "</li>" + "  <div id='boxisidata' style='display:none;'> This is my DIV element. </div>" ; 
        lstBuah = lstBuah + "<tr><td><input type='text' id='txtBuah2"+[z]+"'/></td></tr>"; 
    }
    for (var z = 0; z < parseInt(tkt1); z++) {
        // lstBuah = lstBuah + "<li>" + buah[z] + "<button onclick='tbladd()'>Click Me</button>" + "</li>" + "  <div id='boxisidata' style='display:none;'> This is my DIV element. </div>" ; 
        lstBuah2 = lstBuah2 + "<td><input type='text' id='txtBuah2"+[z]+"'/></td>"; 
    }
    var listbuah4=lstBuah0;
    console.log(lstBuah);
    document.getElementById("buah").innerHTML = "<tr><td> angka 1</td><tr><td></td></tr></td</tr>"+listbuah4;
    document.getElementById("buah2").innerHTML = "<tr><td> angka 2</td><tr><td></td></tr></td</tr>"+lstBuah2;
      document.getElementById("buttonnya").innerHTML = "<tr><td><button id='btnAddBuah' onclick=kalkulasi(1)>hasil</button></td</tr>";
}
function tbladd2(addnmr) {
    var namabox1="boxisidata"+addnmr;

    console.log(namabox1);
    // buah.push(namaBuah);
    // createListBuah();
    // document.getElementById(namabox1).style.display = "block";
    var x = document.getElementById(namabox1);
    console.log(x);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    // tbhaddbuah.push(namaBuah);
            // createListBuah();
  }


function tambahBuah(namaBuah) {

   
            buah.push(namaBuah);
            createListBuah(namaBuah);
        

}

 

 

