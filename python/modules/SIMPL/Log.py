# 日本語UTF-8, LF, Tab=4



# import

from .. import SIMPL



# ====================================================================
# public
# --------------------------------------------------------------------

def Output(eString_Message, aaOptions = None):
	aaOptions = _DefaultOptions(aaOptions)

	if (aaOptions == None):
		print(eString_Message)

	else:
		if SIMPL.Functions.GetValue(aaOptions, "Show.Output.SIMPL"):
			print(eString_Message)

	return


def OutputSIMPL(eString_Message, aaOptions = {}):
	return Output(eString_Message, aaOptions)


def SetConfigurations(aaConfigurations):
#	aaConfigurations_Log = SIMPL.Configuration.ExtractConfigurations(aaConfigurations, "Log")
	aaOptions_Default = SIMPL.Functions.GetValue(SIMPL.g_aaConfigurations, "Log", {})
	aaOptions_Default = SIMPL.Functions.SetValue_Default(aaOptions_Default, "Show.Output.SIMPL", SIMPL.Functions.GetValue(aaConfigurations, "ShowOutput.SIMPL"))
	SIMPL.g_aaConfigurations["Log"] = aaOptions_Default

	return


def SetDefaultOption(eKey, eValue):
	aaOptions_Default = SIMPL.Functions.GetValue(SIMPL.g_aaConfigurations, "Log", {})
	aaOptions_Default[eKey] = eValue
	SIMPL.g_aaConfigurations["Log"] = aaOptions_Default

	return



# ====================================================================
# local
# --------------------------------------------------------------------

def _DefaultOptions(aaOptions = {}):
	aaOptions_Default = SIMPL.Functions.GetValue(SIMPL.g_aaConfigurations, "Log", {})

	if (aaOptions != None):
		aaOptions = SIMPL.Functions.SetValue_Default(aaOptions, "Show.Output.SIMPL", SIMPL.Functions.GetValue(aaOptions_Default, "Show.Output.SIMPL"))

	return aaOptions



