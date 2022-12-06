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
TEST.SIMPL.GAS.GD = 
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
			this.GetFile( aaConfigurations );
		},


	Check_NG : 
		function ( aaConfigurations )
		{
		},


	// ---------------------------------------------------------------
	// private

	GetFile : 
		function ( aaConfigurations )
		{
			var aaDescriptions = 
				{
"function"  : "( aaArguments )",
"subject"   : "ファイル取得",
"arguments" : [ { "assoc" : "引数オブジェクト" } ],
"return"    : { "object" : "ファイルオブジェクト" },

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
			var eString_FileID = aaConfigurations["test-configuration.BuildConfigurations.file.id"];
			var eString_FileName = aaConfigurations["test-configuration.BuildConfigurations.file.name"];
			var eFile;
			aaArguments = eString_FileID;
			eFile = SIMPL.GAS.GD.GetFile( aaArguments );
			SIMPL.TEST.Check.String( eFile.getName(), eString_FileName );
			aaArguments = {};
			aaArguments["file.id"] = eString_FileID;
			eFile = SIMPL.GAS.GD.GetFile( aaArguments );
			SIMPL.TEST.Check.String( eFile.getName(), eString_FileName );
			eFile = SIMPL.GAS.GD.GetFile();
			SIMPL.TEST.Check.Undefined( eFile );
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



