<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// include



// define
define( "TEST__SIMPL__INTEGER__SHOW_DETAIL__ALL", 0 );
define( "TEST__SIMPL__INTEGER__SHOW_DETAIL__STATE", 1 );
define( "TEST__SIMPL__INTEGER__SHOW_DETAIL__ERROR", 2 );
define( "TEST__SIMPL__INTEGER__SHOW_DETAIL__ERROR__ALL", 2 );
define( "TEST__SIMPL__INTEGER__SHOW_DETAIL__ERROR__MESSAGE", 4 );
define( "TEST__SIMPL__INTEGER__SHOW_DETAIL__ERROR__MESSAGE_DETAIL", 8 );
define( "TEST__SIMPL__INTEGER__SHOW_DETAIL__ERROR__MESSAGE__ALL", ( TEST__SIMPL__INTEGER__SHOW_DETAIL__ERROR__MESSAGE | TEST__SIMPL__INTEGER__SHOW_DETAIL__ERROR__MESSAGE_DETAIL ) );
define( "TEST__SIMPL__INTEGER__SHOW_DETAIL__ERROR__PLACE", 16 );
define( "TEST__SIMPL__INTEGER__SHOW_DETAIL__WARNING", 32 );
define( "TEST__SIMPL__INTEGER__SHOW_DETAIL__NOTICE", 64 );



// global
global $g_aaResults__SIMPL__TESTS;
TEST__SIMPL__ResetResults( FALSE );



// ===================================================================
// class
// -------------------------------------------------------------------

class TEST__SIMPL
{
	// ---------------------------------------------------------------
	// member


	// ---------------------------------------------------------------
	// static


	// ---------------------------------------------------------------
	// inherit

	function Main( $aaConfigurations )
	{
	}


	// ---------------------------------------------------------------
	// public


	// ---------------------------------------------------------------
	// private


}



// ===================================================================
// public
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// build data

function TEST__SIMPL__BuildDummyData( $iSize, $eData = NULL )
{
	$eValue = "";

	if ( $eData === NULL )
	{
		$eData = "";
		$eData .= "..-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy..";
		$eData .= "..-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy..";
		$eData .= "..-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy..";
		$eData .= "..-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy..";
		$eData .= "..-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy..";
		$eData .= "..-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy..";
		$eData .= "..-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy..";
		$eData .= "..-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy..";
		$eData .= "..-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy..";
		$eData .= "..-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy-dummy..";
	}

	$iSize_Loop = intval( $iSize / strlen( $eData ) );
	for ( $i = 0; $i < $iSize_Loop; $i++ )
	{
		$eValue .= $eData;
	}

	return $eValue;
}


// -------------------------------------------------------------------
// check

function TEST__SIMPL__Check__NilArray( $arResults, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__Check__Array( $arResults, array(), $aaStrings_Messages );
}
function TEST__SIMPL__Check__Array( $arResults, $arResults_OK, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__AddTotal();

	$bFlag_Error = !SIMPL__CheckEquals_Array( $arResults, $arResults_OK );
	if ( $bFlag_Error )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
	}
}


function TEST__SIMPL__Check__NilAssoc( $aaResults, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__Check__Assoc( $aaResults, array(), $aaStrings_Messages );
}
function TEST__SIMPL__Check__Assoc( $aaResults, $aaResults_OK, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__AddTotal();

	$bFlag_Error = !SIMPL__CheckEquals_Assoc( $aaResults, $aaResults_OK );
	if ( $bFlag_Error )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
	}
}


function TEST__SIMPL__Check__Boolean( $bResult, $bResult_OK = TRUE, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__AddTotal();

	if ( $bResult !== $bResult_OK )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
	}
}


function TEST__SIMPL__Check__Database( $eDB, $eString_SQL, $arArguments_SQL = NULL, $eResult_OK = NULL, $aaStrings_Messages = NULL )
{
	$bFlag = FALSE;

	TEST__SIMPL__AddTotal();

	if ( is_assoc( $eResult_OK ) )
	{
		$aaResults = NOSAWA_DATABASE__GetValues_Line( $eDB, $eString_SQL, $arArguments_SQL );
		if ( count( array_keys( $aaResults ) ) == count( array_keys( $eResult_OK ) ) )
		{
			$bFlag = TRUE;
			foreach ( $eResult_OK as $eKey => $eValue )
			{
				if ( !array_key_exists( $eKey, $aaResults ) )
				{
					$bFlag = FALSE;
					break;
				}

				if ( $aaResults[$eKey] != $eValue )
				{
					$bFlag = FALSE;
					break;
				}
			}
		}
	}
	elseif ( is_array( $eResult_OK ) )
	{
		$arResults = NOSAWA_DATABASE__GetValues_All( $eDB, $eString_SQL, $arArguments_SQL );
		if ( count( $eResult_OK ) == count( $arResults ) )
		{
			$bFlag = TRUE;
			foreach ( $eResult_OK as $aaResult_OK )
			{
				$aaResults = array_shift( $arResults );
				foreach ( $aaResult_OK as $eKey => $eValue )
				{
					if ( !array_key_exists( $eKey, $aaResults ) )
					{
						$bFlag = FALSE;
						break;
					}

					if ( $aaResults[$eKey] != $eValue )
					{
						$bFlag = FALSE;
						break;
					}
				}
			}
		}
	}
	else
	{
		$eResult = NOSAWA_DATABASE__GetValue( $eDB, $eString_SQL, $arArguments_SQL = NULL, $eValue_Default = NULL );
		if ( is_bool( $eResult_OK ) )
		{
			$eResult = NOSAWA__OverwriteBooleanValues( $eResult );
		}
		elseif ( is_integer( $eResult_OK ) )
		{
			$eResult = NOSAWA__OverwriteIntegerValues( $eResult );
		}
		elseif ( is_string( $eResult_OK ) )
		{
			$eResult = NOSAWA__OverwriteStringValues( $eResult );
		}

		if ( $eResult == $eResult_OK )
		{
			$bFlag = TRUE;
		}
	}

	if ( $bFlag !== TRUE )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
	}
}


function TEST__SIMPL__Check__DateTime( $eString_Result, $eString_Result_OK = NULL, $iTime_Threshold = 1, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__AddTotal();

	if ( $eString_Result != $eString_Result_OK )
	{
		$iTime_Result = strtotime( $eString_Result );
		$iTime_Result_OK = strtotime( $eString_Result_OK );
		if
			(
				( $iTime_Result < ( $iTime_Result_OK - $iTime_Threshold ) )
					||
				( $iTime_Result > ( $iTime_Result_OK + $iTime_Threshold ) )
			)
		{
			local_TEST__SIMPL__AddError( $aaStrings_Messages );
		}
	}
}


function TEST__SIMPL__Check__ErapsedTime( $rResult, $rResult_OK = 1.0, $aaStrings_Messages = NULL )
{
	$rMicroTime = microtime( TRUE );

	TEST__SIMPL__AddTotal();

	if ( ( $rResult + $rResult_OK ) < $rMicroTime )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
		echo sprintf( "%f ( %f )\n", ( $rMicroTime - $rResult ), $rResult_OK );
	}
}


function TEST__SIMPL__Check__File( $eString_FileName, $eString_FileName_OK, $aaStrings_Messages = NULL )
{
	$eResult = file_get_contents( $eString_FileName );
	$eResult_OK = file_get_contents( $eString_FileName_OK );

	TEST__SIMPL__AddTotal();

	if ( $eResult !== $eResult_OK )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
	}
}


function TEST__SIMPL__Check__Integer( $iResult, $iResult_OK = 0, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__AddTotal();

	if ( $iResult !== $iResult_OK )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
	}
}


function TEST__SIMPL__Check__Integer_NotEqual( $iResult, $iResult_NE = 0, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__AddTotal();

	if ( $iResult === $iResult_NE )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
	}
}


function TEST__SIMPL__Check__NilString( $eString_Result, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__Check__String( $eString_Result, "", $aaStrings_Messages, 2 );
}
function TEST__SIMPL__Check__String_File( $eString_Result, $eString_FileName_OK, $aaStrings_Messages = NULL )
{
	$eString_Result_OK = file_get_contents( $eString_FileName_OK );
	TEST__SIMPL__Check__String( $eString_Result, $eString_Result_OK, $aaStrings_Messages, 2 );
}
function TEST__SIMPL__Check__String( $eString_Result, $eString_Result_OK, $aaStrings_Messages = NULL, $iOffset_BackTrace = 1 )
{
	TEST__SIMPL__AddTotal();

	if ( $eString_Result !== $eString_Result_OK )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages, $iOffset_BackTrace );
	}
}


function TEST__SIMPL__Check__NotFalse( $eResults, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__AddTotal();

	if ( $eResults === FALSE )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
	}
}


function TEST__SIMPL__Check__NotNull( $eResults, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__AddTotal();

	if ( $eResults === NULL )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
	}
}


function TEST__SIMPL__Check__Null( $eResults, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__AddTotal();

	if ( $eResults !== NULL )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
	}
}


function TEST__SIMPL__Check__Object( $eResult, $eResult_OK, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__AddTotal();

	$bFlag_Error = !SIMPL__CheckEquals_Object( $eResult, $eResult_OK );
	if ( $bFlag_Error )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
	}
}


function TEST__SIMPL__Check__Real( $rResult, $rResult_OK = 0.0, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__AddTotal();

	if ( $rResult !== $rResult_OK )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
	}
}


function TEST__SIMPL__Check__RealInRange( $rResult, $rResult_OK = 0.0, $rRange = 0.0001, $aaStrings_Messages = NULL )
{
	TEST__SIMPL__AddTotal();

	if ( abs( $rResult - $rResult_OK ) > $rRange )
	{
		local_TEST__SIMPL__AddError( $aaStrings_Messages );
	}
}


// -------------------------------------------------------------------
// debug


// -------------------------------------------------------------------
// description


// -------------------------------------------------------------------
// message

function TEST__SIMPL__AddSeparator( $eString_Subject )
{
	$eString_Message = "";
	$eString_Message .= "// -------------------------------------------------------------------\n";
	$eString_Message .= $eString_Subject;
	TEST__SIMPL__AddMessage( $eString_Message );
}


function TEST__SIMPL__AddMessage_Object( $eString_Message, $eObject )
{
	$eString_Message .= "\t";

	if ( is_null( $eObject ) )
	{
		$eString_Message .= "NULL";
	}
	elseif ( is_bool( $eObject ) )
	{
		if ( $eObject === TRUE )
		{
			$eString_Message .= "TRUE";
		}
		else
		{
			$eString_Message .= "FALSE";
		}
	}
	elseif ( is_integer( $eObject ) )
	{
		$eString_Message .= $eObject;
	}
	elseif ( is_real( $eObject ) )
	{
		$eString_Message .= $eObject;
		if ( $eObject == (int)$eObject )
		{
			$eString_Message .= "(r)";
		}
	}
	elseif ( is_string( $eObject ) )
	{
		$eString_Message .= "'";
		$eString_Message .= $eObject;
		$eString_Message .= "'";
		if ( is_numeric( $eObject ) )
		{
			$eString_Message .= " - numeric";
		}
	}
	elseif ( is_array( $eObject ) )
	{
		if ( is_assoc( $eObject ) )
		{
			$eString_Message .= "`assoc`";
		}
		else
		{
			$eString_Message .= "`array`";
		}
	}
	elseif ( is_object( $eObject ) )
	{
		$eString_Message .= "`object`";
	}
	elseif ( is_resource( $eObject ) )
	{
		$eString_Message .= "`resource`";
	}
	elseif ( is_callable( $eObject ) )
	{
		$eString_Message .= "`callable`";
	}
	else
	{
		$eString_Message .= "`else`";
	}

	TEST__SIMPL__AddMessage( $eString_Message );
}


function TEST__SIMPL__AddMessage( $eString_Message )
{
	global $g_aaResults__SIMPL__TESTS;

	if ( $eString_Message !== NULL )
	{
		echo $eString_Message . "\n";

		$g_aaResults__SIMPL__TESTS["Message"][] = $eString_Message;
	}
}


// -------------------------------------------------------------------
// results

function TEST__SIMPL__AddBlockCount()
{
	global $g_aaResults__SIMPL__TESTS;

	$g_aaResults__SIMPL__TESTS = SIMPL__AddValue( $g_aaResults__SIMPL__TESTS, "Block.Count" );
}


function TEST__SIMPL__AddCount()
{
	global $g_aaResults__SIMPL__TESTS;

	$iCount_Total = SIMPL__GetValue( $g_aaResults__SIMPL__TESTS, "Count", 0 );
	$iCount_State = count( SIMPL__GetValue( $g_aaResults__SIMPL__TESTS, "State", [] ) );
	if ( $iCount_Total > $iCount_State )
	{
		$aaWarning = array();
		$aaWarning["Message"] = "no state...";
		TEST__SIMPL__AddWarning( $aaWarning );
		$g_aaResults__SIMPL__TESTS = SIMPL__PushValue( $g_aaResults__SIMPL__TESTS, "State", NULL );
	}

	while ( $iCount_Total < $iCount_State )
	{
		$aaWarning = array();
		$aaWarning["Message"] = "over state...";
		TEST__SIMPL__AddWarning( $aaWarning );
		$g_aaResults__SIMPL__TESTS = SIMPL__AddValue( $g_aaResults__SIMPL__TESTS, "Count" );
		$iCount_Total = SIMPL__GetValue( $g_aaResults__SIMPL__TESTS, "Count", 0 );
	}

	$g_aaResults__SIMPL__TESTS = SIMPL__AddValue( $g_aaResults__SIMPL__TESTS, "Count" );
	TEST__SIMPL__ResetBlockCount();
}


function TEST__SIMPL__AddError( $aaError = NULL, $bFlag_AddState = TRUE )
{
	if ( $aaError == NULL )
	{
		$aaError = array();
		$aaError["Message"] = "Error";
	}

	global $g_aaResults__SIMPL__TESTS;

	if ( TEST__SIMPL__GetMode() )
	{
		$g_aaResults__SIMPL__TESTS = SIMPL__PushValue( $g_aaResults__SIMPL__TESTS, "Error", $aaError );
	}

	TEST__SIMPL__AddBlockCount();

	if ( $bFlag_AddState )
	{
		TEST__SIMPL__AddState( FALSE, FALSE );
	}
}



function TEST__SIMPL__AddFailure()
{
	global $g_aaResults__SIMPL__TESTS;

	$g_aaResults__SIMPL__TESTS = SIMPL__AddValue( $g_aaResults__SIMPL__TESTS, "Failure" );
}


function TEST__SIMPL__AddNotice( $aaNotice )
{
	global $g_aaResults__SIMPL__TESTS;

	$g_aaResults__SIMPL__TESTS = SIMPL__PushValue( $g_aaResults__SIMPL__TESTS, "Notice", $aaNotice );
}


function TEST__SIMPL__AddState( $bState = True, $bFlag_AddError = True )
{
	global $g_aaResults__SIMPL__TESTS;

	$g_aaResults__SIMPL__TESTS = SIMPL__PushValue( $g_aaResults__SIMPL__TESTS, "State", $bState );

	if ( !$bState )
	{
		if ( !$bFlag_AddError )
		{
			$aaError = array();
			$aaError["Message"] = "over state...";
			TEST__SIMPL__AddError( $aaError, False );
		}

		TEST__SIMPL__AddFailure();
	}
}


function TEST__SIMPL__AddTotal()
{
	global $g_aaResults__SIMPL__TESTS;

	$g_aaResults__SIMPL__TESTS = SIMPL__AddValue( $g_aaResults__SIMPL__TESTS, "Total" );
}


function TEST__SIMPL__AddWarning( $aaWarning )
{
	global $g_aaResults__SIMPL__TESTS;

	$g_aaResults__SIMPL__TESTS = SIMPL__PushValue( $g_aaResults__SIMPL__TESTS, "Warning", $aaWarning );
}


function TEST__SIMPL__CheckBlockCount( $iCount = 0 )
{
	global $g_aaResults__SIMPL__TESTS;

	if ( $g_aaResults__SIMPL__TESTS["Block.Count"] != $iCount )
	{
		return FALSE;
	}

	return TRUE;
}


function TEST__SIMPL__GetMode()
{
	global $g_aaResults__SIMPL__TESTS;

	return SIMPL__GetValue( $g_aaResults__SIMPL__TESTS, "Mode", TRUE );
}


function TEST__SIMPL__ResetBlockCount()
{
	global $g_aaResults__SIMPL__TESTS;

	$g_aaResults__SIMPL__TESTS["Block.Count"] = 0;
}


function TEST__SIMPL__ResetResults( $bFlag_ShowMessage = TRUE )
{
	global $g_aaResults__SIMPL__TESTS;

	$g_aaResults__SIMPL__TESTS = array();
	$g_aaResults__SIMPL__TESTS["Time.Begin"] = time();
	$g_aaResults__SIMPL__TESTS["Message"] = array();

	if ( $bFlag_ShowMessage )
	{
		echo "reset results...\n";
		echo "--------------------------------\n";
	}
}


function TEST__SIMPL__SetMode( $bMode = TRUE )
{
	global $g_aaResults__SIMPL__TESTS;

	$g_aaResults__SIMPL__TESTS["Mode"] = $bMode;

	return $bMode;
}


// -------------------------------------------------------------------
// show results

function TEST__SIMPL__ShowResults_Begin()
{
	TEST__SIMPL__ResetResults( FALSE );
	echo "\n";
}


function TEST__SIMPL__ShowResults_End()
{
	global $g_aaResults__SIMPL__TESTS;

	$g_aaResults__SIMPL__TESTS["Time.End"] = time();
	$iTime_Begin = SIMPL__GetValue( $g_aaResults__SIMPL__TESTS, "Time.Begin", time() );
	$iTime_End = SIMPL__GetValue( $g_aaResults__SIMPL__TESTS, "Time.End", time() );
	$iCount_Block = SIMPL__GetValue( $g_aaResults__SIMPL__TESTS, "Count", 0 );
	$iCount_Total = SIMPL__GetValue( $g_aaResults__SIMPL__TESTS, "Total", 0 );
	$iCount_Failure = SIMPL__GetValue( $g_aaResults__SIMPL__TESTS, "Failure", 0 );
	$iCount_Error = count( SIMPL__GetValue( $g_aaResults__SIMPL__TESTS, "Error", [] ) );
	$iCount_Warning = count( SIMPL__GetValue( $g_aaResults__SIMPL__TESTS, "Warning", [] ) );
	$iCount_Notice = count( SIMPL__GetValue( $g_aaResults__SIMPL__TESTS, "Notice", [] ) );
	echo "================================\n";
	echo sprintf( "Count   : %d\n", $iCount_Block );
	echo sprintf( "Failure : %d\n", $iCount_Failure );
	echo "\n";
	echo sprintf( "Total   : %d\n", $iCount_Total );
	echo sprintf( "Error   : %d\n", $iCount_Error );
	echo sprintf( "Warning : %d\n", $iCount_Warning );
	echo sprintf( "Notice  : %d\n", $iCount_Notice );
	echo "\n";
	echo sprintf( "%d seconds elapsed.\n", ( $iTime_End - $iTime_Begin ) );
	echo "\n";
	echo "--------------------------------\n";
}



// ===================================================================
// local
// -------------------------------------------------------------------

function local_TEST__SIMPL__AddError( $aaStrings_Messages, $iOffset_BackTrace = 1 )
{
	global $g_aaResults__SIMPL__TESTS;

	$aaError = array();
	$aaError["Messages"] = $aaStrings_Messages;

	if ( $aaStrings_Messages !== NULL )
	{
		if ( array_key_exists( "Error", $aaStrings_Messages ) )
		{
			TEST__SIMPL__AddMessage( $aaStrings_Messages["Error"] );
		}

		if ( array_key_exists( "Show", $aaStrings_Messages ) )
		{
			echo $aaStrings_Messages["Show"];
		}
	}

	if ( $iOffset_BackTrace > 0 )
	{
		$arStrings = debug_backtrace();
		for ( $iCount_i = 0; $iCount_i < $iOffset_BackTrace; $iCount_i++ )
		{
			array_shift( $arStrings );
		}

		$aaValues = array_shift( $arStrings );
		echo sprintf( "%s ( %d )\n", $aaValues["file"], $aaValues["line"] );
		echo sprintf( "  %s\n", $aaValues["function"] );
		echo sprintf( "  [args] => %s", print_r( $aaValues["args"], TRUE ) );

		$aaError["BackTrace"] = $arStrings;
	}

	TEST__SIMPL__AddError( $aaError, FALSE );
}



?>