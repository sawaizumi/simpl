# 日本語UTF-8, LF, Tab=4



# import
import xlrd

from .. import SIMPL



# ====================================================================
# public
# --------------------------------------------------------------------

def Check(eString_FullName__A, eString_FullName__B, aaConfigurations = {}):
	eBook__A = xlrd.open_workbook(eString_FullName__A)
	eBook__B = xlrd.open_workbook(eString_FullName__B)

	if eBook__A.nsheets != eBook__B.nsheets:
		SIMPL.Log.OutputSIMPL(["!Sheets", eBook__A.nsheets, eBook__B.nsheets])

		return False

	for i in range(eBook__A.nsheets):
		eSheet__A = eBook__A.sheet_by_index(i)
		eSheet__B = eBook__B.sheet_by_index(i)
		if eSheet__A.name != eSheet__B.name:
			SIMPL.Log.OutputSIMPL(["!SheetName", eSheet__A.name, eSheet__B.name])

			return False

		if eSheet__A.nrows != eSheet__B.nrows:
			SIMPL.Log.OutputSIMPL(["!Rows", eSheet__A.nrows, eSheet__B.nrows])

			return False

		if eSheet__A.ncols != eSheet__B.ncols:
			SIMPL.Log.OutputSIMPL(["!Columns", eSheet__A.ncols, eSheet__B.ncols])

			return False

		for iRow in range(eSheet__A.nrows):
			for iColumn in range(eSheet__A.ncols):
				eValue__A = eSheet__A.cell_value(iRow, iColumn)
				eValue__B = eSheet__B.cell_value(iRow, iColumn)
				if str(eValue__A) != str(eValue__B):
					if (type(eValue__A) is float) or (type(eValue__B) is float):
						if float(eValue__A) != float(eValue__B):
							if abs(float(eValue__A) - float(eValue__B)) < float(SIMPL.Functions.GetValue(aaConfigurations, "Float.Threthold", 0.000001)):
								SIMPL.Log.OutputSIMPL(["in Threthold - Warning", eValue__A, eValue__B])
								if SIMPL.Functions.GetValue_Boolean(SIMPL.Functions.GetValue(aaConfigurations, "AsError.Warning")):

									return False

							else:
								SIMPL.Log.OutputSIMPL(["!Threthold", eValue__A, eValue__B])

								return False

						else:
							SIMPL.Log.OutputSIMPL(["equal in float - Notice", eValue__A, eValue__B])
							if SIMPL.Functions.GetValue_Boolean(SIMPL.Functions.GetValue(aaConfigurations, "AsError.Notice")):

								return False

					else:
						SIMPL.Log.OutputSIMPL(["!Value", eValue__A, eValue__B])

						return False

	return True



# ====================================================================
# local
# --------------------------------------------------------------------



