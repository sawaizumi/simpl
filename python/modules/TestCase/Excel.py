# 日本語UTF-8, LF, Tab=4



# import
import modules.SIMPL as SIMPL
import modules.SIMPL.Tests.Base as TestBase



# local



# ====================================================================
# main
# --------------------------------------------------------------------

def Main(aaConfigurations):
	Check(aaConfigurations)

	return



# ====================================================================
# Functions
# --------------------------------------------------------------------

def Check(aaConfigurations):
	TestBase.AddCount()

	eString_FileName__A = SIMPL.Functions.GetValue(aaConfigurations, "Excel.File.A")
	eString_FileName__B = SIMPL.Functions.GetValue(aaConfigurations, "Excel.File.B")
	aaConfigurations_Excel = {}
	bReslut = SIMPL.Excel.Check(eString_FileName__A, eString_FileName__B, aaConfigurations_Excel)
	TestBase.Check.Boolean(bReslut, False)

	aaOptions = {}
	aaConfigurations_Excel = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, "Excel", aaOptions)
	bReslut = SIMPL.Excel.Check(eString_FileName__A, eString_FileName__B, aaConfigurations_Excel)
	TestBase.Check.Boolean(bReslut)

	aaOptions = {}
	aaConfigurations_Excel = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, "Excel", aaOptions)
	aaConfigurations_Excel["AsError.Warning"] = True
	bReslut = SIMPL.Excel.Check(eString_FileName__A, eString_FileName__B, aaConfigurations_Excel)
	TestBase.Check.Boolean(bReslut, False)

	eString_FileName__A = SIMPL.Functions.GetValue(aaConfigurations, "Excel.File.Equal")
	aaOptions = {}
	aaConfigurations_Excel = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, "Excel", aaOptions)
	bReslut = SIMPL.Excel.Check(eString_FileName__A, eString_FileName__B, aaConfigurations_Excel)
	TestBase.Check.Boolean(bReslut)

	eString_FileName__A = SIMPL.Functions.GetValue(aaConfigurations, "Excel.File.Equal")
	aaOptions = {}
	aaConfigurations_Excel = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, "Excel", aaOptions)
	aaConfigurations_Excel["AsError.Notice"] = True
	bReslut = SIMPL.Excel.Check(eString_FileName__A, eString_FileName__B, aaConfigurations_Excel)
	TestBase.Check.Boolean(bReslut, False)

	eString_FileName__A = SIMPL.Functions.GetValue(aaConfigurations, "Excel.File.SmallThrethold")
	aaOptions = {}
	aaConfigurations_Excel = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, "Excel", aaOptions)
	bReslut = SIMPL.Excel.Check(eString_FileName__A, eString_FileName__B, aaConfigurations_Excel)
	TestBase.Check.Boolean(bReslut)

	eString_FileName__A = SIMPL.Functions.GetValue(aaConfigurations, "Excel.File.SmallThrethold")
	aaOptions = {}
	aaConfigurations_Excel = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, "Excel.SmallThrethold", aaOptions)
	bReslut = SIMPL.Excel.Check(eString_FileName__A, eString_FileName__B, aaConfigurations_Excel)
	TestBase.Check.Boolean(bReslut, False)

	eString_FileName__A = SIMPL.Functions.GetValue(aaConfigurations, "Excel.File.SmallThrethold")
	aaOptions = {}
	aaConfigurations_Excel = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, "Excel.NoThrethold", aaOptions)
	bReslut = SIMPL.Excel.Check(eString_FileName__A, eString_FileName__B, aaConfigurations_Excel)
	TestBase.Check.Boolean(bReslut, False)

	eString_FileName__A = SIMPL.Functions.GetValue(aaConfigurations, "Excel.File.SheetName")
	aaOptions = {}
	aaConfigurations_Excel = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, "Excel", aaOptions)
	bReslut = SIMPL.Excel.Check(eString_FileName__A, eString_FileName__B, aaConfigurations_Excel)
	TestBase.Check.Boolean(bReslut, False)

	eString_FileName__A = SIMPL.Functions.GetValue(aaConfigurations, "Excel.File.Rows")
	aaOptions = {}
	aaConfigurations_Excel = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, "Excel", aaOptions)
	bReslut = SIMPL.Excel.Check(eString_FileName__A, eString_FileName__B, aaConfigurations_Excel)
	TestBase.Check.Boolean(bReslut, False)

	eString_FileName__A = SIMPL.Functions.GetValue(aaConfigurations, "Excel.File.Columns")
	aaOptions = {}
	aaConfigurations_Excel = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, "Excel", aaOptions)
	bReslut = SIMPL.Excel.Check(eString_FileName__A, eString_FileName__B, aaConfigurations_Excel)
	TestBase.Check.Boolean(bReslut, False)

	TestBase.AddState()

	return



