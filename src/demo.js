var dropinContainer= document.getElementById("dropin-container");

function showFinalResultDropin(response) {
  var resultCode = JSON.parse(response).resultCode;
  var pspRef = JSON.parse(response).pspReference;

  var textToShow;
  if (resultCode == "Authorised"){
       textToShow =
       "<div class=\"adyen-checkout__status adyen-checkout__status--success\">\r\n  <img height=\"88\" class=\"adyen-checkout__status__icon adyen-checkout__image adyen-checkout__image--loaded\"\r\n  src=\"https:\/\/checkoutshopper-test.adyen.com\/checkoutshopper\/images\/components\/success.svg\"\r\n  alt=\"Payment Successful\">\r\n  <span class=\"adyen-checkout__status__text\">Payment Successful<\/span>\r\n<\/div>"
  }
  else if (resultCode == "Cancelled"){
       textToShow =
       "<div class=\"adyen-checkout__status adyen-checkout__status--error\">\r\n  <img height=\"88\" class=\"adyen-checkout__status__icon adyen-checkout__image adyen-checkout__image--loaded\"\r\n  src=\"https:\/\/checkoutshopper-test.adyen.com\/checkoutshopper\/images\/components\/success.svg\"\r\n  alt=\"Payment Cancelled by shopper\">\r\n  <span class=\"adyen-checkout__status__text\">Payment Cancelled<\/span>\r\n<\/div>"
  }
  else if (resultCode == "Received"){
       textToShow =
       "<div class=\"adyen-checkout__status adyen-checkout__status--warning\">\r\n  <img height=\"88\" class=\"adyen-checkout__status__icon adyen-checkout__image adyen-checkout__image--loaded\"\r\n  src=\"https://i7.uihere.com/icons/199/579/754/alarm-processing-205473b2b36b8b4806293cd70da06f49.png\"\r\n  alt=\"Payment RECEIVED, you will receive and update soon\">\r\n  <span class=\"adyen-checkout__status__text\">Payment Cancelled<\/span>\r\n<\/div>"
  }
  else if (resultCode == "Pending"){
       textToShow =
       "<div class=\"adyen-checkout__status adyen-checkout__status--warning\">\r\n  <img height=\"88\" class=\"adyen-checkout__status__icon adyen-checkout__image adyen-checkout__image--loaded\"\r\n  src=\"https://i7.uihere.com/icons/199/579/754/alarm-processing-205473b2b36b8b4806293cd70da06f49.png\"\r\n  alt=\"Payment is PENDING, you will receive and update soon\">\r\n  <span class=\"adyen-checkout__status__text\">Payment Cancelled<\/span>\r\n<\/div>"
  }
  else if (resultCode == "Refused"){
       textToShow =
       "<div class=\"adyen-checkout__status adyen-checkout__status--error\">\r\n    <img class=\"adyen-checkout__status__icon adyen-checkout__image adyen-checkout__image--loaded\"\r\n    src=\"https:\/\/checkoutshopper-test.adyen.com\/checkoutshopper\/images\/components\/error.svg\"\r\n    alt=\"Your transaction was REFUSED!\" height=\"88\">\r\n  <span class=\"adyen-checkout__status__text\">Your transaction was REFUSED!<\/span>"
  }
  else {
      textToShow =
      "<div class=\"adyen-checkout__status adyen-checkout__status--error\">\r\n    <img class=\"adyen-checkout__status__icon adyen-checkout__image adyen-checkout__image--loaded\"\r\n    src=\"https:\/\/checkoutshopper-test.adyen.com\/checkoutshopper\/images\/components\/error.svg\"\r\n    alt=\"An unknown error occurred\" height=\"88\">\r\n  <span class=\"adyen-checkout__status__text\">An unknown error occurred<\/span>"
  }

  if (dropinContainer == null){
     dropinContainer = document.getElementById("dropin-container");
  }

  dropinContainer.innerHTML = textToShow;
}
