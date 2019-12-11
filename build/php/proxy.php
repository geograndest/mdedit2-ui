<?php

// CORS enable
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');

//========================================================================
// FUNCTIONS
//========================================================================

function get($param, $default = false)
{
    if (isset($_GET[$param])) {
        return $_GET[$param];
    }
    return $default;
}

function getHeader($param, $default = false)
{
    if (isset($_SERVER[$param])) {
        return $_SERVER[$param];
    }
    return $default;
}

//========================================================================


// URL parameters
$username = get('username', false);
$password = get('password', false);
$url = get('url', false);

// Create a stream
$opts = array(
    'http' => array(
        'method' => "GET"
    ),
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

// Add authentification from URL parameters
if ($username and $password) {
    $opts['http']['header'] = "Authorization: Basic " . base64_encode("$username:$password");
}
// Create context options
$context = stream_context_create($opts);

if ($url) {
    echo file_get_contents($url, false, $context);
} else {
    echo "URL parameter not define.";
}
?>
