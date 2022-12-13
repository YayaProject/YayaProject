document.getElementById("alert-sign-in").onclick = function () {
        Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Login Berhasil',
  showConfirmButton: false,
  timer: 1500
})
      };
      
document.getElementById("alert-reset-password").onclick = function () {
        Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Password Berhasil Diubah',
  showConfirmButton: false,
  timer: 1500
})
      };