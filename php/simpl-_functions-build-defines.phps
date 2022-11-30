<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// include



// define



// global



// ===================================================================
// public
// -------------------------------------------------------------------

function SIMPL__BuildDefines_ConversionTable( $arDefines, $eString_Label = "", $eString_Category = "", $eString_Prefix = SIMPL__STRING__DEFINE_PREFIX )
{
	$aaConversionTable = array();
	$aaDefines_Pair = array();

	foreach ( $arDefines as $arTuple )
	{
		$eKey = $arTuple[0];
		$eValue_From = $arTuple[1];
		$eValue_To = $arTuple[2];

		$aaDefines_Pair[$eKey] = $eValue_From;
		$aaConversionTable[$eValue_From] = $eValue_To;
	}

	SIMPL__BuildDefines( $aaDefines_Pair, $eString_Label, $eString_Category, $eString_Prefix );

	return $aaConversionTable;
}
function SIMPL__BuildDefines_ConversionTable__Reverse( $arDefines, $eString_Label = "", $eString_Category = "", $eString_Prefix = SIMPL__STRING__DEFINE_PREFIX )
{
	$aaConversionTable = array();
	$aaDefines_Pair = array();

	foreach ( $arDefines as $arTuple )
	{
		$eKey = $arTuple[0];
		$eValue_From = $arTuple[2];
		$eValue_To = $arTuple[1];

		$aaDefines_Pair[$eKey] = $eValue_From;
		$aaConversionTable[$eValue_From] = $eValue_To;
	}

	SIMPL__BuildDefines( $aaDefines_Pair, $eString_Label, $eString_Category, $eString_Prefix );

	return $aaConversionTable;
}


function SIMPL__BuildDefines_EnumString( $arDefines, $eString_Label = "", $eString_Category = "", $iOffset = 0, $eString_Prefix = SIMPL__STRING__DEFINE_PREFIX )
{
	$aaResults = array();
	$arDefines_Enum = array();
	$aaDefines_Pair = array();

	$iCount = 0;
	foreach ( $arDefines as $arTuple )
	{
		$eKey = $arTuple[0];
		$eString_Name = $arTuple[1];
		$eValue = NULL;
		if ( count( $arTuple ) > 2 )
		{
			$eValue = $arTuple[2];
		}

		if ( $eValue === NULL )
		{
			$eValue = $iCount;
		}
		else
		{
			$iCount = intval( $eValue );
		}

		$aaResults[$eString_Name] = $eValue + $iOffset;
		$arDefines_Enum[] = array( $eKey, $eValue );
		$aaDefines_Pair[$eKey] = $eString_Name;

		$iCount++;
	}

	SIMPL__BuildDefines_Enum( $arDefines_Enum, $eString_Label, $eString_Category, $iOffset, $eString_Prefix );
	SIMPL__BuildDefines( $aaDefines_Pair, $eString_Label, $eString_Category, $eString_Prefix );

	return $aaResults;
}


function SIMPL__BuildDefines_Enum( $arDefines, $eString_Label = "", $eString_Category = "", $iOffset = 0, $eString_Prefix = SIMPL__STRING__DEFINE_PREFIX )
{
	$aaDefines_Enum = array();

	$iCount = 0;
	foreach ( $arDefines as $arTuple )
	{
		$eKey = $arTuple[0];
		$eValue = NULL;
		if ( count( $arTuple ) > 1 )
		{
			$eValue = $arTuple[1];
		}

		if ( $eValue === NULL )
		{
			$eValue = $iCount;
		}
		else
		{
			$iCount = intval( $eValue );
		}

		$aaDefines_Enum[$eKey] = $eValue + $iOffset;

		$iCount++;
	}

	SIMPL__BuildDefines( $aaDefines_Enum, $eString_Label, $eString_Category, $eString_Prefix );
}


function SIMPL__BuildDefines( $aaDefines, $eString_Label = "", $eString_Category = "", $eString_Prefix = SIMPL__STRING__DEFINE_PREFIX )
{
	if ( $eString_Prefix != "" )
	{
		$eString_Prefix .= "__";
	}

	if ( $eString_Category != "" )
	{
		$eString_Category .= "__";
	}

	if ( $eString_Label != "" )
	{
		$eString_Label .= "__";
	}

	foreach ( $aaDefines as $eKey => $eValue )
	{
		$eString_DefineType = "";

		if ( is_string( $eValue ) === TRUE )
		{
			$eString_DefineType = "STRING__";
		}
		elseif ( is_integer( $eValue ) === TRUE )
		{
			$eString_DefineType = "INTEGER__";
		}
		elseif ( is_real( $eValue ) === TRUE )
		{
			$eString_DefineType = "REAL__";
		}
		elseif ( is_bool( $eValue ) === TRUE )
		{
			$eString_DefineType = "BOOL__";
		}

		define( ( $eString_Prefix . $eString_DefineType . $eString_Category . $eString_Label . $eKey ), $eValue );
	}
}


function SIMPL__Define( $eKey, $eValue )
{
	if ( !defined( $eKey ) )
	{
		define( $eKey, $eValue );

		return TRUE;
	}

	return FALSE;
}



// ===================================================================
// local
// -------------------------------------------------------------------



?>