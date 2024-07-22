// document.addEventListener("DOMContentLoaded", function () {
//     function onload() {
//       var element = document.getElementById("SubmitButton");
//       element.addEventListener("click", validate);
//     }
  
//     onload();
  
//     document.querySelector("#quoteform").addEventListener("submit", function (e) {
//       e.preventDefault();
//       validate(e);
//     });
  
//     function SubmitRegistration(data) {
//       if (document.querySelector("#gRecaptchaResponse").value === "") {
//         document.querySelector("#gRecaptchaResponse").value = data;
//       }
//       document.getElementById("quoteform").submit();
//     }
  
//     function validate(event) {
//       event.preventDefault();
//       document.querySelector("#quoteform").validate();
  
//       var isFormValid = document.querySelector("#quoteform").valid();
  
//       var phoneNumber = document.getElementById("UserPhone").value;
//       var phoneRGEX = /[\d]{10}/;
//       var phoneResult = phoneRGEX.test(phoneNumber);
  
//       if (!phoneResult) {
//         document.querySelector("[for='UserPhone']").style.display = "inline-block";
//       }
//       if (isFormValid) {
//         isFormValid = phoneResult;
//       }
  
//       if (isFormValid) {
//         grecaptcha.execute();
//       }
//     }
  
//     function updateAgeFieldsAll(a, b, c) {
//       var d = document.querySelectorAll("[ageDesc='" + c + "']");
//       d.forEach(function (element) {
//         element.querySelectorAll(".age-input-div").forEach(function (inputDiv) {
//           inputDiv.remove();
//         });
  
//         for (var e = 0; b > e; e++) {
//           if (c === "infant") {
//             var f = document.getElementById("ageInputDiv")
//               .cloneNode(true)
//               .removeClass("form-group label-floating")
//               .removeClass("d-none");
//             f.querySelector(".div-1").innerHTML =
//               "<input id='" +
//               c +
//               e +
//               "' type='hidden' size='3' class='form-control' maxlength='2'  min='1' value='1.99' max='11.99' name='infants_age[" +
//               c +
//               "_" +
//               e +
//               "]' />";
//             element.append(f);
//           } else {
//             var f = document.getElementById("ageInputDiv")
//               .cloneNode(true)
//               .addClass("col-md-4 age-input-div");
//             f.querySelector(".div-0").innerHTML =
//               "<label  class='new_inquire_page_form_main_label' for='" +
//               c +
//               e +
//               "'>Age of Child " +
//               (e + 1) +
//               "</label>";
//             f.querySelector(".div-1").innerHTML =
//               "<input id='" +
//               c +
//               e +
//               "' type='number' size='3' class='form-control' value=''  maxlength='2' required min='2' max='11.99' name='children_age[" +
//               c +
//               "_" +
//               e +
//               "]' />";
//             element.append(f);
//           }
//         }
//       });
//     }
  
//     function updateAgeSelectionAll(a) {
//       var b = 0;
//       var c = 0;
//       var d = document.querySelectorAll('[id^="ageBands\\["]');
//       d.forEach(function (element) {
//         b += parseInt(element.value);
//       });
//       c = a - b;
//       d.forEach(function (element) {
//         var value = parseInt(element.value) + c;
//         element.value = value;
//       });
//     }
  
//     function paxOnChangeAll(a, b, c, d, e) {
//       if (c === "Adult") {
//         updateAgeSelectionAll(e);
//       } else {
//         updateAgeFieldsAll(a, b, c.toLowerCase());
//         updateAgeSelectionAll(e);
//       }
//     }
  
//     document.querySelectorAll(".btn-number.book_all").forEach(function (element) {
//       element.addEventListener("click", function (e) {
//         e.preventDefault();
  
//         var fieldName = element.getAttribute("data-field");
//         var type = element.getAttribute("data-type");
//         var input = document.querySelector("input[id='" + fieldName + "']");
  
//         var currentVal = parseInt(input.value);
  
//         if (!isNaN(currentVal)) {
//           if (type === "minus") {
//             if (currentVal > input.getAttribute("min")) {
//               input.value = currentVal - 1;
//             }
//             if (parseInt(input.value) === parseInt(input.getAttribute("min"))) {
//               element.setAttribute("disabled", true);
//             }
//           } else if (type === "plus") {
//             if (currentVal < input.getAttribute("max")) {
//               input.value = currentVal + 1;
//             }
//             if (parseInt(input.value) === parseInt(input.getAttribute("max"))) {
//               element.setAttribute("disabled", true);
//             }
//           }
//         } else {
//           input.value = 1;
//         }
//       });
//     });
  
//     document.querySelectorAll(".input-number.book_all").forEach(function (element) {
//       element.addEventListener("focus", function () {
//         element.dataset.oldValue = element.value;
//       });
  
//       element.addEventListener("change", function () {
//         var minValue = parseInt(element.getAttribute("min"));
//         var maxValue = parseInt(element.getAttribute("max"));
//         var valueCurrent = parseInt(element.value);
//         var name = element.id;
//         if (valueCurrent >= minValue) {
//           document.querySelector(".btn-number.book_all[data-type='minus'][data-field='" + name + "']").removeAttribute("disabled");
//         } else {
//           alert("Sorry, the minimum value was reached");
//           element.value = element.dataset.oldValue;
//         }
//         if (valueCurrent <= maxValue) {
//           document.querySelector(".btn-number.book_all[data-type='plus'][data-field='" + name + "']").removeAttribute("disabled");
//         } else {
//           alert("Sorry, the maximum value was reached");
//           element.value = element.dataset.oldValue;
//         }
//       });
  
//       element.addEventListener("keydown", function (e) {
//         // Allow: backspace, delete, tab, escape, enter and .
//         if (
//           e.key === "Backspace" ||
//           e.key === "Delete" ||
//           e.key === "Tab" ||
//           e.key === "Escape" ||
//           e.key === "Enter" ||
//           e.key === "." ||
//           e.key === "Home" ||
//           e.key === "End" ||
//           e.key === "ArrowLeft" ||
//           e.key === "ArrowRight"
//         ) {
//           // let it happen, don't do anything
//           return;
//         }
//         // Ensure that it is a number and stop the keypress
//         if ((e.key !== "Control" || !e.ctrlKey) && (e.key.length === 1 || e.key === " ")) {
//           e.preventDefault();
//         }
//       });
//     });
  
//     document.querySelector("#submit_step_maturity").addEventListener("click", function () {
//       var travellingToValues = [];
//       document.querySelectorAll('input[name="travelling_to[]"]:checked').forEach(function (element) {
//         travellingToValues.push(element.value);
//       });
  
//       if (travellingToValues.length === 0) {
//         document.querySelector("[data-fieldname='travelling_to[]']").classList.add("has-error");
//       } else {
//         document.querySelector("[data-fieldname='travelling_to[]']").classList.remove("has-error");
//       }
  
//       if (travellingToValues.length !== 0) {
//         document.querySelector("[data-step-name='maturity']").classList.add("d-none");
//         document.querySelector("[data-step-name='profile']").classList.remove("d-none");
//       }
//     });
  
//     document.querySelector("#go_back_to_maturity_step_button").addEventListener("click", function () {
//       document.querySelector("[data-step-name='maturity']").classList.remove("d-none");
//       document.querySelector("[data-step-name='profile']").classList.add("d-none");
//     });
  
//     document.querySelector("#submit_step_1").addEventListener("click", function () {
//       let flexible_dates = document.querySelectorAll('input[name="flexible_dates"]:checked');
//       let flexibleDatesValues = document.querySelector('input[name="flexible_dates"]:checked').value;
//       let priceValid = false;
  
//       if (flexible_dates.length === 0) {
//         document.querySelector("[data-fieldname='flexible_dates']").classList.add("has-error");
//         priceValid = false;
//       } else {
//         document.querySelector("[data-fieldname='flexible_dates']").classList.remove("has-error");
//         priceValid = true;
//       }
  
//       if (flexibleDatesValues === "no") {
//         let arrival = document.querySelector('input[name="arrival"]').value;
//         if (!arrival) {
//           document.querySelector("[data-fieldname='fixed_dates']").classList.add("has-error");
//           priceValid = false;
//         } else {
//           document.querySelector("[data-fieldname='fixed_dates']").classList.remove("has-error");
//           priceValid = true;
//         }
//       }
  
//       if (flexibleDatesValues === "yes") {
//         let date_approximate_start = document.querySelectorAll('input[name="date_approximate_start"]:checked');
//         let date_approximate_length = document.querySelectorAll('input[name="date_approximate_length"]:checked');
  
//         if (date_approximate_start.length === 0 || date_approximate_length.length === 0) {
//           document.querySelector("[data-fieldname='appromixate_dates']").classList.add("has-error");
//           priceValid = false;
//         } else {
//           document.querySelector("[data-fieldname='appromixate_dates']").classList.remove("has-error");
//           priceValid = true;
//         }
//       }
  
//       if (priceValid) {
//         document.querySelector("[data-step-name='profile']").classList.add("d-none");
//         document.querySelector("[data-step-name='trip']").classList.remove("d-none");
//       }
//     });
  
//     document.querySelectorAll('input[name="flexible_dates"]').forEach(function (element) {
//       element.addEventListener("change", function () {
//         var flexible_dates = document.querySelector('input[name="flexible_dates"]:checked').value;
  
//         if (flexible_dates === "no") {
//           document.querySelector("[data-fieldname='fixed_dates']").classList.remove("d-none");
//           document.querySelector("[data-fieldname='appromixate_dates']").classList.add("d-none");
//         } else {
//           document.querySelector("[data-fieldname='appromixate_dates']").classList.remove("d-none");
//           document.querySelector("[data-fieldname='fixed_dates']").classList.add("d-none");
//         }
//       });
//     });
  
//     document.querySelector("#go_back_to_step_1_button").addEventListener("click", function () {
//       document.querySelector("[data-step-name='profile']").classList.remove("d-none");
//       document.querySelector("[data-step-name='trip']").classList.add("d-none");
//     });
//   });
  
//   // Rest of your code
  
//   // Update age selection
//   updateAgeSelectionAll(9);
  
document.addEventListener('DOMContentLoaded', function () {
    // Get all input fields and buttons with the 'book_all' class
    var numberInputs = document.querySelectorAll('.input-number.book_all');
    var numberButtons = document.querySelectorAll('.btn-number.book_all');

    // Add event listeners for minus and plus buttons
    numberButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            var field = this.getAttribute('data-field');
            var input = document.getElementById(field);

            if (input) {
                var currentVal = parseInt(input.value);
                var min = parseInt(input.getAttribute('min'));
                var max = parseInt(input.getAttribute('max'));

                if (isNaN(currentVal)) {
                    currentVal = 0;
                }

                if (this.getAttribute('data-type') === 'minus') {
                    if (currentVal > min) {
                        input.value = currentVal - 1;
                    }
                } else if (this.getAttribute('data-type') === 'plus') {
                    if (currentVal < max) {
                        input.value = currentVal + 1;
                    }
                }
            }
        });
    });
});
