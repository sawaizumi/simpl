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
__base.GAS.GD = 
{
	// ---------------------------------------------------------------
	// public

	GetFile : 
		function ( aaArguments )
		{
			var eFile;

			if ( __base.GetValue( aaArguments, "file.id" ) != false )
			{
				eFile = DriveApp.getFileById( aaArguments["file.id"] );
			}
			else if ( ( typeof aaArguments ) == "string" )
			{
				eFile = DriveApp.getFileById( aaArguments );
			}

			return eFile;
		},


	// ---------------------------------------------------------------
	// private

	_DefaultOptions : 
		function ( aaOptions )
		{
			aaOptions = __base._FUNCTIONS._DefaultOptions( aaOptions );

			return aaOptions;
		}


};


// -------------------------------------------------------------------
// overwrite

var GAS = __base.GAS;



// ===================================================================
// public
// -------------------------------------------------------------------



// ===================================================================
// local
// -------------------------------------------------------------------



