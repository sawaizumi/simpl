# 日本語UTF-8, LF, Tab=4



# import
import modules.SIMPL as SIMPL
import modules.SIMPL.Tests.Base as TestBase



# local



# ====================================================================
# main
# --------------------------------------------------------------------

def Main(aaConfigurations):
	ExtractConfigurations(aaConfigurations)

	return



# ====================================================================
# Functions
# --------------------------------------------------------------------

def ExtractConfigurations(aaConfigurations):
	TestBase.AddCount()

	eString_Prefix = "Configuration"
	aaResults = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, eString_Prefix)
	TestBase.Check.String(SIMPL.Functions.GetValue(aaResults, ""), "1")
	TestBase.Check.String(SIMPL.Functions.GetValue(aaResults, "X"), "X0")
	TestBase.Check.String(SIMPL.Functions.GetValue(aaResults, "Y"), "Y0")
	eString_Prefix = "Configuration"
	aaOptions = {"Add.Separator" : False}
	aaResults = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, eString_Prefix, aaOptions)
	TestBase.Check.String(SIMPL.Functions.GetValue(aaResults, ""), "1")
	TestBase.Check.String(SIMPL.Functions.GetValue(aaResults, ".X"), "X0")
	TestBase.Check.String(SIMPL.Functions.GetValue(aaResults, ".Y"), "Y0")
	TestBase.Check.String(SIMPL.Functions.GetValue(aaResults, "X"), "X1")
	TestBase.Check.String(SIMPL.Functions.GetValue(aaResults, "Y"), "Y1")
	eString_Prefix = "Configuration."
	aaOptions = {"Add.Separator" : False}
	aaResults = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, eString_Prefix, aaOptions)
	TestBase.Check.Boolean(SIMPL.Functions.GetValue(aaResults, ""), False)
	TestBase.Check.String(SIMPL.Functions.GetValue(aaResults, "X"), "X0")
	TestBase.Check.String(SIMPL.Functions.GetValue(aaResults, "Y"), "Y0")
	eString_Prefix = "Configuration"
	aaOptions = {"Cut.Prefix" : False}
	aaResults = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, eString_Prefix, aaOptions)
	TestBase.Check.Boolean(SIMPL.Functions.GetValue(aaResults, "ConfigurationX"), False)
	TestBase.Check.Boolean(SIMPL.Functions.GetValue(aaResults, "ConfigurationY"), False)
	TestBase.Check.String(SIMPL.Functions.GetValue(aaResults, "Configuration"), "1")
	TestBase.Check.String(SIMPL.Functions.GetValue(aaResults, "Configuration.X"), "X0")
	TestBase.Check.String(SIMPL.Functions.GetValue(aaResults, "Configuration.Y"), "Y0")

	TestBase.AddState()

	return



