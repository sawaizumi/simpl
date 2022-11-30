<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// include



// define



// global



// ===================================================================
// class
// -------------------------------------------------------------------

class TEST__SIMPL___Base extends TEST__SIMPL
{
	// ---------------------------------------------------------------
	// member


	// ---------------------------------------------------------------
	// static


	// ---------------------------------------------------------------
	// inherit

	function Main( $aaConfigurations )
	{
		local_TEST__TYPE();
		local_TEST__OPERATOR_Compare();

		TEST__SIMPL__AddSeparator( "TEST__SIMPL___BASE" );

		TEST__SIMPL___Base__CheckEquals( $aaConfigurations );

		TEST__SIMPL___Base__TEST__SIMPL__BuildDummyData( $aaConfigurations );
	}


	// ---------------------------------------------------------------
	// public


	// ---------------------------------------------------------------
	// private


}



// ===================================================================
// public
// -------------------------------------------------------------------

function TEST__SIMPL___Base__CheckEquals( $aaConfigurations )
{
	TEST__SIMPL__AddCount();

	$aaValues = array();
	$aaValues["a"] = array( "x" => "y" );
	$aaValues["b"] = NULL;
	$aaValues["c"] = array( 1, 2, 3 );
	$aaValues["d"] = json_decode( '{ "x" : [ 1, 2, null ] }' );
	$aaValues["e"] = "x";
	TEST__SIMPL__Check__Assoc( $aaValues, $aaValues );

	TEST__SIMPL__AddState();
}


function TEST__SIMPL___Base__TEST__SIMPL__BuildDummyData( $aaConfigurations )
{
	TEST__SIMPL__AddCount();

	// テスト用ダミーデータ生成関数のテスト
//	TEST__SIMPL__BuildDummyData( $iSize, $eData = NULL )
	TEST__SIMPL__Check__Integer( strlen( TEST__SIMPL__BuildDummyData( 1000000 ) ), 1000000 );

	TEST__SIMPL__AddState();
}



// ===================================================================
// local
// -------------------------------------------------------------------

function local_TEST__TYPE()
{
	TEST__SIMPL__AddSeparator( "TEST__TYPE" );

	TEST__SIMPL__AddMessage_Object( "null", NULL );
	TEST__SIMPL__AddMessage_Object( "boolean", TRUE );
	TEST__SIMPL__AddMessage_Object( "boolean", FALSE );
	TEST__SIMPL__AddMessage_Object( "integer", 0 );
	TEST__SIMPL__AddMessage_Object( "integer", 1 );
	TEST__SIMPL__AddMessage_Object( "integer", 2 );
	TEST__SIMPL__AddMessage_Object( "integer", 0x0abcdef0 );// 16進数
	TEST__SIMPL__AddMessage_Object( "integer", 0777 );// 8進数
	TEST__SIMPL__AddMessage_Object( "integer", 0b1010 );// 2進数
	TEST__SIMPL__AddMessage_Object( "float", 0.0 );
	TEST__SIMPL__AddMessage_Object( "float", 1.0 );
	TEST__SIMPL__AddMessage_Object( "float", 2.0 );
	TEST__SIMPL__AddMessage_Object( "float", 3.0000001 );
	TEST__SIMPL__AddMessage_Object( "float", 1e2 );
	TEST__SIMPL__AddMessage_Object( "string", "NULL" );
	TEST__SIMPL__AddMessage_Object( "string", "TRUE" );
	TEST__SIMPL__AddMessage_Object( "string", "FALSE" );
	TEST__SIMPL__AddMessage_Object( "string", "0" );
	TEST__SIMPL__AddMessage_Object( "string", "1" );
	TEST__SIMPL__AddMessage_Object( "string", "2" );
	TEST__SIMPL__AddMessage_Object( "string", "3.0000001" );
	TEST__SIMPL__AddMessage_Object( "string", "1e2" );
	TEST__SIMPL__AddMessage_Object( "string", "0x0abcdef0" );
	TEST__SIMPL__AddMessage_Object( "string", "0abcdef0" );
	TEST__SIMPL__AddMessage_Object( "string", "abcdef" );
	TEST__SIMPL__AddMessage_Object( "array", array() );
	TEST__SIMPL__AddMessage_Object( "array", array( 0, 1 ) );
	TEST__SIMPL__AddMessage_Object( "array", array( 0 => 2, 1 => 3 ) );
	TEST__SIMPL__AddMessage_Object( "array", array( "0" => 2, "1" => 3 ) );
	TEST__SIMPL__AddMessage_Object( "array", array( "a" => 2, "b" => 3 ) );
	TEST__SIMPL__AddMessage_Object( "convert", bindec( "10010101" ) );// 2進数文字列->10進数変換
	TEST__SIMPL__AddMessage_Object( "convert", decbin( 149 ) );// 10進数->2進数文字列変換
	TEST__SIMPL__AddMessage_Object( "convert", base_convert( 149, 10, 2 ) );// 10進数->2進数文字列変換
	TEST__SIMPL__AddMessage_Object( "convert", base_convert( "149", 10, 2 ) );// 10進数文字列->2進数文字列変換
	TEST__SIMPL__AddMessage_Object( "convert", base_convert( "10010101", 2, 10 ) );// 2進数文字列->10進数文字列変換
	TEST__SIMPL__AddMessage_Object( "convert", base_convert( "0abcdef0", 16, 10 ) );// 16進数文字列->10進数文字列変換
	TEST__SIMPL__AddMessage_Object( "convert", base_convert( "180150000", 10, 16 ) );// 10進数文字列->16進数文字列変換
}


function local_TEST__OPERATOR_Compare()
{
	TEST__SIMPL__AddSeparator( "TEST__OPERATOR_Compare" );

	TEST__SIMPL__AddMessage_Object( "NULL == NULL", ( NULL == NULL ) );
	TEST__SIMPL__AddMessage_Object( "FALSE == NULL", ( FALSE == NULL ) );
	TEST__SIMPL__AddMessage_Object( "0 == NULL", ( 0 == NULL ) );
	TEST__SIMPL__AddMessage_Object( "'' == NULL", ( '' == NULL ) );
	TEST__SIMPL__AddMessage_Object( "\"\" == NULL", ( "" == NULL ) );
	TEST__SIMPL__AddMessage_Object( "\"null\" == NULL", ( "null" == NULL ) );
	TEST__SIMPL__AddMessage_Object( "\"NULL\" == NULL", ( "NULL" == NULL ) );
	TEST__SIMPL__AddMessage_Object( "array() == NULL", ( "" == NULL ) );

	TEST__SIMPL__AddMessage_Object( "NULL == FALSE", ( NULL == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "FALSE == FALSE", ( FALSE == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "0 == FALSE", ( 0 == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "-1 == FALSE", ( -1 == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "'' == FALSE", ( '' == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "' ' == FALSE", ( ' ' == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "'0' == FALSE", ( '0' == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "'-1' == FALSE", ( '-1' == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"\" == FALSE", ( "" == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\" \" == FALSE", ( " " == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"0\" == FALSE", ( "0" == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"-1\" == FALSE", ( "-1" == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"off\" == FALSE", ( "off" == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"false\" == FALSE", ( "false" == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"FALSE\" == FALSE", ( "FALSE" == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"null\" == FALSE", ( "null" == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"NULL\" == FALSE", ( "NULL" == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array() == FALSE", ( array() == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array( NULL ) == FALSE", ( array( NULL ) == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array( FALSE ) == FALSE", ( array( FALSE ) == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array( 0 ) == FALSE", ( array( 0 ) == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array( -1 ) == FALSE", ( array( -1 ) == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array( \"\" ) == FALSE", ( array( "" ) == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array( \"\" => NULL ) == FALSE", ( array( "" => NULL ) == FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array( \"\" => \"\" ) == FALSE", ( array( "" => "" ) == FALSE ) );

	TEST__SIMPL__AddMessage_Object( "TRUE == TRUE", ( TRUE == TRUE ) );
	TEST__SIMPL__AddMessage_Object( "1 == TRUE", ( 1 == TRUE ) );
	TEST__SIMPL__AddMessage_Object( "'1' == TRUE", ( '1' == TRUE ) );
	TEST__SIMPL__AddMessage_Object( "\"1\" == TRUE", ( "1" == TRUE ) );
	TEST__SIMPL__AddMessage_Object( "array( TRUE ) == TRUE", ( array( TRUE ) == TRUE ) );
	TEST__SIMPL__AddMessage_Object( "array( 1 ) == TRUE", ( array( 1 ) == TRUE ) );

	TEST__SIMPL__AddMessage_Object( "NULL != NULL", ( NULL != NULL ) );
	TEST__SIMPL__AddMessage_Object( "NULL != TRUE", ( NULL != TRUE ) );
	TEST__SIMPL__AddMessage_Object( "NULL != FALSE", ( NULL != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "TRUE != TRUE", ( TRUE != TRUE ) );
	TEST__SIMPL__AddMessage_Object( "FALSE != FALSE", ( FALSE != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "0 != FALSE", ( 0 != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "-1 != FALSE", ( -1 != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "'' != FALSE", ( '' != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "' ' != FALSE", ( ' ' != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "'0' != FALSE", ( '0' != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "'-1' != FALSE", ( '-1' != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"\" != FALSE", ( "" != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\" \" != FALSE", ( " " != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"0\" != FALSE", ( "0" != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"-1\" != FALSE", ( "-1" != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"off\" != FALSE", ( "off" != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"false\" != FALSE", ( "false" != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"FALSE\" != FALSE", ( "FALSE" != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"null\" != FALSE", ( "null" != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "\"NULL\" != FALSE", ( "NULL" != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array() != FALSE", ( array() != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array( FALSE ) != FALSE", ( array( FALSE ) != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array( 0 ) != FALSE", ( array( 0 ) != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array( -1 ) != FALSE", ( array( -1 ) != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array( \"\" ) != FALSE", ( array( "" ) != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array( \"\" => NULL ) != FALSE", ( array( "" => NULL ) != FALSE ) );
	TEST__SIMPL__AddMessage_Object( "array( \"\" => \"\" ) != FALSE", ( array( "" => "" ) != FALSE ) );

	TEST__SIMPL__AddMessage_Object( "TRUE === TRUE", ( TRUE === TRUE ) );
}



?>