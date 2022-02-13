// 日本語UTF-8, LF, Tab=4



// include



// define



// global



// environment



// ===================================================================
// class
// -------------------------------------------------------------------

var __base = __base || {};
__base.OPTIONS = class
{
	// ---------------------------------------------------------------
	// constructor
	constructor()
	{
		this.m_aaOptions = {};
		this.m_arOptions = [];

		this._Reset();
	}


	// ---------------------------------------------------------------
	// public

	// ...............................................................
	// 	get / set

	Get()
	{
		return this.m_aaOptions;
	}


	GetValue( eKey )
	{
		return __base.GetValue( this.m_aaOptions, eKey );
	}


	Set( aaOptions, bFlag_ClearOptions )
	{
		if ( !__base.IsAssoc( aaOptions ) )
		{
			return false;
		}

		if ( bFlag_ClearOptions )
		{
			this.m_aaOptions = {};
		}

		var arKeys = Object.keys( aaOptions );
		for ( const eKey of arKeys )
		{
			this.m_aaOptions[eKey] = aaOptions[eKey];
		}

		return true;
	}


	SetValue( eKey, eValue )
	{
		this.m_aaOptions[eKey] = eValue;
	}


	// ...............................................................
	// 	push / pop

	Pop()
	{
		var aaOptions = this.Get();
		this.m_aaOptions = this.m_arOptions.pop();
		if ( this.m_aaOptions === undefined )
		{
			this._Reset();
		}

		return aaOptions;
	}


	Push( aaOptions, bFlag_ClearOptions )
	{
		this.m_arOptions.push( Object.assign( {}, this.Get() ) );
		this.Set( aaOptions, bFlag_ClearOptions );
	}


	// ---------------------------------------------------------------
	// private

	_Reset()
	{
		this.m_aaOptions = this._DefaultOptions();
		this.m_arOptions = [];
	}


	_DefaultOptions( aaOptions )
	{
		aaOptions = __base._FUNCTIONS._DefaultOptions( aaOptions );

		return aaOptions;
	}


};


// -------------------------------------------------------------------
// overwrite

var OPTIONS = __base.OPTIONS;



// ===================================================================
// public
// -------------------------------------------------------------------



// ===================================================================
// local
// -------------------------------------------------------------------



