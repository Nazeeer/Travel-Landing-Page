var languageDropdown = document.getElementById("lang");
var languageLinks = document.querySelectorAll(".language-link");
var selectedLanguageDisplay = document.getElementById("selectedLanguage");

function setLanguagePreference(language) {
    localStorage.setItem("userLanguage", language);
  }


  function getLanguagePreference() {
    return localStorage.getItem("userLanguage");
  }


  languageLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); 

      var selectedLanguage = link.getAttribute("data-lang");


      setLanguagePreference(selectedLanguage);


      selectedLanguageDisplay.textContent = selectedLanguage;
    });
  });

  var savedLanguage = getLanguagePreference();
  if (savedLanguage) {
    selectedLanguageDisplay.textContent = savedLanguage;
  }


function setLanguageCookie(language, daysToExpire) {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);
    document.cookie = "Lang=" + language + "; expires=" + expirationDate.toUTCString() + "; path=/";
}


languageLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault(); 
        var selectedLanguage = link.getAttribute("data-lang");
        setLanguageCookie(selectedLanguage, 365);
        console.log(selectedLanguage);
        selectedLanguageDisplay.textContent = selectedLanguage;
  });
});