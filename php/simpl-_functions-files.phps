<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// include



// define



// global



// ===================================================================
// public
// -------------------------------------------------------------------

function SIMPL__LoadFile( $eString_FullName )
{
	$eString_File = file_get_contents( $eString_FullName );
	$eString_File = str_replace( "\r\n", "\n", $eString_File );
	$eString_File = str_replace( "\r", "\n", $eString_File );
	$arStrings_Line = explode( "\n", $eString_File );

	return $arStrings_Line;
}


function SIMPL__LoadJSON( $eString_FullName, $bFlag_Assoc = TRUE )
{
	$eString_File = file_get_contents( $eString_FullName );
	$eJSON = json_decode( $eString_File, $bFlag_Assoc );

	return $eJSON;
}


function SIMPL__SaveBinaryFile( $eString_FullName, $eBinary )
{
	file_put_contents( $eString_FullName, $eBinary );
}


function SIMPL__SaveJSON( $eString_FullName, $eJSON )
{
	$eString_JSON = json_encode( $eJSON );
	file_put_contents( $eString_FullName, $eString_JSON );
}



// ===================================================================
// local
// -------------------------------------------------------------------



?>