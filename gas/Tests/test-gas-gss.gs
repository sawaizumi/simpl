// 日本語UTF-8, LF, Tab=4



// include



// define



// global



// environment



// ===================================================================
// class
// -------------------------------------------------------------------

var TEST = TEST || {};
TEST.SIMPL = TEST.SIMPL || {};
TEST.SIMPL.GAS = TEST.SIMPL.GAS || {};
TEST.SIMPL.GAS.GSS = 
{
	// ---------------------------------------------------------------
	// member


	// ---------------------------------------------------------------
	// public

	Build : 
		function ()
		{
		},


	Check_OK : 
		function ( aaConfigurations )
		{
			var aaArguments = {};
			aaArguments["sheet.id"] = aaConfigurations["test-gas-gss.sheet.id"];
			aaArguments["sheet.sheet-name"] = aaConfigurations["test-gas-gss.sheet.sheet-name"];
			var eSheet = SIMPL.GAS.GSS.GetSheet( aaArguments );

			this.ClearSheet( eSheet );
			this.ConvertColumnIndex_ColumnNumber();
			this.ConvertColumnNumber_ColumnIndex();
			this.ConvertRangeA1_RangeIndex();
			this.ConvertRangeIndex_RangeA1();
			this.FindColumnIndices( eSheet );
			this.FindColumnIndex( eSheet );
			this.FindRowIndices( eSheet );
			this.FindRowIndex( eSheet );
			this.GetRange( eSheet );
			this.GetRangeValues( eSheet );
			this.GetSheet( aaConfigurations );
			this.GetSpreadSheet( aaConfigurations );
			this.SetRangeValues( eSheet );

			this.CONFIGURATION.FindColumnIndices( aaConfigurations );
			this.CONFIGURATION.GetConfigurations( aaConfigurations );
			this.CONFIGURATION.GetConfigurations_KeyValue( aaConfigurations );
			this.CONFIGURATION.SetConfigurations( aaConfigurations );
			this.CONFIGURATION.SetConfigurations_KeyValue( aaConfigurations );
		},


	Check_NG : 
		function ( aaConfigurations )
		{
		},


	// ---------------------------------------------------------------
	// private

	ClearSheet : 
		function ( eSheet )
		{
			var aaDescriptions = 
				{
"function"  : "( eSheet, iRow_Start, iColumn_Start, iRow_End, iColumn_End )",
"subject"   : "シートの範囲クリア",
"arguments" : 
	[
		{ "object" : "シート" },
		{ "integer" : "行番号" },
		{ "integer" : "列番号" },
		{ "integer" : "行番号" },
		{ "integer" : "列番号" }
	],

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var eSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
			var eSheet_Test = eSheet.copyTo( eSpreadSheet );
			eSheet_Test.deleteRow( 1 );

			SIMPL.GAS.GSS.ClearSheet( eSheet_Test, 4, 4, 7, 7 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 3, 3 ).getValue(), 22 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 3, 4 ).getValue(), 23 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 4, 3 ).getValue(), 32 );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 4, 4 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 5, 5 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 5, 6 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 6, 5 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 6, 6 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 7, 7 ).getValue() );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 7, 8 ).getValue(), 67 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 8, 7 ).getValue(), 76 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 8, 8 ).getValue(), 77 );
			SIMPL.GAS.GSS.ClearSheet( eSheet_Test, 5, 1, 6 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 4, 1 ).getValue(), 30 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 4, 2 ).getValue(), 31 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 4, 9 ).getValue(), 38 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 4, 10 ).getValue(), 39 );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 5, 1 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 5, 2 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 5, 9 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 5, 10 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 6, 1 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 6, 2 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 6, 9 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 6, 10 ).getValue() );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 7, 1 ).getValue(), 60 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 7, 2 ).getValue(), 61 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 7, 9 ).getValue(), 68 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 7, 10 ).getValue(), 69 );
			SIMPL.GAS.GSS.ClearSheet( eSheet_Test, 1, 5, null, 6 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 1, 4 ).getValue(), 3 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 2, 4 ).getValue(), 13 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 15, 4 ).getValue(), 143 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 16, 4 ).getValue(), 153 );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 1, 5 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 2, 5 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 15, 5 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 16, 5 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 1, 6 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 2, 6 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 15, 6 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 16, 6 ).getValue() );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 1, 7 ).getValue(), 6 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 2, 7 ).getValue(), 16 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 15, 7 ).getValue(), 146 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 16, 7 ).getValue(), 156 );
			eSpreadSheet.deleteSheet( eSheet_Test );

			eSheet_Test = eSheet.copyTo( eSpreadSheet );
			eSheet_Test.deleteRow( 1 );
			SIMPL.GAS.GSS.ClearSheet( eSheet_Test, 9, 6 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 8, 5 ).getValue(), 74 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 8, 6 ).getValue(), 75 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 9, 5 ).getValue(), 84 );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 9, 6 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 15, 9 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 15, 10 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 16, 9 ).getValue() );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 16, 10 ).getValue() );
			eSpreadSheet.deleteSheet( eSheet_Test );
		},


	ConvertColumnIndex_ColumnNumber : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eString_ColumnNumber )",
"subject"   : "列番号取得(A1形式から)",
"arguments" : [ { "string" : "列記号(A1形式)" } ],
"return"    : { "integer" : "" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.ConvertColumnIndex_ColumnNumber( "A" ), 1 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.ConvertColumnIndex_ColumnNumber( "Z" ), 26 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.ConvertColumnIndex_ColumnNumber( "AA" ), 27 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.ConvertColumnIndex_ColumnNumber( "AB" ), 28 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.ConvertColumnIndex_ColumnNumber( "AAA" ), 703 );
		},


	ConvertColumnNumber_ColumnIndex : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( iColumnIndex )",
"subject"   : "列記号取得(A1形式)",
"arguments" : [ { "integer" : "列番号" } ],
"return"    : { "string" : "列記号(A1形式)" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			SIMPL.TEST.Check.String( SIMPL.GAS.GSS.ConvertColumnNumber_ColumnIndex( 1 ), "A" );
			SIMPL.TEST.Check.String( SIMPL.GAS.GSS.ConvertColumnNumber_ColumnIndex( 26 ), "Z" );
			SIMPL.TEST.Check.String( SIMPL.GAS.GSS.ConvertColumnNumber_ColumnIndex( 27 ), "AA" );
			SIMPL.TEST.Check.String( SIMPL.GAS.GSS.ConvertColumnNumber_ColumnIndex( 28 ), "AB" );
			SIMPL.TEST.Check.String( SIMPL.GAS.GSS.ConvertColumnNumber_ColumnIndex( 703 ), "AAA" );
		},


	ConvertRangeA1_RangeIndex : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( iColumn_Start, iRow_Start, iColumn_End, iRow_End )",
"subject"   : "範囲記号取得(A1形式)",
"arguments" : 
	[
		{ "integer" : "行番号" },
		{ "integer" : "列番号" },
		{ "integer" : "行番号" },
		{ "integer" : "列番号" }
	],
"return"    : { "string" : "範囲記号(A1形式)" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			SIMPL.TEST.Check.String( SIMPL.GAS.GSS.ConvertRangeA1_RangeIndex( 1, 1 ), "A1" );
			SIMPL.TEST.Check.String( SIMPL.GAS.GSS.ConvertRangeA1_RangeIndex( 1, 1, 1, 1 ), "A1" );
			SIMPL.TEST.Check.String( SIMPL.GAS.GSS.ConvertRangeA1_RangeIndex( 1, 1, 2 ), "A1:B1" );
			SIMPL.TEST.Check.String( SIMPL.GAS.GSS.ConvertRangeA1_RangeIndex( 1, 1, null, 2 ), "A1:A2" );
			SIMPL.TEST.Check.String( SIMPL.GAS.GSS.ConvertRangeA1_RangeIndex( 1, 1, 2, 2 ), "A1:B2" );
			SIMPL.TEST.Check.String( SIMPL.GAS.GSS.ConvertRangeA1_RangeIndex( 1, 2, 3, 4 ), "A2:C4" );
			SIMPL.TEST.Check.String( SIMPL.GAS.GSS.ConvertRangeA1_RangeIndex( 5, 6, 7, 8 ), "E6:G8" );
			SIMPL.TEST.Check.String( SIMPL.GAS.GSS.ConvertRangeA1_RangeIndex( 5, 6 ), "E6" );
		},


	ConvertRangeIndex_RangeA1 : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eString_RangeA1 )",
"subject"   : "範囲番号取得(A1形式から)",
"arguments" : [ { "string" : "範囲記号(A1形式)" } ],
"return"    : { "array" : "範囲番号リスト( 開始列, 開始行, 終了列, 終了行 )" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.ConvertRangeIndex_RangeA1( "A1" ), [ 1, 1, 1, 1 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.ConvertRangeIndex_RangeA1( "A1:B2" ), [ 1, 1, 2, 2 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.ConvertRangeIndex_RangeA1( "A2:C4" ), [ 1, 2, 3, 4 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.ConvertRangeIndex_RangeA1( "E6:G8" ), [ 5, 6, 7, 8 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.ConvertRangeIndex_RangeA1( "E6" ), [ 5, 6, 5, 6 ] );
		},


	FindColumnIndices : 
		function ( eSheet )
		{
			var aaDescriptions = 
				{
"function"  : "( eSheet, arStrings_ColumnName, iRow_Index, iColumn_Limit, iColumn_Offset, bFlag_Like, bFlag_NullBreak )",
"subject"   : "列番号検索(列名から)",
"arguments" : 
	[
		{ "object" : "シート" },
		{ "array" : "列名リスト" },
		{ "integer" : "行番号" },
		{ "integer" : "列限界値" },
		{ "integer" : "列判定開始オフセット値" },
		{ "boolean" : "曖昧さ許可フラグ" },
		{ "boolean" : "空文字列発見時終了フラグ" }
	],
"return"    : { "array" : "列番号リスト" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var eSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
			var eSheet_Test = eSheet.copyTo( eSpreadSheet );
			eSheet_Test.deleteRows( 1, 20 );

			var arStrings_ColumnName = [];
			arStrings_ColumnName.push( "key-0" );
			arStrings_ColumnName.push( "key-1" );
			arStrings_ColumnName.push( "key-2" );
			arStrings_ColumnName.push( "key-3" );
			arStrings_ColumnName.push( "key-00" );
			arStrings_ColumnName.push( "key-01" );
			arStrings_ColumnName.push( "key-01.a" );
			arStrings_ColumnName.push( "key-01.b" );
			arStrings_ColumnName.push( "key-01.c" );
			arStrings_ColumnName.push( "key-02" );
			arStrings_ColumnName.push( "key-02.a" );
			arStrings_ColumnName.push( "key-02.b" );
			arStrings_ColumnName.push( "key-02.c" );
			arStrings_ColumnName.push( "key-03" );
			arStrings_ColumnName.push( "sentinel" );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindColumnIndices( eSheet_Test, arStrings_ColumnName ), [ 0, 1, 2, 3, 4, 7, 5, 6, 0, 0, 0, 0, 10, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindColumnIndices( eSheet_Test, arStrings_ColumnName, 1 ), [ 0, 1, 2, 3, 4, 7, 5, 6, 0, 0, 0, 0, 10, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindColumnIndices( eSheet_Test, arStrings_ColumnName, 2 ), [ 0, 4, 3, 2, 1, 7, 5, 6, 0, 0, 0, 0, 10, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindColumnIndices( eSheet_Test, arStrings_ColumnName, null, 5 ), [ 0, 1, 2, 3, 4, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindColumnIndices( eSheet_Test, arStrings_ColumnName, null, null, 3 ), [ 0, 0, 0, 0, 4, 7, 5, 6, 0, 0, 0, 0, 10, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindColumnIndices( eSheet_Test, arStrings_ColumnName, null, null, null, true ), [ 4, 1, 2, 3, 4, 5, 5, 6, 0, 8, 8, 9, 10, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindColumnIndices( eSheet_Test, arStrings_ColumnName, null, 100, null, false, false ), [ 0, 1, 2, 3, 4, 7, 5, 6, 0, 0, 0, 0, 10, 0, 20 ] );
			eSpreadSheet.deleteSheet( eSheet_Test );
		},


	FindColumnIndex : 
		function ( eSheet )
		{
			var aaDescriptions = 
				{
"function"  : "( eSheet, eString_ColumnName, iRow_Index, iColumn_Limit, iColumn_Offset, bFlag_Like, bFlag_NullBreak )",
"subject"   : "列番号検索(列名から)",
"arguments" : 
	[
		{ "object" : "シート" },
		{ "string" : "列名" },
		{ "integer" : "行番号" },
		{ "integer" : "列限界値" },
		{ "integer" : "列判定開始オフセット値" },
		{ "boolean" : "曖昧さ許可フラグ" },
		{ "boolean" : "空文字列発見時終了フラグ" }
	],
"return"    : { "integer" : "列番号" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var eSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
			var eSheet_Test = eSheet.copyTo( eSpreadSheet );
			eSheet_Test.deleteRows( 1, 20 );

			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "a" ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "key-1" ), 1 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "key-1", 2 ), 4 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "key-01" ), 7 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "key-01", null, 6 ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "key-01", null, 7 ), 7 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "key-01", null, null, 6 ), 7 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "key-01", null, null, 7 ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "key-01", null, null, null, true ), 5 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "sentinel", null, null, null, false, true ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "sentinel", null, null, null, false, false ), 20 );

			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, undefined ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, null ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, true ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, false ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, 0 ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, 1 ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "" ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, [] ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, {} ) );

			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "undefined" ), 11 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "null" ), 12 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "true" ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "false" ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "0" ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindColumnIndex( eSheet_Test, "1" ) );
			eSpreadSheet.deleteSheet( eSheet_Test );
		},


	FindRowIndices : 
		function ( eSheet )
		{
			var aaDescriptions = 
				{
"function"  : "( eSheet, arStrings_RowName, iColumn_Index, iRow_Limit, iRow_Offset, bFlag_Like, bFlag_NullBreak )",
"subject"   : "行番号検索(行名から)",
"arguments" : 
	[
		{ "object" : "シート" },
		{ "array" : "行名リスト" },
		{ "integer" : "列番号" },
		{ "integer" : "行限界値" },
		{ "integer" : "行判定開始オフセット値" },
		{ "boolean" : "曖昧さ許可フラグ" },
		{ "boolean" : "空文字列発見時終了フラグ" }
	],
"return"    : { "array" : "行番号リスト" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var eSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
			var eSheet_Test = eSheet.copyTo( eSpreadSheet );
			eSheet_Test.deleteRows( 1, 20 );

			var arStrings_RowName = [];
			arStrings_RowName.push( "key-0" );
			arStrings_RowName.push( "key-1" );
			arStrings_RowName.push( "key-2" );
			arStrings_RowName.push( "key-3" );
			arStrings_RowName.push( "key-00" );
			arStrings_RowName.push( "key-01" );
			arStrings_RowName.push( "key-01.a" );
			arStrings_RowName.push( "key-01.b" );
			arStrings_RowName.push( "key-01.c" );
			arStrings_RowName.push( "key-02" );
			arStrings_RowName.push( "key-02.a" );
			arStrings_RowName.push( "key-02.b" );
			arStrings_RowName.push( "key-02.c" );
			arStrings_RowName.push( "key-03" );
			arStrings_RowName.push( "sentinel" );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindRowIndices( eSheet_Test, arStrings_RowName ), [ 0, 1, 3, 4, 2, 7, 5, 6, 0, 0, 0, 0, 10, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindRowIndices( eSheet_Test, arStrings_RowName, 1 ), [ 0, 1, 3, 4, 2, 7, 5, 6, 0, 0, 0, 0, 10, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindRowIndices( eSheet_Test, arStrings_RowName, 2 ), [ 0, 3, 1, 2, 4, 7, 5, 6, 0, 0, 0, 0, 10, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindRowIndices( eSheet_Test, arStrings_RowName, null, 5 ), [ 0, 1, 3, 4, 2, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindRowIndices( eSheet_Test, arStrings_RowName, null, null, 3 ), [ 0, 0, 0, 4, 0, 7, 5, 6, 0, 0, 0, 0, 10, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindRowIndices( eSheet_Test, arStrings_RowName, null, null, null, true ), [ 2, 1, 3, 4, 2, 5, 5, 6, 0, 8, 8, 9, 10, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.FindRowIndices( eSheet_Test, arStrings_RowName, null, 100, null, false, false ), [ 0, 1, 3, 4, 2, 7, 5, 6, 0, 0, 0, 0, 10, 0, 20 ] );
			eSpreadSheet.deleteSheet( eSheet_Test );
		},


	FindRowIndex : 
		function ( eSheet )
		{
			var aaDescriptions = 
				{
"function"  : "( eSheet, eString_RowName, iColumn_Index, iRow_Limit, iRow_Offset, bFlag_Like, bFlag_NullBreak )",
"subject"   : "",
"arguments" : 
	[
		{ "object" : "シート" },
		{ "string" : "行名" },
		{ "integer" : "列番号" },
		{ "integer" : "行限界値" },
		{ "integer" : "行判定開始オフセット値" },
		{ "boolean" : "曖昧さ許可フラグ" },
		{ "boolean" : "空文字列発見時終了フラグ" }
	],
"return"    : { "integer" : "行番号" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var eSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
			var eSheet_Test = eSheet.copyTo( eSpreadSheet );
			eSheet_Test.deleteRows( 1, 20 );

			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "a" ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "key-1" ), 1 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "key-1", 2 ), 3 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "key-01" ), 7 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "key-01", null, 6 ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "key-01", null, 7 ), 7 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "key-01", null, null, 6 ), 7 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "key-01", null, null, 7 ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "key-01", null, null, null, true ), 5 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "sentinel", null, null, null, false, true ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "sentinel", null, null, null, false, false ), 20 );

			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, undefined ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, null ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, true ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, false ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, 0 ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, 1 ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "" ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, [] ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, {} ) );

			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "undefined" ), 11 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "null" ), 12 );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "true" ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "false" ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "0" ) );
			SIMPL.TEST.Check.Integer( SIMPL.GAS.GSS.FindRowIndex( eSheet_Test, "1" ) );
			eSpreadSheet.deleteSheet( eSheet_Test );
		},


	GetRange : 
		function ( eSheet )
		{
			var aaDescriptions = 
				{
"function"  : "function ( eSheet, iRow_Start, iColumn_Start, iRow_End, iColumn_End )",
"subject"   : "セル(範囲)取得",
"arguments" : 
	[
		{ "object" : "シート" },
		{ "integer/assoc" : "行番号/設定オブジェクト" },
		{ "integer" : "列番号" },
		{ "integer" : "行番号" },
		{ "integer" : "列番号" }
	],
"return"    : { "object" : "範囲オブジェクト" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var eSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
			var eSheet_Test = eSheet.copyTo( eSpreadSheet );
			eSheet_Test.deleteRow( 1 );

			var eRange = SIMPL.GAS.GSS.GetRange( eSheet_Test );
			SIMPL.TEST.Check.Integer( eRange.getHeight(), eSheet_Test.getMaxRows() );
			SIMPL.TEST.Check.Integer( eRange.getWidth(), eSheet_Test.getMaxColumns() );
			SIMPL.TEST.Check.Integer( eRange.getRow(), 1 );
			SIMPL.TEST.Check.Integer( eRange.getColumn(), 1 );
			SIMPL.TEST.Check.Integer( eRange.getLastRow(), eSheet_Test.getMaxRows() );
			SIMPL.TEST.Check.Integer( eRange.getLastColumn(), eSheet_Test.getMaxColumns() );
			eRange = SIMPL.GAS.GSS.GetRange( eSheet_Test, 2, 3, 4, 5 );
			SIMPL.TEST.Check.Integer( eRange.getHeight(), 3 );
			SIMPL.TEST.Check.Integer( eRange.getWidth(), 3 );
			SIMPL.TEST.Check.Integer( eRange.getRow(), 2 );
			SIMPL.TEST.Check.Integer( eRange.getColumn(), 3 );
			SIMPL.TEST.Check.Integer( eRange.getLastRow(), 4 );
			SIMPL.TEST.Check.Integer( eRange.getLastColumn(), 5 );
			eRange = SIMPL.GAS.GSS.GetRange( eSheet_Test, { "row.start" : 2, "column.start" : 3, "row.end" : 4, "column.end" : 5 } );
			SIMPL.TEST.Check.Integer( eRange.getHeight(), 3 );
			SIMPL.TEST.Check.Integer( eRange.getWidth(), 3 );
			SIMPL.TEST.Check.Integer( eRange.getRow(), 2 );
			SIMPL.TEST.Check.Integer( eRange.getColumn(), 3 );
			SIMPL.TEST.Check.Integer( eRange.getLastRow(), 4 );
			SIMPL.TEST.Check.Integer( eRange.getLastColumn(), 5 );
			eSpreadSheet.deleteSheet( eSheet_Test );
		},


	GetRangeValues : 
		function ( eSheet )
		{
			var aaDescriptions = 
				{
"function"  : "function ( eSheet, iRow_Start, iColumn_Start, iRow_End, iColumn_End )",
"subject"   : "値(範囲)取得",
"arguments" : 
	[
		{ "object" : "シート" },
		{ "integer/assoc" : "行番号/設定オブジェクト" },
		{ "integer" : "列番号" },
		{ "integer" : "行番号" },
		{ "integer" : "列番号" }
	],
"return"    : { "array" : "値配列" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var eSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
			var eSheet_Test = eSheet.copyTo( eSpreadSheet );
			eSheet_Test.deleteRow( 1 );

			var arRangeValues = SIMPL.GAS.GSS.GetRangeValues( eSheet_Test );
			SIMPL.TEST.Check.Integer( arRangeValues[0][0] );
			arRangeValues = SIMPL.GAS.GSS.GetRangeValues( eSheet_Test, 2, 3, 4, 5 );
			SIMPL.TEST.Check.Integer( arRangeValues.length, 3 );
			SIMPL.TEST.Check.Integer( arRangeValues[0].length, 3 );
			SIMPL.TEST.Check.Integer( arRangeValues[0][0], 12 );
			SIMPL.TEST.Check.Integer( arRangeValues[2][2], 34 );
			arRangeValues = SIMPL.GAS.GSS.GetRangeValues( eSheet_Test, { "row.start" : 1, "column.start" : 1, "row.end" : 18, "column.end" : 15, "trim.right" : false, "trim.bottom" : false } );
			SIMPL.TEST.Check.Integer( arRangeValues.length, 18 );
			SIMPL.TEST.Check.Integer( arRangeValues[0].length, 15 );
			arRangeValues = SIMPL.GAS.GSS.GetRangeValues( eSheet_Test, { "row.start" : 1, "column.start" : 1, "row.end" : 18, "column.end" : 15, "trim.right" : true, "trim.bottom" : true } );
			SIMPL.TEST.Check.Integer( arRangeValues.length, 16 );
			SIMPL.TEST.Check.Integer( arRangeValues[0].length, 10 );
			arRangeValues = SIMPL.GAS.GSS.GetRangeValues( eSheet_Test, { "row.start" : 1, "column.start" : 1, "row.end" : 18, "column.end" : 1, "dimension.reduction" : true } );
			SIMPL.TEST.Check.Boolean( SIMPL.IsArray( arRangeValues[0] ), false );
			SIMPL.TEST.Check.Integer( arRangeValues[0] );
			arRangeValues = SIMPL.GAS.GSS.GetRangeValues( eSheet_Test, { "row.start" : 1, "column.start" : 1, "row.end" : 18, "column.end" : 1, "dimension.reduction" : false } );
			SIMPL.TEST.Check.Boolean( SIMPL.IsArray( arRangeValues[0] ) );
			SIMPL.TEST.Check.Integer( arRangeValues[0][0] );
			eSpreadSheet.deleteSheet( eSheet_Test );
		},


	GetSheet : 
		function ( aaConfigurations )
		{
			var aaDescriptions = 
				{
"function"  : "( aaArguments, eString_SheetName__Default )",
"subject"   : "シート取得",
"arguments" : 
	[
		{ "assoc" : "引数オブジェクト" },
		{ "string" : "デフォルトシート名" }
	],
"return"    : { "object" : "シートオブジェクト" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var aaArguments = {};
			var iOrder_Sheet = 0;
			var eString_SheetName = aaConfigurations["this.sheet.sheet-name"];
			var eSheet = SIMPL.GAS.GSS.GetSheet();
			SIMPL.TEST.Check.String( eSheet.getName(), eString_SheetName );
			eSheet = SIMPL.GAS.GSS.GetSheet( aaArguments );
			SIMPL.TEST.Check.String( eSheet.getName(), eString_SheetName );
			eSheet = SIMPL.GAS.GSS.GetSheet( aaArguments, iOrder_Sheet );
			SIMPL.TEST.Check.String( eSheet.getName(), eString_SheetName );
			eSheet = SIMPL.GAS.GSS.GetSheet( aaArguments, eString_SheetName );
			SIMPL.TEST.Check.String( eSheet.getName(), eString_SheetName );
			iOrder_Sheet = 1;
			eString_SheetName = aaConfigurations["this.sheet.sheet-names"][iOrder_Sheet];
			eSheet = SIMPL.GAS.GSS.GetSheet( aaArguments, iOrder_Sheet );
			SIMPL.TEST.Check.String( eSheet.getName(), eString_SheetName );
			eSheet = SIMPL.GAS.GSS.GetSheet( aaArguments, eString_SheetName );
			SIMPL.TEST.Check.String( eSheet.getName(), eString_SheetName );
		},


	GetSpreadSheet : 
		function ( aaConfigurations )
		{
			var aaDescriptions = 
				{
"function"  : "( aaArguments )",
"subject"   : "スプレッドシート取得",
"arguments" : [ { "assoc" : "引数オブジェクト" } ],
"return"    : { "object" : "スプレッドシートオブジェクト" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var aaArguments = {};
			var eString_SpreadSheetID = aaConfigurations["this.sheet.id"];
			var eString_SpreadSheetName = aaConfigurations["this.sheet.name"];
			var eSpreadSheet = SIMPL.GAS.GSS.GetSpreadSheet();
			SIMPL.TEST.Check.String( eSpreadSheet.getName(), eString_SpreadSheetName );
			eSpreadSheet = SIMPL.GAS.GSS.GetSpreadSheet( aaArguments );
			SIMPL.TEST.Check.String( eSpreadSheet.getName(), eString_SpreadSheetName );
			eSpreadSheet = SIMPL.GAS.GSS.GetSpreadSheet( eString_SpreadSheetID );
			SIMPL.TEST.Check.String( eSpreadSheet.getName(), eString_SpreadSheetName );
			eString_SpreadSheetID = aaConfigurations["test-gas-gss.sheet.id"];
			eString_SpreadSheetName = aaConfigurations["test-gas-gss.sheet.name"];
			eSpreadSheet = SIMPL.GAS.GSS.GetSpreadSheet( eString_SpreadSheetID );
			SIMPL.TEST.Check.String( eSpreadSheet.getName(), eString_SpreadSheetName );
			aaArguments = {};
			aaArguments["sheet.id"] = aaConfigurations["test-gas-gss.sheet.id"];
			eString_SpreadSheetName = aaConfigurations["test-gas-gss.sheet.name"];
			eSpreadSheet = SIMPL.GAS.GSS.GetSpreadSheet( aaArguments );
			SIMPL.TEST.Check.String( eSpreadSheet.getName(), eString_SpreadSheetName );
		},


	SetRangeValues : 
		function ( eSheet )
		{
			var aaDescriptions = 
				{
"function"  : "function ( eSheet, arRangeValues, iRow_Start, iColumn_Start )",
"subject"   : "値(範囲)設定",
"arguments" : 
	[
		{ "object" : "シート" },
		{ "array" : "値配列" },
		{ "integer" : "行番号" },
		{ "integer" : "列番号" }
	],

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var eSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
			var eSheet_Test = eSheet.copyTo( eSpreadSheet );
			eSheet_Test.deleteRow( 1 );

			var arRangeValues = [ [ 2, 3 ], [ 4, 5 ] ];
			SIMPL.GAS.GSS.SetRangeValues( eSheet_Test, "test" );
			SIMPL.TEST.Check.String( eSheet_Test.getRange( 1, 1 ).getValue(), "test" );
			SIMPL.GAS.GSS.SetRangeValues( eSheet_Test, arRangeValues );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 1, 1 ).getValue(), 2 );
			SIMPL.TEST.Check.Integer( eSheet_Test.getRange( 2, 2 ).getValue(), 5 );
			eSpreadSheet.deleteSheet( eSheet_Test );
		},


	zzz : 
		function ()
		{
		}


};


TEST.SIMPL.GAS.GSS.CONFIGURATION = 
{
	// ---------------------------------------------------------------
	// public


	// ---------------------------------------------------------------
	// private

	FindColumnIndices : 
		function ( aaConfigurations )
		{
			var aaDescriptions = 
				{
"function"  : "( eSheet, arStrings_ColumnName, iRow_Index, iColumn_Limit, iColumn_Offset, bFlag_Like, bFlag_NullBreak )",
"subject"   : "設定用列番号検索(列名から)",
"arguments" : 
	[
		{ "object" : "シート" },
		{ "array" : "列名リスト" },
		{ "integer" : "行番号" },
		{ "integer" : "列限界値" },
		{ "integer" : "列判定開始オフセット値" },
		{ "boolean" : "曖昧さ許可フラグ" },
		{ "boolean" : "空文字列発見時終了フラグ" }
	],
"return"    : { "array" : "列番号リスト" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var aaArguments = {};
			aaArguments["sheet.id"] = aaConfigurations["test-gas-gss-configuration.sheet.id"];
			aaArguments["sheet.sheet-name"] = aaConfigurations["test-gas-gss-configuration.sheet.sheet-name"];
			var eSheet_Test = SIMPL.GAS.GSS.GetSheet( aaArguments );

			var arStrings_ColumnName = [];
			arStrings_ColumnName.push( "key-a" );
			arStrings_ColumnName.push( "value-a" );
			arStrings_ColumnName.push( "remarks-a" );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test ), [ 0, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, arStrings_ColumnName ), [ 0, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, arStrings_ColumnName, 2 ), [ 4, 5, 6 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, arStrings_ColumnName, 3 ), [ 1, 2, 3 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, null, 1 ), [ 0, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, null, 2 ), [ 1, 2, 3 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, null, 3 ), [ 4, 5, 6 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, null, 4 ), [ 0, 1, 2 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, null, 5 ), [ 1, 6, 7 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, null, 6 ), [ 1, 0, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, null, 5, 6 ), [ 1, 6, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, null, 5, null, 1 ), [ 0, 6, 7 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, null, 3, null, null, true ), [ 1, 2, 3 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, null, 3, null, null, false ), [ 4, 5, 6 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, null, 6, null, null, false, false ), [ 1, 6, 7 ] );
			SIMPL.TEST.Check.Array( SIMPL.GAS.GSS.CONFIGURATION.FindColumnIndices( eSheet_Test, null, 6, null, null, false, true ), [ 1, 0, 0 ] );
		},


	GetConfigurations : 
		function ( aaConfigurations )
		{
			var aaDescriptions = 
				{
"function"  : "( aaArguments )",
"subject"   : "設定取得",
"arguments" : [ { "assoc" : "設定オプション" } ],
"return"    : { "assoc" : "設定オブジェクト" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var aaArguments = {};
			aaArguments["sheet.id"] = aaConfigurations["test-gas-gss-configuration.sheet.id"];
			aaArguments["sheet.sheet-name"] = aaConfigurations["test-gas-gss-configuration.sheet.sheet-name"];
			var eSheet = SIMPL.GAS.GSS.GetSheet( aaArguments );

			var eSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
			var eSheet_Test = eSheet.copyTo( eSpreadSheet );
			var eString_SheetName = "tmp";
			eSheet_Test.deleteRows( 1, 10 );
			eSheet_Test.setName( eString_SheetName );

			aaArguments = {};
			aaArguments["sheet.sheet-name"] = eString_SheetName;
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations( aaArguments ), { "key" : [ "value", "sub-key-00" ], "configuration" : [ 1, "", "sub-key" ] } );
			aaArguments = {};
			aaArguments["sheet.sheet-name"] = eString_SheetName;
			aaArguments["offset.row"] = 1;
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations( aaArguments ), { "configuration" : [ 1, "", "sub-key" ], "key" : "sub-key-00" } );
			aaArguments = {};
			aaArguments["sheet.sheet-name"] = eString_SheetName;
			aaArguments["null_break"] = true;
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations( aaArguments ), { "key" : "value", "configuration" : 1 } );
			aaArguments = {};
			aaArguments["sheet.sheet-name"] = eString_SheetName;
			aaArguments["offset.row"] = 6;
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations( aaArguments ), { "configuration" : [ "", "sub-key" ] } );
			aaArguments = {};
			aaArguments["sheet.sheet-name"] = eString_SheetName;
			aaArguments["head.row"] = 6;
			aaArguments["offset.row"] = 1;
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations( aaArguments ), { "configuration" : 2, "configuration.sub-key" : "a" } );
			aaArguments = {};
			aaArguments["sheet.sheet-name"] = eString_SheetName;
			aaArguments["head.row"] = 12;
			aaArguments["offset.column"] = 2;
			aaArguments["offset.row"] = 1;
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations( aaArguments ), { "configuration" : 3 } );
			eSpreadSheet.deleteSheet( eSheet_Test );
		},


	GetConfigurations_KeyValue : 
		function ( aaConfigurations )
		{
			var aaDescriptions = 
				{
"function"  : "( eSheet, iColumn_Key, iColumn_Value, iRow_Start, iRow_Limit, bFlag_NullBreak )",
"subject"   : "設定取得(key-value形式)",
"arguments" : 
	[
		{ "object" : "シート" },
		{ "integer" : "列番号" },
		{ "integer" : "列番号" },
		{ "integer" : "開始行" },
		{ "integer" : "行限界値" },
		{ "boolean" : "空文字列発見時終了フラグ" }
	],
"return"    : { "assoc" : "設定オブジェクト" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var aaArguments = {};
			aaArguments["sheet.id"] = aaConfigurations["test-gas-gss-configuration.sheet.id"];
			aaArguments["sheet.sheet-name"] = aaConfigurations["test-gas-gss-configuration.sheet.sheet-name"];
			var eSheet_Test = SIMPL.GAS.GSS.GetSheet( aaArguments );

			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations_KeyValue( eSheet_Test, 1, 2, 2 ), { "key" : [ "value", "sub-key-00", "sub-key-00", "value", "sub-key-00" ], "key-a" : "value-a", "value" : "remarks", "configuration" : [ 1, "", "sub-key" ] } );
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations_KeyValue( eSheet_Test, 1, 2, 3 ), { "key-a" : "value-a", "value" : "remarks", "key" : [ "sub-key-00", "sub-key-00", "value", "sub-key-00" ], "configuration" : [ 1, "", "sub-key" ] } );
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations_KeyValue( eSheet_Test, 1, 2, 2, 5 ), { "key" : [ "value", "sub-key-00" ], "key-a" : "value-a", "value" : "remarks" } );
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations_KeyValue( eSheet_Test, 1, 2, 2, 6 ), { "key" : [ "value", "sub-key-00", "sub-key-00" ], "key-a" : "value-a", "value" : "remarks" } );
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations_KeyValue( eSheet_Test, 1, 2, 2, 11 ), { "key" : [ "value", "sub-key-00", "sub-key-00", "value" ], "key-a" : "value-a", "value" : "remarks" } );
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations_KeyValue( eSheet_Test, 1, 2, 2, 12 ), { "key" : [ "value", "sub-key-00", "sub-key-00", "value" ], "key-a" : "value-a", "value" : "remarks", "configuration" : 1 } );
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations_KeyValue( eSheet_Test, 1, 2, 2, null, true ), { "key" : [ "value", "sub-key-00", "sub-key-00" ], "key-a" : "value-a", "value" : "remarks" } );
		},


	SetConfigurations : 
		function ( aaConfigurations )
		{
			var aaDescriptions = 
				{
"function"  : "( aaConfigurations, aaArguments )",
"subject"   : "設定更新",
"arguments" : 
	[
		{ "assoc" : "設定オブジェクト" },
		{ "assoc" : "設定オプション" }
	],

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var aaArguments = {};
			aaArguments["sheet.id"] = aaConfigurations["test-gas-gss-configuration.sheet.id"];
			aaArguments["sheet.sheet-name"] = aaConfigurations["test-gas-gss-configuration.sheet.sheet-name"];
			var eSheet = SIMPL.GAS.GSS.GetSheet( aaArguments );

			var eSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
			var eSheet_Test = eSheet.copyTo( eSpreadSheet );
			var eString_SheetName = "tmp";
			eSheet_Test.deleteRows( 1, 1 );
			eSheet_Test.setName( eString_SheetName );

			aaArguments = {};
			aaArguments["sheet.id"] = aaConfigurations["test-gas-gss-configuration.sheet.id"];
			aaArguments["sheet.sheet-name"] = aaConfigurations["test-gas-gss-configuration.sheet.sheet-name"];
			aaArguments["head.row"] = 16;
			aaArguments["null_break"] = true;
			var aaResults_OK = SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations( aaArguments );

			aaArguments = {};
			aaArguments["sheet.sheet-name"] = eString_SheetName;
			var aaConfigurations_Test = { "key" : "value", "key-00" : [ 0, 1, "a", "b" ] };
			SIMPL.GAS.GSS.CONFIGURATION.SetConfigurations( aaConfigurations_Test, aaArguments );
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations( aaArguments ), aaConfigurations_Test );
			aaArguments = {};
			aaArguments["sheet.sheet-name"] = eString_SheetName;
			aaArguments["column-order.key"] = "A";
			aaArguments["column-order.value"] = "F";
			eSheet_Test.clear();
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations( aaArguments ), {} );
			SIMPL.GAS.GSS.CONFIGURATION.SetConfigurations( aaResults_OK, aaArguments );
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations( aaArguments ), aaResults_OK );
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations_KeyValue( eSheet_Test, 1, 2, 1 ), { "key" : "sub-key-00", "configuration" : [ "", "sub-key" ] } );
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations_KeyValue( eSheet_Test, 3, 4, 1 ), { "sub-key-01" : "sub-key-02" } );
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations_KeyValue( eSheet_Test, 6, 7, 1 ), { "value" : "", "2" : "", "a" : "" } );
			eSpreadSheet.deleteSheet( eSheet_Test );
		},


	SetConfigurations_KeyValue : 
		function ( aaConfigurations )
		{
			var aaDescriptions = 
				{
"function"  : "( aaConfigurations, eSheet, iColumn_Key, iColumn_Value, iRow_Start )",
"subject"   : "設定更新(key-value形式)",
"arguments" : 
	[
		{ "assoc" : "設定オブジェクト" },
		{ "object" : "シート" },
		{ "integer" : "列番号" },
		{ "integer" : "列番号" },
		{ "integer" : "開始行" }
	],

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var aaArguments = {};
			aaArguments["sheet.id"] = aaConfigurations["test-gas-gss-configuration.sheet.id"];
			aaArguments["sheet.sheet-name"] = aaConfigurations["test-gas-gss-configuration.sheet.sheet-name"];
			var eSheet = SIMPL.GAS.GSS.GetSheet( aaArguments );

			var eSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
			var eSheet_Test = eSheet.copyTo( eSpreadSheet );
			var eString_SheetName = "tmp";
			eSheet_Test.deleteRows( 1, 1 );
			eSheet_Test.setName( eString_SheetName );

			var aaConfigurations_OK = {};
			aaConfigurations_OK["key.00"] = "value.00";
			aaConfigurations_OK["key.01"] = [ "values", 2, 3 ];
			SIMPL.GAS.GSS.CONFIGURATION.SetConfigurations_KeyValue( aaConfigurations_OK, eSheet_Test, 1, 2, 1 );
			SIMPL.TEST.Check.AssociativeArray( SIMPL.GAS.GSS.CONFIGURATION.GetConfigurations_KeyValue( eSheet_Test, 1, 2, 1 ), aaConfigurations_OK );
			eSpreadSheet.deleteSheet( eSheet_Test );
		},


	zzz : 
		function ()
		{
		}


};



// ===================================================================
// public
// -------------------------------------------------------------------



// ===================================================================
// local
// -------------------------------------------------------------------



