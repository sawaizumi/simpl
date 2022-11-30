<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// include



// define



// global



// ===================================================================
// class
// -------------------------------------------------------------------

class TEST__SIMPL___Functions___Files extends TEST__SIMPL
{
	// ---------------------------------------------------------------
	// member


	// ---------------------------------------------------------------
	// static


	// ---------------------------------------------------------------
	// inherit

	function Main( $aaConfigurations )
	{
		TEST__SIMPL__AddSeparator( "TEST__SIMPL__FUNCTIONS___FILES" );

		TEST__SIMPL___Functions___Files__LoadFile( $aaConfigurations );
		TEST__SIMPL___Functions___Files__LoadJSON( $aaConfigurations );
	}


	// ---------------------------------------------------------------
	// public


	// ---------------------------------------------------------------
	// private


}



// ===================================================================
// public
// -------------------------------------------------------------------

function TEST__SIMPL___Functions___Files__LoadFile( $aaConfigurations )
{
	TEST__SIMPL__AddCount();

	$arStrings_Line = SIMPL__LoadFile( $aaConfigurations["_Functions.LoadFile.FileName"] );
	TEST__SIMPL__Check__Integer( count( $arStrings_Line ), 5 );
	TEST__SIMPL__Check__String( $arStrings_Line[0], "# 日本語UTF-8, LF, Tab=4" );

	TEST__SIMPL__AddState();
}


function TEST__SIMPL___Functions___Files__LoadJSON( $aaConfigurations )
{
	TEST__SIMPL__AddCount();

	$eJSON = SIMPL__LoadJSON( $aaConfigurations["_Functions.LoadJSON.FileName"], FALSE );
	$aaJSON = SIMPL__LoadJSON( $aaConfigurations["_Functions.LoadJSON.FileName"], TRUE );
	TEST__SIMPL__Check__String( SIMPL__GetValue( $eJSON, "format" ), "日本語UTF-8, LF, Tab=4" );
	TEST__SIMPL__Check__String( SIMPL__GetValue( $eJSON, "comment" ), "" );
	TEST__SIMPL__Check__Assoc( $aaJSON, array( "format" => "日本語UTF-8, LF, Tab=4", "comment" => "" ) );

	TEST__SIMPL__AddState();
}



// ===================================================================
// local
// -------------------------------------------------------------------



?>