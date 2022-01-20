// 日本語UTF-8, LF, Tab=4



/*
// ===================================================================
// 依存ライブラリ
// -------------------------------------------------------------------

// for test
// -------------------------------------------------------------------
SIMPL
https://github.com/sawaizumi/simpl
プロジェクトキー : MtxspPE0qVkXkbDMP91ph3irIKFgYCIM4
スクリプトID : 1q-tvPeA85WU08cs6KlpyHR5J6ri4dgpctrCnsLhZnpm_syit17DvXpYu
identifier : SIMPL
version : 1

参考ページ
https://github.com/sawaizumi/simpl



*/



// include



// define
const STRING__GAS_PROJECT_NAME = "Tests-SIMPL";



// global



// ===================================================================
// public
// -------------------------------------------------------------------

function Tests_All()
{
	var eString_Title = "Mode : Tests_G1";
	var aaOptions = {};
	aaOptions["Execute._BASE"] = true;
	aaOptions["Execute._FUNCTIONS"] = true;
	aaResults = Main( aaOptions );
	local_ShowErrors( aaResults, eString_Title );
}


function Tests_Single()
{
	var eString_Execute = "Execute.";
	eString_Execute += "_FUNCTIONS";

	var aaOptions = {};
	aaOptions[eString_Execute] = true;
	aaResults = Main( aaOptions );
	var eString_Message = "";
	var eKey;
	eKey = "OK";
	eString_Message += "--- OK ---\n";
	eString_Message += "Total : " + aaResults[eKey]["Count.Total"] + "\n";
	eString_Message += "Skip : " + aaResults[eKey]["Count.Skip"] + "\n";
	eString_Message += "Errors : " + aaResults[eKey]["Count.Errors"] + "\n";
	eString_Message += "\n";
	eString_Message += ( ( aaResults[eKey]["DateTime.End"].getTime() - aaResults[eKey]["DateTime.Begin"].getTime() ) / 1000 ) + " seconds elapsed.\n";
	eString_Message += "\n";
	eString_Message += "\n";
	eKey = "NG";
	eString_Message += "--- NG ---\n";
	eString_Message += "Total : " + aaResults[eKey]["Count.Total"] + "\n";
	eString_Message += "Skip : " + aaResults[eKey]["Count.Skip"] + "\n";
	eString_Message += "Errors : " + aaResults[eKey]["Count.Errors"] + "\n";
	eString_Message += "\n";
	eString_Message += ( ( aaResults[eKey]["DateTime.End"].getTime() - aaResults[eKey]["DateTime.Begin"].getTime() ) / 1000 ) + " seconds elapsed.\n";
	eString_Message += "\n";
	eString_Message += "\n";
	eString_Message = eString_Message.replaceAll( "\n", '\\n' );
	Browser.msgBox( eString_Message );
}


function Tests_G1()
{
	var eString_Title = "Mode : Tests_G1";
	var aaOptions = {};
	aaOptions["Execute._BASE"] = true;
	aaResults = Main( aaOptions );
	local_ShowErrors( aaResults, eString_Title );
}


function Tests_G2()
{
	var eString_Title = "Mode : Tests_G2";
Browser.msgBox( SIMPL._FUNCTIONS.ExpandObjects( eString_Title ) );
	var aaOptions = {};
	aaResults = Main( aaOptions );
	local_ShowErrors( aaResults, eString_Title );
}


function Tests_G3()
{
	var eString_Title = "Mode : Tests_G3";
Browser.msgBox( SIMPL._FUNCTIONS.ExpandObjects( eString_Title ) );
	var aaOptions = {};
	aaResults = Main( aaOptions );
	local_ShowErrors( aaResults, eString_Title );
}


function Tests_G4()
{
	var eString_Title = "Mode : Tests_G4";
Browser.msgBox( SIMPL._FUNCTIONS.ExpandObjects( eString_Title ) );
	var aaOptions = {};
	aaResults = Main( aaOptions );
	local_ShowErrors( aaResults, eString_Title );
}


function Tests_OnOpen( e )
{
	var eUI = SpreadsheetApp.getUi();
	var eMenu = eUI.createMenu( "tests" );
	eMenu.addItem( "all", "Tests_All" );
	eMenu.addItem( "single", "Tests_Single" );
	eMenu.addItem( "group 1", "Tests_G1" );
	eMenu.addItem( "group 2", "Tests_G2" );
	eMenu.addItem( "group 3", "Tests_G3" );
	eMenu.addItem( "group 4", "Tests_G4" );
	eMenu.addToUi();
}


// -------------------------------------------------------------------
// main

function Main( aaOptions )
{
//	SIMPL.SIMPL___Base();

//	var aaConfigurations = SIMPL.CONFIGURATION.GetConfigurations( aaArguments );
	var aaConfigurations = {};
	var aaResults = {}

	// Setup
	local_Setup( aaConfigurations );

	// OK
	SIMPL.LOGGER.AddLog( "// *******************************************************************" );
	SIMPL.LOGGER.AddLog( "// OK" );
	SIMPL.TEST.Setup();
	SIMPL.TEST.ShowResults.Begin();

	local_Build( aaConfigurations );
	local_Check_OK( aaConfigurations, aaOptions );

	SIMPL.TEST.ShowResults.End();
	aaResults["OK"] = SIMPL.TEST.ShowResults.Get();

	// NG
	SIMPL.LOGGER.AddLog( "// *******************************************************************" );
	SIMPL.LOGGER.AddLog( "// NG" );
	aaOptions["Check.NG"] = true;
	aaOptions["Show.RealTime"] = false;
	SIMPL.TEST.Setup( aaOptions );
	SIMPL.TEST.ShowResults.Begin();

	local_Build( aaConfigurations );
	local_Check_NG( aaConfigurations, aaOptions );

	SIMPL.TEST.ShowResults.End();
	aaResults["NG"] = SIMPL.TEST.ShowResults.Get();

	// Teardown
	local_Teardown();

	return aaResults;
}



// ===================================================================
// local
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// prepare / clean

function local_Setup( aaConfigurations )
{
	var aaOptions = {};
	aaOptions["Logger.Options"] = { "Show.LibLog" : false };
	SIMPL.LOGGER.Setup( aaOptions );
	SIMPL.LOGGER.AddLog( "// ===================================================================" );
	SIMPL.LOGGER.AddLog( "Start - " + STRING__GAS_PROJECT_NAME );
	SIMPL.LOGGER.AddLog( "// -------------------------------------------------------------------" );
}


function local_Teardown()
{
	SIMPL.LOGGER.AddLog( "// -------------------------------------------------------------------" );
	SIMPL.LOGGER.AddLog( "End - " + STRING__GAS_PROJECT_NAME );
	SIMPL.LOGGER.AddLog( "" );
}


// -------------------------------------------------------------------
// build

function local_Build( aaConfigurations )
{
}


// -------------------------------------------------------------------
// check

function local_Check_OK( aaConfigurations, aaOptions )
{
	var eString_Execute;

	eString_Execute = "_BASE";
	if ( SIMPL.GetValue( aaOptions, ( "Execute." + eString_Execute ) ) )
	{
		SIMPL.LOGGER.AddLog( "Check - " + eString_Execute );
		TEST.SIMPL._BASE.Check_OK();
	}

	eString_Execute = "_FUNCTIONS";
	if ( SIMPL.GetValue( aaOptions, ( "Execute." + eString_Execute ) ) )
	{
		SIMPL.LOGGER.AddLog( "Check - " + eString_Execute );
		TEST.SIMPL._FUNCTIONS.Check_OK();
	}
}


function local_Check_NG( aaConfigurations, aaOptions )
{
	var eString_Execute;

	eString_Execute = "_BASE";
	if ( SIMPL.GetValue( aaOptions, ( "Execute." + eString_Execute ) ) )
	{
		SIMPL.LOGGER.AddLog( "Check - " + eString_Execute );
		TEST.SIMPL._BASE.Check_NG();
	}

	eString_Execute = "_FUNCTIONS";
	if ( SIMPL.GetValue( aaOptions, ( "Execute." + eString_Execute ) ) )
	{
		SIMPL.LOGGER.AddLog( "Check - " + eString_Execute );
		TEST.SIMPL._FUNCTIONS.Check_NG();
	}
}


// -------------------------------------------------------------------
// show

function local_ShowErrors( aaResults, eString_Title )
{
	var iCount_Errors = 0;
	iCount_Errors += aaResults["OK"]["Count.Errors"];
	iCount_Errors += aaResults["NG"]["Count.Total"] - aaResults["NG"]["Count.Errors"];
	if ( iCount_Errors > 0 )
	{
		var eString_Message = "";
		eString_Message += eString_Title + "\n";
		eString_Message += iCount_Errors;
		eString_Message += " Erros.";
		eString_Message = eString_Message.replaceAll( "\n", '\\n' );
		Browser.msgBox( eString_Message );
	}
}



