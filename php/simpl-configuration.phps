<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// include



// define



// global



// ===================================================================
// public
// -------------------------------------------------------------------

function SIMPL_CONFIGURATION__GetConfigurations( $arStrings_Line )
{
	$aaConfigurations = array();

	foreach ( $arStrings_Line as $eString_Line )
	{
		if ( $eString_Line == "" )
		{
			continue;
		}

		if ( $eString_Line[0] == "#" )
		{
			continue;
		}

		$arStrings_Column = explode( "\t", $eString_Line );
		if ( count( $arStrings_Column ) == 0 )
		{
			continue;
		}

		if ( count( $arStrings_Column ) > 0 )
		{
			$eKey = array_shift( $arStrings_Column );
			if ( $eKey == "" )
			{
				continue;
			}

			if ( array_key_exists( $eKey, $aaConfigurations ) )
			{
				if ( !is_array( $aaConfigurations[$eKey] ) )
				{
					$aaConfigurations[$eKey] = array( $aaConfigurations[$eKey] );
				}

				if ( count( $arStrings_Column ) == 0 )
				{
					$aaConfigurations[$eKey][] = NULL;

					continue;
				}

				if ( count( $arStrings_Column ) == 1 )
				{
					$aaConfigurations[$eKey][] = $arStrings_Column[0];

					continue;
				}

				$aaConfigurations[$eKey][] = $arStrings_Column;
			}
			else
			{
				if ( count( $arStrings_Column ) == 0 )
				{
					$aaConfigurations[$eKey] = NULL;

					continue;
				}

				if ( count( $arStrings_Column ) == 1 )
				{
					$aaConfigurations[$eKey] = $arStrings_Column[0];

					continue;
				}

				$aaConfigurations[$eKey] = array( $arStrings_Column );
			}
		}
	}

	return $aaConfigurations;
}



// ===================================================================
// local
// -------------------------------------------------------------------



?>