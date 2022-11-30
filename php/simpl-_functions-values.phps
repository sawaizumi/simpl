<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// include



// define



// global



// ===================================================================
// public
// -------------------------------------------------------------------

function SIMPL__AddValue( $aaValues, $eKey, $eValue = 1 )
{
	if ( is_array( $aaValues ) )
	{
		if ( array_key_exists( $eKey, $aaValues ) )
		{
			$aaValues[$eKey] += $eValue;
		}
		else
		{
			$aaValues[$eKey] = $eValue;
		}
	}
	else
	{
		if ( is_object( $aaValues ) )
		{
			if ( property_exists( $aaValues, $eKey ) )
			{
				$aaValues->$eKey += $eValue;
			}
			else
			{
				$aaValues->$eKey = $eValue;
			}
		}
	}

	return $aaValues;
}


function SIMPL__CheckEquals_Array( $eObject_A, $eObject_B )
{
	if ( is_assoc( $eObject_A ) )
	{
		return FALSE;
	}
	if ( is_assoc( $eObject_B ) )
	{
		return FALSE;
	}
	if ( !is_array( $eObject_A ) )
	{
		return FALSE;
	}
	if ( !is_array( $eObject_B ) )
	{
		return FALSE;
	}

	if ( count( $eObject_A ) == count( $eObject_B ) )
	{
		foreach ( $eObject_A as $eKey => $eValue )
		{
			$eValues_A = $eObject_A[$eKey];
			$eValues_B = $eObject_B[$eKey];

			if ( is_assoc( $eValues_A ) )
			{
				if ( SIMPL__CheckEquals_AssociativeArray( $eValues_A, $eValues_B ) == FALSE )
				{
					return FALSE;
				}
			}
			elseif ( is_array( $eValues_A ) )
			{
				if ( SIMPL__CheckEquals_Array( $eValues_A, $eValues_B ) == FALSE )
				{
					return FALSE;
				}
			}
			elseif ( is_object( $eValues_A ) )
			{
				if ( SIMPL__CheckEquals_Object( $eValues_A, $eValues_B ) == FALSE )
				{
					return FALSE;
				}
			}
			elseif ( $eValues_A !== $eValues_B )
			{
				return FALSE;
			}
		}

		return TRUE;
	}

	return FALSE;
}


function SIMPL__CheckEquals_Assoc( $eObject_A, $eObject_B )
{
	return SIMPL__CheckEquals_AssociativeArray( $eObject_A, $eObject_B );
}
function SIMPL__CheckEquals_AssociativeArray( $eObject_A, $eObject_B )
{
	if ( !is_assoc( $eObject_A ) )
	{
		return FALSE;
	}
	if ( !is_assoc( $eObject_B ) )
	{
		return FALSE;
	}

	$arKeys_A = array_keys( $eObject_A );
	$arKeys_B = array_keys( $eObject_B );
	if ( count( $arKeys_A ) == count( $arKeys_B ) )
	{
		foreach ( $arKeys_A as $eKey )
		{
			if ( !array_key_exists( $eKey, $eObject_B ) )
			{
				return FALSE;
			}

			$eValues_A = $eObject_A[$eKey];
			$eValues_B = $eObject_B[$eKey];

			if ( is_assoc( $eValues_A ) )
			{
				if ( SIMPL__CheckEquals_AssociativeArray( $eValues_A, $eValues_B ) == FALSE )
				{
					return FALSE;
				}
			}
			elseif ( is_array( $eValues_A ) )
			{
				if ( SIMPL__CheckEquals_Array( $eValues_A, $eValues_B ) == FALSE )
				{
					return FALSE;
				}
			}
			elseif ( is_object( $eValues_A ) )
			{
				if ( SIMPL__CheckEquals_Object( $eValues_A, $eValues_B ) == FALSE )
				{
					return FALSE;
				}
			}
			elseif ( $eValues_A !== $eValues_B )
			{
				return FALSE;
			}
		}

		return TRUE;
	}

	return FALSE;
}


function SIMPL__CheckEquals_Object( $eObject_A, $eObject_B )
{
	if ( !is_object( $eObject_A ) )
	{
		return FALSE;
	}
	if ( !is_object( $eObject_B ) )
	{
		return FALSE;
	}

	$arKeys_A = array_keys( get_object_vars( $eObject_A ) );
	$arKeys_B = array_keys( get_object_vars( $eObject_B ) );
	if ( count( $arKeys_A ) == count( $arKeys_B ) )
	{
		foreach ( $arKeys_A as $eKey )
		{
			if ( !property_exists( $eObject_B, $eKey ) )
			{
				return FALSE;
			}

			$eValues_A = $eObject_A->$eKey;
			$eValues_B = $eObject_B->$eKey;

			if ( is_assoc( $eValues_A ) )
			{
				if ( SIMPL__CheckEquals_AssociativeArray( $eValues_A, $eValues_B ) == FALSE )
				{
					return FALSE;
				}
			}
			elseif ( is_array( $eValues_A ) )
			{
				if ( SIMPL__CheckEquals_Array( $eValues_A, $eValues_B ) == FALSE )
				{
					return FALSE;
				}
			}
			elseif ( is_object( $eValues_A ) )
			{
				if ( SIMPL__CheckEquals_Object( $eValues_A, $eValues_B ) == FALSE )
				{
					return FALSE;
				}
			}
			elseif ( $eValues_A !== $eValues_B )
			{
				return FALSE;
			}
		}

		return TRUE;
	}

	return FALSE;
}


function SIMPL__GetValue( $aaValues, $eKey, $eValue_Default = FALSE )
{
	if ( $aaValues === NULL )
	{
		$aaValues = array();
	}

	$eValue = $eValue_Default;
	if ( is_array( $aaValues ) )
	{
		if ( array_key_exists( $eKey, $aaValues ) )
		{
			$eValue = $aaValues[$eKey];
		}
	}
	else
	{
		if ( is_object( $aaValues ) )
		{
			if ( property_exists( $aaValues, $eKey ) )
			{
				$eValue = $aaValues->$eKey;
			}
		}
	}

	return $eValue;
}


function SIMPL__PushValue( $aaValues, $eKey, $eValue )
{
	if ( is_array( $aaValues ) )
	{
		if ( array_key_exists( $eKey, $aaValues ) )
		{
			if
				(
					( is_assoc( $aaValues[$eKey] ) )
						||
					( !is_array( $aaValues[$eKey] ) )
				)
			{
				$aaValues[$eKey] = array( $aaValues[$eKey] );
			}

			$aaValues[$eKey][] = $eValue;
		}
		else
		{
			$aaValues[$eKey] = array( $eValue );
		}
	}
	else
	{
		if ( is_object( $aaValues ) )
		{
			if ( property_exists( $aaValues, $eKey ) )
			{
				$aaValues->$eKey[] = $eValue;
			}
			else
			{
				$aaValues->$eKey = array( $eValue );
			}
		}
	}

	return $aaValues;
}


function SIMPL__SetValue_Default( $aaValues, $eKey, $eValue )
{
	if ( is_array( $aaValues ) )
	{
		if ( !array_key_exists( $eKey, $aaValues ) )
		{
			$aaValues[$eKey] = $eValue;
		}
	}
	else
	{
		if ( is_object( $aaValues ) )
		{
			if ( !property_exists( $aaValues, $eKey ) )
			{
				$aaValues->$eKey = $eValue;
			}
		}
	}

	return $aaValues;
}



// ===================================================================
// local
// -------------------------------------------------------------------



?>