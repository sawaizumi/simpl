<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// autoload
define( "AUTOLOAD__NO_NEED", TRUE );
//define( "AUTOLOAD__PREPARED", TRUE );



// include
include "../include-simpl.phps";
include "test-simpl-_base.phps";



// define



// global



// ===================================================================
// main
// -------------------------------------------------------------------

{
	exit( Main( $argv ) );
}
function Main( $arStrings_Argument )
{
	$aaConfigurations = SIMPL__LoadConfigurations( $arStrings_Argument[1] );
	SIMPL_LOG__SetConfigurations( $aaConfigurations );


	// results
	TEST__SIMPL__ShowResults_Begin();


	// テスト実体
	$arExecutes = $aaConfigurations["Execute"];
	foreach ( $arExecutes as $eString_ModuleName )
	{
		if ( is_array( $eString_ModuleName ) )
		{
			$eString_ModuleName = implode( "-", $eString_ModuleName );
		}

		if ( $eString_ModuleName != "" )
		{
			$eString_FullName = sprintf( "./TestCase/%s.phps", $eString_ModuleName );
			include( $eString_FullName );
			$eString_ClassName = sprintf( "TEST__SIMPL__%s", str_replace( "-", "___", $eString_ModuleName ) );
			if ( class_exists( $eString_ClassName ) )
			{
				$eCommand = new $eString_ClassName();
				$eCommand->Main( $aaConfigurations );
			}
		}
	}


	// results
	TEST__SIMPL__ShowResults_End();

	return 0;
}



// ===================================================================
// local
// -------------------------------------------------------------------



?>