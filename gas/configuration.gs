// 日本語UTF-8, LF, Tab=4



// include



// define



// global



// environment



// ===================================================================
// class
// -------------------------------------------------------------------

var __base = __base || {};
__base.CONFIGURATION = 
{
	// ---------------------------------------------------------------
	// member

	m_eObject_Default : null,


	// ---------------------------------------------------------------
	// public

	BuildConfigurations : 
		function ( arStrings_Line )
		{
			var aaConfigurations = {};

			for ( const eString_Line of arStrings_Line )
			{
				if ( eString_Line == "" )
				{
					continue;
				}

				if ( eString_Line[0] == "#" )
				{
					continue;
				}

				arStrings_Column = eString_Line.split( "\t" );
				if ( arStrings_Column.length > 0 )
				{
					eKey = arStrings_Column.shift();
					if ( eKey == "" )
					{
						continue;
					}

					if ( aaConfigurations[eKey] !== undefined )
					{
						if ( !Array.isArray( aaConfigurations[eKey] ) )
						{
							aaConfigurations[eKey] = [ aaConfigurations[eKey] ];
						}

						if ( arStrings_Column.length == 0 )
						{
							aaConfigurations[eKey].push( null );

							continue;
						}

						if ( arStrings_Column.length == 1 )
						{
							aaConfigurations[eKey].push( arStrings_Column[0] );

							continue;
						}

						aaConfigurations[eKey].push( arStrings_Column );
					}
					else
					{
						if ( arStrings_Column.length == 0 )
						{
							aaConfigurations[eKey] = null;

							continue;
						}

						if ( arStrings_Column.length == 1 )
						{
							aaConfigurations[eKey] = arStrings_Column[0];

							continue;
						}

						aaConfigurations[eKey] = [ arStrings_Column ];
					}
				}
			}

			return aaConfigurations;
		},


	ExtractConfigurations : 
		function ( aaConfigurations, eString_Prefix, aaOptions )
		{
			var aaResults = {};

			aaOptions = __base.CONFIGURATION._DefaultOptions( aaOptions );

			var eString_Start = eString_Prefix;
			if ( aaOptions["Add.Separator"] )
			{
				eString_Start += ".";
			}

			for ( var eKey in aaConfigurations )
			{
				if
					(
						( eKey == eString_Prefix )
							||
						( eKey.startsWith( eString_Start ) )
					)
				{
					if ( __base.GetValue( aaOptions, "Cut.Prefix" ) )
					{
						aaResults[eKey.substring( eString_Start.length )] = aaConfigurations[eKey];
					}
					else
					{
						aaResults[eKey] = aaConfigurations[eKey];
					}
				}
			}

			return aaResults;
		},


	GetConfigurations : 
		function ( aaArguments )
		{
			var aaConfigurations = {};

			if ( __base.CONFIGURATION.m_eObject_Default !== null )
			{
				aaConfigurations = __base.CONFIGURATION.m_eObject_Default.GetConfigurations( aaArguments );
			}

			return aaConfigurations;
		},


	SetConfigurations : 
		function ( aaConfigurations, aaArguments )
		{
			if ( __base.CONFIGURATION.m_eObject_Default !== null )
			{
				__base.CONFIGURATION.m_eObject_Default.SetConfigurations( aaConfigurations, aaArguments );
			}
		},


	// ---------------------------------------------------------------
	// private

	_DefaultOptions : 
		function ( aaOptions )
		{
			aaOptions = __base._FUNCTIONS._DefaultOptions( aaOptions );

			if ( __base.GetValue( aaOptions, ".Recursive" ) === false )
			{
				aaOptions["Add.Separator"] = __base.GetValue( aaOptions, "Add.Separator", true );

				aaOptions[".Recursive"] = true;
			}

			return aaOptions;
		}


}


// -------------------------------------------------------------------
// overwrite

var CONFIGURATION = __base.CONFIGURATION;



// ===================================================================
// public
// -------------------------------------------------------------------



// ===================================================================
// local
// -------------------------------------------------------------------



