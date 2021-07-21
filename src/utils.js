const defaultCurrency = localStorage.getItem('defaultCurrency')!=null ? localStorage.getItem('defaultCurrency') : 'AUD';
const defaultCountry = localStorage.getItem('defaultCountry')!=null ? localStorage.getItem('defaultCountry'): 'GB';
const defaultLocale = localStorage.getItem('defaultLocale')!=null ? localStorage.getItem('defaultLocale') : 'en-GB';
const defaultAmount = 350000;//Math.floor(Math.random() * 100000)
const defaultShopperReference = localStorage.getItem('shopperReference')!=null ? localStorage.getItem('shopperReference'):'mail@adyen.com'
const defaultRequest= localStorage.getItem('requestToPayments')!=null ? localStorage.getItem('requestToPayments'):null

const defaultShopperStatement= "test_c1"//This is special shopperStatement to force Authorize MB Way in TESt

const countries = ['ES','BE','NO','MX','NL','PT','AT','SE','DE','FR','CN','KR', 'AU', 'CH','GB', 'CO', 'BR']
const countryNames = ['Spain','Belgium','Norway','Mexico','Netherlands','Portugal','Austria','Sweden','Germany','France','China', 'Korea','Australia', 'Switzerland', 'UK', 'Colombia', 'Brazil']
const locale = ['es-ES','en-GB','pt-PT']
const currencies = ['EUR','GBP','USD','CNY','SEK','MXN','NOK','KRW','AUD','COP','BRL']
const flags = ['🇪🇸','🇧🇪','🇳🇴','🇲🇽','🇳🇱','🇵🇹','🇦🇹','🇸🇪','🇩🇪','🇫🇷','🇨🇳','🇰🇷','🇦🇺', '🇨🇭', '🇬🇧', '🇨🇴','🇧🇷']
const localeflags = ['🇪🇸','🇬🇧','🇵🇹']

const defaultOrigin = () => {
    if (window.location.origin.includes("heroku", 1)) {
        return ""
    } else {
       return window.location.href//"http://localhost:3000/#/checkout"
    }
}

const defaultUrl = (type) => {
    if (window.location.origin.includes("heroku", 1)) {
        return ""
    } else {
        if (type == "scheme") return "http://localhost:3000/fallbackthreedone"
        else return window.location.href//"http://localhost:3000/#/checkout"
      }
}
//Drop down list utils
const getCountryIndex = () => {
  var cc = localStorage.getItem('defaultCountry')!=null ? localStorage.getItem('defaultCountry'): defaultCountry;//defaultCountry;//ocalStorage.getItem('defaultCountry')
  paymentMethodsConfig.countryCode= defaultCountry;
  return countries.indexOf(cc, 0);
}
const getLocaleIndex = () => {
  var cc = localStorage.getItem('defaultLocale')!=null ? localStorage.getItem('defaultLocale') : defaultLocale;//localStorage.getItem('defaultLocale')
  return locale.indexOf(cc, 0);
}

const getCurrencyIndex = () => {
  var cc = localStorage.getItem('defaultCurrency')!=null ? localStorage.getItem('defaultCurrency') : defaultCurrency;//localStorage.getItem('defaultCurrency')
  return currencies.indexOf(cc, 0);
}

const getCountryCode = () => {
    var cc = localStorage.getItem('defaultCountry')
    if(cc!=null) return cc
    else return defaultCountry;
}

const getCurrencyCode = () => {
    var cc = localStorage.getItem('defaultCurrency')
    if(cc!=null) return cc
    else return defaultCurrency;
}
const savePaymentData = (paymentData = {}) => {
    localStorage.setItem('paymentData', paymentData)
}
const saveDetails = (details = {}) => {
    localStorage.setItem('details', details)
}
const getPaymentData = () => {
    return localStorage.getItem('paymentData')
}
const getDetails = () => {
    return localStorage.getItem('details')
}
const saveAmount = (amount = {}) => {
    localStorage.setItem('defaultAmount', amount)
}
const getAmount = () => {
    return localStorage.getItem('defaultAmount')
}
const saveActionType = (type = {}) => {
    localStorage.setItem('actiontype', type)
}
const getActionType = (type = {}) => {
    return localStorage.getItem('actiontype')
}

const paymentMethodsConfig = {
    shopperReference: defaultShopperReference,
    reference: 'Checkout Components KIOSK',
    countryCode: defaultCountry,
    amount: {
        value: defaultAmount,
        currency: defaultCurrency
    }
};

const paymentsDefaultConfig = {
    //shopperReference: 'Checkout Components sample code test',
    channel: 'Web',
    returnUrl: defaultUrl(),
    origin: defaultOrigin(),
    reference: 'KIOSK-DROPIN',
    dateOfBirth: '1970-01-01',
    shopperReference: defaultShopperReference,
    shopperEmail: 'juan@perez.com',
    countryCode: defaultCountry,
    amount: {
        value: defaultAmount,
        currency: defaultCurrency
    },
    socialSecurityNumber: '56861752509',
    shopperLocale: defaultLocale,
    shopperStatement: defaultShopperStatement,
    shopperIP: '127.0.0.1',
    additionalData: {
        allow3DS2: true
    },
    billingAddress: { //i.e. required for AfterPay
        country: 'ES',
        city: 'Madrid',
        street: 'Calle de Atocha 27',
        houseNumberOrName: '27',
        stateOrProvince: 'ES',
        postalCode: '28001'
    },
    shopperName:{
      firstName:"Juan",
      gender:"male",
      lastName:"Perez"
   },
    deliveryAddress: {
      country: 'ES',
      city: 'Madrid',
      street: 'Calle de Atocha 27',
      houseNumberOrName: '27',
      stateOrProvince: 'ES',
      postalCode: '28001'
    },
    lineItems : [
      {
         amountExcludingTax : "9836",
         taxAmount : "2164",
         description : "TEST 1927",
         id : "WC00018_ARE000_1007_0287S_100",
         quantity : "2",
         taxCategory : "None",
         taxPercentage : "2200",
         imageUrl : "https:\/\/images.furla.com\/delivery\/public\/image\/furla\/f075cfd1-a586-4241-ab7a-9258d011abc7\/h8wzfw\/std\/670x670\/WC00018_ARE000_1007.jpgfurla_1927.png",
         productUrl : "https:\/\/test.furla.com\/it\/it\/eshop\/furla-1927-WC00018_ARE000_1007_0287S_100.html"
      },
      {
         amountExcludingTax : "0",
         taxAmount : "0",
         description : "STANDARD_SHIPPING",
         id : "4f3dd176c464c96945c18bdc71",
         quantity : "1",
         taxCategory : "None",
         taxPercentage : "0"
      }
   ],
    threeDS2RequestData : {
      deviceChannel : "browser",
      notificationURL : defaultUrl
}
};

const httpPostRaw = (endpoint, data) =>
    fetch(`/${endpoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response);

const httpPostnoJson = (endpoint, data) =>
    fetch(`/${endpoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(
      response => response.text()
    ); // convert to plain text

// Generic POST Helper
const httpPost = (endpoint, data) =>
    fetch(`/${endpoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response =>
      response.json()
    ); //.then(response => console.log('Response '+response))

// Get all available payment methods from the local server
const getPaymentMethods = () =>

    httpPost('paymentMethods', paymentMethodsConfig)
    .then(response => {
        if (response.error) throw 'No paymentMethods available';

        return response;
    })
    .catch(console.error);

  //INFO: add custom request here to overwrite dropin input
  //var custom = {
    //payment request here
  //}

   // "paymentMethod" : {
   //    "encryptedCardNumber" : "test_5454545454545454",
   //    "encryptedExpiryMonth" : "test_03",
   //    "encryptedExpiryYear" : "test_2030",
   //    "encryptedSecurityCode" : "test_737",
   //    "holderName" : "Elena",
   //    "type" : "scheme",
   //    "storeDetails": false
   // },

   // "threeDS2RequestData" : {
   //    "deviceChannel" : "browser",
   //    "notificationURL" : "http://localhost:3000/#/checkout",
   //    "threeDSCompInd" : "Y"
   // },

// Posts a new payment into the local server
const makePayment = (paymentMethod, config = {}) => {
    //const paymentsConfig = { ...config };
    const paymentsConfig = {
        ...paymentsDefaultConfig,
        ...config
    };
    var paymentRequest = {
        ...paymentsConfig,
        ...paymentMethod
    };

    if (document.getElementById('requestToPayments') !== null){
      var defaultRequest = document.getElementById("requestToPayments").value;
      if (defaultRequest!== null && defaultRequest !== ''){
        paymentRequest = JSON.parse(defaultRequest)
      } else document.getElementById('requestToPayments').innerHTML = JSON.stringify(paymentRequest);
    }

    paymentRequest.amount.value = parseInt(getAmount());
    paymentRequest.amount.currency = getCurrencyCode();
    paymentRequest.returnUrl = defaultUrl(paymentMethod.paymentMethod.type);
    paymentRequest.origin = defaultOrigin();
    paymentRequest.shopperReference = defaultShopperReference;

    //if (paymentRequest.paymentMethod.storedPaymentMethodId != null)
    //  paymentRequest.shopperInteraction = 'ContAuth';

    var obj = paymentRequest
    console.log('paymentRequest: ',obj)

    return httpPost('payments', paymentRequest)
        .then(response => {
            if (response.error) throw 'Payment initiation failed';

            if (document.getElementById('responseFromPayments') !== null){
                document.getElementById('responseFromPayments').innerHTML = JSON.stringify(response);
            }
            //document.cookie = "paymentData=" + response.paymentData;
            //document.cookie = "redirectResult=" + response.redirectResult;
            return response;
        })
        .catch(error => {
            console.log('error on makePayment' + error)
            throw Error(error);
        });
};

const handlePostMessage = (e) => {
    console.log('EVENTDATA: ' + e)
};

//to be used in redirect type. i.e Alipay, Interac
const paymentDetails = (paymentData, detailsKey, config = {}) => {
    //paymentData.details.threeDSAuthenticationOnly = true
    var paymentRequest = paymentData;

    if (getActionType() == "redirect") {
        paymentRequest = {
            details: {
              "redirectResult": config
                //[detailsKey]: config
            }
        }
     }
   else {
    paymentRequest =
        paymentData

  }

    if (document.getElementById('requestToPaymentDetails') !== null){
      var defaultRequest = document.getElementById("requestToPaymentDetails").value;
      // if (defaultRequest!== null && defaultRequest !== ''){
      //     document.getElementById('requestToPaymentDetails2').innerHTML = JSON.stringify(paymentRequest);
      // } else document.getElementById('requestToPaymentDetails').innerHTML = JSON.stringify(paymentRequest);
    }

    var obj = paymentRequest
    console.log("paymentdetails request: "+obj)

    return httpPostnoJson('payments/details', paymentRequest)
        .then(response => {
            if (response.error) throw 'Payment details failed';
            console.log("paymentdetails response: "+response)

            if (document.getElementById('responseFromPaymentDetails') !== null){
              var defaultRequest = document.getElementById("responseFromPaymentDetails").value;
              if (defaultRequest!== null && defaultRequest !== ''){
                  document.getElementById('responseFromPaymentDetails2').innerHTML = JSON.stringify(paymentRequest);
              } else document.getElementById('responseFromPaymentDetails').innerHTML = JSON.stringify(paymentRequest);
            }
            return response;
        })
        .catch(error => {
            console.log('error on paymentDetails' + error)
            throw Error(error);
        });
};

const fallbackthreedone = () =>
httpPost('fallbackthreedone')
.then(response => {
        return response;
    })
.catch(console.error);

const delayAndConfirm = () => {
    setTimeout(() =>      window.location = "http://localhost:3000/#/demo4", 2000);
  };
