# 日本語UTF-8, LF, Tab=4



# import
from ... import SIMPL



# global
g_aaResults__SIMPL__TESTS = {}



# ====================================================================
# class
# --------------------------------------------------------------------
class Defines:
	SHOW_DETAIL__ALL = 0
	SHOW_DETAIL__STATE = 1
	SHOW_DETAIL__ERROR = 2
	SHOW_DETAIL__ERROR__ALL = 2
	SHOW_DETAIL__ERROR__MESSAGE = 4
	SHOW_DETAIL__ERROR__MESSAGE_DETAIL = 8
	SHOW_DETAIL__ERROR__MESSAGE__ALL = SHOW_DETAIL__ERROR__MESSAGE | SHOW_DETAIL__ERROR__MESSAGE_DETAIL
	SHOW_DETAIL__ERROR__PLACE = 16



# ====================================================================
# public
# --------------------------------------------------------------------

def AddCount():
	global g_aaResults__SIMPL__TESTS

	g_aaResults__SIMPL__TESTS = SIMPL.Functions.AddValue(g_aaResults__SIMPL__TESTS, "Count")

	return


def AddFailure():
	global g_aaResults__SIMPL__TESTS

	g_aaResults__SIMPL__TESTS = SIMPL.Functions.AddValue(g_aaResults__SIMPL__TESTS, "Failure")

	return


def AddError(aaError, bFlag_AddState = True):
	global g_aaResults__SIMPL__TESTS

	g_aaResults__SIMPL__TESTS = SIMPL.Functions.PushValue(g_aaResults__SIMPL__TESTS, "Error", aaError)

	if bFlag_AddState:
		AddState(False, False)

	return


def AddState(bState = True, bFlag_AddError = True):
	global g_aaResults__SIMPL__TESTS

	g_aaResults__SIMPL__TESTS = SIMPL.Functions.PushValue(g_aaResults__SIMPL__TESTS, "State", bState)

	if not bState:
		if bFlag_AddError:
			aaError = {}
			aaError["Message"] = "failed"
			AddError(aaError, False)

		AddFailure()

	return


def ShowResults(iLevel_ShowDetail = 0):
	global g_aaResults__SIMPL__TESTS

	iCount_Total = SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Count", 0)
	iCount_Failure = SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Failure", 0)
	iCount_Error = len(SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Error", []))
	print("================================")
	print("Count   : " + str(iCount_Total))
	print("Failure : " + str(iCount_Failure))
	print("Error   : " + str(iCount_Error))
	print("")
	print("--------------------------------")

	if iLevel_ShowDetail == 0:
		print(g_aaResults__SIMPL__TESTS)

	else:
		if (iLevel_ShowDetail & Defines.SHOW_DETAIL__STATE) == Defines.SHOW_DETAIL__STATE:
			arStates = SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "State", [])
			print(arStates)

		arErrors = SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Error", [])
		for aaError in arErrors:
			if (iLevel_ShowDetail & Defines.SHOW_DETAIL__ERROR__ALL) == Defines.SHOW_DETAIL__ERROR__ALL:
				print(aaError)

			else:
				if (iLevel_ShowDetail & Defines.SHOW_DETAIL__ERROR__MESSAGE) == Defines.SHOW_DETAIL__ERROR__MESSAGE:
					print(SIMPL.Functions.GetValue(aaError, "Message", None))

				if (iLevel_ShowDetail & Defines.SHOW_DETAIL__ERROR__MESSAGE_DETAIL) == Defines.SHOW_DETAIL__ERROR__MESSAGE_DETAIL:
					print(SIMPL.Functions.GetValue(aaError, "Message.Detail", None))

				if (iLevel_ShowDetail & Defines.SHOW_DETAIL__ERROR__PLACE) == Defines.SHOW_DETAIL__ERROR__PLACE:
					print(SIMPL.Functions.GetValue(aaError, "Place", None))

	print("--------------------------------")
	print("")

	return



