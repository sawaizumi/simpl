# 日本語UTF-8, LF, Tab=4



# import
import distutils.util
import json
import numpy
import os
import pathlib
import time
from urllib.parse import urlparse

from .. import SIMPL



# ====================================================================
# public
# --------------------------------------------------------------------

def AddValue(aaValues, eKey, eValue = 1):
	if eKey in aaValues:
		aaValues[eKey] += eValue

	else:
		aaValues[eKey] = eValue

	return aaValues


def BuildArray_ColumnNumber(aaConfigurations, eString_Prefix, eValue_Sentinel = 0):
	arValues = []

	iCount = 0
	while True:
		eString_ColumnNumber = ConvertColumnNumber_ColumnIndex(iCount)
		eValue = GetValue_Enum(aaConfigurations, eString_Prefix, eString_ColumnNumber, eValue_Sentinel, True);
		if eValue == eValue_Sentinel:
			break

		arValues.append(eValue)
		iCount += 1

	return arValues


def BuildArray_FileList(eString_Path, bFlag_AppendDirectory = False, bFlag_Recursive = True):
	arValues = []

	for eEntry in os.scandir(eString_Path):
		if eEntry.is_file():
			arValues.append(str(pathlib.Path(eString_Path) / eEntry.name))

		else:
			if bFlag_AppendDirectory:
				arValues.append(str(pathlib.Path(eString_Path) / eEntry.name))

			if bFlag_Recursive:
				arValues.extend(BuildArray_FileList(str(pathlib.Path(eString_Path) / eEntry.name), bFlag_AppendDirectory))

	return arValues


def ConvertColumnNumber_ColumnIndex(iColumnIndex):
	eString = ""
	iDiv, iMod = divmod(iColumnIndex, 26)
	if iDiv > 0:
		eString += ConvertColumnNumber_ColumnIndex(iDiv - 1)

	eString += chr(65 + iMod)

	return eString


def ConvertList_StringToInteger(arStrings):
	arValues = []
	for eString in arStrings:
		if eString.isnumeric():
			arValues.append(int(eString))

	return arValues


def ExpandObjects(eObject, bFlag_AddType = False, iLimit = 5):
	if iLimit < 1:
		return "LIMIT"

	iLimit -= 1

	if type(eObject) is dict:
		eString = local_ExpandObjects_dict(eObject, bFlag_AddType, iLimit)

	elif type(eObject) is list:
		eString = local_ExpandObjects_list(eObject, bFlag_AddType, iLimit)

	elif type(eObject) is tuple:
		eString = local_ExpandObjects_tuple(eObject, bFlag_AddType, iLimit)

	elif type(eObject) is numpy.ndarray:
		eString = local_ExpandObjects_ndarray(eObject, bFlag_AddType, iLimit)

	elif type(eObject) in [numpy.float32, numpy.float64, int, float, complex, bool]:
		eString = str(eObject)

	elif type(eObject) is str:
		eString = '"' + eObject + '"'

	else:
		eString = str(type(eObject))

	if bFlag_AddType == True:
		eString = str(type(eObject)) + "<" + eString + ">"

	return eString


def GetURL_Path(eString_URL):
	eURL = urlparse(eString_URL)

	return eURL.path


def GetString(eValue, bFlag_Expand = False, eValue_Default = ""):
	if type(eValue) == SIMPL.Defines.TYPE__STRING:
		return eValue

	if eValue == None:
		if bFlag_Expand == False:
			return eValue_Default

	return str(eValue)


def GetValue(aaValues, eKey, eValue_Default = False):
	if aaValues == None:
		aaValues = {}

	eValue = eValue_Default
	if type(aaValues) == SIMPL.Defines.TYPE__LIST:
		if type(eKey) == SIMPL.Defines.TYPE__INTEGER:
			try:
				eValue = aaValues[eKey]

			except:
				pass

	elif type(aaValues) == SIMPL.Defines.TYPE__DICTIONARY:
		if eKey in aaValues:
			eValue = aaValues[eKey]

	return eValue


def GetValue_Boolean(eValue, bFlag_ConvertString = True):
	if  (
			type(eValue) == SIMPL.Defines.TYPE__STRING
				and
			bFlag_ConvertString
		):
		return bool(distutils.util.strtobool(eValue))

	return bool(eValue)


def GetValue_Enum(aaValues, eString_Prefix, eValue, eValue_Default = 0, bFlag_UseDefault = False):
	if not type(aaValues) == SIMPL.Defines.TYPE__DICTIONARY:
		if bFlag_UseDefault:
			return eValue_Default

		return eValue

	eKey = eString_Prefix + "." + str(eValue)
	if eKey in aaValues:
		return aaValues[eKey]

	eKey = eString_Prefix + "." + str(eValue_Default)
	if eKey in aaValues:
		return aaValues[eKey]

	if bFlag_UseDefault:
		return eValue_Default

	return eValue


def LoadConfigurations(eString_FullName):
	aaConfigurations = {}

	eString_File = pathlib.Path(eString_FullName).open("r", encoding = "utf-8").read()
	eString_File = eString_File.replace("\r\n", "\n")
	eString_File = eString_File.replace("\r", "\n")
	arStrings_Line = eString_File.split("\n")
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


def LoadJSON(eString_FullName):
	with pathlib.Path(eString_FullName).open("r", encoding = "utf-8") as eFile:
		eJSON = json.load(eFile)

	return eJSON


def PushValue(aaValues, eKey, eValue):
	if eKey in aaValues:
		aaValues[eKey].append(eValue)

	else:
		aaValues[eKey] = [eValue]

	return aaValues


def ReplaceURL(eString_URL, eString_Replace):
	eURL = urlparse(eString_URL)
	eURL = eURL._replace(path = eString_Replace)

	return eURL.geturl()


def SaveBinaryFile(eString_FullName, eBinary):
	with pathlib.Path(eString_FullName).open("wb") as eFile:
		eFile.write(eBinary)

	return


def SaveJSON(eString_FullName, eJSON, Indent = None):
	eFile = pathlib.Path(eString_FullName).open("w", encoding = "utf-8")
	json.dump(eJSON, eFile, indent = Indent)

	return


def Wait_FileCreate(eString_FullName, iTimeout):
	iCount_Loop = 0
	while not os.path.exists(eString_FullName):
		time.sleep(1)
		iCount_Loop += 1
		if iCount_Loop > iTimeout:
			return False

	return True


def Wait_FileDelete(eString_FullName, iTimeout):
	if os.path.exists(eString_FullName):
		os.remove(eString_FullName)

		iCount_Loop = 0
		while os.path.exists(eString_FullName):
			time.sleep(1)
			iCount_Loop += 1
			if iCount_Loop > iTimeout:
				return False

	return True



# ====================================================================
# local
# --------------------------------------------------------------------

def local_ExpandObjects_dict(aaObjects, bFlag_AddType, iLimit):
	eString = ""
	for eKey in aaObjects:
		if eString != "":
			eString += ", "

		eString += eKey
		eString += ": "
		eString += ExpandObjects(aaObjects[eKey], bFlag_AddType, iLimit)

	eString = "{" + eString + "}"

	return eString


def local_ExpandObjects_list(arObjects, bFlag_AddType, iLimit):
	eString = ""
	for eObject in arObjects:
		if eString != "":
			eString += ", "

		eString += ExpandObjects(eObject, bFlag_AddType, iLimit)

	eString = "[" + eString + "]"

	return eString


def local_ExpandObjects_tuple(arObjects, bFlag_AddType, iLimit):
	eString = ""
	for eObject in arObjects:
		if eString != "":
			eString += ", "

		eString += ExpandObjects(eObject, bFlag_AddType, iLimit)

	eString = "(" + eString + ")"

	return eString


def local_ExpandObjects_ndarray(eNDArray, bFlag_AddType, iLimit):
	eString = ""
	eString += "["
	eString += "shape: "
	eString += str(eNDArray.shape)
	eString += ", "
	eString += "shape.type: "
	eString += str(type(eNDArray.shape))
	eString += ", "
	eString += "shape.len: "
	eString += str(len(eNDArray.shape))
	eString += ", "
	eString += "data: "
	eString += local_ExpandObjects_tuple(eNDArray, bFlag_AddType, iLimit)
	eString += "]"

	return eString



