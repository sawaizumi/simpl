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
		function ( aaConfigurations )
		{
			this.BuildArray_Unique( aaConfigurations );
		},


	Check_NG : 
		function ( aaConfigurations )
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

			SIMPL.TEST.Check.Array( SIMPL._FUNCTIONS.BuildArray_Unique__SmallArray( [ 1, 1, 2, 1, 3, 2, 2, 2 ] ), [ 1, 2, 3 ] );
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



