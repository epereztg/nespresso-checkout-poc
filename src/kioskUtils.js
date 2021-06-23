function loadComponentsScripts() {
    if (document.getElementById('dropin-container') != null) {
        var dropinScript = document.createElement('script');
        dropinScript.setAttribute('src', './ui/dropin.js')
        document.head.appendChild(dropinScript)
        var googleScript = document.createElement('script');
        dropinScript.setAttribute('src', 'https://pay.google.com/gp/p/js/pay.js')
        document.head.appendChild(googleScript)
    }
}

function getPayloadFromUrl(url) {
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1); //get all from ?
    if (typeof queryString != 'undefined') {

        //For klarna and adp about issuer comment the following two rows
        queryString = queryString.split('=')[1];
        return queryString.split('&')[0];
        return queryString;
    } else return null;
}

function getResultCodeFromUrl(url) {
    var queryString = url ? url.split('resultCode')[1] : window.location.search.slice(1); //get all from ?
    if (typeof queryString != 'undefined') {
        queryString = queryString.split('=')[1];
        return queryString;
    } else return null;
}

function fillCountries() {
  var select = document.getElementById("countries");
  var options = countries;
  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent =  flags[i] +' '+ countryNames[i];
      el.value = opt;
      select.appendChild(el);
  }
}
function fillCurrencies() {
  var select = document.getElementById("currencies");
  var options = currencies;
  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent =  currencies[i];
      el.value = opt;
      select.appendChild(el);
  }
}

function fillLocale() {
  var select = document.getElementById("locales");
  var options = locale;
  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent =  localeflags[i] +' '+ locale[i];
      el.value = opt;
      select.appendChild(el);
  }
}

function changeCurrency() {
    var sel = document.getElementById('currencies');
    localStorage.setItem('defaultCurrency', sel.value)
    localStorage.setItem('defaultCurrencyIndex', sel.selectedIndex)
    console.log('defaultCurrency changed to: '+sel.value)
}

function changeShopperLocale() {
    var sel = document.getElementById('locales');
    localStorage.setItem('defaultLocale', sel.value)
    localStorage.setItem('defaultlocaleIndex', sel.selectedIndex)
}

function changeLocation() {
    var sel = document.getElementById('countries');
    document.getElementById('countries').getElementsByTagName('option')[sel.selectedIndex].selected = 'selected'

    localStorage.setItem('defaultCountry', sel.value)
    localStorage.setItem('countryIndex', sel.selectedIndex)
}
