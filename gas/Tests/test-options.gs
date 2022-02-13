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
TEST.SIMPL.OPTIONS = 
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
			this.__New();
			this._Reset();
			this.Get();
			this.GetValue();
			this.Pop();
			this.Push();
			this.Set();
			this.SetValue();
		},


	Check_NG : 
		function ( aaConfigurations )
		{
		},


	// ---------------------------------------------------------------
	// private

	__New : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "()",
"subject"   : "コンストラクタ",
"return"    : { "object" : "オブジェクト" },

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

			eResult = new SIMPL.OPTIONS();
			SIMPL.TEST.Check.NotNull( eResult );
		},


	_Reset : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "()",
"subject"   : "リセット",

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

		},


	Get : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "()",
"subject"   : "オプション情報取得",
"return"    : { "assoc" : "オプション" },

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

			eResult = new SIMPL.OPTIONS();
			SIMPL.TEST.Check.AssociativeArray( eResult.Get() );
		},


	GetValue : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eKey )",
"subject"   : "オプション情報取得",
"arguments" : [ { "string" : "プリフィックス文字列" } ],
"return"    : { "assoc" : "オプション" },

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

			eResult = new SIMPL.OPTIONS();
			eResult.Set( { "a" : 1, "b" : "c" } );
			SIMPL.TEST.Check.Integer( eResult.GetValue( "a" ), 1 );
			SIMPL.TEST.Check.String( eResult.GetValue( "b" ), "c" );
		},


	Pop : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "()",
"subject"   : "オプション情報蓄積解放",
"return"    : { "assoc" : "オプション" },

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

			eResult = new SIMPL.OPTIONS();
			var aaOptions = { "a" : 1, "b" : "c" };
			eResult.Push( aaOptions );
			aaOptions["a"] = 2;
			eResult.Push( aaOptions );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : 2, "b" : "c" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Pop(), { "a" : 2, "b" : "c" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : 1, "b" : "c" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Pop(), { "a" : 1, "b" : "c" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get() );
			SIMPL.TEST.Check.AssociativeArray( eResult.Pop() );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get() );
			SIMPL.TEST.Check.AssociativeArray( eResult.Pop() );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get() );
			SIMPL.TEST.Check.AssociativeArray( eResult.Pop() );
		},


	Push : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( aaOptions, bFlag_ClearOptions )",
"subject"   : "オプション情報蓄積更新",
"arguments" : 
	[
		{ "assoc" : "オプション" },
		{ "boolean" : "既存設定クリア可否" }
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

			eResult = new SIMPL.OPTIONS();
			var aaOptions = { "a" : 1, "b" : "c" };
			eResult.Push( aaOptions );
			aaOptions["a"] = 2;
			eResult.Push( aaOptions );
			aaOptions["d"] = 3;
			eResult.Push( aaOptions );
			aaOptions["e"] = "f";
			eResult.Push( aaOptions );
			aaOptions = { "a" : 4, "b" : "c", "g" : "h" };
			eResult.Push( aaOptions );
			eResult.Push( aaOptions, true );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : 4, "b" : "c", "g" : "h" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Pop(), { "a" : 4, "b" : "c", "g" : "h" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : 4, "b" : "c", "d" : 3, "e" : "f", "g" : "h" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Pop(), { "a" : 4, "b" : "c", "d" : 3, "e" : "f", "g" : "h" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : 2, "b" : "c", "d" : 3, "e" : "f" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Pop(), { "a" : 2, "b" : "c", "d" : 3, "e" : "f" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : 2, "b" : "c", "d" : 3 } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Pop(), { "a" : 2, "b" : "c", "d" : 3 } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : 2, "b" : "c" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Pop(), { "a" : 2, "b" : "c" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : 1, "b" : "c" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Pop(), { "a" : 1, "b" : "c" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get() );
			SIMPL.TEST.Check.AssociativeArray( eResult.Pop() );
		},


	Set : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( aaOptions, bFlag_ClearOptions )",
"subject"   : "オプション情報設定",
"arguments" : 
	[
		{ "assoc" : "オプション" },
		{ "boolean" : "既存設定クリア可否" }
	],
"return"    : { "assoc" : "オプション" },

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

			eResult = new SIMPL.OPTIONS();
			eResult.Set( { "a" : 1, "b" : "c" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : 1, "b" : "c" } );
			eResult.Set( { "d" : 2, "e" : "f" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : 1, "b" : "c", "d" : 2, "e" : "f" } );
			eResult.Set( { "b" : 3, "g" : "h" } );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : 1, "b" : 3, "d" : 2, "e" : "f", "g" : "h" } );
			eResult.Set( { "a" : 1, "b" : "c" }, true );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : 1, "b" : "c" } );
			eResult.Set( { "b" : 3, "g" : "h" }, true );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "b" : 3, "g" : "h" } );
		},


	SetValue : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "( eKey, eValue )",
"subject"   : "オプション情報設定",
"arguments" : 
	[
		{ "string" : "キー" },
		{ "object" : "値" }
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

			eResult = new SIMPL.OPTIONS();
			SIMPL.TEST.Check.AssociativeArray( eResult.Get() );
			eResult.SetValue( "a", "b" );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : "b" } );
			eResult.SetValue( "b", "c" );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : "b", "b" : "c" } );
			eResult.SetValue( "a", 1 );
			SIMPL.TEST.Check.AssociativeArray( eResult.Get(), { "a" : 1, "b" : "c" } );
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



