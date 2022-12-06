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
			this.BuildArray_Line();
			this.BuildArray_Unique();
			this.BuildArray_Unique__SmallArray();
			this.BuildAssociativeArray_Indexed();
			this.BuildAssociativeArray_Inverse();
			this.CheckEquals_Array();
			this.CheckEquals_AssociativeArray();
			this.CheckEquals_DateTime();
			this.ExpandObjects();
			this.Get.Integer();
			this.Get.Object();
			this.Get.String();
			this.Get.Value();
			this.GetObject();
			this.GetValue();
			this.IsArray();
			this.IsAssociativeArray();
			this.IsDateTime();
			this.IsValue();
			this.MergeArray();
			this.Padding();
			this.ReplaceLabels();
		},


	Check_NG : 
		function ()
		{
		},


	// ---------------------------------------------------------------
	// private

	BuildArray_Line : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eString )",
"subject"   : "文字列の行単位での配列化",
"arguments" : [ { "string" : "文字列" } ],
"return"    : { "array" : "" },

"summary"   : 
	[
		"",
		""
	],
"sample"   : 
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

			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.BuildArray_Line( "1\r\n2\r3\n4\n" ), [ "1", "2", "3", "4", "" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.BuildArray_Line( "1\r\n2\r3\n4\n5" ), [ "1", "2", "3", "4", "5" ] );
		},


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


	GetObject : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject, eString_Name, eObject_Default )",
"subject"   : "オブジェクトの名前による取得",
"arguments" : 
	[
		{ "object" : "対象オブジェクト" },
		{ "string" : "名前" },
		{ "object" : "デフォルト値" }
	],
"return"    : { "object" : "オブジェクト" },

"summary"   : 
	[
		"名前を'.'で連結する事でさらに子のオブジェクトも取得可能",
		"配列も'[]'で括る事で取り扱う事が可能",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( undefined, "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( null, "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( true, "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( false, "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( 0, "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( 1, "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( 1.1, "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( "", "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( "0", "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( "1", "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( "a", "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( [], "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( [ 1 ], "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( {}, "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( { "a" : 1 }, "test" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( 0, 0, undefined ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( 0, 0, null ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetObject( 0, 0, true ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetObject( 0, 0, 0 ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetObject( 0, 0, 1 ), 1 );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetObject( 0, 0, "" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetObject( 0, 0, "0" ), "0" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetObject( 0, 0, "1" ), "1" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetObject( 0, 0, "a" ), "a" );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.GetObject( 0, 0, [] ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.GetObject( 0, 0, [ 1 ] ), [ 1 ] );
			SIMPL.TEST.Check.AssociativeArray( SIMPL._FUNCTIONS.GetObject( 0, 0, {} ) );
			SIMPL.TEST.Check.AssociativeArray( SIMPL._FUNCTIONS.GetObject( 0, 0, { "a" : 1 } ), { "a" : 1 } );

			var arValues = [ 1, "a" ];
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetObject( arValues, 0 ), 1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetObject( arValues, 1 ), "a" );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( arValues, 2 ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetObject( arValues, -1 ), "a" );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetObject( arValues, -2 ), 1 );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( arValues, -3 ) );

			var aaValues = { "a" : 1, "b" : [ "c", [ "00", { "01" : "d", 2 : "e", "3" : { "f" : 0, "g" : { "4" : 0, "h" : null, "i" : undefined } }, "j" : true }, 5 ], { 6 : "07", "08" : [ 9, [ 10, 11 ] ] } ], "k" : false };
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetObject( aaValues, "a" ), 1 );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetObject( aaValues, "b[0]" ), "c" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetObject( aaValues, "b.[1].[0]" ), "00" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetObject( aaValues, "b.[1][0]" ), "00" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetObject( aaValues, "b[1][0]" ), "00" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetObject( aaValues, "b[1][1].01" ), "d" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetObject( aaValues, "b[1][1].2" ), "e" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetObject( aaValues, "b[1][1][2]" ), "e" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetObject( aaValues, "b[2].6" ), "07" );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetObject( aaValues, "b[2].08[1][0]" ), 10 );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( aaValues, 1 ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetObject( aaValues, "b[1][1].3.f" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetObject( aaValues, "b[1][1][3].f" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetObject( aaValues, "b[1][1][3].g.4" ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.GetObject( aaValues, "b[1][1][3].g.h" ) );
			SIMPL.TEST.Check.Undefined( SIMPL._FUNCTIONS.GetObject( aaValues, "b[1][1][3].g.i" ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetObject( aaValues, "b[1][1].j" ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetObject( aaValues, "k" ), false );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetObject( aaValues, "k", "test" ), false );
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
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( arValues, 1 ), "a" );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( arValues, 2 ), false );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.GetValue( arValues, -1 ), "a" );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.GetValue( arValues, -2 ), 1 );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.GetValue( arValues, -3 ), false );

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


	MergeArray : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject_A, eObject_B )", 
"subject"   : "配列結合",
"arguments" : 
	[
		{ "array/object" : "配列/オブジェクト" },
		{ "array/object" : "配列/オブジェクト" }
	],
"return"    : { "array" : "結合配列" },

"summary"   : 
	[
		"引数に配列以外を設定した場合は配列で包んで結合する",
		"なので値同士を直接配列化する事も可能",
		"ただし引数がnullやundefinedの場合は空配列化されるのでnullを結合したい場合はあらかじめ配列に入れた状態で渡す必要がある",
		""
	],
"check"     : 
	[
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray() );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( undefined, undefined ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ null ], null ), [ null ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, [ null ] ), [ null ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true ), [ true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( false ), [ false ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 0 ), [ 0 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 1 ), [ 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 1.1 ), [ 1.1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "" ), [ "" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "0" ), [ "0" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "1" ), [ "1" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "a" ), [ "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [] ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1 ] ), [ 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( {} ), [ {} ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( { "a" : 1 } ), [ { "a" : 1 } ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( undefined, null ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, null ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, null ), [ true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( false, null ), [ false ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 0, null ), [ 0 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 1, null ), [ 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 1.1, null ), [ 1.1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "", null ), [ "" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "0", null ), [ "0" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "1", null ), [ "1" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "a", null ), [ "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], null ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1 ], null ), [ 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( {}, null ), [ {} ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( { "a" : 1 }, null ), [ { "a" : 1 } ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( undefined, true ), [ true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, true ), [ true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, true ), [ true, true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( false, true ), [ false, true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 0, true ), [ 0, true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 1, true ), [ 1, true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 1.1, true ), [ 1.1, true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "", true ), [ "", true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "0", true ), [ "0", true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "1", true ), [ "1", true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "a", true ), [ "a", true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], true ), [ true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1 ], true ), [ 1, true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( {}, true ), [ {}, true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( { "a" : 1 }, true ), [ { "a" : 1 }, true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( undefined, [] ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, [] ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, [] ), [ true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( false, [] ), [ false ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 0, [] ), [ 0 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 1, [] ), [ 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 1.1, [] ), [ 1.1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "", [] ), [ "" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "0", [] ), [ "0" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "1", [] ), [ "1" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "a", [] ), [ "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], [] ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1 ], [] ), [ 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( {}, [] ), [ {} ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( { "a" : 1 }, [] ), [ { "a" : 1 } ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( undefined, [ 1, "a" ] ), [ 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, [ 1, "a" ] ), [ 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, [ 1, "a" ] ), [ true, 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( false, [ 1, "a" ] ), [ false, 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 0, [ 1, "a" ] ), [ 0, 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 1, [ 1, "a" ] ), [ 1, 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( 1.1, [ 1, "a" ] ), [ 1.1, 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "", [ 1, "a" ] ), [ "", 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "0", [ 1, "a" ] ), [ "0", 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "1", [ 1, "a" ] ), [ "1", 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( "a", [ 1, "a" ] ), [ "a", 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], [ 1, "a" ] ), [ 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1 ], [ 1, "a" ] ), [ 1, 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( {}, [ 1, "a" ] ), [ {}, 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( { "a" : 1 }, [ 1, "a" ] ), [ { "a" : 1 }, 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, undefined ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, true ), [ true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, false ), [ false ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, 0 ), [ 0 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, 1 ), [ 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, 1.1 ), [ 1.1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, "" ), [ "" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, "0" ), [ "0" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, "1" ), [ "1" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, "a" ), [ "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, [] ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, [ 1 ] ), [ 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, {} ), [ {} ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( null, { "a" : 1 } ), [ { "a" : 1 } ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, undefined ), [ true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, false ), [ true, false ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, 0 ), [ true, 0 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, 1 ), [ true, 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, 1.1 ), [ true, 1.1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, "" ), [ true, "" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, "0" ), [ true, "0" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, "1" ), [ true, "1" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, "a" ), [ true, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, [] ), [ true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, [ 1 ] ), [ true, 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, {} ), [ true, {} ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( true, { "a" : 1 } ), [ true, { "a" : 1 } ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], undefined ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], null ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], true ), [ true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], false ), [ false ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], 0 ), [ 0 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], 1 ), [ 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], 1.1 ), [ 1.1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], "" ), [ "" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], "0" ), [ "0" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], "1" ), [ "1" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], "a" ), [ "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], [ 1 ] ), [ 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], {} ), [ {} ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [], { "a" : 1 } ), [ { "a" : 1 } ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], undefined ), [ 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], null ), [ 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], true ), [ 1, "a", true ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], false ), [ 1, "a", false ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], 0 ), [ 1, "a", 0 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], 1 ), [ 1, "a", 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], 1.1 ), [ 1, "a", 1.1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], "" ), [ 1, "a", "" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], "0" ), [ 1, "a", "0" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], "1" ), [ 1, "a", "1" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], "a" ), [ 1, "a", "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], [] ), [ 1, "a" ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], [ 1 ] ), [ 1, "a", 1 ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], {} ), [ 1, "a", {} ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], { "a" : 1 } ), [ 1, "a", { "a" : 1 } ] );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.MergeArray( [ 1, "a" ], [ 2, "b" ] ), [ 1, "a", 2, "b" ] );
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


};


TEST.SIMPL._FUNCTIONS.Get = 
{
	Integer : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject, eKey, iValue_Default )",
"subject"   : "配列/連想配列のキー値による取得(整数値)",
"arguments" : 
	[
		{ "object" : "対象オブジェクト" },
		{ "string" : "キー" },
		{ "integer/object" : "デフォルト値" }
	],
"return"    : { "integer/object" : "値(整数値/オブジェクト)" },

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

			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( undefined, "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( null, "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( true, "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( false, "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( 0, "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( 1, "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( 1.1, "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( "", "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( "0", "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( "1", "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( "a", "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( [], "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( [ 1 ], "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( {}, "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( { "a" : 1 }, "test" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( 0, 0, undefined ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.Get.Integer( 0, 0, null ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.Get.Integer( 0, 0, true ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.Get.Integer( 0, 0, false ), false );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( 0, 0, 0 ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( 0, 0, 1 ), 1 );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.Integer( 0, 0, "" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.Integer( 0, 0, "0" ), "0" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.Integer( 0, 0, "1" ), "1" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.Integer( 0, 0, "a" ), "a" );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.Get.Integer( 0, 0, [] ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.Get.Integer( 0, 0, [ 1 ] ), [ 1 ] );
			SIMPL.TEST.Check.AssociativeArray( SIMPL._FUNCTIONS.Get.Integer( 0, 0, {} ) );
			SIMPL.TEST.Check.AssociativeArray( SIMPL._FUNCTIONS.Get.Integer( 0, 0, { "a" : 1 } ), { "a" : 1 } );

			var arValues = [ 1, "2" ];
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( arValues, 0 ), 1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( arValues, 1, -1 ), 2 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( arValues, 2, -1 ), -1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( arValues, -1, -1 ), 2 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( arValues, -2 ), 1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( arValues, -3, -1 ), -1 );

			var aaValues = { "a" : 1, "b" : "c", "01" : "d", 2 : "e", "3" : "f", "g" : "4", "h" : null, "i" : undefined, "j" : true, "k" : false, "l" : 1.23, "m" : "4.567", "n" : "test", "o" : [], "p" : {}, "q" : function(){ return "test"; } };
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "a" ), 1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "b" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "01" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, 1 ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, 2 ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "2" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "3" ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, 3 ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "g" ), 4 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "h", -1 ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "i", -1 ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "j", -1 ), 1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "k", -1 ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "l", -1 ), 1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "m", -1 ), 4 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "n", -1 ), -1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "o", -1 ), -1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "p", -1 ), -1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "q", -1 ), -1 );

			var aaValues = { "a" : 1, "b" : "-1", "01" : "-2", 2 : "-3", "3" : "-4" };
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "a" ), 1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "b" ), -1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "01" ), -2 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, 1 ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, 2 ), -3 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "2" ), -3 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, "3" ), -4 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Integer( aaValues, 3 ), -4 );
		},


	Object : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject, eString_Name, eObject_Default )",
"subject"   : "オブジェクトの名前による取得",
"arguments" : 
	[
		{ "object" : "対象オブジェクト" },
		{ "string" : "名前" },
		{ "object" : "デフォルト値" }
	],
"return"    : { "object" : "オブジェクト" },

"summary"   : 
	[
		"名前を'.'で連結する事でさらに子のオブジェクトも取得可能",
		"配列も'[]'で括る事で取り扱う事が可能",
		""
	],
"check"     : 
	[
		"TEST.SIMPL._FUNCTIONS.GetObjectのテストにて詳細はテスト済み",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var aaValues = { "a" : 1, "b" : [ "c", [ "00", { "01" : "d", 2 : "e", "3" : { "f" : 0, "g" : { "4" : 0, "h" : null, "i" : undefined } }, "j" : true }, 5 ], { 6 : "07", "08" : [ 9, [ 10, 11 ] ] } ], "k" : false };
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Object( aaValues, "a" ), 1 );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Object( aaValues, "b[2].08[1][0]" ), 10 );
		},


	String : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eObject, eKey, eString_Default )",
"subject"   : "配列/連想配列のキー値による取得(文字列)",
"arguments" : 
	[
		{ "object" : "対象オブジェクト" },
		{ "string" : "キー" },
		{ "string/object" : "デフォルト値" }
	],
"return"    : { "string/object" : "値(文字列/オブジェクト)" },

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

			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( undefined, "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( null, "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( true, "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( false, "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( 0, "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( 1, "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( 1.1, "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( "", "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( "0", "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( "1", "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( "a", "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( [], "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( [ 1 ], "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( {}, "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( { "a" : 1 }, "test" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( 0, 0, undefined ) );
			SIMPL.TEST.Check.Null( SIMPL._FUNCTIONS.Get.String( 0, 0, null ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.Get.String( 0, 0, true ) );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.Get.String( 0, 0, false ), false );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.String( 0, 0, 0 ) );
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.String( 0, 0, 1 ), 1 );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( 0, 0, "" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( 0, 0, "0" ), "0" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( 0, 0, "1" ), "1" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( 0, 0, "a" ), "a" );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.Get.String( 0, 0, [] ) );
			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.Get.String( 0, 0, [ 1 ] ), [ 1 ] );
			SIMPL.TEST.Check.AssociativeArray( SIMPL._FUNCTIONS.Get.String( 0, 0, {} ) );
			SIMPL.TEST.Check.AssociativeArray( SIMPL._FUNCTIONS.Get.String( 0, 0, { "a" : 1 } ), { "a" : 1 } );

			var arValues = [ 1, "a" ];
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( arValues, 0 ), "1" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( arValues, 1, "test" ), "a" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( arValues, 2, "test" ), "test" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( arValues, -1, "test" ), "a" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( arValues, -2 ), "1" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( arValues, -3, "test" ), "test" );

			var aaValues = { "a" : 1, "b" : "c", "01" : "d", 2 : "e", "3" : "f", "g" : "4", "h" : null, "i" : undefined, "j" : true, "k" : false, "l" : 1.23, "m" : "4.567", "n" : "test", "o" : [], "p" : [ 1, "a" ], "q" : {}, "r" : { "a" : 1 }, "s" : function(){ return "test"; } };
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "a" ), "1" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "b" ), "c" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "01" ), "d" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, 1 ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, 2 ), "e" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "2" ), "e" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "3" ), "f" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, 3 ), "f" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "g" ), "4" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "h", "-1" ), "null" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "i", "-1" ), "undefined" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "j", "-1" ), "true" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "k", "-1" ), "false" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "l", "-1" ), "1.23" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "m", "-1" ), "4.567" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "n", "-1" ), "test" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "o", "-1" ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "p", "-1" ), "1,a" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "q", "-1" ), "[object Object]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "r", "-1" ), "[object Object]" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "s", "-1" ), "-1" );

			var aaValues = { "a" : 1, "b" : -1, "01" : -2, 2 : -3, "3" : -4 };
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "a" ), "1" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "b" ), "-1" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "01" ), "-2" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, 1 ) );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, 2 ), "-3" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "2" ), "-3" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, "3" ), "-4" );
			SIMPL.TEST.Check.String( SIMPL._FUNCTIONS.Get.String( aaValues, 3 ), "-4" );
		},


	Value : 
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
		"TEST.SIMPL._FUNCTIONS.GetValueのテストにて詳細はテスト済み",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var aaValues = { "a" : 1, "b" : "c", "01" : "d", 2 : "e", "3" : "f", "g" : "4", "h" : null, "i" : undefined, "j" : true, "k" : false };
			SIMPL.TEST.Check.Integer( SIMPL._FUNCTIONS.Get.Value( aaValues, "a" ), 1 );
			SIMPL.TEST.Check.Boolean( SIMPL._FUNCTIONS.Get.Value( aaValues, 1 ), false );
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



