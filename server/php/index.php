<?php
/**
 * Adyen Checkout Example (https://www.adyen.com/)
 * Copyright (c) 2019 Adyen BV (https://www.adyen.com/)
 */

require('api/paymentMethods.php');
require('api/payments.php');
require('api/originKeys.php');
require('api/paymentsDetails.php');
require('api/fallbackthreedone.php');

// Basic routing
$request_uri = explode('?', $_SERVER['REQUEST_URI'], 2);

switch($request_uri[0]) {
    case '/paymentMethods':
        header('Content-Type: application/json');
        echo getPaymentMethods("EUR", 3000, "NL","paybylink_shopperreference");
        break;

    // /payments
    case '/payments':
        header('Content-Type: application/json');
        echo initiatePayment();
        break;

    case '/payments/details':
        header('Content-Type: application/json');
        echo initiatePaymentDetails();
        break;

    // /originKeys
    case '/originKeys':
        header('Content-Type: application/json');
        echo getOriginKey();
        break;

    case '/fallbackthreedone':
        header('Content-Type: application/json');
        $myresult = fallbackthreedone($request_uri[0]);
        break;

    default:
        return false;

}
