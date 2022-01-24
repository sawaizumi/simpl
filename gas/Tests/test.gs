// 日本語UTF-8, LF, Tab=4



// include



// define



// global



// environment



// ===================================================================
// class
// -------------------------------------------------------------------

var SIMPL = SIMPL || {};
SIMPL.TEST = 
{
	// ---------------------------------------------------------------
	// member

	m_iCount_Errors : 0,
	m_iCount_Skip : 0,
	m_iCount_Total : 0,
	m_bFlag_CheckNG : false,
	m_bFlag_ShowDetail : false,
	m_bFlag_ShowRealTime : true,
	m_eDateTime_Begin : null,
	m_arErrors : [],
	m_arDescriptions : [],


	// ---------------------------------------------------------------
	// public

	Setup : 
		function ( aaOptions )
		{
			SIMPL.TEST.m_iCount_Errors = 0;
			SIMPL.TEST.m_iCount_Skip = 0;
			SIMPL.TEST.m_iCount_Total = 0;
			SIMPL.TEST.m_bFlag_CheckNG = SIMPL.GetValue( aaOptions, "Check.NG" );
			SIMPL.TEST.m_bFlag_ShowDetail = SIMPL.GetValue( aaOptions, "Show.Detail" );
			SIMPL.TEST.m_bFlag_ShowRealTime = SIMPL.GetValue( aaOptions, "Show.RealTime", true );
			SIMPL.TEST.m_eDateTime_Begin = new Date();
			SIMPL.TEST.m_eDateTime_End = new Date();
			SIMPL.TEST.m_arErrors = [];
			SIMPL.TEST.m_arDescriptions = [];
		},


	ShowResults : 
		{
			Begin : 
				function ()
				{
					SIMPL.TEST._AddLog( "\n" );
				},


			End : 
				function ()
				{
					SIMPL.TEST._AddLog( "\n" );
					SIMPL.TEST._AddLog( "// ===================================================================\n" );
					if ( SIMPL.TEST.m_bFlag_CheckNG )
					{
						if ( SIMPL.TEST.m_iCount_Total != SIMPL.TEST.m_iCount_Errors )
						{
							SIMPL.TEST._AddLog( "!!! not equal error count...\n" );
						}
					}

					SIMPL.TEST._AddLog( "Total : " + SIMPL.TEST.m_iCount_Total + "\n" );
					SIMPL.TEST._AddLog( "Skip : " + SIMPL.TEST.m_iCount_Skip + "\n" );
					SIMPL.TEST._AddLog( "Errors : " + SIMPL.TEST.m_iCount_Errors + "\n" );
					SIMPL.TEST._AddLog( "\n" );
					SIMPL.TEST.m_eDateTime_End = new Date();
					SIMPL.TEST._AddLog( "" + ( ( SIMPL.TEST.m_eDateTime_End.getTime() - SIMPL.TEST.m_eDateTime_Begin.getTime() ) / 1000 ) + " seconds elapsed.\n" );

					SIMPL.TEST._AddLog( "\n" );
					SIMPL.TEST._AddLog( "\n" );
				},


			Get : 
				function ()
				{
					var aaResults = {};

					aaResults["Count.Total"] = SIMPL.TEST.m_iCount_Total;
					aaResults["Count.Skip"] = SIMPL.TEST.m_iCount_Skip;
					aaResults["Count.Errors"] = SIMPL.TEST.m_iCount_Errors;
					aaResults["DateTime.Begin"] = SIMPL.TEST.m_eDateTime_Begin;
					aaResults["DateTime.End"] = SIMPL.TEST.m_eDateTime_End;

					return aaResults
				}


		},


	AddDescriptions : 
		function ( aaDescriptions )
		{
			var e = new Error( "Descriptions" );

			aaDescriptions = aaDescriptions || {};
			aaDescriptions["e"] = e;
			SIMPL.TEST.m_arDescriptions.push( aaDescriptions );

			return aaDescriptions;
		},


	// ---------------------------------------------------------------
	// private

	_AddError : 
		function ( aaOptions )
		{
			var e = aaOptions["Error"];
			var aaArguments = aaOptions["Arguments"];
			var iOffset = SIMPL.GetValue( aaOptions, "Offset", 2 );
			var arLocations = [];

			var arCalls = e.stack.split( " at " );
			if ( SIMPL.IsArray( arCalls ) )
			{
				for ( const eString of arCalls )
				{
					var arStrings = eString.split( "(" );
					if ( arStrings.length > 1 )
					{
						var arColumns = arStrings[1].split( ":" );
						arLocations.push( [ arColumns[0], arColumns[1] ] );
					}
					else
					{
						var arColumns = arStrings[0].split( ":" );
						arLocations.push( [ arColumns[0], arColumns[1] ] );
					}
				}
			}

			aaOptions["e.name"] = e.name;
			aaOptions["e.message"] = e.message;
			aaOptions["e.stack"] = e.stack;
			aaOptions["Offset"] = iOffset;
			aaOptions["Location"] = SIMPL.GetValue( arLocations, iOffset, [ "-", e.stack ] );
			SIMPL.TEST.m_iCount_Errors++;
			SIMPL.TEST.m_arErrors.push( aaOptions );

			if ( SIMPL.TEST.m_bFlag_ShowRealTime )
			{
				if ( SIMPL.TEST.m_bFlag_ShowDetail )
				{
					SIMPL.TEST._AddLog( aaOptions );
				}
				else
				{
					var eString_Message = "";
					eString_Message += "Error at '";
					eString_Message += aaOptions["Location"][0];
					eString_Message += "'(";
					eString_Message += aaOptions["Location"][1];
					eString_Message += ") - ";
					eString_Message += SIMPL._FUNCTIONS.ExpandObjects( aaOptions["Result"] );
					eString_Message += ", ";
					eString_Message += SIMPL._FUNCTIONS.ExpandObjects( aaOptions["Result.OK"] );
					if ( SIMPL.GetValue( aaOptions, "Remarks" ) !== false )
					{
						eString_Message += aaOptions["Remarks"];
					}

					if ( SIMPL.GetValue( aaOptions, "Full" ) )
					{
						eString_Message += "\n";
						eString_Message += e.stack;
					}

					SIMPL.TEST._AddLog( eString_Message );
				}
			}
		},


	_AddLog : 
		function ( ...arArguments )
		{
			if ( arArguments.length == 1 )
			{
				if ( ( typeof arArguments[0] ) == "string" )
				{
					var eString_Argument = arArguments[0];
					if ( eString_Argument.endsWith( "\n" ) )
					{
						eString_Argument = eString_Argument.substr( 0, ( eString_Argument.length - 1 ) );
					}

					var arStrings = eString_Argument.split( "\n" );
					for ( const eString of arStrings )
					{
						SIMPL.LOGGER.AddLog( eString );
					}
				}
				else
				{
					SIMPL.LOGGER.AddLog( SIMPL._FUNCTIONS.ExpandObjects( arArguments[0] ) );
				}
			}
			else
			{
				SIMPL.LOGGER.AddLog( SIMPL._FUNCTIONS.ExpandObjects( arArguments ) );
			}
		},


	_AddLog_Direct : 
		function ( eString )
		{
			SIMPL.LOGGER.AddLog( eString );
		},


	_AddSkip : 
		function ()
		{
			SIMPL.TEST.m_iCount_Skip++;
		},


	_AddTotal : 
		function ()
		{
			SIMPL.TEST.m_iCount_Total++;
		}


}


// -------------------------------------------------------------------
// check

SIMPL.TEST.Check = 
{
	// ---------------------------------------------------------------
	// public

	Array : 
		function ( arResults, arResults_OK, ...arArguments )
		{
			SIMPL.TEST._AddTotal();

			if ( arResults_OK == null )
			{
				arResults_OK = [];
			}

			if ( SIMPL._FUNCTIONS.CheckEquals_Array( arResults, arResults_OK ) == false )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = arResults;
				aaOptions["Result.OK"] = arResults_OK;
				SIMPL.TEST._AddError( aaOptions );
			}
		},


	AssociativeArray : 
		function ( aaResults, aaResults_OK, ...arArguments )
		{
			SIMPL.TEST._AddTotal();

			if ( aaResults_OK == null )
			{
				aaResults_OK = {};
			}

			if ( SIMPL._FUNCTIONS.CheckEquals_AssociativeArray( aaResults, aaResults_OK ) == false )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = aaResults;
				aaOptions["Result.OK"] = aaResults_OK;
				SIMPL.TEST._AddError( aaOptions );
			}
		},


	Boolean : 
		function ( bResult, bResult_OK, ...arArguments )
		{
			SIMPL.TEST._AddTotal();

			if ( bResult_OK == null )
			{
				bResult_OK = true;
			}

			if ( bResult !== bResult_OK )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = bResult;
				aaOptions["Result.OK"] = bResult_OK;
				SIMPL.TEST._AddError( aaOptions );
			}
		},


	DateTime : 
		function ( eResult, eResult_OK, ...arArguments )
		{
			SIMPL.TEST._AddTotal();

			if ( eResult_OK == null )
			{
				eResult_OK = new Date( 0 );
			}

			if ( SIMPL._FUNCTIONS.CheckEquals_DateTime( eResult, eResult_OK ) == false )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = eResult;
				aaOptions["Result.OK"] = eResult_OK;
				SIMPL.TEST._AddError( aaOptions );
			}
		},


	Integer : 
		function ( iResult, iResult_OK, ...arArguments )
		{
			SIMPL.TEST._AddTotal();

			if ( iResult_OK == null )
			{
				iResult_OK = 0;
			}

			if ( iResult !== iResult_OK )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = iResult;
				aaOptions["Result.OK"] = iResult_OK;
				SIMPL.TEST._AddError( aaOptions );
			}
		},


	NotNull : 
		function ( eResult, ...arArguments )
		{
			SIMPL.TEST._AddTotal();

			if ( eResult === null )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = eResult;
				aaOptions["Result.OK"] = "!null";
				SIMPL.TEST._AddError( aaOptions );
			}
		},


	NotUndefined : 
		function ( eResult, ...arArguments )
		{
			SIMPL.TEST._AddTotal();

			if ( eResult === undefined )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = eResult;
				aaOptions["Result.OK"] = "!undefined";
				SIMPL.TEST._AddError( aaOptions );
			}
		},


	Null : 
		function ( eResult, ...arArguments )
		{
			SIMPL.TEST._AddTotal();

			if ( eResult !== null )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = eResult;
				aaOptions["Result.OK"] = null;
				SIMPL.TEST._AddError( aaOptions );
			}
		},


	Real : 
		function ( rResult, rResult_OK, rThreshold, ...arArguments )
		{
			SIMPL.TEST._AddTotal();

			if ( rResult_OK == null )
			{
				rResult_OK = 0;
			}

			if ( rThreshold == null )
			{
				rThreshold = 0;
			}

			if
				(
					( ( typeof rResult ) != "number" )
						||
					( rResult < ( rResult_OK - rThreshold ) )
						||
					( rResult > ( rResult_OK + rThreshold ) )
				)
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Arguments"]["Threshold"] = rThreshold;
				aaOptions["Result"] = rResult;
				aaOptions["Result.OK"] = rResult_OK;
				aaOptions["Remarks"] = ", ( <> " + rThreshold + " )";
				SIMPL.TEST._AddError( aaOptions );
			}
		},


	String : 
		function ( eString, eString_OK, ...arArguments )
		{
			SIMPL.TEST._AddTotal();

			if ( eString_OK == null )
			{
				eString_OK = "";
			}

			if ( eString !== eString_OK )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = eString;
				aaOptions["Result.OK"] = eString_OK;
				SIMPL.TEST._AddError( aaOptions );
			}
		},


	Undefined : 
		function ( eObject, ...arArguments )
		{
			SIMPL.TEST._AddTotal();

			if ( eObject !== undefined )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = eObject;
				aaOptions["Result.OK"] = undefined;
				SIMPL.TEST._AddError( aaOptions );
			}
		},


	// ---------------------------------------------------------------
	// private

	_AnalyzeArguments : 
		function ( arArguments )
		{
			var aaArguments = {}

			var arKeys = [ "Offset" ];
			for ( const iOrder in arArguments )
			{
				if ( iOrder < arKeys.length )
				{
					aaArguments[arKeys[iOrder]] = arArguments[iOrder];
				}
			}

			return aaArguments;
		}


}


// -------------------------------------------------------------------
// overwrite

SIMPL.TEST.Check.Assoc = SIMPL.TEST.Check.AssociativeArray;



// ===================================================================
// public
// -------------------------------------------------------------------



// ===================================================================
// local
// -------------------------------------------------------------------



