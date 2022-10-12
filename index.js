const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting) {
        entry.target.classList.add('show')
      } 
    })
});

const hiddenElements = document.querySelectorAll(".hide");
const hiddenElementsY= document.querySelectorAll(".hideY")
const hiddenElementsX = document.querySelectorAll(".hideR")
hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsY.forEach((el) => observer.observe(el));
hiddenElementsX.forEach((el) => observer.observe(el));


// Form Validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()