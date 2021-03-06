const Demo1 = {
    template: demo1,
    data() {
        return {
            componentKey: 0,
        }
    },
    methods: {
        changeCurrency() {
            var sel = document.getElementById('currencies');
            //console.log('changecurrencies: '+ sel.value );
            document.getElementById('currencies').getElementsByTagName('option')[sel.selectedIndex].selected = 'selected'
            localStorage.setItem('defaultCurrency', sel.value)
            localStorage.setItem('defaultCurrencyIndex', sel.selectedIndex)
            location.reload();
        },
        changeShopperLocale() {
            var sel = document.getElementById('locales');
            //console.log('changeShopperLocale: '+ sel.value );
            document.getElementById('locales').getElementsByTagName('option')[sel.selectedIndex].selected = 'selected'
            localStorage.setItem('defaultLocale', sel.value)
            localStorage.setItem('defaultlocaleIndex', sel.selectedIndex)
            location.reload();
        },
        changeLocation() {
            //todo: use getCountryIndex
            var sel = document.getElementById('countries');
            //console.log('changeLocation: '+ sel.value );
            document.getElementById('countries').getElementsByTagName('option')[sel.selectedIndex].selected = 'selected'
            // saveCountryCode(sel.value);
            // saveCountryIndex(sel.selectedIndex);
            localStorage.setItem('defaultCountry', sel.value)
            localStorage.setItem('countryIndex', sel.selectedIndex)
            console.log('defaultCountry changed to: ' + sel.value)
            location.reload();
        }
    },
    mounted() {
        fillCountries();
        fillCurrencies();
        fillLocale();

        document.getElementById('countries').getElementsByTagName('option')[getCountryIndex()].selected = 'selected'
        document.getElementById('locales').getElementsByTagName('option')[getLocaleIndex()].selected = 'selected'
        document.getElementById('currencies').getElementsByTagName('option')[getCurrencyIndex()].selected = 'selected'

        console.log("Showing Payment Methods for: Country " +
            getCountryCode(),
            +" Currency: " +
            getCurrencyCode())
        saveAmount(defaultAmount);
        loadComponentsScripts()
        //localStorage.removeItem('state.data')
        //localStorage.clear();
    },
};

const Demo2 = {
    template: demo2,
    data() {
        return {
            componentKey: 0,
        }
    },
    methods: {},
    mounted() {},
};

const Demo3 = {
    template: demo3,
    data() {
        return {
            componentKey: 0,
        }
    },
    methods: {
        handleOnAdditionalDetails(statedata) {
          if (localStorage.getItem('actiontype') == "threeDS2"){
            paymentDetails(statedata)
                .then(result => {
                    showFinalResultDropin(result);
                    localStorage.clear();
                })
          }
        }
    },
    mounted() {

        var requestURL = getCookie('requestURL'); //just for testing purposes
        var redirectResult = getCookie('redirectResult'); //just for testing purposes
        var threeds1resultCookie = getCookie('threeds1result');
        var paymentDetailsString = getCookie('paymentDetailsString');
        //var request = getCookie('request');

        console.log("requestURL: " + requestURL)
        console.log("redirectResult: " + redirectResult)
        console.log("threeds1resultCookie: " + threeds1resultCookie)
        console.log("paymentDetailsString: " + paymentDetailsString)

        const url = window.location.href
        var payload = getPayloadFromUrl(url);
        var isRedirectCallback = url.includes("redirectResult") || url.includes("payload");

        if (threeds1resultCookie != null && threeds1resultCookie != "") {
            showFinalResultDropin(threeds1resultCookie)
            // document.cookie = "threeds1resultCookie=";
            //      console.log('threeds1resultCookie'+ threeds1resultCookie)
        } else if (isRedirectCallback) {
            var detailsKey = localStorage.getItem('details.key');
            var resultCode = getResultCodeFromUrl(url);
            var paymentData = getPaymentData();

            paymentDetails(paymentData, detailsKey, payload) //alipay
                .then(result => {
                    // Your function to show the final result to the shopper.
                    showFinalResultDropin(result);
                    delayAndConfirm()
                    //console.log('paymentDetails result: ' + result)
                    localStorage.clear();
                })
        } else {
            ///--------
            var statedata = JSON.parse(localStorage.getItem('state.data'));
            const configuration = {
                locale: "en_US",
                environment: "test",
                clientKey: "test_E3XT7DO34FETRCDF4XFV5XX2GMRW3TQZ",
                onAdditionalDetails: this.handleOnAdditionalDetails(statedata) //paymentDetails(statedata)//this.handleOnAdditionalDetails(statedata)//handleOnAdditionalDetails
            };
            //const checkout = new AdyenCheckout(configuration);
            //paymentsDefaultConfig.returnUrl =  "http://localhost:3000/#/demo2"
            //paymentsDefaultConfig.origin =  "http://localhost:3000/#/demo2"
            makePayment(statedata)
                .then(response => {
                    if (response.action) {
                        saveActionType(response.action.type)
                        if (response.details != null) {
                            localStorage.setItem('details.key', response.details[0].key)
                        } else
                            checkout.createFromAction(response.action).mount('#dropin-container');
                        //this.delayAndConfirm()
                    } else if (response.resultCode === "Authorised") {
                        //dropin.setStatus('success');
                        showFinalResultDropin(JSON.stringify(response))
                        //this.delayAndConfirm()
                    } else {
                        showFinalResultDropin(JSON.stringify(response));
                    }
                    delayAndConfirm()
                })
                .catch(error => {
                    console.log('error on makePayment' + error)
                    throw Error(error);
                });
        }

        //Clear cookies - test
        document.cookie = "threeds1result=";
        document.cookie = "requestURL=";
        document.cookie = "paymentDetailsString=";
        document.cookie = "redirectResult=";
        document.cookie = "request=";
    }
}

const Demo4 = {
    template: demo4,
    data() {
        return {
            componentKey: 0,
        }
    },
    methods: {},
    mounted() {},
};

Vue.component('pay-by-link', {
    template: `

  `,
});


const routes = [{
        path: "/",
        component: Demo1,
        meta: {
            pageTitle: "Welcome"
        }
    },
    {
        path: "/demo1",
        component: Demo1,
        meta: {
            pageTitle: "Demo1"
        }
    },
    {
        path: "/demo2",
        component: Demo2,
        meta: {
            pageTitle: "Demo2"
        }
    },
    {
        path: "/demo3",
        component: Demo3,
        meta: {
            pageTitle: "Demo3"
        }
    },
    {
        path: "/demo4",
        component: Demo4,
        meta: {
            pageTitle: "Demo4"
        }
    }
];

const router = new VueRouter({
    routes
});

const store = new Vuex.Store({
    state: {
        size: null,
        lastName: null,
        shopperReference: null
    }
});

NavigationHelper.store = store;
Vue.prototype.$NavigationHelper = NavigationHelper;
new Vue({
    el: "#app",
    router,
    store,
    template: "#appTemplate",
    data() {
        return {
            title: "Welcome"
        };
    },
    watch: {},
});


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
