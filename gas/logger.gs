// 日本語UTF-8, LF, Tab=4



// include



// define



// global



// environment



// ===================================================================
// class
// -------------------------------------------------------------------

var __base = __base || {};
__base.LOGGER = 
{
	// ---------------------------------------------------------------
	// member

	m_aaOptions : 
		{
			"Show.LibLog" : true
		},
	m_arOptions : [],


	// ---------------------------------------------------------------
	// public

	// ...............................................................
	// 	setup / clean

	Setup : 
		function ( aaOptions )
		{
		},


	// ...............................................................
	// 	add

	AddLibLog : 
		function ( eString_Message, aaOptions )
		{
			if ( aaOptions == null )
			{
				aaOptions = {};
			}

			aaOptions["category"] = "simpl-libraries";
			__base.LOGGER.AddLog( eString_Message, aaOptions );
		},


	AddLog : 
		function ( eString_Message, aaOptions )
		{
			console.log( eString_Message );
		},


	// ---------------------------------------------------------------
	// private

	_DefaultOptions : 
		function ( aaOptions )
		{
			if ( aaOptions == null )
			{
				aaOptions = {};
			}

			aaOptions["Show.LibLog"] = true;

			return aaOptions;
		}


}


// -------------------------------------------------------------------
// overwrite

var LOGGER = __base.LOGGER;



// ===================================================================
// public
// -------------------------------------------------------------------



// ===================================================================
// local
// -------------------------------------------------------------------



