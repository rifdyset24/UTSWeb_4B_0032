const btnDaftar = document.getElementById("btnDaftar");
const hasil = document.getElementById("hasil");

btnDaftar.addEventListener("click", function(){

    let nama = document.getElementById("nama").value;
    let usia = document.getElementById("usia").value;
    let kelas = document.getElementById("kelas").value;
    
    if(nama === "" || usia === "" || kelas === ""){
        alert("Silahkan lengkapi data terlebih dahulu");
        return;
    }

    hasil.innerHTML = "Pendaftaran Berhasil";

});