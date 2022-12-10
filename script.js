$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $("nav").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".non-active").click(function () {
    $("nav").toggleClass("active");
  });
});
document.getElementById("tombolview").onclick = function () {
  Swal.fire("Coming Soon", "Sabar Developer Mau Ujian", "info");
};
document.getElementById("tombol-about1").onclick = function () {
  Swal.fire(
    "Jadwal Mata Pelajaran",
    "Project ini berasal dari jadwal mata pelajaran kelas XI Mipa 4"
  );
};
document.getElementById("tombol-about2").onclick = function () {
  Swal.fire(
    "Menu Login",
    "Project ini adalah form login untuk masuk ke situs ini"
  );
};
document.getElementById("tombol-about3").onclick = function () {
  Swal.fire("Kalkulator", "Project ini adalah kalkulator sederhana");
};
document.getElementById("tombol-about4").onclick = function () {
  Swal.fire(
    "TicTacToe",
    "Project ini adalah game tictactoe yang bisa dimainkan 2 player"
  );
};
document.getElementById("tombol-about5").onclick = function () {
  Swal.fire(
    "Konverter Suhu",
    "Project ini adalah konverter suhu otomatis semua suhu, yaitu celcius, fahrenheit, kelvin dan reamur"
  );
};
document.getElementById("tombol-about6").onclick = function () {
  Swal.fire(
    "YayaStore",
    "Project ini adalah store top up game, voucher dan berlangganan aplikasi"
  );
};
document.getElementById("tombol-about7").onclick = function () {
  Swal.fire(
    "Game Tembak Burung",
    "Project ini adalah game tembak burung yang dihitung top score waktu tercepatnya"
  );
};
document.getElementById("tombol-about8").onclick = function () {
  Swal.fire(
    "Yaya Sedang",
    "Project ini adalah to do list otomatis yang terkoneksi dengan jadwal mata pelajaran"
  );
};
document.getElementById("tombol-about9").onclick = function () {
  Swal.fire(
    "Roster Ujian",
    "Project ini adalah roster ujian semester 1 kelas xi mipa"
  );
};
document.getElementById("tombol-about-coming").onclick = function () {
  Swal.fire(
    "Coming Soon",
    "Update project 1, UI/UX, dan responsif mode landscape"
  );
};
