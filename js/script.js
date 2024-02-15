function tampilAwal() {
    document.getElementById("content").style.visibility = "hidden";
    document.getElementById("content1").style.visibility = "visible"
}

function balikSuhu() {
    document.getElementById("content1").style.visibility = "hidden";
    document.getElementById("content").style.visibility = "visible"
}
function balikSuhu1() {
    document.getElementById("content").style.visibility = "hidden";
    document.getElementById("content1").style.visibility = "visible"
}
function converterSuhuf() {
    var angka = document.getElementById("inputCelcius").value;
    var hitung = (angka * 9 / 5) + 32;

    var jelasf = "Rumus menghitung Suhu Celcius ke Fahrenheit adalah<br>" +
        "&#8457; = (&#8451; x 9/5) + 32 atau &#8457; = (&#8451; x 1.8) + 32<br><br>" +
        "Hasil diatas adalah " + hitung + "&#8457," +
        " merupakan hasil perhitungan dari &#8457 = (" + angka + " x 9/5) + 32";

    document.getElementById("hasilFarenheit").innerHTML = hitung;

    document.getElementById("descF").innerHTML = jelasf;

}

function converterSuhuc() {
    var angka1 = document.getElementById("inputFarenheit").value;
    var hitung1 = (angka1 * 5 / 9) + 32;

    var jelasc = "Rumus menghitung Suhu Fahrenheit ke Celcius adalah<br>" +
        "&#8451; = (&#8457; x 5/9) + 32 atau &#8451; = (&#8457; x 1.8) + 32<br><br>" +
        "Hasil diatas adalah " + hitung1 + "&#8451," +
        " merupakan hasil perhitungan dari &#8451 = (" + angka1 + " x 5/9) + 32";

    document.getElementById("hasilCelcius").innerHTML = hitung1;

    document.getElementById("descC").innerHTML = jelasc;

}

function hapusF() {
    document.getElementById("inputCelcius").innerHTML.addEventListener('reset');
}

function hapusC() {
    document.getElementById("inputFarenheit").innerHTML.addEventListener('reset');
}