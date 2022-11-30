<?php
// 日本語UTF-8, LF, Tab=4
// PHP=8.0



// autoload
if ( !defined( "AUTOLOAD__NO_NEED" ) )
{
	if ( !defined( "AUTOLOAD__PREPARED" ) )
	{
		include( __DIR__ . "/vendor/autoload.php" );

		define( "AUTOLOAD__PREPARED", TRUE );
	}
}



// pre include
if ( !defined( "SIMPL__STRING__PATH__BASE__SIMPL" ) )
{
	define( "SIMPL__STRING__PATH__BASE__SIMPL", dirname( __FILE__ ) );
}



// include
include( SIMPL__STRING__PATH__BASE__SIMPL . "/simpl-_defines.phps" );
include( SIMPL__STRING__PATH__BASE__SIMPL . "/simpl-_functions-build-defines.phps" );
include( SIMPL__STRING__PATH__BASE__SIMPL . "/simpl-_functions-files.phps" );
include( SIMPL__STRING__PATH__BASE__SIMPL . "/simpl-_functions-values.phps" );
include( SIMPL__STRING__PATH__BASE__SIMPL . "/simpl-_wrap.phps" );
include( SIMPL__STRING__PATH__BASE__SIMPL . "/simpl-configuration.phps" );
include( SIMPL__STRING__PATH__BASE__SIMPL . "/simpl-log.phps" );



// define
include( SIMPL__STRING__PATH__BASE__SIMPL . "/simpl-_defines-built.phps" );



// global



// use



// initialize



?>