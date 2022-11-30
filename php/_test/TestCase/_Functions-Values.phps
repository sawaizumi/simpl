<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// include



// define



// global



// ===================================================================
// class
// -------------------------------------------------------------------

class TEST__SIMPL___Functions___Values extends TEST__SIMPL
{
	// ---------------------------------------------------------------
	// member


	// ---------------------------------------------------------------
	// static


	// ---------------------------------------------------------------
	// inherit

	function Main( $aaConfigurations )
	{
		TEST__SIMPL__AddSeparator( "TEST__SIMPL__FUNCTIONS" );

		TEST__SIMPL___Functions___Values__AddValue( $aaConfigurations );
		TEST__SIMPL___Functions___Values__GetValue( $aaConfigurations );
		TEST__SIMPL___Functions___Values__PushValue( $aaConfigurations );
		TEST__SIMPL___Functions___Values__SetValue_Default( $aaConfigurations );
	}


	// ---------------------------------------------------------------
	// public


	// ---------------------------------------------------------------
	// private


}



// ===================================================================
// public
// -------------------------------------------------------------------

function TEST__SIMPL___Functions___Values__AddValue( $aaConfigurations )
{
	TEST__SIMPL__AddCount();

	$aaValues = array();
	$aaValues = SIMPL__AddValue( $aaValues, "a" );
	TEST__SIMPL__Check__Integer( SIMPL__GetValue( $aaValues, "a" ), 1 );
	$aaValues = SIMPL__AddValue( $aaValues, "a" );
	TEST__SIMPL__Check__Integer( SIMPL__GetValue( $aaValues, "a" ), 2 );
	$aaValues = SIMPL__AddValue( $aaValues, "a", 2 );
	TEST__SIMPL__Check__Integer( SIMPL__GetValue( $aaValues, "a" ), 4 );

	TEST__SIMPL__AddState();
}


function TEST__SIMPL___Functions___Values__GetValue( $aaConfigurations )
{
	TEST__SIMPL__AddCount();

	$aaValues = array();
	$aaValues["a"] = 1;
	$aaValues["b"] = array( 1, 2 );
	$aaValues["c"] = NULL;
	$aaValues["d"] = "x";
	$aaValues["e"] = json_decode( '{ "x" : [] }' );
	TEST__SIMPL__Check__Integer( SIMPL__GetValue( $aaValues, "a" ), 1 );
	TEST__SIMPL__Check__Array( SIMPL__GetValue( $aaValues, "b" ), array( 1, 2 ) );
	TEST__SIMPL__Check__Null( SIMPL__GetValue( $aaValues, "c" ) );
	TEST__SIMPL__Check__String( SIMPL__GetValue( $aaValues, "d" ), "x" );
	TEST__SIMPL__Check__NilArray( SIMPL__GetValue( $aaValues["e"], "x" ) );

	TEST__SIMPL__AddState();
}


function TEST__SIMPL___Functions___Values__PushValue( $aaConfigurations )
{
	TEST__SIMPL__AddCount();

	$aaValues = array();
	$aaValues["a"] = 1;
	$aaValues["b"] = array();
	$aaValues["c"] = array( "x" => "y" );
	$aaValues["d"] = NULL;
	$aaValues["e"] = json_decode( '{ "x" : [] }' );
	$aaValues = SIMPL__PushValue( $aaValues, "a", 2 );
	TEST__SIMPL__Check__Array( SIMPL__GetValue( $aaValues, "a" ), array( 1, 2 ) );
	$aaValues = SIMPL__PushValue( $aaValues, "b", 2 );
	TEST__SIMPL__Check__Array( SIMPL__GetValue( $aaValues, "b" ), array( 2 ) );
	$aaValues = SIMPL__PushValue( $aaValues, "c", 2 );
	TEST__SIMPL__Check__Array( SIMPL__GetValue( $aaValues, "c" ), array( array( "x" => "y" ), 2 ) );
	$aaValues = SIMPL__PushValue( $aaValues, "d", 2 );
	TEST__SIMPL__Check__Array( SIMPL__GetValue( $aaValues, "d" ), array( NULL, 2 ) );
	$aaValues = SIMPL__PushValue( $aaValues, "e", 2 );
	TEST__SIMPL__Check__Array( SIMPL__GetValue( $aaValues, "e" ), array( json_decode( '{ "x" : [] }' ), 2 ) );

	TEST__SIMPL__AddState();
}


function TEST__SIMPL___Functions___Values__SetValue_Default( $aaConfigurations )
{
	TEST__SIMPL__AddCount();

	$aaValues = array();
	$aaValues["a"] = 1;
	$aaValues["b"] = array();
	$aaValues["c"] = array( "x" => "y" );
	$aaValues["d"] = NULL;
	$aaValues["e"] = json_decode( '{ "x" : [] }' );
	TEST__SIMPL__Check__Integer( SIMPL__GetValue( $aaValues, "x", 1 ), 1 );
	$aaValues = SIMPL__SetValue_Default( $aaValues, "a", 2 );
	TEST__SIMPL__Check__Integer( SIMPL__GetValue( $aaValues, "a" ), 1 );
	$aaValues = SIMPL__SetValue_Default( $aaValues, "b", 2 );
	TEST__SIMPL__Check__NilArray( SIMPL__GetValue( $aaValues, "b" ) );
	$aaValues = SIMPL__SetValue_Default( $aaValues, "c", 2 );
	TEST__SIMPL__Check__Integer( SIMPL__GetValue( $aaValues, "c" ), array( "x" => "y" ) );
	$aaValues = SIMPL__SetValue_Default( $aaValues, "d", 2 );
	TEST__SIMPL__Check__Null( SIMPL__GetValue( $aaValues, "d" ) );
	$aaValues = SIMPL__SetValue_Default( $aaValues, "e", 2 );
	TEST__SIMPL__Check__Object( SIMPL__GetValue( $aaValues, "e" ), json_decode( '{ "x" : [] }' ) );
	$aaValues = SIMPL__SetValue_Default( $aaValues, "x", 2 );
	TEST__SIMPL__Check__Integer( SIMPL__GetValue( $aaValues, "x" ), 2 );

	TEST__SIMPL__AddState();
}



// ===================================================================
// local
// -------------------------------------------------------------------



?>