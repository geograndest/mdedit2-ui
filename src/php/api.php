<?php

/**
 * Documentation
 *
 * Script permettant de gérer les fihes de métadonnées (fichiers XML) d'un utilisateur geOrchestra.
 *
 * Limites:
 * - Ne fonctionne que si l'utilisateur appartient à un seul groupe EL_* car sinon, réelle difficulté pour gérer les fichiers sans ouvrir trop de failles de sécurité
 * - Le nom du fichier XML doit obligatoirement être l'identifiant de la fiche
 * - Nécessité de respecter une arborescence de fichiers tel qu'une fiche et l'ensemble de ses ressources soient localisées dans un dossier ayant pour non l'identifiant de la fiche (de la forme /metadata/org/mdfile/mdfile.xml)
 * - Le dossier d'une fiche doit être localisé obligatoirement à la racine du dossier metadata du partenaire (de la forme /metadata/org/fileid/fileid.xml)
 * - Le dossier d'une fiche ne peut pas comporter de sous dossiers
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
$config['extentions'] = array();
$config['edit_roles'] = array('ROLE_GN_REVIEWER', 'ROLE_GN_ADMIN');
$config['el_role_exclude'] = array('CAD_CNIL1', 'CAD_CNIL2');
// $config['actions'] = array('isAuth', 'getFiles', 'getFile', 'saveFile');
$config['roles_directories'] = array(
    'files2' => 'files2',
    'files' => 'files',
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
    // TODO: à reprendre
    if ($result['sec_org'] and $result['sec_editor']) {
        $result['sec_dir'] = $config['roles_directories'][$result['sec_org']];
        return $result;
    }
    return false;
}
 
//========================================================================
 
// Get URL parameters
$action = get('action', false);
$filename = get('filename', false);
$exts = get('exts', false);
$debug = get('debug', false);
$data = postdata(false);
 
// Update config if exts is defined
if ($exts) {
    $config['extentions'] = explode(',', $exts);
}
 
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
    $config['md_relative_path'] = '\\';
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
    // $conn['sec_org'] = 'files';
    // $conn['sec_dir'] = $config['roles_directories'][$conn['sec_org']];
}

if ($conn) {
    switch ($action) {
        case 'isAuth':
            $conn['message'] = "Vous êtes bien connecté avec les droits d'édition";
            $response = $conn;
            break;

        case 'getFiles':
            $response['files'] = [];
            $response['orgs'] = $conn['sec_orgs'];
            // TODO: change to get all files from différents directories => pas possible car trop complexe à gérer pour la création de fiches côté mdEdit
            foreach ($conn['sec_orgs'] as $org) {
                // $path = getHeader('DOCUMENT_ROOT') . $config['md_relative_path'] . $conn['sec_dir'];
                $path = getHeader('DOCUMENT_ROOT') . $config['md_relative_path'] . $config['roles_directories'][$org];
                // $response['path'] = $path;
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
                        // $f['dir'] = str_replace(getHeader('DOCUMENT_ROOT'), '', $pathinfo['dirname']);
                        $f['path'] = str_replace(getHeader('DOCUMENT_ROOT'), '', $pathinfo['dirname']);
                        $f['org'] = $org;
                        $f['basename'] = $pathinfo['basename'];
                        $f['ext'] = $ext;
                        $f['file'] = $pathinfo['filename'];
                        $f['filename'] = $f['path'] . DIRECTORY_SEPARATOR . $f['basename'];
                        // $f['url'] = "http" . (!empty($_SERVER['HTTPS'] ) ? "s" : "") . "://" .$_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
                        $f['size'] = $fileinfo['size'];
                        $f['atime'] = $fileinfo['atime'];
                        $f['mtime'] = $fileinfo['mtime'];
                        $f['ctime'] = $fileinfo['ctime'];
                        $response['files'][$org][] = $f;
                    }
                }
            }
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
            $response['message'] = "Suppression d'une fiche XML et du dossier associé.";
            $response['success'] = false;
            if ($data) {
                // var_dump($data);
                // echo $data->file->org;
                // var_dump( $conn['sec_orgs']);
                // TODO: Vérifier si l'utilisateur a le droit d'accéder au dossier $org
                if (in_array($data->file->org, $conn['sec_orgs'])) {
                    // echo 11111;
                    // $dirname = getHeader('DOCUMENT_ROOT') . $config['md_relative_path'] . $conn['sec_dir'] . DIRECTORY_SEPARATOR . $data->filename . DIRECTORY_SEPARATOR;
                    $dirname = getHeader('DOCUMENT_ROOT') . $config['md_relative_path'] . $config['roles_directories'][$data->file->org] . $data->file->file . DIRECTORY_SEPARATOR;
                    $filename = getHeader('DOCUMENT_ROOT') . $config['md_relative_path'] . $config['roles_directories'][$data->file->org] . $data->file->filename;
                    // print_r($data);
                    // print($dirname);
                    echo $filename;
                    // echo $dirname;
                    if (is_file($filename)) {
                        unlink($filename);
                        $response['message'] = "Suppression du fichier: " + $filename + ".";
                        $response['success'] = true;
                    }
                    if (is_dir($dirname)) {
                        // TODO: Supprimer également le dossier! ou du moins le renommer! => deleted_filename/deleted_filenement.xml_
                        array_map('unlink', glob($dirname . '*'));
                        rmdir($dirname);
                        $response['message'] = "Suppression du fichier: " + $filename + " et du dossier associé.";
                        $response['success'] = true;
                    }
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
                // $path = getHeader('DOCUMENT_ROOT') . $config['md_relative_path'] . $conn['sec_dir'] . DIRECTORY_SEPARATOR . $data->filename . DIRECTORY_SEPARATOR;
                $path = getHeader('DOCUMENT_ROOT') . $config['md_relative_path'] . $config['roles_directories'][$org] . DIRECTORY_SEPARATOR . $data->filename . DIRECTORY_SEPARATOR;
                if (!is_dir($path)) {
                    if (!mkdir($path, 0777, true)) {
                        $response['message'] = "Le dossier " . $path . " ne peut pas être créé.";
                    }
                }
                if (is_dir($path) and $data->filename and $data->content) {
                    chmod($path, 0777);
                    $success = copy($path . $data->filename . '.xml', $path . $data->filename . '.save_' . time());
                    file_put_contents($path . $data->filename . '.xml', $data->content);
                    chmod($path . $data->filename . '.xml', 0777);
                    $response['success'] = true;
                    $response['path'] = $path;
                    $response['filename'] = $filename;
                    $response['message'] = "Le fichier a été sauvegardé.";
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
 
 
 
 
 
 
 
 
 