var dropin = null;
var paymentMethodsConfiguration = {
    locale: defaultLocale,
    shopperReference: 'paybylink_shopperreference',
    showStoredPaymentMethods: true,
    card: {
        hasHolderName: true,
        holderNameRequired: true,
        name: 'Pay with card',
        data: {
            holderName: 'Mr Mrs. Shopper'
        },
        environment: 'test',
        enableStoreDetails: true,
        showRemovePaymentMethodButton: true
    },
    boletobancario: { // Optional configuration for Boleto
        personalDetailsRequired: false, //turn personalDetails section on/off
        showEmailAddress: true, // allow shopper to specify their email address
        data: {
            socialSecurityNumber: '56861752509',
            shopperName: {
                firstName: 'José',
                lastName: 'Silva'
            },
            billingAddress: {
                street: 'Rua Funcionarios',
                houseNumberOrName: '952',
                city: 'São Paulo',
                postalCode: '04386040',
                stateOrProvince: 'SP',
                country: `BR`
            },
            shopperEmail: 'mail@test.com'
        }
    }
}

var checkout = null;
var dropinComponent =
    paymentMethodsConfig.shopperReference = defaultShopperReference
getPaymentMethods().then(paymentMethodsResponse => {
    // 1. Create an instance of AdyenCheckout
     checkout = new AdyenCheckout({
        paymentMethodsConfiguration: paymentMethodsConfiguration,
        onSubmit: (state, component) => {
          console.log("Call to onSubmit in dropin.js")
          if(state.isValid){
            localStorage.setItem('state.data', JSON.stringify(state.data));
             window.location = "http://localhost:3000/#/demo3"
          }
        },
        onAdditionalDetails: (state, dropin) => {
           console.log("Call to onAdditionalDetails in dropin.js")
            paymentDetails(state.data)
                .then(result => {
                    if (JSON.parse(result).resultCode == 'ChallengeShopper' || JSON.parse(result).resultCode == 'IdentifyShopper') {
                        dropin.handleAction(JSON.parse(result).action);
                    } else if (JSON.parse(result).resultCode == 'Authorised') {
                      //  showFinalResultDropin(result);
                        dropin.setStatus('success');
                        delayAndConfirm()
                        localStorage.clear()
                    } else if (JSON.parse(result).resultCode == 'Cancelled') {
                        showFinalResultDropin(result);
                    } else {
                        dropin.setStatus('error');
                        localStorage.clear()
                    }
                })
                .catch(error => {
                    localStorage.clear()
                    console.log('error on submitDetails' + error)
                    throw Error(error);
                });
        },
        onComplete: state => {
            console.log('onComplete!')
        },
        onCancel: (data, dropin) => {
            dropin.setStatus('error');
        },
        onError: (data, dropin) => {
            console.log('ERROR!: '+ data.errorCode+" "+data.message)
        },
        onDisableStoredPaymentMethod: (data, dropin) => {
            console.log('onDisableStoredPaymentMethod!')
        },
        showPayButton: false,
        environment: 'test',
        countryCode: getCountryCode(),
        clientKey: "test_E3XT7DO34FETRCDF4XFV5XX2GMRW3TQZ",
        //clientKey: "test_NUXZ3ABL2BDDFHGXNZRDN3G5JYLOSM53",
        paymentMethodsResponse: paymentMethodsResponse,
        removePaymentMethods: ['paysafecard', 'c_cash', 'paypal'],
        enableStoreDetails: true
    });

    const storedPaymentMethod = paymentMethodsResponse.storedPaymentMethods != null ?
        paymentMethodsResponse.storedPaymentMethods[0] :
        null;

    // 2. Create and mount the Component
    dropin = checkout
        .create('dropin', {
            showRemovePaymentMethodButton: true,
            onSelect: (activeComponent) => {
                //console.log('activeComponent:' + activeComponent._id)
            },
            onReady: (activeComponent, state) => {
                console.log('Dropin is ready to use!')
            },
            data: {
                firstName: 'Testname'
            }
        })
        .mount('#dropin-container')
});
