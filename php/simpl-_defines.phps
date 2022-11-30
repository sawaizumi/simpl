<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// pre include



// include



// define
define( "SIMPL__INTEGER__VERSION__MAJOR", 0 );
define( "SIMPL__INTEGER__VERSION__MINOR", 1 );
define( "SIMPL__INTEGER__VERSION__RELEASE", 0 );
define( "SIMPL__ARRAY__VERSION", array( SIMPL__INTEGER__VERSION__MAJOR, SIMPL__INTEGER__VERSION__MINOR, SIMPL__INTEGER__VERSION__RELEASE ) );
define( "SIMPL__STRING__VERSION", sprintf( "%d.%02d.%04d", SIMPL__INTEGER__VERSION__MAJOR, SIMPL__INTEGER__VERSION__MINOR, SIMPL__INTEGER__VERSION__RELEASE ) );
define( "SIMPL__STRING__VERSION__SHORT", sprintf( "%d.%d.%d", SIMPL__INTEGER__VERSION__MAJOR, SIMPL__INTEGER__VERSION__MINOR, SIMPL__INTEGER__VERSION__RELEASE ) );

define( "SIMPL__STRING__DEFINE_PREFIX", "SIMPL" );
define( "SIMPL__STRING__KEYWORD___DEFAULT", "[Default]" );
define( "SIMPL__STRING__FORMAT__DATETIME__FULL", "Y-m-d H:i:s ( O )" );
define( "SIMPL__STRING__FORMAT__DATETIME__HIDE_DIFFERENCE", "Y-m-d H:i:s" );
define( "SIMPL__STRING__FORMAT__DATETIME", SIMPL__STRING__FORMAT__DATETIME__FULL );
define
	( 
		"SIMPL__LIST__STRING_VALUES__BOOLEAN", 
		array
			( 
				"" => FALSE, 
				"0" => FALSE, 
				"1" => TRUE, 
				"disable" => FALSE, 
				"enable" => TRUE, 
				"failure" => FALSE, 
				"in" => TRUE, 
				"invalid" => FALSE, 
				"n" => FALSE, 
				"nan" => FALSE, 
				"ng" => FALSE, 
				"nil" => FALSE, 
				"no" => FALSE, 
				"normal" => TRUE, 
				"null" => FALSE, 
				"off" => FALSE, 
				"ok" => TRUE, 
				"on" => TRUE, 
				"out" => FALSE, 
				"reverse" => FALSE, 
				"success" => TRUE, 
				"valid" => TRUE, 
				"y" => TRUE, 
				"yes" => TRUE, 

				"false" => FALSE, 
				"true" => TRUE 
			) 
	);
define( "SIMPL__LIST__STRING_VALUES__FALSE", array_keys( SIMPL__LIST__STRING_VALUES__BOOLEAN, FALSE, TRUE ) );
define( "SIMPL__LIST__STRING_VALUES__TRUE", array_keys( SIMPL__LIST__STRING_VALUES__BOOLEAN, TRUE, TRUE ) );



// global
global $g_aaDebug__SIMPL;
$g_aaDebug__SIMPL = array();



// environment



?>