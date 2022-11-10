# 日本語UTF-8, LF, Tab=4



# import
import sys
import traceback


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
	SHOW_DETAIL__WARNING = 32
	SHOW_DETAIL__NOTICE = 64


class Check:
	def Boolean(bResult, bFlag = True, iLevel = 1):
		AddTotal()
		bResult_OK = True
		if ((bResult != bResult_OK) == bFlag) or (type(bResult) != bool):
			aaError = Check.BuildError(bResult, bResult_OK, bFlag, iLevel)
			AddError(aaError, False)

			return False

		return True


	def Integer(iResult, iResult_OK = 0, bFlag = True, iLevel = 1):
		AddTotal()
		if ((iResult != iResult_OK) == bFlag) or (type(iResult) != int):
			aaError = Check.BuildError(iResult, iResult_OK, bFlag, iLevel)
			AddError(aaError, False)

			return False

		return True


	def Null(eResult, bFlag = True, iLevel = 1):
		AddTotal()
		eResult_OK = None
		if (eResult != eResult_OK) == bFlag:
			aaError = Check.BuildError(eResult, eResult_OK, bFlag, iLevel)
			AddError(aaError, False)

			return False

		return True


	def String(eString_Result, eString_Result_OK = "", bFlag = True, iLevel = 1):
		AddTotal()
		if ((eString_Result != eString_Result_OK) == bFlag) or (type(eString_Result) != str):
			aaError = Check.BuildError(eString_Result, eString_Result_OK, bFlag, iLevel)
			AddError(aaError, False)

			return False

		return True


	def BuildError(eResult, eResult_OK, bFlag, iLevel):
		iLevel += 1
		eFrame = sys._getframe(iLevel)
		eStackSummary = traceback.extract_stack(eFrame)
		eString_Stack = ""
		arStrings_Stack = []
		for eFrameSummary in eStackSummary:
			eString_Stack = "{0}({1}) : {3} - in {2}".format(eFrameSummary[0], eFrameSummary[1], eFrameSummary[2], eFrameSummary[3])
			arStrings_Stack.append(eString_Stack)

		if bFlag:
			eString_Message = " {0} - ".format(str([eResult, eResult_OK])) + eString_Stack

		else:
			eString_Message = "!{0} - ".format(str([eResult, eResult_OK])) + eString_Stack

		print(eString_Message)
		aaError = {}
		aaError["Message"] = eString_Message
		aaError["Place"] = arStrings_Stack
		aaError["Object"] = eStackSummary

		return aaError



# ====================================================================
# public
# --------------------------------------------------------------------

def AddBlockCount():
	global g_aaResults__SIMPL__TESTS

	g_aaResults__SIMPL__TESTS = SIMPL.Functions.AddValue(g_aaResults__SIMPL__TESTS, "Block.Count")

	return


def AddCount():
	global g_aaResults__SIMPL__TESTS

	iCount_Total = SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Count", 0)
	iCount_State = len(SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "State", []))
	if iCount_Total > iCount_State:
		aaWarning = {}
		aaWarning["Message"] = "no state..."
		AddWarning(aaWarning)
		g_aaResults__SIMPL__TESTS = SIMPL.Functions.PushValue(g_aaResults__SIMPL__TESTS, "State", None)

	while iCount_Total < iCount_State:
		aaWarning = {}
		aaWarning["Message"] = "over state..."
		AddWarning(aaWarning)
		g_aaResults__SIMPL__TESTS = SIMPL.Functions.AddValue(g_aaResults__SIMPL__TESTS, "Count")
		iCount_Total = SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Count", 0)

	g_aaResults__SIMPL__TESTS = SIMPL.Functions.AddValue(g_aaResults__SIMPL__TESTS, "Count")
	ResetBlockCount()

	return


def AddError(aaError = {"Message": "Error"}, bFlag_AddState = True):
	global g_aaResults__SIMPL__TESTS

	if GetMode():
		g_aaResults__SIMPL__TESTS = SIMPL.Functions.PushValue(g_aaResults__SIMPL__TESTS, "Error", aaError)

	AddBlockCount()

	if bFlag_AddState:
		AddState(False, False)

	return


def AddFailure():
	global g_aaResults__SIMPL__TESTS

	g_aaResults__SIMPL__TESTS = SIMPL.Functions.AddValue(g_aaResults__SIMPL__TESTS, "Failure")

	return


def AddNotice(aaNotice):
	global g_aaResults__SIMPL__TESTS

	g_aaResults__SIMPL__TESTS = SIMPL.Functions.PushValue(g_aaResults__SIMPL__TESTS, "Notice", aaNotice)

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


def AddTotal():
	global g_aaResults__SIMPL__TESTS

	g_aaResults__SIMPL__TESTS = SIMPL.Functions.AddValue(g_aaResults__SIMPL__TESTS, "Total")

	return


def AddWarning(aaWarning):
	global g_aaResults__SIMPL__TESTS

	g_aaResults__SIMPL__TESTS = SIMPL.Functions.PushValue(g_aaResults__SIMPL__TESTS, "Warning", aaWarning)

	return


def CheckBlockCount(iCount = 0):
	global g_aaResults__SIMPL__TESTS

	if (g_aaResults__SIMPL__TESTS["Block.Count"] != iCount):
		return False

	return True


def GetMode():
	global g_aaResults__SIMPL__TESTS

	return SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Mode", True)


def ResetBlockCount():
	global g_aaResults__SIMPL__TESTS

	g_aaResults__SIMPL__TESTS["Block.Count"] = 0

	return


def ResetResults():
	global g_aaResults__SIMPL__TESTS

	g_aaResults__SIMPL__TESTS = {}

	print("reset results...")
	print("--------------------------------")

	return


def SetMode(bMode = True):
	global g_aaResults__SIMPL__TESTS

	g_aaResults__SIMPL__TESTS["Mode"] = bMode

	return bMode


def ShowResults(iLevel_ShowDetail = 0):
	global g_aaResults__SIMPL__TESTS

	iCount_Block = SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Count", 0)
	iCount_Total = SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Total", 0)
	iCount_Failure = SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Failure", 0)
	iCount_Error = len(SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Error", []))
	iCount_Warning = len(SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Warning", []))
	iCount_Notice = len(SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Notice", []))
	print("================================")
	print("Count   : " + str(iCount_Block))
	print("Failure : " + str(iCount_Failure))
	print("")
	print("Total   : " + str(iCount_Total))
	print("Error   : " + str(iCount_Error))
	print("Warning : " + str(iCount_Warning))
	print("Notice  : " + str(iCount_Notice))
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

		if (iLevel_ShowDetail & Defines.SHOW_DETAIL__WARNING) == Defines.SHOW_DETAIL__WARNING:
			arStates = SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Warning", [])
			print(arStates)

		if (iLevel_ShowDetail & Defines.SHOW_DETAIL__NOTICE) == Defines.SHOW_DETAIL__NOTICE:
			arStates = SIMPL.Functions.GetValue(g_aaResults__SIMPL__TESTS, "Notice", [])
			print(arStates)

	print("--------------------------------")
	print("")

	return



