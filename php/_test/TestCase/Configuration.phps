<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// include



// define



// global



// ===================================================================
// class
// -------------------------------------------------------------------

class TEST__SIMPL__Configuration extends TEST__SIMPL
{
	// ---------------------------------------------------------------
	// member


	// ---------------------------------------------------------------
	// static


	// ---------------------------------------------------------------
	// inherit

	function Main( $aaConfigurations )
	{
		TEST__SIMPL_CONFIGURATION__GetConfigurations( $aaConfigurations );
	}


	// ---------------------------------------------------------------
	// public


	// ---------------------------------------------------------------
	// private


}



// ===================================================================
// public
// -------------------------------------------------------------------

function TEST__SIMPL_CONFIGURATION__GetConfigurations( $aaConfigurations )
{
	TEST__SIMPL__AddSeparator( "TEST__SIMPL__CONFIGURATION" );
	TEST__SIMPL__AddCount();

	$aaJSON = SIMPL__LoadJSON( $aaConfigurations["Configuration.FileName.JSON"], TRUE );
	$arStrings_Line = SIMPL__LoadFile( $aaConfigurations["Configuration.FileName.INI"] );
	$aaValues = SIMPL_CONFIGURATION__GetConfigurations( $arStrings_Line );
	TEST__SIMPL__Check__String( $aaValues["Base.x"], $aaJSON["Base"]["x"] );
	TEST__SIMPL__Check__String( $aaValues["Base.z"], $aaJSON["Base"]["z"] );
	TEST__SIMPL__Check__Null( $aaValues["Base.a"] );
	TEST__SIMPL__Check__Array( $aaValues["Base.i"][0], $aaJSON["Base"]["i"][0] );
	TEST__SIMPL__Check__Array( $aaValues["Multi.Base.x"], $aaJSON["Multi"]["Base"]["x"] );
	TEST__SIMPL__Check__Array( $aaValues["Multi.Array.x"], $aaJSON["Multi"]["Array"]["x"] );
	TEST__SIMPL__Check__Array( $aaValues["Multi.Array.Add.x"], $aaJSON["Multi"]["Array"]["Add"]["x"] );

	TEST__SIMPL__AddState();
}



// ===================================================================
// local
// -------------------------------------------------------------------



?>