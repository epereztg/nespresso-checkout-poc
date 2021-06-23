<?php

/** Set up the pay call to  adyen */
function fallbackthreedone()
{
  if (file_get_contents('php://input') != '') {
      $request = json_decode(file_get_contents('php://input'), true);
  } else {
      $request = array();
  }

  $apikey = getenv('CHECKOUT_APIKEY');

  $requestURL =$_SERVER['REQUEST_URI'];

  $url_components = parse_url($requestURL);

  // Use parse_str() function to parse the
  // string passed via URL
  parse_str($url_components['query'], $params);

  // Display result
  $redirectResult = $params['redirectResult'];


    //$redirectResult = $_GET['redirectResult'];
    $request = array(
        //'paymentData' => $paymentDataSaved,//<v66
        'details' => array(
          'redirectResult' => $redirectResult,
        //  'MD' => $_POST['MD'], //<v66
        //  'PaRes' => $_POST['PaRes'] //<v66
        )
    );

    $paymentDetailsString = json_encode($request);

    //  Initiate curl
    $curlAPICall = curl_init();

    // Set to POST
    curl_setopt($curlAPICall, CURLOPT_CUSTOMREQUEST, "POST");

    // Add JSON message
    curl_setopt($curlAPICall, CURLOPT_POSTFIELDS, $paymentDetailsString);

    // Will return the response, if false it print the response
    curl_setopt($curlAPICall, CURLOPT_RETURNTRANSFER, true);

    // Set the url
    //curl_setopt($curlAPICall, CURLOPT_URL, 'https://checkout-test.adyen.com/v66/payments/details');
    curl_setopt($curlAPICall, CURLOPT_URL, 'https://checkout-test.adyen.com/v67/payments/details');

    // Api key
    curl_setopt($curlAPICall, CURLOPT_HTTPHEADER,
        array(
            "X-Api-Key: " . $apikey,
            "Content-Type: application/json",
            "Content-Length: " . strlen($paymentDetailsString)
        )
    );

    // Execute
    $result = curl_exec($curlAPICall);

    // Closing
    curl_close($curlAPICall);

    //This file returns a JSON object
    setcookie("requestURL", $requestURL, time()+30*24*60*60);
    setcookie("redirectResult", $redirectResult, time()+30*24*60*60);
    setcookie("threeds1result", $result, time()+30*24*60*60);
    setcookie("paymentDetailsString", $paymentDetailsString, time()+30*24*60*60);

    header("Location: http://localhost:3000/#/demo3");
}
?>
