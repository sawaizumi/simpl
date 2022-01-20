// 日本語UTF-8, LF, Tab=4



// include



// define



// global



// environment



// ===================================================================
// class
// -------------------------------------------------------------------

var __base = __base || {};
__base._FUNCTIONS = 
{
	// ---------------------------------------------------------------
	// public

	BuildArray_Unique : 
		function ( arStrings )
		{
			return Array.from( new Set( arStrings ) );
		},


	BuildArray_Unique__SmallArray : 
		function ( arStrings )
		{
			var arResults = [];

			for ( const eString of arStrings )
			{
				if ( !arResults.includes( eString ) )
				{
					arResults.push( eString );
				}
			}

			return arResults;
		},


	BuildAssociativeArray_Indexed : 
		function ( arStrings, iOffset )
		{
			var aaResults = {};

			if ( iOffset == null )
			{
				iOffset = 0;
			}

			var iCount = iOffset;
			for ( const eString of arStrings )
			{
				aaResults[eString] = iCount;
				iCount++;
			}

			return aaResults;
		},


	BuildAssociativeArray_Inverse : 
		function ( aaStrings )
		{
			var aaResults = {};

			var arKeys = Object.keys( aaStrings );
			for ( const eKey of arKeys )
			{
				aaResults[aaStrings[eKey]] = eKey;
			}

			return aaResults;
		},


	CheckEquals_Array : 
		function ( eObject_A, eObject_B )
		{
			if ( !__base.IsArray( eObject_A ) )
			{
				return false;
			}
			if ( !__base.IsArray( eObject_B ) )
			{
				return false;
			}

			if ( eObject_A.length == eObject_B.length )
			{
				for ( const iOrder in eObject_A )
				{
					var eValues_A = eObject_A[iOrder];
					var eValues_B = eObject_B[iOrder];

					if ( __base.IsArray( eValues_A ) )
					{
						if ( this.CheckEquals_Array( eValues_A, eValues_B ) == false )
						{
							return false;
						}
					}
					else if ( __base.IsAssoc( eValues_A ) )
					{
						if ( this.CheckEquals_AssociativeArray( eValues_A, eValues_B ) == false )
						{
							return false;
						}
					}
					else if ( eValues_A !== eValues_B )
					{
						return false;
					}
				}

				return true;
			}

			return false;
		},


	CheckEquals_AssociativeArray : 
		function ( eObject_A, eObject_B )
		{
			if ( !__base.IsAssoc( eObject_A ) )
			{
				return false;
			}
			if ( !__base.IsAssoc( eObject_B ) )
			{
				return false;
			}

			var arKeys_A = Object.keys( eObject_A );
			var arKeys_B = Object.keys( eObject_B );
			if ( arKeys_A.length == arKeys_B.length )
			{
				for ( const eKey of arKeys_A )
				{
					var eValues_A = eObject_A[eKey];
					var eValues_B = eObject_B[eKey];

					if ( __base.IsArray( eValues_A ) )
					{
						if ( this.CheckEquals_Array( eValues_A, eValues_B ) == false )
						{
							return false;
						}
					}
					else if ( __base.IsAssoc( eValues_A ) )
					{
						if ( this.CheckEquals_AssociativeArray( eValues_A, eValues_B ) == false )
						{
							return false;
						}
					}
					else if ( eValues_A !== eValues_B )
					{
						return false;
					}
				}

				return true;
			}

			return false;
		},


	CheckEquals_DateTime : 
		function ( eObject_A, eObject_B )
		{
			if ( !__base.IsDateTime( eObject_A ) )
			{
				return false;
			}
			if ( !__base.IsDateTime( eObject_B ) )
			{
				return false;
			}

			if ( eObject_A.getTime() === eObject_B.getTime() )
			{
				return true;
			}

			return false;
		},


	ExpandObjects : 
		function ( eObject, aaOptions, iLimit )
		{
			var eString_Result = "";

			aaOptions = this._DefaultOptions_ExpandObjects( aaOptions, iLimit );
			bFlag_AddType = aaOptions["Add.Type"];

			if ( aaOptions["Limit.Recursive"] == 0 )
			{
				return "< LIMIT >";
			}

			aaOptions["Limit.Recursive"]--;

			if ( eObject === null )
			{
				eString_Result = "null";
				if ( bFlag_AddType )
				{
					eString_Result = "object( " + eString_Result + " )";
				}
			}
			else if ( ( typeof eObject ) == "string" )
			{
				eString_Result = '"' + eObject + '"';
				if ( bFlag_AddType )
				{
					eString_Result = "string( " + eString_Result + " )";
				}
			}
			else if ( ( typeof eObject ) == "number" )
			{
				eString_Result = eObject;
				if ( bFlag_AddType )
				{
					eString_Result = "number( " + eString_Result + " )";
				}
			}
			else if ( ( typeof eObject ) == "boolean" )
			{
				eString_Result = eObject;
				if ( bFlag_AddType )
				{
					eString_Result = "boolean( " + eString_Result + " )";
				}
			}
			else if ( Array.isArray( eObject ) )
			{
				for ( const eValue of eObject )
				{
					if ( eString_Result != "" )
					{
						eString_Result += ", ";
					}

					eString_Result += this.ExpandObjects( eValue, aaOptions );
				}

				eString_Result = "[ " + eString_Result + " ]";
				if ( bFlag_AddType )
				{
					eString_Result = "Array( " + eString_Result + " )";
				}
			}
			else if ( __base.IsAssoc( eObject ) )
			{
				var arKeys = Object.keys( eObject );
				for ( const eKey of arKeys )
				{
					if ( eString_Result != "" )
					{
						eString_Result += ", ";
					}

					eString_Result += '"' + eKey + '"' + " : " + this.ExpandObjects( eObject[eKey], aaOptions );
				}

				eString_Result = "{ " + eString_Result + " }";
				if ( bFlag_AddType )
				{
					eString_Result = "object( " + eString_Result + " )";
				}
			}
			else if ( ( typeof eObject ) == "object" )
			{
				var arKeys = Object.keys( eObject );
				for ( const eKey of arKeys )
				{
					if ( eString_Result != "" )
					{
						eString_Result += ", ";
					}

					eString_Result += '"' + eKey + '"' + " : " + this.ExpandObjects( eObject[eKey], bFlag_AddType, iLimit );
				}

				if ( eString_Result == "" )
				{
					eString_Result += '"' + "name" + '"';
					eString_Result += " : ";
					eString_Result += '"' + eObject.constructor.name + '"';
					eString_Result += ", ";
					eString_Result += '"' + "toString" + '"';
					eString_Result += " : ";
					eString_Result += '"' + eObject.toString() + '"';
				}

				eString_Result = "{ " + eString_Result + " }";
				if ( bFlag_AddType )
				{
					eString_Result = "object( " + eString_Result + " )";
				}
			}
			else
			{
				eString_Result = typeof eObject;
				if ( bFlag_AddType )
				{
					eString_Result += "( " + eString_Result + " )";
				}
			}

			return eString_Result;
		},


	GetValue : 
		function ( eObject, eKey, eValue_Default )
		{
			var eValue;

			if ( eValue_Default === undefined )
			{
				eValue_Default = false;
			}

			if ( eKey == null )
			{
				return eValue_Default;
			}

			eValue = eValue_Default;

			if ( eObject !== null )
			{
				if ( Array.isArray( eObject ) )
				{
					if ( ( typeof eKey ) == "number" )
					{
						if ( eKey < 0 )
						{
							var iOrder = eObject.length + eKey;
							if ( iOrder >= 0 )
							{
								eValue = eObject[iOrder];
							}
						}
						else
						{
							if ( eObject.length > eKey )
							{
								eValue = eObject[eKey];
							}
						}
					}
				}
				else if ( ( typeof eObject ) == "object" )
				{
					if ( eKey in eObject )
					{
						eValue = eObject[eKey];
					}
				}
			}

			return eValue;
		},


	IsArray : 
		function ( eObject )
		{
			if ( eObject == null )
			{
				return false;
			}

			return Array.isArray( eObject );
		},


	IsAssociativeArray : 
		function ( eObject )
		{
			if ( eObject == null )
			{
				return false;
			}

			if ( ( typeof eObject ) == "object" )
			{
				if ( eObject.constructor.toString() === Object.toString() )
				{
					return true;
				}
			}

			return false;
		},


	IsDateTime : 
		function ( eObject )
		{
			if ( eObject == null )
			{
				return false;
			}

			if ( ( typeof eObject ) == "object" )
			{
				if ( eObject.constructor.toString() === Date.toString() )
				{
					return true;
				}
			}

			return false;
		},


	IsValue : 
		function ( eObject )
		{
			if ( eObject == null )
			{
				return true;
			}

			if ( ( typeof eObject ) == "object" )
			{
				return false;
			}

			if ( ( typeof eObject ) == "function" )
			{
				return false;
			}

			if ( ( typeof eObject ) == "symbol" )
			{
				return false;
			}

			return true;
		},


	Padding : 
		function ( eString, eString_Padding, iDigits )
		{
			if ( eString_Padding == null )
			{
				eString_Padding = "00";
			}

			if ( iDigits == null )
			{
				iDigits = eString_Padding.length;
			}

			while ( iDigits > eString_Padding.length )
			{
				eString_Padding += eString_Padding;
			}

			return ( eString_Padding + eString ).slice( 0 - iDigits );
		},


	ReplaceLabels : 
		function ( eString_Template, aaReplaceLabels )
		{
			var eString_Result = eString_Template;

			var arKeys = Object.keys( aaReplaceLabels );
			for ( const eKey of arKeys )
			{
				eString_Result = eString_Result.replaceAll( eKey, aaReplaceLabels[eKey] );
			}

			return eString_Result;
		},


	// ---------------------------------------------------------------
	// private

	_DefaultOptions_ExpandObjects : 
		function ( aaOptions, iLimit )
		{
			if ( aaOptions === true )
			{
				aaOptions = { "Add.Type" : true };
			}
			if ( aaOptions === false )
			{
				aaOptions = { "Add.Type" : false };
			}
			else
			{
				aaOptions = this._DefaultOptions( aaOptions );
			}

			if ( ( typeof iLimit ) == "number" )
			{
				if ( iLimit >= 0 )
				{
					aaOptions["Limit.Recursive"] = iLimit;
				}
			}

			if ( this.GetValue( aaOptions, ".Recursive" ) === false )
			{
				aaOptions["Limit.Recursive"] = this.GetValue( aaOptions, "Limit.Recursive", 5 );
				aaOptions["Add.Type"] = this.GetValue( aaOptions, "Add.Type" );

				aaOptions[".Recursive"] = true;
			}

			return aaOptions;
		},


	_DefaultOptions : 
		function ( aaOptions )
		{
			if ( aaOptions == null )
			{
				aaOptions = {};
			}
			else if ( ( typeof aaOptions ) == "string" )
			{
				aaOptions = JSON.parse( aaOptions );
			}
			else
			{
				aaOptions = JSON.parse( JSON.stringify( aaOptions ) );
			}

			return aaOptions;
		}


};


// -------------------------------------------------------------------
// overwrite

__base.GetValue = __base._FUNCTIONS.GetValue;
__base.IsArray = __base._FUNCTIONS.IsArray;
__base.IsAssoc = __base._FUNCTIONS.IsAssociativeArray;
__base.IsAssociativeArray = __base._FUNCTIONS.IsAssociativeArray;
__base.IsDateTime = __base._FUNCTIONS.IsDateTime;
__base.Padding = __base._FUNCTIONS.Padding;

var _FUNCTIONS = __base._FUNCTIONS;
var GetValue = __base._FUNCTIONS.GetValue;
var IsArray = __base._FUNCTIONS.IsArray;
var IsAssoc = __base._FUNCTIONS.IsAssociativeArray;
var IsAssociativeArray = __base._FUNCTIONS.IsAssociativeArray;
var IsDateTime = __base._FUNCTIONS.IsDateTime;



// ===================================================================
// public
// -------------------------------------------------------------------



// ===================================================================
// local
// -------------------------------------------------------------------



