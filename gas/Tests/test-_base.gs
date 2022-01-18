// 日本語UTF-8, LF, Tab=4



// include



// define



// global



// ===================================================================
// class
// -------------------------------------------------------------------

var TEST = TEST || {};
TEST.SIMPL = TEST.SIMPL || {};
TEST.SIMPL._BASE = 
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
			// Check
			this.Array.OK();
			this.AssociativeArray.OK();
			this.Boolean.OK();
			this.DateTime.OK();
			this.Integer.OK();
			this.NotNull.OK();
			this.NotUndefined.OK();
			this.Null.OK();
			this.Real.OK();
			this.String.OK();
			this.Undefined.OK();

			this.zzz();
		},


	Check_NG : 
		function ()
		{
			// Check
			this.Array.NG();
			this.AssociativeArray.NG();
			this.Boolean.NG();
			this.DateTime.NG();
			this.Integer.NG();
			this.NotNull.NG();
			this.NotUndefined.NG();
			this.Null.NG();
			this.Real.NG();
			this.String.NG();
			this.Undefined.NG();
		},


	// ---------------------------------------------------------------
	// private

	Array : 
		{
			OK : 
				function ()
				{
					SIMPL.TEST.Check.Array( [] );
					SIMPL.TEST.Check.Array( [ 1 ], [ 1 ] );
				},


			NG : 
				function ()
				{
					SIMPL.TEST.Check.Array( [ 1 ] );
					SIMPL.TEST.Check.Array( [ 1, 2 ], [ 1 ] );
					SIMPL.TEST.Check.Array( [ 1 ], [ 1, 2 ] );
					SIMPL.TEST.Check.Array( [ 1 ], [ "1" ] );
					SIMPL.TEST.Check.Array( [ true ], [ 1 ] );

					SIMPL.TEST.Check.Array( undefined );
					SIMPL.TEST.Check.Array( null );
					SIMPL.TEST.Check.Array( false );
					SIMPL.TEST.Check.Array( true );
					SIMPL.TEST.Check.Array( 0 );
					SIMPL.TEST.Check.Array( 1 );
					SIMPL.TEST.Check.Array( "" );
					SIMPL.TEST.Check.Array( "a" );
					SIMPL.TEST.Check.Array( {} );
					SIMPL.TEST.Check.Array( { "a" : 1 } );
				}


		},


	AssociativeArray : 
		{
			OK : 
				function ()
				{
					SIMPL.TEST.Check.AssociativeArray( {} );
					SIMPL.TEST.Check.AssociativeArray( { "a" : 1 }, { "a" : 1 } );
					SIMPL.TEST.Check.AssociativeArray( { "a" : [ 1 ] }, { "a" : [ 1 ] } );
					SIMPL.TEST.Check.AssociativeArray( { "a" : { "b" : 2 } }, { "a" : { "b" : 2 } } );
				},


			NG : 
				function ()
				{
					SIMPL.TEST.Check.AssociativeArray( {}, { "a" : 1 } );
					SIMPL.TEST.Check.AssociativeArray( { "a" : 1 } );
					SIMPL.TEST.Check.AssociativeArray( { "a" : 1 }, { "a" : [ 1 ] } );
					SIMPL.TEST.Check.AssociativeArray( { "a" : [ 1, 2 ] }, { "a" : [ 1 ] } );

					SIMPL.TEST.Check.AssociativeArray( undefined );
					SIMPL.TEST.Check.AssociativeArray( null );
					SIMPL.TEST.Check.AssociativeArray( false );
					SIMPL.TEST.Check.AssociativeArray( true );
					SIMPL.TEST.Check.AssociativeArray( 0 );
					SIMPL.TEST.Check.AssociativeArray( 1 );
					SIMPL.TEST.Check.AssociativeArray( "" );
					SIMPL.TEST.Check.AssociativeArray( "a" );
					SIMPL.TEST.Check.AssociativeArray( [] );
					SIMPL.TEST.Check.AssociativeArray( [ 1 ] );
				}


		},


	Boolean : 
		{
			OK : 
				function ()
				{
					SIMPL.TEST.Check.Boolean( true );
					SIMPL.TEST.Check.Boolean( true, true );
					SIMPL.TEST.Check.Boolean( false, false );
				},


			NG : 
				function ()
				{
					SIMPL.TEST.Check.Boolean( false );
					SIMPL.TEST.Check.Boolean( false, true );
					SIMPL.TEST.Check.Boolean( true, false );

					SIMPL.TEST.Check.Boolean( undefined );
					SIMPL.TEST.Check.Boolean( null );
					SIMPL.TEST.Check.Boolean( 0, false );
					SIMPL.TEST.Check.Boolean( 1 );
					SIMPL.TEST.Check.Boolean( 0.0, false );
					SIMPL.TEST.Check.Boolean( 1.1 );
					SIMPL.TEST.Check.Boolean( "" );
					SIMPL.TEST.Check.Boolean( "1" );
					SIMPL.TEST.Check.Boolean( "true" );
					SIMPL.TEST.Check.Boolean( "false", false );
					SIMPL.TEST.Check.Boolean( [] );
					SIMPL.TEST.Check.Boolean( {} );
				}


		},


	DateTime : 
		{
			OK : 
				function ()
				{
					var eDate_A = new Date();
					var eDate_B = new Date( eDate_A.getTime() );
					SIMPL.TEST.Check.DateTime( eDate_A, eDate_A );
					SIMPL.TEST.Check.DateTime( eDate_A, eDate_B );
					SIMPL.TEST.Check.DateTime( new Date( 0 ) );
					SIMPL.TEST.Check.DateTime( new Date( 0 ), new Date( 0 ) );
					SIMPL.TEST.Check.DateTime( new Date( 10000000 ), new Date( 10000000 ) );
					SIMPL.TEST.Check.DateTime( new Date( "2020-01-01 00:00:00" ), new Date( "2020-01-01 00:00:00" ) );
				},


			NG : 
				function ()
				{
					SIMPL.TEST.Check.DateTime( new Date() );
					SIMPL.TEST.Check.DateTime( new Date( 10000000 ), new Date( 10000001 ) );
					SIMPL.TEST.Check.DateTime( new Date( "2020-01-01 00:00:00" ), new Date( "2020-01-01 00:00:01" ) );

					SIMPL.TEST.Check.DateTime( undefined );
					SIMPL.TEST.Check.DateTime( null );
					SIMPL.TEST.Check.DateTime( true );
					SIMPL.TEST.Check.DateTime( false );
					SIMPL.TEST.Check.DateTime( 0 );
					SIMPL.TEST.Check.DateTime( 1 );
					SIMPL.TEST.Check.DateTime( 0.0 );
					SIMPL.TEST.Check.DateTime( 1.1 );
					SIMPL.TEST.Check.DateTime( "" );
					SIMPL.TEST.Check.DateTime( "a" );
					SIMPL.TEST.Check.DateTime( [] );
					SIMPL.TEST.Check.DateTime( [ 1 ] );
					SIMPL.TEST.Check.DateTime( {} );
					SIMPL.TEST.Check.DateTime( { "a" : 1 } );
				}


		},


	Integer : 
		{
			OK : 
				function ()
				{
					SIMPL.TEST.Check.Integer( 0 );
					SIMPL.TEST.Check.Integer( 1, 1 );
				},


			NG : 
				function ()
				{
					SIMPL.TEST.Check.Integer( 1 );
					SIMPL.TEST.Check.Integer( 1, 0 );

					SIMPL.TEST.Check.Integer( undefined );
					SIMPL.TEST.Check.Integer( null );
					SIMPL.TEST.Check.Integer( 1.1 );
					SIMPL.TEST.Check.Integer( "0" );
					SIMPL.TEST.Check.Integer( "1", 1 );
					SIMPL.TEST.Check.Integer( "" );
					SIMPL.TEST.Check.Integer( [] );
					SIMPL.TEST.Check.Integer( {} );
				}


		},


	NotNull : 
		{
			OK : 
				function ()
				{
					SIMPL.TEST.Check.NotNull( undefined );
					SIMPL.TEST.Check.NotNull( true );
					SIMPL.TEST.Check.NotNull( false );
					SIMPL.TEST.Check.NotNull( 0 );
					SIMPL.TEST.Check.NotNull( 1 );
					SIMPL.TEST.Check.NotNull( 0.0 );
					SIMPL.TEST.Check.NotNull( 1.1 );
					SIMPL.TEST.Check.NotNull( "" );
					SIMPL.TEST.Check.NotNull( "a" );
					SIMPL.TEST.Check.NotNull( [] );
					SIMPL.TEST.Check.NotNull( [ 1 ] );
					SIMPL.TEST.Check.NotNull( {} );
					SIMPL.TEST.Check.NotNull( { "a" : 1 } );
				},


			NG : 
				function ()
				{
					SIMPL.TEST.Check.NotNull( null );
				}


		},


	NotUndefined : 
		{
			OK : 
				function ()
				{
					SIMPL.TEST.Check.NotUndefined( null );
					SIMPL.TEST.Check.NotUndefined( true );
					SIMPL.TEST.Check.NotUndefined( false );
					SIMPL.TEST.Check.NotUndefined( 0 );
					SIMPL.TEST.Check.NotUndefined( 1 );
					SIMPL.TEST.Check.NotUndefined( 0.0 );
					SIMPL.TEST.Check.NotUndefined( 1.1 );
					SIMPL.TEST.Check.NotUndefined( "" );
					SIMPL.TEST.Check.NotUndefined( "a" );
					SIMPL.TEST.Check.NotUndefined( [] );
					SIMPL.TEST.Check.NotUndefined( [ 1 ] );
					SIMPL.TEST.Check.NotUndefined( {} );
					SIMPL.TEST.Check.NotUndefined( { "a" : 1 } );
				},


			NG : 
				function ()
				{
					SIMPL.TEST.Check.NotUndefined( undefined );
				}


		},


	Null : 
		{
			OK : 
				function ()
				{
					SIMPL.TEST.Check.Null( null );
				},


			NG : 
				function ()
				{
					SIMPL.TEST.Check.Null( undefined );
					SIMPL.TEST.Check.Null( true );
					SIMPL.TEST.Check.Null( false );
					SIMPL.TEST.Check.Null( 0 );
					SIMPL.TEST.Check.Null( 1 );
					SIMPL.TEST.Check.Null( 0.0 );
					SIMPL.TEST.Check.Null( 1.1 );
					SIMPL.TEST.Check.Null( "" );
					SIMPL.TEST.Check.Null( "a" );
					SIMPL.TEST.Check.Null( [] );
					SIMPL.TEST.Check.Null( [ 1 ] );
					SIMPL.TEST.Check.Null( {} );
					SIMPL.TEST.Check.Null( { "a" : 1 } );
				}


		},


	Real : 
		{
			OK : 
				function ()
				{
					SIMPL.TEST.Check.Real( 0.0 );
					SIMPL.TEST.Check.Real( 1, 1.0 );
					SIMPL.TEST.Check.Real( 1.1, 1.1 );
					SIMPL.TEST.Check.Real( 0 );
					SIMPL.TEST.Check.Real( 0, 0.0 );
					SIMPL.TEST.Check.Real( 1.00001, 1.00002, 0.00001 );
					SIMPL.TEST.Check.Real( 1.00003, 1.00002, 0.00001 );
				},


			NG : 
				function ()
				{
					SIMPL.TEST.Check.Real( 1.1 );
					SIMPL.TEST.Check.Real( 0.0, 1.1 );
					SIMPL.TEST.Check.Real( 1.1, 0.0 );
					SIMPL.TEST.Check.Real( 1.000009, 1.00002, 0.00001 );
					SIMPL.TEST.Check.Real( 1.000031, 1.00002, 0.00001 );

					SIMPL.TEST.Check.Real( undefined );
					SIMPL.TEST.Check.Real( true );
					SIMPL.TEST.Check.Real( false );
					SIMPL.TEST.Check.Real( 1 );
					SIMPL.TEST.Check.Real( "" );
					SIMPL.TEST.Check.Real( "0.0" );
					SIMPL.TEST.Check.Real( "1.1" );
					SIMPL.TEST.Check.Real( "a" );
					SIMPL.TEST.Check.Real( [] );
					SIMPL.TEST.Check.Real( [ 1 ] );
					SIMPL.TEST.Check.Real( {} );
					SIMPL.TEST.Check.Real( { "a" : 1 } );
				}


		},


	String : 
		{
			OK : 
				function ()
				{
					SIMPL.TEST.Check.String( "" );
					SIMPL.TEST.Check.String( "", "" );
					SIMPL.TEST.Check.String( "a", "a" );
					SIMPL.TEST.Check.String( "abc", "abc" );
				},


			NG : 
				function ()
				{
					SIMPL.TEST.Check.String( "", "a" );
					SIMPL.TEST.Check.String( "a", "" );
					SIMPL.TEST.Check.String( "abc", "ab" );
					SIMPL.TEST.Check.String( "abc", "abb" );
					SIMPL.TEST.Check.String( "abc", "abC" );
					SIMPL.TEST.Check.String( "abc", "abd" );
					SIMPL.TEST.Check.String( "abc", "abcd" );

					SIMPL.TEST.Check.String( undefined );
					SIMPL.TEST.Check.String( true );
					SIMPL.TEST.Check.String( false );
					SIMPL.TEST.Check.String( 0 );
					SIMPL.TEST.Check.String( 1 );
					SIMPL.TEST.Check.String( 0.0 );
					SIMPL.TEST.Check.String( 1.1 );
					SIMPL.TEST.Check.String( [] );
					SIMPL.TEST.Check.String( [ 1 ] );
					SIMPL.TEST.Check.String( {} );
					SIMPL.TEST.Check.String( { "a" : 1 } );

					SIMPL.TEST.Check.String( undefined, "undefined" );
					SIMPL.TEST.Check.String( true, "true" );
					SIMPL.TEST.Check.String( false, "false" );
					SIMPL.TEST.Check.String( 0, "0" );
					SIMPL.TEST.Check.String( 1, "1" );
					SIMPL.TEST.Check.String( 0.0, "0.0" );
					SIMPL.TEST.Check.String( 1.1, "1.1" );
					SIMPL.TEST.Check.String( [], "[]" );
					SIMPL.TEST.Check.String( [ 1 ], "[ 1 ]" );
					SIMPL.TEST.Check.String( {}, "{}" );
					SIMPL.TEST.Check.String( { "a" : 1 }, "[ \"a\" : 1 ]" );
				}


		},


	Undefined : 
		{
			OK : 
				function ()
				{
					SIMPL.TEST.Check.Undefined( undefined );
				},


			NG : 
				function ()
				{
					SIMPL.TEST.Check.Undefined( null );
					SIMPL.TEST.Check.Undefined( false );
					SIMPL.TEST.Check.Undefined( true );
					SIMPL.TEST.Check.Undefined( 0 );
					SIMPL.TEST.Check.Undefined( 1 );
					SIMPL.TEST.Check.Undefined( 0.0 );
					SIMPL.TEST.Check.Undefined( 1.1 );
					SIMPL.TEST.Check.Undefined( "" );
					SIMPL.TEST.Check.Undefined( "a" );
					SIMPL.TEST.Check.Undefined( [] );
					SIMPL.TEST.Check.Undefined( [ 1 ] );
					SIMPL.TEST.Check.Undefined( {} );
					SIMPL.TEST.Check.Undefined( { "a" : 1 } );
				}


		},


	zzz : 
		function ()
		{
			var aaDescriptions = 
				{
"function"  : "()",
"subject"   : "",
"arguments" : [ { "" : "" } ],
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
		"",
		""
	]
				};
			SIMPL.TEST.AddDescriptions( aaDescriptions );

		}


}



// ===================================================================
// public
// -------------------------------------------------------------------



// ===================================================================
// local
// -------------------------------------------------------------------



