// 日本語UTF-8, LF, Tab=4



// include



// define



// global



// environment



// ===================================================================
// class
// -------------------------------------------------------------------

var __base = __base || {};
__base.TEST = 
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


	// ---------------------------------------------------------------
	// public

	Setup : 
		function ( aaOptions )
		{
			__base.TEST.m_iCount_Errors = 0;
			__base.TEST.m_iCount_Skip = 0;
			__base.TEST.m_iCount_Total = 0;
			__base.TEST.m_bFlag_CheckNG = __base.GetValue( aaOptions, "Check.NG" );
			__base.TEST.m_bFlag_ShowDetail = __base.GetValue( aaOptions, "Show.Detail" );
			__base.TEST.m_bFlag_ShowRealTime = __base.GetValue( aaOptions, "Show.RealTime", true );
			__base.TEST.m_eDateTime_Begin = new Date();
			__base.TEST.m_arErrors = [];
		},


	ShowResults : 
		{
			Begin : 
				function ()
				{
					__base.TEST._AddLog( "\n" );
				},


			End : 
				function ()
				{
					__base.TEST._AddLog( "\n" );
					__base.TEST._AddLog( "// ===================================================================\n" );
					if ( __base.TEST.m_bFlag_CheckNG )
					{
						if ( __base.TEST.m_iCount_Total != __base.TEST.m_iCount_Errors )
						{
							__base.TEST._AddLog( "!!! not equal error count...\n" );
						}
					}

					__base.TEST._AddLog( "Total : " + __base.TEST.m_iCount_Total + "\n" );
					__base.TEST._AddLog( "Skip : " + __base.TEST.m_iCount_Skip + "\n" );
					__base.TEST._AddLog( "Errors : " + __base.TEST.m_iCount_Errors + "\n" );
					__base.TEST._AddLog( "\n" );
					var eDateTime_Now = new Date();
					__base.TEST._AddLog( "" + ( ( eDateTime_Now.getTime() - __base.TEST.m_eDateTime_Begin.getTime() ) / 1000 ) + " seconds elapsed.\n" );

					__base.TEST._AddLog( "\n" );
					__base.TEST._AddLog( "\n" );
				},


		},


	AddDescriptions : 
		function ( aaDescriptions )
		{
			var e = new Error( "Descriptions" );

			aaDescriptions = aaDescriptions || {};
			aaDescriptions["e"] = e;

			return aaDescriptions;
		},


	// ---------------------------------------------------------------
	// private

	_AddError : 
		function ( aaOptions )
		{
			var e = aaOptions["Error"];
			var aaArguments = aaOptions["Arguments"];
			var iOffset = __base.GetValue( aaOptions, "Offset", 2 );
			var arLocations = [];

			var arCalls = e.stack.split( " at " );
			if ( __base.IsArray( arCalls ) )
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
			aaOptions["Location"] = __base.GetValue( arLocations, iOffset, [ "-", e.stack ] );
			__base.TEST.m_iCount_Errors++;
			__base.TEST.m_arErrors.push( aaOptions );

			if ( __base.TEST.m_bFlag_ShowRealTime )
			{
				if ( __base.TEST.m_bFlag_ShowDetail )
				{
					__base.TEST._AddLog( aaOptions );
				}
				else
				{
					var eString_Message = "";
					eString_Message += "Error at '";
					eString_Message += aaOptions["Location"][0];
					eString_Message += "'(";
					eString_Message += aaOptions["Location"][1];
					eString_Message += ") - ";
					eString_Message += __base._FUNCTIONS.ExpandObjects( aaOptions["Result"] );
					eString_Message += ", ";
					eString_Message += __base._FUNCTIONS.ExpandObjects( aaOptions["Result.OK"] );
					if ( __base.GetValue( aaOptions, "Remarks" ) !== false )
					{
						eString_Message += aaOptions["Remarks"];
					}

					if ( __base.GetValue( aaOptions, "Full" ) )
					{
						eString_Message += "\n";
						eString_Message += e.stack;
					}

					__base.TEST._AddLog( eString_Message );
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
						__base.LOGGER.AddLog( eString );
					}
				}
				else
				{
					__base.LOGGER.AddLog( __base._FUNCTIONS.ExpandObjects( arArguments[0] ) );
				}
			}
			else
			{
				__base.LOGGER.AddLog( __base._FUNCTIONS.ExpandObjects( arArguments ) );
			}
		},


	_AddLog_Direct : 
		function ( eString )
		{
			__base.LOGGER.AddLog( eString );
		},


	_AddSkip : 
		function ()
		{
			__base.TEST.m_iCount_Skip++;
		},


	_AddTotal : 
		function ()
		{
			__base.TEST.m_iCount_Total++;
		}


}


// -------------------------------------------------------------------
// check

__base.TEST.Check = 
{
	// ---------------------------------------------------------------
	// public

	Array : 
		function ( arResults, arResults_OK, ...arArguments )
		{
			__base.TEST._AddTotal();

			if ( arResults_OK == null )
			{
				arResults_OK = [];
			}

			if ( __base._FUNCTIONS.CheckEquals_Array( arResults, arResults_OK ) == false )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = arResults;
				aaOptions["Result.OK"] = arResults_OK;
				__base.TEST._AddError( aaOptions );
			}
		},


	AssociativeArray : 
		function ( aaResults, aaResults_OK, ...arArguments )
		{
			__base.TEST._AddTotal();

			if ( aaResults_OK == null )
			{
				aaResults_OK = {};
			}

			if ( __base._FUNCTIONS.CheckEquals_AssociativeArray( aaResults, aaResults_OK ) == false )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = aaResults;
				aaOptions["Result.OK"] = aaResults_OK;
				__base.TEST._AddError( aaOptions );
			}
		},


	Boolean : 
		function ( bResult, bResult_OK, ...arArguments )
		{
			__base.TEST._AddTotal();

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
				__base.TEST._AddError( aaOptions );
			}
		},


	DateTime : 
		function ( eResult, eResult_OK, ...arArguments )
		{
			__base.TEST._AddTotal();

			if ( eResult_OK == null )
			{
				eResult_OK = new Date( 0 );
			}

			if ( __base._FUNCTIONS.CheckEquals_DateTime( eResult, eResult_OK ) == false )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = eResult;
				aaOptions["Result.OK"] = eResult_OK;
				__base.TEST._AddError( aaOptions );
			}
		},


	Integer : 
		function ( iResult, iResult_OK, ...arArguments )
		{
			__base.TEST._AddTotal();

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
				__base.TEST._AddError( aaOptions );
			}
		},


	NotNull : 
		function ( eResult, ...arArguments )
		{
			__base.TEST._AddTotal();

			if ( eResult === null )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = eResult;
				aaOptions["Result.OK"] = "!null";
				__base.TEST._AddError( aaOptions );
			}
		},


	NotUndefined : 
		function ( eResult, ...arArguments )
		{
			__base.TEST._AddTotal();

			if ( eResult === undefined )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = eResult;
				aaOptions["Result.OK"] = "!undefined";
				__base.TEST._AddError( aaOptions );
			}
		},


	Null : 
		function ( eResult, ...arArguments )
		{
			__base.TEST._AddTotal();

			if ( eResult !== null )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = eResult;
				aaOptions["Result.OK"] = null;
				__base.TEST._AddError( aaOptions );
			}
		},


	Real : 
		function ( rResult, rResult_OK, rThreshold, ...arArguments )
		{
			__base.TEST._AddTotal();

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
				__base.TEST._AddError( aaOptions );
			}
		},


	String : 
		function ( eString, eString_OK, ...arArguments )
		{
			__base.TEST._AddTotal();

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
				__base.TEST._AddError( aaOptions );
			}
		},


	Undefined : 
		function ( eObject, ...arArguments )
		{
			__base.TEST._AddTotal();

			if ( eObject !== undefined )
			{
				var aaOptions = {};
				aaOptions["Error"] = new Error( "Check" );
				aaOptions["Arguments"] = this._AnalyzeArguments( arArguments );
				aaOptions["Result"] = eObject;
				aaOptions["Result.OK"] = undefined;
				__base.TEST._AddError( aaOptions );
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

__base.TEST.Check.Assoc = __base.TEST.Check.AssociativeArray;

var TEST = __base.TEST;



// ===================================================================
// public
// -------------------------------------------------------------------



// ===================================================================
// local
// -------------------------------------------------------------------



