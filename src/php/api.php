<?php

/**
 * Documentation
 * 
 * Script permettant de gérer les fihes de métadonnées (fichiers XML) d'un utilisateur geOrchestra.
 * 
 * Limites:
 * - Ne fonctionne que si l'utilisateur appartient à un seul groupe EL_* car sinon, réelle difficulté pour gérer les fichiers sans ouvrir trop de failles de sécurité
 * - 
 */


// CORS enable
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
// header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

// Config
$config = array();
$config['role_prefix'] = 'ROLE_EL_';
$config['md_absolute_path'] = '../ '; // Non utilisé
// Chemin relatif vers le dossier metadata à partir de l'emplacement du script api.php
$config['md_relative_path'] = '../../metadata/';
$config['extentions'] = array('xml');
$config['edit_roles'] = array('ROLE_GN_REVIEWER', 'ROLE_GN_ADMIN');
$config['el_role_exclude'] = array('CAD_CNIL1', 'CAD_CNIL2');
// $config['actions'] = array('isAuth', 'getFiles', 'getFile', 'saveFile');
$config['roles_directories'] = array(
    'files' => 'files2',
    'AAA' => 'aaa',
    'ACHEO_ALSACE' => 'acheologie-alsace',
    'ADAUHR' => 'adauhr',
    'ADEUS' => 'adeus',
    'AGURAM' => 'aguram',
    'APRONA' => 'aprona',
    'ARAA' => 'araa',
    'ASPA' => 'aspa',
    'ATIP67' => 'atip67',
    'ATMO_GRAND-EST' => 'atmo-grandest',
    'AURM' => 'aurm',
    'CA_3F' => 'ca-3f',
    'CA_CHALONS-EN-CHAMPAGNE' => 'ca_chalons-en-champagne',
    'CA_CHAUMONT' => 'ca_chaumont',
    'CA_COLMAR' => 'ca-colmar',
    'CA_THIONVILLE' => 'ca_thionville',
    'CA_VAL-FENSCH' => 'ca_val-fensch',
    'CAMM' => 'camm',
    'CC_BASSE-ZORN' => 'cc_basse-zorn',
    'CC_BISCHWILLER' => 'cc_bischwiller',
    'CC_KOCHERSBERG' => 'cc-kochersberg',
    'CC_PAYS-RHENAN' => 'cc_pays-rhenan',
    'CC_PLAINE-RHIN' => 'cc_plaine-rhin',
    'CC_PORTE-ALSACE' => 'cc_porte-alsace',
    'CC_PORTES-LUXEMBOURG' => 'cc_portes-luxembourg',
    'CC_SAUER-PECHELBRONN' => 'cc_sauer-pechelbronn',
    'CC_SELESTAT' => 'cc_selestat',
    'CC_VITRY-CHAMPAGNE-DER' => 'cc-vitry-champagne-der',
    'CCI_ALSACE' => 'cci_alsace',
    'CD67' => 'cd67',
    'CD68' => 'cd68',
    'CHAMBRAGRI' => 'crage',
    'CO_67188' => 'co_67188',
    'CO_67556' => 'co_67556',
    'DDT10' => 'ddt10',
    'DDT51' => 'ddt51',
    'DDT54' => 'ddt54',
    'DRAC' => 'drac',
    'DREAL_GRAND-EST' => 'dreal_grand-est',
    'DRFIP_GRAND-EST' => 'drfip_grand-est',
    'ENGEES' => 'engees',
    'EPF_ALSACE' => 'epf_alsace',
    'EPTB_SEINE-GRANDS-LACS' => 'eptb_seine-grands-lacs',
    'GRAND-EST' => 'grandest',
    'INRAP' => 'inrap',
    'LEGTA_OBERNAI' => 'legta_obernai',
    'LIVE' => 'live',
    'LYCEE_LOUIS-ARMAND-MULHOUSE' => 'lycee_louis-armand-mulhouse',
    'ME_STRASBOURG' => 'ems',
    'ODONAT' => 'odonat',
    'OGE' => 'oge',
    'PAYS_RHIN-VIGNOBLE-GRAND-BALLON' => 'pays_rhin-vignoble-grand-ballon',
    'PNRVN' => 'pnrvn',
    'REGION_GRAND-EST' => 'region-grand-est',
    'SCOT_MVR' => 'scot_mvr',
    'SCOT_PIEMONT-VOSGES' => 'scot_piemont-vosges',
    'SCOT_THUR_DOLLER' => 'scot_thur_doller',
    'SDED52' => 'sded52',
    'SDIS67' => 'sdis67',
    'SDIS88' => 'sdis88',
    'SLM67' => 'slm67',
    'TEST' => 'test',
    'UDS' => 'uds',
    'ZAEU' => 'zaeu'
);

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

function post($param, $default = false)
{
    if (isset($_POST[$param])) {
        return $_POST[$param];
    }
    return $default;
}

function postdata($default = false)
{
    $postdata = file_get_contents("php://input");
    $result = json_decode($postdata);
    if ($result) {
        return $result;
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

function connect($config)
{
    $result['sec_editor'] = false;
    // Get headers from security proxy
    $result['sec_proxy'] = getHeader('HTTP_SEC_PROXY');
    $result['sec_username'] = getHeader('HTTP_SEC_USERNAME');
    $result['sec_email'] = getHeader('HTTP_SEC_EMAIL');
    // Get roles EL in LDAP group
    $result['sec_orgs'] = array();
    $result['sec_org'] = false;
    $result['sec_roles'] = explode(';', getHeader('HTTP_SEC_ROLES'));
    foreach ($result['sec_roles'] as $key => $role) {
        if ((substr($role, 0, strlen($config['role_prefix'])) == $config['role_prefix']) and (!in_array($role, $config['el_role_exclude']))) {
            $result['sec_orgs'][] = substr($role, strlen($role_prefix));
            $result['sec_org'] = substr($role, strlen($role_prefix));
        }
        if (in_array($role, $config['edit_roles'])) {
            $result['sec_editor'] = true;
        }
    }
    if ($result['sec_org'] and $result['sec_editor']) {
        return $result;
    }
    return false;
}

//========================================================================

// Get URL parameters
$action = get('action', false);
$filename = get('filename', false);
$debug = get('debug', false);
$data = postdata(false);

// Init reponse array
$response = array();
$response['success'] = false;
$response['message'] = "Erreur lors de la connection. Vérifiez si vous êtes bien authentifié.";
$response['action'] = $action;
$response['filename'] = $filename;

// Get connexion
$conn = connect($config);

// For tests
if ($debug) {
    $config['md_relative_path'] = '\\src\\php\\';
    $conn = array();
    $conn['success'] = true;
    $conn['message'] = "Debug";
    $conn['action'] = $action;
    $conn['filename'] = $filename;
    $conn['sec_editor'] = true;
    $conn['sec_proxy'] = getHeader('HTTP_SEC_PROXY');
    $conn['sec_username'] = 'debug';
    $conn['sec_email'] = 'debug@mail.com';
    $conn['sec_orgs'] = ['files', 'files2'];
    $conn['sec_org'] = 'files';
}

if ($conn) {
    switch ($action) {
        case 'isAuth':
            $conn['message'] = "Vous êtes bien connecté avec les droits d'édition";
            $response = $conn;
            break;

        case 'getFiles':
            $response['files'] = array();
            // TODO: change to get all files from différents directories => pas possible car trop complexe à gérer pour la création de fiches côté mdEdit
            // foreach ($conn['sec_orgs'] as $org) {
            $path = getHeader('DOCUMENT_ROOT') . $config['md_relative_path'] . $conn['sec_org'];
            $response['path'] = $path;
            // Gets files from org directory
            $files = new RecursiveDirectoryIterator($path);
            foreach (new RecursiveIteratorIterator($files) as $file) {
                $pathinfo = pathinfo($file);
                $fileinfo = stat($file);
                $f = array();
                $ext = $pathinfo['extension'];
                if (in_array(strtolower($ext), $config['extentions'])) {
                    $f['title'] = 'Error';
                    libxml_use_internal_errors(true);
                    $xml = simplexml_load_file($file);
                    if ($xml !== false) {
                        $namespaces = $xml->getDocNamespaces();
                        foreach ($namespaces as $key => $value) {
                            $xml->registerXPathNamespace($key, $value);
                        }
                        $xpath_title = "gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString/text()";
                        $f['title'] = implode('', $xml->xpath($xpath_title));
                    }
                    $f['path'] = str_replace(getHeader('DOCUMENT_ROOT'), '', $pathinfo['dirname']);
                    $f['basename'] = $pathinfo['basename'];
                    $f['ext'] = $ext;
                    $f['file'] = $pathinfo['filename'];
                    $f['filename'] = $f['path'] . '/' . $f['basename'];
                    $f['size'] = $fileinfo['size'];
                    $f['atime'] = $fileinfo['atime'];
                    $f['mtime'] = $fileinfo['mtime'];
                    $f['ctime'] = $fileinfo['ctime'];
                    $response['files'][] = $f;
                }
            }
            // }
            $response['message'] = "Affichage de la liste des fichiers";
            $response['success'] = true;
            break;

        case 'getFile':
            // Pour récupérer un fichier XML, utiliser directement l'URL vers le fichier. 
            // Les métadonnées doivent être en consultation libre.
            $response['message'] = "Affichage d'un fichier: fonction non implémentée. Utilisez directment l'URL du fichier";
            $response['success'] = false;
            break;

        case 'deleteFile':
            $response['message'] = "Suppression d'un fichier.";
            $response['success'] = false;
            if ($data) {
                $filename = getHeader('DOCUMENT_ROOT') . $config['md_relative_path'] . $conn['sec_org'] . '/' . $data->filename;
                if (file_exists($filename)) {
                    unlink($filename);
                    $response['message'] = "Suppression du fichier: " + $filename;
                    $response['success'] = true;
                }
            }
            break;

        case 'saveFile':
            // Principe:
            // 1- récupérer données transmises en POST: filename + path + content
            // 2- vérifier que path + filename exist (sinon = création de fichier, voir comment gérer)
            // 3- renommer fichier existant filename.xml en filename_20190124.save
            // 4- créer le fichier path + filename.xml
            $response['message'] = "Update file.";
            $response['success'] = false;
            if ($data) {
                $path = getHeader('DOCUMENT_ROOT') . $config['md_relative_path'] . $conn['sec_org'] . '/';
                if (!is_dir($path)) {
                    if (!mkdir($path, 0777, true)) {
                        $response['message'] = "Le dossier " . $path . " ne peut pas être créé.";
                    }
                }
                if (is_dir($path) and $data->filename and $data->content) {
                    chmod($path, 0777);
                    $success = copy($path . $data->filename, $path . $data->filename . '.save_' . time());
                    file_put_contents($path . $data->filename, $data->content);
                    chmod($path . $data->filename, 0777);
                    $response['success'] = true;
                    $response['path'] = $path;
                    $response['filename'] = $filename;
                    $response['message'] = "Le fichier a été transmis au serveur.";
                }
            }
            break;

        default:
            $response['message'] = "Vous êtes bien connecté avec les droits d'édition, mais aucune action n'est définie.";
            $response['success'] = true;
            break;
    }
}

echo json_encode($response);




?>
