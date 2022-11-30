<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// include



// define



// global



// ===================================================================
// class
// -------------------------------------------------------------------

class TEST__SIMPL___Wrap extends TEST__SIMPL
{
	// ---------------------------------------------------------------
	// member


	// ---------------------------------------------------------------
	// static


	// ---------------------------------------------------------------
	// inherit

	function Main( $aaConfigurations )
	{
		TEST__SIMPL__AddSeparator( "TEST__SIMPL__WRAP" );

		TEST__SIMPL__GetScriptName( $aaConfigurations );
		TEST__SIMPL__IsLogin( $aaConfigurations );
		TEST__SIMPL__LoadConfigurations( $aaConfigurations );
	}


	// ---------------------------------------------------------------
	// public


	// ---------------------------------------------------------------
	// private


}



// ===================================================================
// public
// -------------------------------------------------------------------

function TEST__SIMPL__GetScriptName( $aaConfigurations )
{
	TEST__SIMPL__AddCount();

	TEST__SIMPL__Check__String( basename( SIMPL__GetScriptName() ), $aaConfigurations["Wrap.GetScriptName.FileName.1"] );
	TEST__SIMPL__Check__String( basename( SIMPL__GetScriptName( 1 ) ), $aaConfigurations["Wrap.GetScriptName.FileName.1"] );
	TEST__SIMPL__Check__String( basename( SIMPL__GetScriptName( 2 ) ), $aaConfigurations["Wrap.GetScriptName.FileName.2"] );

	TEST__SIMPL__AddState();
}


function TEST__SIMPL__IsLogin( $aaConfigurations )
{
	TEST__SIMPL__AddCount();

	TEST__SIMPL__Check__Boolean( SIMPL__IsLogin() );

	TEST__SIMPL__AddState();
}


function TEST__SIMPL__LoadConfigurations( $aaConfigurations )
{
	TEST__SIMPL__AddCount();

	$aaJSON = SIMPL__LoadJSON( "TestData/test-configuration.json", TRUE );
	$aaValues = SIMPL__LoadConfigurations( "TestData/test-configuration.ini" );
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