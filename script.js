$(document).ready(function () {
            $(".menu-toggle").click(function () {
                $('nav').toggleClass('active');
            })
        })

$(document).ready(function () {
            $(".non-active").click(function () {
                $('nav').toggleClass('active');
            })
        })
document.getElementById("tombolview").onclick = function() {
     Swal.fire(
  'Coming Soon',
  'Sabar Developer Mau Ujian',
  'info'
)
  }
document.getElementById("tombol-about1").onclick = function() {
     Swal.fire(
  'Jadwal Mata Pelajaran',
  'Project ini berasal dari jadwal mata pelajaran kelas X Mipa 4'
)
  }
  document.getElementById("tombol-about2").onclick = function() {
     Swal.fire(
  'Menu Login',
  'Project ini adalah form login untuk masuk ke situs ini'
)
  }
  document.getElementById("tombol-about3").onclick = function() {
     Swal.fire(
  '',
  'Project ini adalah form login untuk masuk ke situs ini'
)
  }