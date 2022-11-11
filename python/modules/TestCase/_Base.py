# 日本語UTF-8, LF, Tab=4



# import
import modules.SIMPL as SIMPL
import modules.SIMPL.Tests.Base as TestBase



# local



# ====================================================================
# main
# --------------------------------------------------------------------

def Main(aaConfigurations):
	TestBase.AddCount()
	TestBase.AddState(False)
	TestBase.AddState()
	TestBase.AddState()
	TestBase.AddState()
	TestBase.AddCount()

	TestBase.AddCount()
	TestBase.AddError()
	TestBase.AddError(bFlag_AddState = False)
	TestBase.AddWarning({"Message": "Warning"})
	TestBase.AddNotice({"Message": "Notice"})

	TestBase.AddCount()
	TestBase.AddState()

	return



