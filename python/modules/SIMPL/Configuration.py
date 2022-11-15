# 日本語UTF-8, LF, Tab=4



# import
from .. import SIMPL



# ====================================================================
# public
# --------------------------------------------------------------------

def ExtractConfigurations(aaConfigurations, eString_Prefix, aaOptions = {}):
	aaResults = {}

	aaOptions = _DefaultOptions(aaOptions)

	eString_Start = eString_Prefix
	if SIMPL.Functions.GetValue(aaOptions, "Add.Separator"):
		eString_Start += "."

	for eKey in aaConfigurations:
		if ((eKey == eString_Prefix) or (eKey.startswith( eString_Start ))):
			if SIMPL.Functions.GetValue(aaOptions, "Cut.Prefix"):
				eKey_Cut = eKey[len(eString_Prefix):]
				if SIMPL.Functions.GetValue(aaOptions, "Add.Separator"):
					if eKey_Cut != "":
						if (eKey_Cut[0] == "."):
							eKey_Cut = eKey_Cut[1:]

				aaResults[eKey_Cut] = aaConfigurations[eKey]

			else:
				aaResults[eKey] = aaConfigurations[eKey]

	return aaResults


def GetConfigurations(arStrings_Line):
	aaConfigurations = {}

	for eString_Line in arStrings_Line:
		if eString_Line == "":
			continue

		if eString_Line[0] == "#":
			continue

		arStrings_Column = eString_Line.split("\t")
		if len(arStrings_Column) == 0:
			continue

		if len(arStrings_Column) > 0:
			eKey = arStrings_Column.pop(0)
			if eKey == "":
				continue

			if eKey in aaConfigurations:
				if not type(aaConfigurations[eKey]) == SIMPL.Defines.TYPE__LIST:
					aaConfigurations[eKey] = [aaConfigurations[eKey]]

				if len(arStrings_Column) == 0:
					aaConfigurations[eKey].append(None)
					continue

				if len(arStrings_Column) == 1:
					aaConfigurations[eKey].append(arStrings_Column[0])
					continue

				if not type(aaConfigurations[eKey][0]) == SIMPL.Defines.TYPE__LIST:
					aaConfigurations[eKey] = [aaConfigurations[eKey]]

				aaConfigurations[eKey].append(arStrings_Column)

			else:
				if len(arStrings_Column) == 0:
					aaConfigurations[eKey] = None
					continue

				if len(arStrings_Column) == 1:
					aaConfigurations[eKey] = arStrings_Column[0]
					continue

				aaConfigurations[eKey] = arStrings_Column

	return aaConfigurations


def _DefaultOptions(aaOptions = {}):
	aaOptions = SIMPL.Functions.SetValue_Default(aaOptions, "Add.Separator", True)
	aaOptions = SIMPL.Functions.SetValue_Default(aaOptions, "Cut.Prefix", True)

	return aaOptions



# ====================================================================
# local
# --------------------------------------------------------------------



