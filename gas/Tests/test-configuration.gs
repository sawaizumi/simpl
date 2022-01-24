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
TEST.SIMPL.CONFIGURATION = 
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
			this.ExtractConfigurations( aaConfigurations );
			this.GetConfigurations( aaConfigurations );
			this.SetConfigurations( aaConfigurations );
		},


	Check_NG : 
		function ( aaConfigurations )
		{
		},


	// ---------------------------------------------------------------
	// private

	ExtractConfigurations : 
		function ( aaConfigurations )
		{
			var aaDescriptions = 
				{
"function"  : "( aaConfigurations, eString_Prefix, aaOptions )",
"subject"   : "設定の部分抽出",
"arguments" : 
	[
		{ "assoc" : "設定" },
		{ "string" : "プリフィックス文字列" },
		{ "assoc" : "オプション設定" }
	],
"return"    : { "assoc" : "設定" },

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

			var aaResults;
			var aaOptions;
			aaResults = SIMPL.CONFIGURATION.ExtractConfigurations( aaConfigurations, "this" );
			SIMPL.TEST.Check.Integer( Object.keys( aaResults ).length, 7 );
			aaResults = SIMPL.CONFIGURATION.ExtractConfigurations( aaConfigurations, "this.sheet" );
			SIMPL.TEST.Check.Integer( Object.keys( aaResults ).length, 4 );
			aaResults = SIMPL.CONFIGURATION.ExtractConfigurations( aaConfigurations, "this.sheet.sheet-name" );
			SIMPL.TEST.Check.Integer( Object.keys( aaResults ).length, 1 );
			aaOptions = SIMPL.CONFIGURATION._DefaultOptions();
			aaOptions["Add.Separator"] = false;
			aaResults = SIMPL.CONFIGURATION.ExtractConfigurations( aaConfigurations, "this.sheet.sheet-name", aaOptions );
			SIMPL.TEST.Check.Integer( Object.keys( aaResults ).length, 2 );
			aaOptions["Add.Separator"] = true;
			aaResults = SIMPL.CONFIGURATION.ExtractConfigurations( aaConfigurations, "this.sheet.sheet-name", aaOptions );
			SIMPL.TEST.Check.Integer( Object.keys( aaResults ).length, 1 );
			aaOptions["Cut.Prefix"] = false;
			aaResults = SIMPL.CONFIGURATION.ExtractConfigurations( aaConfigurations, "this.sheet", aaOptions );
			SIMPL.TEST.Check.Array( Object.keys( aaResults ), [ "this.sheet.id", "this.sheet.name", "this.sheet.sheet-name", "this.sheet.sheet-names" ] );
			aaOptions["Cut.Prefix"] = true;
			aaResults = SIMPL.CONFIGURATION.ExtractConfigurations( aaConfigurations, "this.sheet", aaOptions );
			SIMPL.TEST.Check.Array( Object.keys( aaResults ), [ "id", "name", "sheet-name", "sheet-names" ] );
		},


	GetConfigurations : 
		function ( aaConfigurations )
		{
			var aaDescriptions = 
				{
"function"  : "( aaArguments )",
"subject"   : "",
"arguments" : [ { "assoc" : "" } ],
"return"    : { "assoc" : "設定" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"TEST.SIMPL.CONFIGURATION.GSS.GetConfigurationsのテストにて詳細はテスト",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

			var aaArguments = {};
			aaArguments["offset.row"] = 2;
			aaArguments["column-order.value"] = "F";
			SIMPL.TEST.Check.AssociativeArray( SIMPL.CONFIGURATION.GetConfigurations( aaArguments ), aaConfigurations );
		},


	SetConfigurations : 
		function ( aaConfigurations )
		{
			var aaDescriptions = 
				{
"function"  : "( aaConfigurations, aaArguments )",
"subject"   : "",
"arguments" : 
	[
		{ "" : "" },
		{ "" : "" }
	],
"return"    : { "" : "" },

"summary"   : 
	[
		"",
		""
	],
"check"     : 
	[
		"TEST.SIMPL.CONFIGURATION.GSS.SetConfigurationsのテストにて詳細はテスト",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

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



