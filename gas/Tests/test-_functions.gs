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
TEST.SIMPL._FUNCTIONS = 
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
		function ()
		{
			this.BuildArray_Unique();
			this.BuildArray_Unique__SmallArray();
			this.BuildAssociativeArray_Indexed();
			this.BuildAssociativeArray_Inverse();
			this.CheckEquals_Array();
			this.CheckEquals_AssociativeArray();
			this.CheckEquals_DateTime();
			this.ExpandObjects();
			this.GetValue();
			this.IsArray();
			this.IsAssociativeArray();
			this.IsDateTime();
			this.IsValue();
			this.Padding();
			this.ReplaceLabels();
		},


	Check_NG : 
		function ()
		{
		},


	// ---------------------------------------------------------------
	// private

	BuildArray_Unique : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( arStrings )",
"subject"   : "配列のユニーク化",
"arguments" : [ { "array" : "" } ],
"return"    : { "array" : "" },

"summary"   : 
	[
		"配列の値をユニークにする",
		""
	],
"sample"   : 
	[
		"var arValues = SIMPL._FUNCTIONS.BuildArray_Unique( [ 1, 1, 3, '1', 3, 2, 2, 2 ] );",
		"// arValues = [ 1, 3, '1', 2 ]",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var arArguments = [];
			arArguments.push( true );
			arArguments.push( false );
			arArguments.push( 0 );
			arArguments.push( 1 );
			arArguments.push( "" );
			arArguments.push( "0" );
			arArguments.push( "1" );
			arArguments.push( "a" );
			arArguments.push( "b" );
			arArguments.push( [] );
			arArguments.push( [ 0 ] );
			arArguments.push( [ 1 ] );
			arArguments.push( {} );
			arArguments.push( { 0 : 1 } );
			arArguments.push( { "a" : "b" } );
			var arArguments_Base = arArguments;

			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.BuildArray_Unique( [ 1, 1, 2, 1, 3, 2, 2, 2 ] ), [ 1, 2, 3 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.BuildArray_Unique( [ 1, 1, 3, '1', 3, 2, 2, 2 ] ), [ 1, 3, '1', 2 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.BuildArray_Unique( arArguments_Base ), arArguments_Base );
		},


	BuildArray_Unique__SmallArray : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( arStrings )",
"subject"   : "配列のユニーク化",
"arguments" : [ { "array" : "" } ],
"return"    : { "array" : "" },

"summary"   : 
	[
		"配列の値をユニークにする(サイズの小さい配列用)",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var arArguments = [];
			arArguments.push( true );
			arArguments.push( false );
			arArguments.push( 0 );
			arArguments.push( 1 );
			arArguments.push( "" );
			arArguments.push( "0" );
			arArguments.push( "1" );
			arArguments.push( "a" );
			arArguments.push( "b" );
			arArguments.push( [] );
			arArguments.push( [ 0 ] );
			arArguments.push( [ 1 ] );
			arArguments.push( {} );
			arArguments.push( { 0 : 1 } );
			arArguments.push( { "a" : "b" } );
			var arArguments_Base = arArguments;

			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.BuildArray_Unique__SmallArray( [ 1, 1, 2, 1, 3, 2, 2, 2 ] ), [ 1, 2, 3 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.BuildArray_Unique__SmallArray( [ 1, 1, 3, '1', 3, 2, 2, 2 ] ), [ 1, 3, '1', 2 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.BuildArray_Unique__SmallArray( arArguments_Base ), arArguments_Base );
		},


	BuildAssociativeArray_Indexed : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( arStrings, iOffset )",
"subject"   : "配列の連想配列化",
"arguments" : 
	[
		{ "array" : "" },
		{ "integer" : "順序番号のオフセット値" }
	],
"return"    : { "assoc" : "" },

"summary"   : 
	[
		"配列の値を連想配列のキーにして順序番号を付与する",
		""
	],
"check"     : 
	[
		"",
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			SIMPL.TEST.Check.AssociativeArray( SIMPL._FUNCTIONS.BuildAssociativeArray_Indexed( [ "a", "b", "c" ] ), { "a" : 0, "b" : 1, "c" : 2 } );
			SIMPL.TEST.Check.AssociativeArray( SIMPL._FUNCTIONS.BuildAssociativeArray_Indexed( [ "a", "b", "c" ], 2 ), { "a" : 2, "b" : 3, "c" : 4 } );
		},


	BuildAssociativeArray_Inverse : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( aaStrings )",
"subject"   : "逆連想配列の生成",
"arguments" : [ { "assoc" : "" } ],
"return"    : { "assoc" : "" },

"summary"   : 
	[
		"連想配列のキーと値を入れ替える",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			SIMPL.TEST.Check.AssociativeArray( SIMPL._FUNCTIONS.BuildAssociativeArray_Inverse( { "a" : "b", "c" : "d", "e" : "f" } ), { "b" : "a", "d" : "c", "f" : "e" } );
		},


	CheckEquals_Array : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject_A, eObject_B )",
"subject"   : "配列の等値判定",
"arguments" : 
	[
		{ "object" : "判定対象オブジェクト" },
		{ "object" : "判定対象オブジェクト" }
	],
"return"    : { "boolean" : "" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"SIMPL.TEST.Check.Arrayのテストにてテスト済み",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );
		},


	CheckEquals_AssociativeArray : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject_A, eObject_B )",
"subject"   : "連想配列の等値判定",
"arguments" : 
	[
		{ "object" : "判定対象オブジェクト" },
		{ "object" : "判定対象オブジェクト" }
	],
"return"    : { "boolean" : "" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"SIMPL.TEST.Check.AssociativeArrayのテストにてテスト済み",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );
		},


	CheckEquals_DateTime : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject_A, eObject_B )",
"subject"   : "日時の等値判定",
"arguments" : 
	[
		{ "object" : "判定対象オブジェクト" },
		{ "object" : "判定対象オブジェクト" }
	],
"return"    : { "boolean" : "" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"SIMPL.TEST.Check.DateTimeのテストにてテスト済み",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );
		},


	ExpandObjects : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject, aaOptions, iLimit )",
"subject"   : "オブジェクトの再帰展開",
"arguments" : 
	[
		{ "object" : "展開対象オブジェクト" },
		{ "assoc/string/boolean" : "オプション設定/オプション設定(JSON文字列)/タイプ情報付与フラグ" },
		{ "integer" : "再帰深度限界値" }
	],
"return"    : { "string" : "" },

"summary"   : 
	[
		"オブジェクトを再帰的に展開して文字列として取得する",
		"オプション設定として以下を設定可能",
		"Add.Type - boolean : タイプ情報付与フラグ",
		"Limit.Recursive - integer : 再帰深度限界値",
		"※マイナス値は無指定扱いとしてデフォルト値(5)となる",
		""
	],
"sample"   : 
	[
		'var eString;',
		'eString = SIMPL._FUNCTIONS.ExpandObjects( {} );',
		'// eString = "{  }"',
		'eString = SIMPL._FUNCTIONS.ExpandObjects( {}, true );',
		'// eString = "object( {  } )"',
		'eString = SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ] );',
		'// eString = "[ 1, [ 2, [ 3, [ 4, [ < LIMIT >, < LIMIT >, < LIMIT > ], 8 ], 9 ], 10 ], 11 ]"',
		'eString = SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], false, 2 );',
		'// eString = "[ 1, [ < LIMIT >, < LIMIT >, < LIMIT > ], 11 ]"',
		'eString = SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], { "Limit.Recursive", -1 } );',
		'// eString = "[ 1, [ 2, [ 3, [ 4, [ < LIMIT >, < LIMIT >, < LIMIT > ], 8 ], 9 ], 10 ], 11 ]"',
		'eString = SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], "{ \"Limit.Recursive\", -1 }" );',
		'// eString = "[ 1, [ 2, [ 3, [ 4, [ < LIMIT >, < LIMIT >, < LIMIT > ], 8 ], 9 ], 10 ], 11 ]"',
		''
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( undefined ), "undefined" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( null ), "null" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( true ), true );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( false ), false );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( 0 ), 0 );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( 1 ), 1 );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( 1.1 ), 1.1 );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( "" ), "\"\"" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( "0" ), "\"0\"" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( "1" ), "\"1\"" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( "a" ), "\"a\"" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [] ), "[  ]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1 ] ), "[ 1 ]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( {} ), "{  }" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( { "a" : 1 } ), "{ \"a\" : 1 }" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( { "a" : [ 1, "b", [], undefined, null, { "c" : "d" }, true ] } ), "{ \"a\" : [ 1, \"b\", [  ], undefined, null, { \"c\" : \"d\" }, true ] }" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( new Object() ), "{  }" );

			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( undefined, true ), "undefined( undefined )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( null, true ), "object( null )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( true, true ), "boolean( true )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( false, true ), "boolean( false )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( 0, true ), "number( 0 )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( 1, true ), "number( 1 )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( 1.1, true ), "number( 1.1 )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( "", true ), "string( \"\" )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( "a", true ), "string( \"a\" )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [], true ), "Array( [  ] )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( {}, true ), "object( {  } )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( { "a" : [ undefined, null, true, 0, "1", [], { "b" : "c", "d" : { "e" : [ "f", [ "g", { "h" : { "i" : { "j" : [ "k", [ "l", [ "m", [ "n" ], "o" ] ] ] }, "p" : "q" } }, "r" ] ] } }, [ "s", [ [ "t", [ { "u" : 1 } ] ], "v" ], "w" ], "x", "y", "z" ] }, true ), "object( { \"a\" : Array( [ undefined( undefined ), object( null ), boolean( true ), number( 0 ), string( \"1\" ), Array( [  ] ), object( { \"b\" : string( \"c\" ), \"d\" : object( { \"e\" : Array( [ < LIMIT >, < LIMIT > ] ) } ) } ), Array( [ string( \"s\" ), Array( [ Array( [ < LIMIT >, < LIMIT > ] ), string( \"v\" ) ] ), string( \"w\" ) ] ), string( \"x\" ), string( \"y\" ), string( \"z\" ) ] ) } )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( new Object(), true ), "object( {  } )" );

			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ] ), "[ 1, [ 2, [ 3, [ 4, [ < LIMIT >, < LIMIT >, < LIMIT > ], 8 ], 9 ], 10 ], 11 ]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], true ), "Array( [ number( 1 ), Array( [ number( 2 ), Array( [ number( 3 ), Array( [ number( 4 ), Array( [ < LIMIT >, < LIMIT >, < LIMIT > ] ), number( 8 ) ] ), number( 9 ) ] ), number( 10 ) ] ), number( 11 ) ] )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], { "Add.Type" : true, "Limit.Recursive" : 2 } ), "Array( [ number( 1 ), Array( [ < LIMIT >, < LIMIT >, < LIMIT > ] ), number( 11 ) ] )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], "{ \"Add.Type\" : true, \"Limit.Recursive\" : 2 }" ), "Array( [ number( 1 ), Array( [ < LIMIT >, < LIMIT >, < LIMIT > ] ), number( 11 ) ] )" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], false ), "[ 1, [ 2, [ 3, [ 4, [ < LIMIT >, < LIMIT >, < LIMIT > ], 8 ], 9 ], 10 ], 11 ]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], false, -1 ), "[ 1, [ 2, [ 3, [ 4, [ < LIMIT >, < LIMIT >, < LIMIT > ], 8 ], 9 ], 10 ], 11 ]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], false, 0 ), "< LIMIT >" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], false, 1 ), "[ < LIMIT >, < LIMIT >, < LIMIT > ]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], false, 2 ), "[ 1, [ < LIMIT >, < LIMIT >, < LIMIT > ], 11 ]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], false, 3 ), "[ 1, [ 2, [ < LIMIT >, < LIMIT >, < LIMIT > ], 10 ], 11 ]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], false, 4 ), "[ 1, [ 2, [ 3, [ < LIMIT >, < LIMIT >, < LIMIT > ], 9 ], 10 ], 11 ]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], false, 5 ), "[ 1, [ 2, [ 3, [ 4, [ < LIMIT >, < LIMIT >, < LIMIT > ], 8 ], 9 ], 10 ], 11 ]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], false, 6 ), "[ 1, [ 2, [ 3, [ 4, [ 5, [ < LIMIT > ], 7 ], 8 ], 9 ], 10 ], 11 ]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], false, 7 ), "[ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( [ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ], false, 8 ), "[ 1, [ 2, [ 3, [ 4, [ 5, [ 6 ], 7 ], 8 ], 9 ], 10 ], 11 ]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ExpandObjects( { "a" : [ undefined, null, true, 0, "1", [], { "b" : "c", "d" : { "e" : [ "f", [ "g", { "h" : { "i" : { "j" : [ "k", [ "l", [ "m", [ "n" ], "o" ] ] ] }, "p" : "q" } }, "r" ] ] } }, [ "s", [ [ "t", [ { "u" : 1 } ] ], "v" ], "w" ], "x", "y", "z" ] }, true, 10 ), "object( { \"a\" : Array( [ undefined( undefined ), object( null ), boolean( true ), number( 0 ), string( \"1\" ), Array( [  ] ), object( { \"b\" : string( \"c\" ), \"d\" : object( { \"e\" : Array( [ string( \"f\" ), Array( [ string( \"g\" ), object( { \"h\" : object( { \"i\" : object( { \"j\" : Array( [ < LIMIT >, < LIMIT > ] ) } ), \"p\" : string( \"q\" ) } ) } ), string( \"r\" ) ] ) ] ) } ) } ), Array( [ string( \"s\" ), Array( [ Array( [ string( \"t\" ), Array( [ object( { \"u\" : number( 1 ) } ) ] ) ] ), string( \"v\" ) ] ), string( \"w\" ) ] ), string( \"x\" ), string( \"y\" ), string( \"z\" ) ] ) } )" );
		},


	GetValue : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject, eKey, eValue_Default )",
"subject"   : "配列/連想配列のキー値による取得",
"arguments" : 
	[
		{ "object" : "対象オブジェクト" },
		{ "string" : "キー" },
		{ "object" : "デフォルト値" }
	],
"return"    : { "object" : "値" },

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

			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( undefined, "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( null, "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( true, "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( false, "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( 0, "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( 1, "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( 1.1, "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( "", "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( "0", "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( "1", "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( "a", "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( [], "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( [ 1 ], "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( {}, "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( { "a" : 1 }, "test" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( 0, 0, undefined ), false );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetValue( 0, 0, null ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( 0, 0, true ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetValue( 0, 0, 0 ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetValue( 0, 0, 1 ), 1 );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( 0, 0, "" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( 0, 0, "0" ), "0" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( 0, 0, "1" ), "1" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( 0, 0, "a" ), "a" );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.GetValue( 0, 0, [] ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.GetValue( 0, 0, [ 1 ] ), [ 1 ] );
			SIMPL.TEST.Check.AssociativeArray( SIMPL._FUNCTIONS.GetValue( 0, 0, {} ) );
			SIMPL.TEST.Check.AssociativeArray( SIMPL._FUNCTIONS.GetValue( 0, 0, { "a" : 1 } ), { "a" : 1 } );

			var arValues = [ 1, "a" ];
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetValue( arValues, 0 ), 1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetValue( arValues, 1 ), "a" );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetValue( arValues, 2 ), false );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( arValues, -1 ), "a" );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetValue( arValues, -2 ), 1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetValue( arValues, -3 ), false );

			var aaValues = { "a" : 1, "b" : "c", "01" : "d", 2 : "e", "3" : "f", "g" : "4", "h" : null, "i" : undefined, "j" : true, "k" : false };
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetValue( aaValues, "a" ), 1 );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( aaValues, "b" ), "c" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( aaValues, "01" ), "d" );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( aaValues, 1 ), false );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( aaValues, 2 ), "e" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( aaValues, "2" ), "e" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( aaValues, "3" ), "f" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( aaValues, 3 ), "f" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( aaValues, "g" ), "4" );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetValue( aaValues, "h" ) );
			SIMPL.TEST.Check.Undefined( SIMPL._FUNCTIONS.GetValue( aaValues, "i" ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( aaValues, "j" ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( aaValues, "k" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( aaValues, "k", "test" ), false );
		},


	IsArray : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject )", 
"subject"   : "配列確認",
"arguments" : [ { "object" : "判定対象オブジェクト" } ],
"return"    : { "boolean" : "" },

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

			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( undefined ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( null ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( true ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( false ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( 0 ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( 1 ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( 1.1 ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( "" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( "0" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( "1" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( "a" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( [] ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( [ 1 ] ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( {} ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( { "a" : 1 } ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( new Date() ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( function() {} ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsArray( Symbol() ), false );
		},


	IsAssociativeArray : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject )", 
"subject"   : "連想配列確認",
"arguments" : [ { "object" : "判定対象オブジェクト" } ],
"return"    : { "boolean" : "" },

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

			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( undefined ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( null ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( true ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( false ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( 0 ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( 1 ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( 1.1 ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( "" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( "0" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( "1" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( "a" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( [] ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( [ 1 ] ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( {} ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( { "a" : 1 } ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( new Date() ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( function() {} ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsAssociativeArray( Symbol() ), false );
		},


	IsDateTime : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject )", 
"subject"   : "日時オブジェクト確認",
"arguments" : [ { "object" : "判定対象オブジェクト" } ],
"return"    : { "boolean" : "" },

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

			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( undefined ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( null ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( true ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( false ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( 0 ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( 1 ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( 1.1 ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( "" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( "0" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( "1" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( "a" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( [] ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( [ 1 ] ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( {} ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( { "a" : 1 } ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( new Date() ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( function() {} ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsDateTime( Symbol() ), false );
		},


	IsValue : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject )", 
"subject"   : "値(非オブジェクト)確認",
"arguments" : [ { "object" : "判定対象オブジェクト" } ],
"return"    : { "boolean" : "" },

"summary"   : 
	[
		"undefinedやnullや文字列も値として扱う",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( undefined ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( null ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( true ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( false ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( 0 ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( 1 ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( 1.1 ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( "" ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( "0" ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( "1" ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( "a" ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( [] ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( [ 1 ] ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( {} ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( { "a" : 1 } ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( new Date() ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( function() {} ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.IsValue( Symbol() ), false );
		},


	Padding : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eString, eString_Padding, iDigits )", 
"subject"   : "パディング",
"arguments" : 
	[
		{ "string" : "パディング対象文字列" },
		{ "string" : "パディング文字列" },
		{ "integer" : "桁数" }
	],
"return"    : { "string" : "" },

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

			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Padding( 0 ), "00" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Padding( 1 ), "01" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Padding( 12 ), "12" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Padding( 123 ), "23" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Padding( "" ), "00" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Padding( "a" ), "0a" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Padding( "a", "0000" ), "000a" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Padding( "a", " ", 4 ), "   a" );
		},


	ReplaceLabels : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eString_Template, aaReplaceLabels )",
"subject"   : "",
"arguments" : 
	[
		{ "string" : "変換対象文字列" },
		{ "assoc" : "キーを検索文字列、値を置換文字列とする連想配列" }
	],
"return"    : { "string" : "" },

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

			var eString_Template = "__test-00__\n__test-01__.__test-02__.__test-03__\n__test-01__.__test-04__\n\n";
			var aaReplaceLabels = {};
			aaReplaceLabels["__test-01__"] = "TEST-01";
			aaReplaceLabels["__test-02__"] = "TEST-02";
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ReplaceLabels( eString_Template, {} ), eString_Template );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ReplaceLabels( eString_Template, { "a" : 1 } ), eString_Template );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.ReplaceLabels( eString_Template, aaReplaceLabels ), "__test-00__\nTEST-01.TEST-02.__test-03__\nTEST-01.__test-04__\n\n" );
		},


	zzz : 
		function ()
		{
		}


}



// ===================================================================
// public
// -------------------------------------------------------------------



// ===================================================================
// local
// -------------------------------------------------------------------



