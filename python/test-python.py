# 日本語UTF-8, LF, Tab=4



# import
import sys

import modules.SIMPL as SIMPL
import modules.SIMPL.Tests.Base as TestBase

import modules.TestCase as TestCase



# local
def local_GetLevel_ShowResults(aaConfigurations):
	arLevels_ShowResults = SIMPL.Functions.GetValue(aaConfigurations, "ShowResults.Level", 0)
	if type(arLevels_ShowResults) == SIMPL.Defines.TYPE__LIST:
		iLevel_ShowResults = 0
		for iLevel in arLevels_ShowResults:
			iLevel_ShowResults = iLevel_ShowResults | int(iLevel)

	else:
		iLevel_ShowResults = int(arLevels_ShowResults)

	return iLevel_ShowResults



# ====================================================================
# main
# --------------------------------------------------------------------

def main(arStrings_Argument):
	aaConfigurations = SIMPL.Functions.LoadConfigurations(arStrings_Argument[1])

	# 初期化
	TestBase.ResetResults()

	# テスト実体
	arExecutes = aaConfigurations["Execute"]
	for eString_ModuleName in arExecutes:
		if eString_ModuleName != None:
			eModule = getattr(TestCase, eString_ModuleName);
			eModule.Main(aaConfigurations)

	# 結果表示
	SIMPL.Functions.Wait_FileDelete("test-python.txt")
	with SIMPL.Functions.ChangeSTDOUT("test-python.txt"):
		TestBase.ShowResults()

	iLevel_ShowResults = local_GetLevel_ShowResults(aaConfigurations)
	TestBase.ShowResults(iLevel_ShowResults)
	print("completed.")

	return
main(sys.argv)



