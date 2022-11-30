<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// include



// define



// global



// ===================================================================
// public
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// auth

function SIMPL__IsLogin( $eObject = NULL )
{
	return TRUE;
}


// -------------------------------------------------------------------
// configuration

function SIMPL__LoadConfigurations( $eString_FullName )
{
	return SIMPL_CONFIGURATION__GetConfigurations( SIMPL__LoadFile( $eString_FullName ) );
}


function SIMPL__LoadConfiguration_XML( $eString_FullName )
{
	SIMPL_CONFIGURATION__GetConfiguration_XML( NULL, $eString_FullName );
}


// -------------------------------------------------------------------
// hash operation

if ( function_exists( "is_assoc" ) === FALSE )
{
// subject  : check associative array
// argument : various, object
// return   : bool, hash or not
function is_assoc( $eObject )
{
	if ( is_array( $eObject ) )
	{
		if ( count( array_diff_key( $eObject, range( 0, count( $eObject ) - 1 ) ) ) )
		{
			return TRUE;
		}
	}

	return FALSE;
}
}


if ( function_exists( "is_value" ) === FALSE )
{
// subject  : check value
// argument : various, object
// return   : bool, value or not
function is_value( $eObject )
{
	if ( is_array( $eObject ) )
	{
		return FALSE;
	}
	elseif ( is_object( $eObject ) )
	{
		return FALSE;
	}

	return TRUE;
}
}


// -------------------------------------------------------------------
// real operation

if ( function_exists( "is_real" ) === FALSE )
{
function is_real( $eObject )
{
	// 現時点ではis_floatのエイリアスだが本質的には実数表現のための型であれば浮動小数に限る必要はない
	return is_float( $eObject );
}
}


// -------------------------------------------------------------------
// zzz-unclassed

function SIMPL__GetScriptName( $iOffset_BackTrace = 1 )
{
	$arStrings = debug_backtrace();
	for ( $iCount_i = 0; $iCount_i < $iOffset_BackTrace; $iCount_i++ )
	{
		array_shift( $arStrings );
	}

	$aaValues = array_shift( $arStrings );

	return $aaValues["file"];
}



?>