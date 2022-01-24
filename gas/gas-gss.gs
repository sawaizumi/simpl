// 日本語UTF-8, LF, Tab=4



// include



// define



// global



// environment



// ===================================================================
// class
// -------------------------------------------------------------------

var __base = __base || {};
__base.GAS = __base.GAS || {};
__base.GAS.GSS = 
{
	// ---------------------------------------------------------------
	// public

	ClearSheet : 
		function ( eSheet, iRow_Start, iColumn_Start, iRow_End, iColumn_End )
		{
			var iCount_Row = eSheet.getMaxRows();
			var iCount_Column = eSheet.getMaxColumns();

			if ( iRow_End != null )
			{
				iCount_Row = iRow_End;
			}

			if ( iColumn_End != null )
			{
				iCount_Column = iColumn_End;
			}

			var eRange = eSheet.getRange( iRow_Start, iColumn_Start, ( iCount_Row - iRow_Start + 1 ), ( iCount_Column - iColumn_Start + 1 ) );
			eRange.setValue( "tmp" );
			eRange.clear();
		},


	ConvertColumnIndex_ColumnNumber : 
		function ( eString_ColumnNumber )
		{
			var iColumn = 0;
			var eSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
			var eRange = eSheet.getRange( eString_ColumnNumber + "1" );

			iColumn = eRange.getColumn();

			return iColumn;
		},


	ConvertColumnNumber_ColumnIndex : 
		function ( iColumnIndex )
		{
			var eString_ColumnNumber = "";
			var eSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
			var eRange = eSheet.getRange( 1, iColumnIndex );

			eString_ColumnNumber = eRange.getA1Notation();
			eString_ColumnNumber = eString_ColumnNumber.replace( "1", "" );

			return eString_ColumnNumber;
		},


	ConvertRangeA1_RangeIndex : 
		function ( iColumn_Start, iRow_Start, iColumn_End, iRow_End )
		{
			if ( iColumn_End == null )
			{
				iColumn_End = iColumn_Start;
			}
			if ( iRow_End == null )
			{
				iRow_End = iRow_Start;
			}

			var iCount_Row = iRow_End - iRow_Start + 1;
			var iCount_Column = iColumn_End - iColumn_Start + 1;
			var eSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
			var eRange = eSheet.getRange( iRow_Start, iColumn_Start, iCount_Row, iCount_Column );

			return eRange.getA1Notation();
		},


	ConvertRangeIndex_RangeA1 : 
		function ( eString_RangeA1 )
		{
			var eSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
			var eRange = eSheet.getRange( eString_RangeA1 );

			var iColumn = eRange.getColumn();
			var iRow = eRange.getRow();

			return [ eRange.getColumn(), eRange.getRow(), eRange.getLastColumn(), eRange.getLastRow() ];
		},


	FindColumnIndices : 
		function ( eSheet, arStrings_ColumnName, iRow_Index, iColumn_Limit, iColumn_Offset, bFlag_Like, bFlag_NullBreak )
		{
			var arIndices = [];

			for ( var i = 0; i < arStrings_ColumnName.length; i++ )
			{
				arIndices.push( this.FindColumnIndex( eSheet, arStrings_ColumnName[i], iRow_Index, iColumn_Limit, iColumn_Offset, bFlag_Like, bFlag_NullBreak ) );
			}

			return arIndices;
		},


	FindColumnIndex : 
		function ( eSheet, eString_ColumnName, iRow_Index, iColumn_Limit, iColumn_Offset, bFlag_Like, bFlag_NullBreak )
		{
			var iColumn_Max = eSheet.getMaxColumns();

			if
				(
					( ( typeof eString_ColumnName ) != "string" )
						||
					( eString_ColumnName == "" )
				)
			{
				return 0;
			}

			if ( iRow_Index == null )
			{
				iRow_Index = 1;
			}

			if ( iColumn_Limit != null )
			{
				iColumn_Max = iColumn_Limit;
			}

			if ( iColumn_Offset == null )
			{
				iColumn_Offset = 0;
			}

			if ( bFlag_NullBreak == null )
			{
				bFlag_NullBreak = true;
			}

			var iColumn = 0;
			for ( var i = ( 1 + iColumn_Offset ); i < ( 1 + iColumn_Max ); i++ )
			{
				var eString_Value = eSheet.getRange( iRow_Index, i ).getValue();

				if ( bFlag_NullBreak )
				{
					if ( eString_Value === "" )
					{
						break;
					}
				}

				if ( ( typeof eString_Value ) != "string" )
				{
					continue;
				}

				if ( bFlag_Like )
				{
					eString_Value = eString_Value.replace( "\t", "" );
					eString_Value = eString_Value.replace( "\r", "" );
					eString_Value = eString_Value.replace( "\n", "" );
					if ( eString_Value.includes( eString_ColumnName ) )
					{
						iColumn = i;
						break;
					}
				}
				else if ( eString_Value == eString_ColumnName )
				{
					iColumn = i;
					break;
				}
			}

			return iColumn;
		},


	FindRowIndices : 
		function ( eSheet, arStrings_RowName, iColumn_Index, iRow_Limit, iRow_Offset, bFlag_Like, bFlag_NullBreak )
		{
			var arIndices = [];

			for ( var i = 0; i < arStrings_RowName.length; i++ )
			{
				arIndices.push( this.FindRowIndex( eSheet, arStrings_RowName[i], iColumn_Index, iRow_Limit, iRow_Offset, bFlag_Like, bFlag_NullBreak ) );
			}

			return arIndices;
		},


	FindRowIndex : 
		function ( eSheet, eString_RowName, iColumn_Index, iRow_Limit, iRow_Offset, bFlag_Like, bFlag_NullBreak )
		{
			var iRow_Max = eSheet.getMaxRows();

			if
				(
					( ( typeof eString_RowName ) != "string" )
						||
					( eString_RowName == "" )
				)
			{
				return 0;
			}

			if ( iColumn_Index == null )
			{
				iColumn_Index = 1;
			}

			if ( iRow_Limit != null )
			{
				iRow_Max = iRow_Limit;
			}

			if ( iRow_Offset == null )
			{
				iRow_Offset = 0;
			}

			if ( bFlag_NullBreak == null )
			{
				bFlag_NullBreak = true;
			}

			var iRow = 0;
			for ( var i = ( 1 + iRow_Offset ); i < ( 1 + iRow_Max ); i++ )
			{
				var eString_Value = eSheet.getRange( i, iColumn_Index ).getValue();

				if ( bFlag_NullBreak )
				{
					if ( eString_Value === "" )
					{
						break;
					}
				}

				if ( ( typeof eString_Value ) != "string" )
				{
					continue;
				}

				if ( bFlag_Like )
				{
					eString_Value = eString_Value.replace( "\t", "" );
					eString_Value = eString_Value.replace( "\r", "" );
					eString_Value = eString_Value.replace( "\n", "" );
					if ( eString_Value.includes( eString_RowName ) )
					{
						iRow = i;
						break;
					}
				}
				else if ( eString_Value == eString_RowName )
				{
					iRow = i;
					break;
				}
			}

			return iRow;
		},


	GetSheet : 
		function ( aaArguments, eString_SheetName__Default )
		{
			var eSpreadSheet = __base.GAS.GSS.GetSpreadSheet( aaArguments );
			var eSheet;

			var eString_SheetName = __base.GetValue( aaArguments, "sheet.sheet-name", eString_SheetName__Default )
			if ( eString_SheetName == null )
			{
				eSheet = eSpreadSheet.getSheets()[0];
			}
			else if ( eString_SheetName == false )
			{
				eSheet = eSpreadSheet.getSheets()[0];
			}
			else if ( ( typeof eString_SheetName ) == "number" )
			{
				eSheet = eSpreadSheet.getSheets()[eString_SheetName];
			}
			else
			{
				eSheet = eSpreadSheet.getSheetByName( eString_SheetName );
			}

			return eSheet;
		},


	GetSpreadSheet : 
		function ( aaArguments )
		{
			var eSpreadSheet;

			if ( __base.GetValue( aaArguments, "sheet.id" ) != false )
			{
				eSpreadSheet = SpreadsheetApp.openById( aaArguments["sheet.id"] );
			}
			else if ( ( typeof aaArguments ) == "string" )
			{
				eSpreadSheet = SpreadsheetApp.openById( aaArguments );
			}
			else
			{
				eSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
			}

			return eSpreadSheet;
		},


	// ---------------------------------------------------------------
	// private

	_DefaultOptions : 
		function ( aaOptions )
		{
			aaOptions = __base._FUNCTIONS._DefaultOptions( aaOptions );

			if ( __base.GetValue( aaOptions, ".Recursive" ) === false )
			{
				aaOptions[".Recursive"] = true;
			}

			return aaOptions;
		}


};


__base.GAS.GSS.CONFIGURATION = 
{
	// ---------------------------------------------------------------
	// public

	FindColumnIndices : 
		function ( eSheet, arStrings_ColumnName, iRow_Index, iColumn_Limit, iColumn_Offset, bFlag_Like, bFlag_NullBreak )
		{
			if ( arStrings_ColumnName == null )
			{
				arStrings_ColumnName = [];
				arStrings_ColumnName.push( "key" );
				arStrings_ColumnName.push( "value" );
				arStrings_ColumnName.push( "remarks" );
			}

			if ( iRow_Index == null )
			{
				iRow_Index = 1;
			}

			return __base.GAS.GSS.FindColumnIndices( eSheet, arStrings_ColumnName, iRow_Index, iColumn_Limit, iColumn_Offset, bFlag_Like, bFlag_NullBreak );
		},


	GetConfigurations : 
		function ( aaArguments )
		{
			var eSheet = __base.GAS.GSS.GetSheet( aaArguments, "configurations" );
			var bFlag_NullBreak = __base.GetValue( aaArguments, "null_break" );
			var iHead_Row = __base.GetValue( aaArguments, "head.row", 1 );
			var iHead_Column = __base.GetValue( aaArguments, "head.column", 1 );
			var iOffset_Row = __base.GetValue( aaArguments, "offset.row", 0 );
			var iOffset_Column = __base.GetValue( aaArguments, "offset.column", 0 );
			var arColumnIndices = __base.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet, __base.GetValue( aaArguments, "column-names", null ), iHead_Row, null, iOffset_Column );
			var eString_ColumnNumber__Key = __base.GetValue( aaArguments, "column-order.key" );
			var eString_ColumnNumber__Value = __base.GetValue( aaArguments, "column-order.value" );
			var iCount_Row = eSheet.getMaxRows();
			var iCount_Column = eSheet.getMaxColumns();
			var arConfigurations = eSheet.getRange( ( iHead_Row + iOffset_Row ), ( iHead_Column + iOffset_Column ), ( iCount_Row - ( iHead_Row + iOffset_Row ) + 1 ), ( iCount_Column - ( iHead_Column + iOffset_Column ) + 1 ) ).getValues();
			var iColumn_Key;
			var iColumn_Value;
			var iMax_SubKey;

			if ( eString_ColumnNumber__Key !== false )
			{
				iColumn_Key = __base.GAS.GSS.ConvertColumnIndex_ColumnNumber( eString_ColumnNumber__Key ) - ( iHead_Column + iOffset_Column );
			}
			else
			{
				iColumn_Key = arColumnIndices[__base.GetValue( aaArguments, "column-names.order.key", 0 )] - ( iHead_Column + iOffset_Column );
				if ( iColumn_Key < 0 )
				{
					iColumn_Key = 0;
				}
			}

			if ( eString_ColumnNumber__Value !== false )
			{
				iColumn_Value = __base.GAS.GSS.ConvertColumnIndex_ColumnNumber( eString_ColumnNumber__Value ) - ( iHead_Column + iOffset_Column );
			}
			else
			{
				iColumn_Value = arColumnIndices[__base.GetValue( aaArguments, "column-names.order.value", 1 )] - ( iHead_Column + iOffset_Column );
				if ( iColumn_Value < 0 )
				{
					iColumn_Value = 1;
				}
			}

			if ( iColumn_Key < iColumn_Value )
			{
				iMax_SubKey = iColumn_Value;
			}
			else
			{
				iMax_SubKey = iColumn_Key;
			}

			var aaConfigurations = {};
			arConfigurations.every
				(
					function ( eObject )
					{
						if ( bFlag_NullBreak )
						{
							if ( eObject[iColumn_Key] === "" )
							{
								return false;
							}
						}

						if ( eObject[iColumn_Key] != "" )
						{
							eKey = eObject[iColumn_Key];
							for ( var i = ( iColumn_Key + 1 ); i < iMax_SubKey; i++ )
							{
								if ( eObject[i] != "" )
								{
									eKey = eKey + "." + eObject[i];
								}
							}

							if ( aaConfigurations[eKey] !== undefined )
							{
								if ( !Array.isArray( aaConfigurations[eKey] ) )
								{
									var arValues = [];

									arValues.push( aaConfigurations[eKey] );
									aaConfigurations[eKey] = arValues;
								}

								aaConfigurations[eKey].push( eObject[iColumn_Value] );
							}
							else
							{
								aaConfigurations[eKey] = eObject[iColumn_Value];
							}
						}

						return true;
					}
				);

			return aaConfigurations;
		},


	GetConfigurations_KeyValue : 
		function ( eSheet, iColumn_Key, iColumn_Value, iRow_Start, iRow_Limit, bFlag_NullBreak )
		{
			var iCount_Row = eSheet.getMaxRows();
			if ( iRow_Limit != null )
			{
				iCount_Row = iRow_Limit;
			}

			var arConfigurations_Key = eSheet.getRange( iRow_Start, iColumn_Key, ( iCount_Row - iRow_Start + 1 ) ).getValues();
			var arConfigurations_Value = eSheet.getRange( iRow_Start, iColumn_Value, ( iCount_Row - iRow_Start + 1 ) ).getValues();

			var aaConfigurations = {};
			for ( var i = 0; i < arConfigurations_Key.length; i++ )
			{
				var eKey = arConfigurations_Key[i][0];
				if ( eKey === "" )
				{
					if ( bFlag_NullBreak )
					{
						break;
					}
					else
					{
						continue;
					}
				}

				if ( aaConfigurations[eKey] !== undefined )
				{
					if ( !Array.isArray( aaConfigurations[eKey] ) )
					{
						var arValues = [];

						arValues.push( aaConfigurations[eKey] );
						aaConfigurations[eKey] = arValues;
					}

					aaConfigurations[eKey].push( arConfigurations_Value[i][0] );
				}
				else
				{
					aaConfigurations[eKey] = arConfigurations_Value[i][0];
				}
			}

			return aaConfigurations;
		},


	SetConfigurations : 
		function ( aaConfigurations, aaArguments )
		{
			var eSheet = __base.GAS.GSS.GetSheet( aaArguments, "configurations" );
			var iHead_Row = __base.GetValue( aaArguments, "head.row", 1 );
			var iHead_Column = __base.GetValue( aaArguments, "head.column", 1 );
			var iOffset_Row = __base.GetValue( aaArguments, "offset.row", 0 );
			var iOffset_Column = __base.GetValue( aaArguments, "offset.column", 0 );
			var arColumnIndices = __base.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet, __base.GetValue( aaArguments, "column-names", null ), iHead_Row, null, iOffset_Column );
			var eString_ColumnNumber__Key = __base.GetValue( aaArguments, "column-order.key" );
			var eString_ColumnNumber__Value = __base.GetValue( aaArguments, "column-order.value" );
			var iCount_Row = eSheet.getMaxRows();
			var iColumn_Key;
			var iColumn_Value;
			var iMax_SubKey;

			if ( eString_ColumnNumber__Key !== false )
			{
				iColumn_Key = __base.GAS.GSS.ConvertColumnIndex_ColumnNumber( eString_ColumnNumber__Key );
			}
			else
			{
				iColumn_Key = arColumnIndices[__base.GetValue( aaArguments, "column-names.order.key", 0 )];
				if ( iColumn_Key < 1 )
				{
					iColumn_Key = 1;
				}
			}

			if ( eString_ColumnNumber__Value !== false )
			{
				iColumn_Value = __base.GAS.GSS.ConvertColumnIndex_ColumnNumber( eString_ColumnNumber__Value );
			}
			else
			{
				iColumn_Value = arColumnIndices[__base.GetValue( aaArguments, "column-names.order.value", 1 )];
				if ( iColumn_Value < 1 )
				{
					iColumn_Value = 2;
				}
			}

			var iBegin_Column;
			var iEnd_Column;
			if ( iColumn_Key < iColumn_Value )
			{
				iMax_SubKey = iColumn_Value - 1;

				iBegin_Column = iColumn_Key;
				iEnd_Column = iColumn_Value;
			}
			else
			{
				iMax_SubKey = 1;

				iBegin_Column = iColumn_Value;
				iEnd_Column = iColumn_Key;
			}

			__base.GAS.GSS.ClearSheet( eSheet, ( iHead_Row + iOffset_Row ), iBegin_Column, ( iCount_Row - ( iHead_Row + iOffset_Row ) + 1 ), iEnd_Column );

			var iRow = iOffset_Row + iHead_Row;
			for ( var eKey in aaConfigurations )
			{
				var eRange_Key = eSheet.getRange( iRow, iColumn_Key );
				var arSubKeys = eKey.split( "." );
				eRange_Key.setValue(arSubKeys[0]);
				for ( var i = 1; i < iMax_SubKey; i++ )
				{
					if ( arSubKeys.length > i )
					{
						eRange_Key = eSheet.getRange( iRow, ( iColumn_Key + i ) );
						eRange_Key.setValue(arSubKeys[i]);
					}
				}

				var eRange_Value = eSheet.getRange( iRow, iColumn_Value );
				var eValue = aaConfigurations[eKey];
				if ( Array.isArray( eValue ) )
				{
					for ( const iOrder in eValue )
					{
						eRange_Key = eSheet.getRange( iRow, iColumn_Key );
						eRange_Key.setValue(arSubKeys[0]);
						for ( var i = 1; i < iMax_SubKey; i++ )
						{
							if ( arSubKeys.length > i )
							{
								eRange_Key = eSheet.getRange( iRow, ( iColumn_Key + i ) );
								eRange_Key.setValue(arSubKeys[i]);
							}
						}

						eRange_Value = eSheet.getRange( iRow, iColumn_Value );
						eRange_Value.setValue( eValue[iOrder] );
						iRow++;
					}
				}
				else
				{
					eRange_Value.setValue( eValue );
					iRow++;
				}
			}
		},


	SetConfigurations_KeyValue : 
		function ( aaConfigurations, eSheet, iColumn_Key, iColumn_Value, iRow_Start )
		{
			var iCount_Row = eSheet.getMaxRows();

			__base.GAS.GSS.ClearSheet( eSheet, iRow_Start, iColumn_Key, iCount_Row, iColumn_Key );
			__base.GAS.GSS.ClearSheet( eSheet, iRow_Start, iColumn_Value, iCount_Row, iColumn_Value );

			var iRow = iRow_Start;
			for ( const eKey in aaConfigurations )
			{
				var eRange_Key = eSheet.getRange( iRow, iColumn_Key );
				var eRange_Value = eSheet.getRange( iRow, iColumn_Value );
				var eValue = aaConfigurations[eKey];
				if ( Array.isArray( eValue ) )
				{
					for ( const iOrder in eValue )
					{
						eRange_Key = eSheet.getRange( iRow, iColumn_Key );
						eRange_Key.setValue( eKey );
						eRange_Value = eSheet.getRange( iRow, iColumn_Value );
						eRange_Value.setValue( eValue[iOrder] );
						iRow++;
					}
				}
				else
				{
					eRange_Key.setValue( eKey );
					eRange_Value.setValue( eValue );
					iRow++;
				}
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
				aaOptions[".Recursive"] = true;
			}

			return aaOptions;
		}


}


// -------------------------------------------------------------------
// overwrite

__base.CONFIGURATION.GSS = __base.GAS.GSS.CONFIGURATION;
__base.CONFIGURATION.m_eObject_Default = __base.GAS.GSS.CONFIGURATION;

var GAS = __base.GAS;



// ===================================================================
// public
// -------------------------------------------------------------------



// ===================================================================
// local
// -------------------------------------------------------------------



