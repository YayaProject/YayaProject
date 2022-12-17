setInterval(myTimer, 1000);

function myTimer() {
let hari = new Date().getDay();
let jam = new Date().getHours();
let menit = new Date().getMinutes();
let tugas;

//HARI SENIN

if (
  (hari == 1 && jam <= 7 && menit < 10) ||
  (hari == 1 && jam <= 6 && menit <= 59)
) {
  tugas = "Tidur";
  document.getElementById("latar").style.background = "#1d4ed8";
  document.getElementById("gif").src = "tidur.gif";
} else if (hari == 1 && jam <= 7 && menit < 10) {
  tugas = "Upacara";
  document.getElementById("latar").style.background = "#bef264";
  document.getElementById("gif").src = "upacara.gif";
} else if (
  (hari == 1 && jam <= 9 && menit < 10) ||
  (hari == 1 && jam <= 8 && menit <= 59)
) {
  tugas = "Belajar Kimia";
  document.getElementById("latar").style.background = "#0ea5e9";
  document.getElementById("gif").src = "belajar.gif";
} else if (hari == 1 && jam <= 9 && menit < 50) {
  tugas = "Belajar Fisika";
  document.getElementById("latar").style.background = "#f97316";
  document.getElementById("gif").src = "belajar.gif";
} else if (
  (hari == 1 && jam <= 10 && menit < 5) ||
  (hari == 1 && jam <= 9 && menit <= 59)
) {
  tugas = "Istirahat";
  document.getElementById("latar").style.background = "#67e8f9";
  document.getElementById("gif").src = "makan.gif";
} else if (hari == 1 && jam <= 10 && menit < 45) {
  tugas = "Belajar Fisika";
  document.getElementById("latar").style.background = "#f97316";
  document.getElementById("gif").src = "belajar.gif";
} else if (
  (hari == 1 && jam <= 12 && menit < 5) ||
  (hari == 1 && jam <= 11 && menit <= 59)
) {
  tugas = "Belajar B.Indonesia";
  document.getElementById("latar").style.background = "#b91c1c";
  document.getElementById("gif").src = "belajar.gif";
} else if (hari == 1 && jam < 13) {
  tugas = "Ishoma";
  document.getElementById("latar").style.background = "#16a34a";
  document.getElementById("gif").src = "ishoma.gif";
} else if (hari == 1 && jam < 15) {
  tugas = "Belajar MTK Wajib";
  document.getElementById("latar").style.background = "#facc15";
  document.getElementById("gif").src = "belajar.gif";
}

//HARI SELASA
else if (
  (hari == 2 && jam <= 7 && menit < 10) ||
  (hari == 2 && jam <= 6 && menit <= 59)
) {
  tugas = "Tidur";
  document.getElementById("latar").style.background = "#1d4ed8";
  document.getElementById("gif").src = "tidur.gif";
} else if (
  (hari == 2 && jam <= 9 && menit < 10) ||
  (hari == 2 && jam <= 8 && menit <= 59)
) {
  tugas = "Belajar Penjas";
  document.getElementById("latar").style.background = "#4b5563";
  document.getElementById("gif").src = "belajar.gif";
} else if (hari == 2 && jam <= 9 && menit < 50) {
  tugas = "Belajar MTK Minat";
  document.getElementById("latar").style.background = "#ec4899";
  document.getElementById("gif").src = "belajar.gif";
} else if (
  (hari == 2 && jam <= 10 && menit < 5) ||
  (hari == 2 && jam <= 9 && menit <= 59)
) {
  tugas = "Istirahat";
  document.getElementById("latar").style.background = "#67e8f9";
  document.getElementById("gif").src = "makan.gif";
} else if (hari == 2 && jam <= 10 && menit < 45) {
  tugas = "Belajar MTK Minat";
  document.getElementById("latar").style.background = "#ec4899";
  document.getElementById("gif").src = "belajar.gif";
} else if (
  (hari == 2 && jam <= 12 && menit < 5) ||
  (hari == 2 && jam <= 11 && menit <= 59)
) {
  tugas = "Belajar Fisika";
  document.getElementById("latar").style.background = "#f97316";
  document.getElementById("gif").src = "belajar.gif";
} else if (hari == 2 && jam < 13) {
  tugas = "Ishoma";
  document.getElementById("latar").style.background = "#16a34a";
  document.getElementById("gif").src = "ishoma.gif";
} else if (
  (hari == 2 && jam <= 14 && menit <= 20) ||
  (hari == 2 && jam <= 13 && menit <= 59)
) {
  tugas = "Belajar Prakarya";
  document.getElementById("latar").style.background = "#14532d";
  document.getElementById("gif").src = "belajar.gif";
}

//HARI RABU
else if (
  (hari == 3 && jam <= 7 && menit < 10) ||
  (hari == 3 && jam <= 6 && menit <= 59)
) {
  tugas = "Tidur";
  document.getElementById("latar").style.background = "#1d4ed8";
  document.getElementById("gif").src = "tidur.gif";
} else if (
  (hari == 3 && jam <= 8 && menit < 30) ||
  (hari == 3 && jam <= 7 && menit <= 59)
) {
  tugas = "Belajar B.Inggris";
  document.getElementById("latar").style.background = "#6b21a8";
  document.getElementById("gif").src = "belajar.gif";
} else if (
  (hari == 3 && jam <= 9 && menit < 50) ||
  (hari == 3 && jam <= 8 && menit <= 59)
) {
  tugas = "Belajar Biologi";
  document.getElementById("latar").style.background = "#65a30d";
  document.getElementById("gif").src = "belajar.gif";
} else if (
  (hari == 3 && jam <= 10 && menit < 5) ||
  (hari == 3 && jam <= 9 && menit <= 59)
) {
  tugas = "Istirahat";
  document.getElementById("latar").style.background = "#67e8f9";
  document.getElementById("gif").src = "makan.gif";
} else if (hari == 3 && jam <= 10 && menit < 45) {
  tugas = "Belajar MTK Wajib";
  document.getElementById("latar").style.background = "#facc15";
  document.getElementById("gif").src = "belajar.gif";
} else if (
  (hari == 3 && jam <= 12 && menit < 5) ||
  (hari == 3 && jam <= 11 && menit <= 59)
) {
  tugas = "Belajar Seni Budaya";
  document.getElementById("latar").style.background = "#111827";
  document.getElementById("gif").src = "belajar.gif";
} else if (hari == 3 && jam < 13) {
  tugas = "Ishoma";
  document.getElementById("latar").style.background = "#16a34a";
  document.getElementById("gif").src = "ishoma.gif";
} else if (
  (hari == 3 && jam <= 14 && menit <= 20) ||
  (hari == 3 && jam <= 13 && menit <= 59)
) {
  tugas = "Belajar MTK Minat";
  document.getElementById("latar").style.background = "#ec4899";
  document.getElementById("gif").src = "belajar.gif";
}

//HARI KAMIS
else if (
  (hari == 4 && jam <= 7 && menit < 10) ||
  (hari == 4 && jam <= 6 && menit <= 59)
) {
  tugas = "Tidur";
  document.getElementById("latar").style.background = "#1d4ed8";
  document.getElementById("gif").src = "tidur.gif";
} else if (
  (hari == 4 && jam <= 8 && menit < 30) ||
  (hari == 4 && jam <= 7 && menit <= 59)
) {
  tugas = "Belajar Biologi";
  document.getElementById("latar").style.background = "#65a30d";
  document.getElementById("gif").src = "belajar.gif";
} else if (
  (hari == 4 && jam <= 9 && menit < 50) ||
  (hari == 4 && jam <= 8 && menit <= 59)
) {
  tugas = "Belajar Kimia";
  document.getElementById("latar").style.background = "#0ea5e9";
  document.getElementById("gif").src = "belajar.gif";
} else if (
  (hari == 4 && jam <= 10 && menit < 5) ||
  (hari == 4 && jam <= 9 && menit <= 59)
) {
  tugas = "Istirahat";
  document.getElementById("latar").style.background = "#67e8f9";
  document.getElementById("gif").src = "makan.gif";
} else if (
  (hari == 4 && jam <= 11 && menit < 25) ||
  (hari == 4 && jam <= 10 && menit <= 59)
) {
  tugas = "Belajar PPKN";
  document.getElementById("latar").style.background = "#065f46";
  document.getElementById("gif").src = "belajar.gif";
} else if (
  (hari == 4 && jam <= 12 && menit < 5) ||
  (hari == 4 && jam <= 11 && menit <= 59)
) {
  tugas = "Belajar Ekonomi";
  document.getElementById("latar").style.background = "#a21caf";
  document.getElementById("gif").src = "belajar.gif";
} else if (hari == 4 && jam < 13) {
  tugas = "Ishoma";
  document.getElementById("latar").style.background = "#16a34a";
  document.getElementById("gif").src = "ishoma.gif";
} else if (
  (hari == 4 && jam <= 14 && menit <= 20) ||
  (hari == 4 && jam <= 13 && menit <= 59)
) {
  tugas = "Belajar Ekonomi";
  document.getElementById("latar").style.background = "#a21caf";
  document.getElementById("gif").src = "belajar.gif";
}

//HARI JUMAT
else if (
  (hari == 5 && jam <= 7 && menit < 10) ||
  (hari == 5 && jam <= 6 && menit <= 59)
) {
  tugas = "Tidur";
  document.getElementById("latar").style.background = "#1d4ed8";
  document.getElementById("gif").src = "tidur.gif";
} else if (
  (hari == 5 && jam <= 9 && menit < 10) ||
  (hari == 5 && jam <= 8 && menit <= 59)
) {
  tugas = "Belajar PAI";
  document.getElementById("latar").style.background = "#34d399";
  document.getElementById("gif").src = "belajar.gif";
} else if (hari == 5 && jam <= 9 && menit < 50) {
  tugas = "Belajar Ekonomi";
  document.getElementById("latar").style.background = "#a21caf";
  document.getElementById("gif").src = "belajar.gif";
} else if (
  (hari == 5 && jam <= 10 && menit < 5) ||
  (hari == 5 && jam <= 9 && menit <= 59)
) {
  tugas = "Istirahat";
  document.getElementById("latar").style.background = "#67e8f9";
  document.getElementById("gif").src = "makan.gif";
} else if (
  (hari == 5 && jam <= 11 && menit < 25) ||
  (hari == 5 && jam <= 10 && menit < 59)
) {
  tugas = "Belajar B.Indonesia";
  document.getElementById("latar").style.background = "#b91c1c";
  document.getElementById("gif").src = "belajar.gif";
} else if (
  (hari == 5 && jam <= 12 && menit < 5) ||
  (hari == 5 && jam <= 11 && menit <= 59)
) {
  tugas = "Belajar Sejarah";
  document.getElementById("latar").style.background = "#881337";
  document.getElementById("gif").src = "belajar.gif";
} else if (hari == 5 && jam < 13) {
  tugas = "Ishoma";
  document.getElementById("latar").style.background = "#16a34a";
  document.getElementById("gif").src = "ishoma.gif";
} else if (hari == 5 && jam <= 13 && menit <= 40) {
  tugas = "Belajar Sejarah";
  document.getElementById("latar").style.background = "#881337";
  document.getElementById("gif").src = "belajar.gif";
}

//HARI FULL TURU
else {
  tugas = "Tidur";
  document.getElementById("latar").style.background = "#1d4ed8";
  document.getElementById("gif").src = "tidur.gif";
}

document.getElementById("text").innerHTML = tugas;
}