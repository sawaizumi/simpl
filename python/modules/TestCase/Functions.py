# 日本語UTF-8, LF, Tab=4



# import
import os
import sys

import modules.SIMPL as SIMPL
import modules.SIMPL.Tests.Base as TestBase



# local



# ====================================================================
# main
# --------------------------------------------------------------------

def Main(aaConfigurations):
	AddValue(aaConfigurations)

	return



# ====================================================================
# Functions
# --------------------------------------------------------------------

def AddValue(aaConfigurations):
	TestBase.AddCount()

	aaValues = {}
	aaValues = SIMPL.Functions.AddValue(aaValues, "a")
	TestBase.Check.Integer(SIMPL.Functions.GetValue(aaValues, "a"), 1)
	aaValues = SIMPL.Functions.AddValue(aaValues, "a")
	TestBase.Check.Integer(SIMPL.Functions.GetValue(aaValues, "a"), 2)
	aaValues = SIMPL.Functions.AddValue(aaValues, "a", 2)
	TestBase.Check.Integer(SIMPL.Functions.GetValue(aaValues, "a"), 4)

	TestBase.AddState()

	return



