# 日本語UTF-8, LF, Tab=4



# import
import modules.SIMPL as SIMPL
import modules.SIMPL.Tests.Base as TestBase



# local



# ====================================================================
# main
# --------------------------------------------------------------------

def Main(aaConfigurations):
	Check.OK.Boolean(aaConfigurations)
	Check.OK.Integer(aaConfigurations)
	Check.OK.Null(aaConfigurations)
	Check.OK.String(aaConfigurations)

	SIMPL.Functions.Wait_FileDelete(aaConfigurations["Base.FileName.Check"])
	with SIMPL.Functions.ChangeSTDOUT(aaConfigurations["Base.FileName.Check"]):
		TestBase.SetMode(False)
		Check.NG.Boolean(aaConfigurations)
		Check.NG.Integer(aaConfigurations)
		Check.NG.Null(aaConfigurations)
		Check.NG.String(aaConfigurations)
		TestBase.SetMode()

	return



# ====================================================================
# Base
# --------------------------------------------------------------------

class Check():
	class NG():
		def Boolean(aaConfigurations):
			TestBase.AddCount()

			TestBase.Check.Boolean(None)
#			TestBase.Check.Boolean(True)
			TestBase.Check.Boolean(False)
			TestBase.Check.Boolean(0)
			TestBase.Check.Boolean(1)
			TestBase.Check.Boolean("None")
			TestBase.Check.Boolean("True")
			TestBase.Check.Boolean("False")
			TestBase.Check.Boolean("0")
			TestBase.Check.Boolean("1")
			TestBase.Check.Boolean("")
			TestBase.Check.Boolean("a")
			TestBase.Check.Boolean([])
			TestBase.Check.Boolean([0, ""])
			TestBase.Check.Boolean(())
			TestBase.Check.Boolean((0, ""))
			TestBase.Check.Boolean({})
			TestBase.Check.Boolean({0: ""})
			TestBase.Check.Boolean(None, False)
			TestBase.Check.Boolean(True, False)
#			TestBase.Check.Boolean(False, False)
			TestBase.Check.Boolean(0, False)
			TestBase.Check.Boolean(1, False)
			TestBase.Check.Boolean("None", False)
			TestBase.Check.Boolean("True", False)
			TestBase.Check.Boolean("False", False)
			TestBase.Check.Boolean("0", False)
			TestBase.Check.Boolean("1", False)
			TestBase.Check.Boolean("", False)
			TestBase.Check.Boolean("a", False)
			TestBase.Check.Boolean([], False)
			TestBase.Check.Boolean([0, ""], False)
			TestBase.Check.Boolean((), False)
			TestBase.Check.Boolean((0, ""), False)
			TestBase.Check.Boolean({}, False)
			TestBase.Check.Boolean({0: ""}, False)

			TestBase.AddState(TestBase.CheckBlockCount(34))

			return


		def Integer(aaConfigurations):
			TestBase.AddCount()

			TestBase.Check.Integer(None)
			TestBase.Check.Integer(True)
			TestBase.Check.Integer(False)
#			TestBase.Check.Integer(0)
			TestBase.Check.Integer(1)
			TestBase.Check.Integer("None")
			TestBase.Check.Integer("True")
			TestBase.Check.Integer("False")
			TestBase.Check.Integer("0")
			TestBase.Check.Integer("1")
			TestBase.Check.Integer("")
			TestBase.Check.Integer("a")
			TestBase.Check.Integer([])
			TestBase.Check.Integer([0, ""])
			TestBase.Check.Integer(())
			TestBase.Check.Integer((0, ""))
			TestBase.Check.Integer({})
			TestBase.Check.Integer({0: ""})
			TestBase.Check.Integer(None, 1)
			TestBase.Check.Integer(True, 1)
			TestBase.Check.Integer(False, 1)
			TestBase.Check.Integer(0, 1)
#			TestBase.Check.Integer(1, 1)
			TestBase.Check.Integer("None", 1)
			TestBase.Check.Integer("True", 1)
			TestBase.Check.Integer("False", 1)
			TestBase.Check.Integer("0", 1)
			TestBase.Check.Integer("1", 1)
			TestBase.Check.Integer("", 1)
			TestBase.Check.Integer("a", 1)
			TestBase.Check.Integer([], 1)
			TestBase.Check.Integer([0, ""], 1)
			TestBase.Check.Integer((), 1)
			TestBase.Check.Integer((0, ""), 1)
			TestBase.Check.Integer({}, 1)
			TestBase.Check.Integer({0: ""}, 1)
			TestBase.Check.Integer(None, 1, False)
			TestBase.Check.Integer(True, 1, False)
			TestBase.Check.Integer(False, 1, False)
#			TestBase.Check.Integer(0, 1, False)
			TestBase.Check.Integer(1, 1, False)
			TestBase.Check.Integer("None", 1, False)
			TestBase.Check.Integer("True", 1, False)
			TestBase.Check.Integer("False", 1, False)
			TestBase.Check.Integer("0", 1, False)
			TestBase.Check.Integer("1", 1, False)
			TestBase.Check.Integer("", 1, False)
			TestBase.Check.Integer("a", 1, False)
			TestBase.Check.Integer([], 1, False)
			TestBase.Check.Integer([0, ""], 1, False)
			TestBase.Check.Integer((), 1, False)
			TestBase.Check.Integer((0, ""), 1, False)
			TestBase.Check.Integer({}, 1, False)
			TestBase.Check.Integer({0: ""}, 1, False)

			TestBase.AddState(TestBase.CheckBlockCount(51))

			return


		def Null(aaConfigurations):
			TestBase.AddCount()

#			TestBase.Check.Null(None)
			TestBase.Check.Null(True)
			TestBase.Check.Null(False)
			TestBase.Check.Null(0)
			TestBase.Check.Null(1)
			TestBase.Check.Null("None")
			TestBase.Check.Null("True")
			TestBase.Check.Null("False")
			TestBase.Check.Null("0")
			TestBase.Check.Null("1")
			TestBase.Check.Null("")
			TestBase.Check.Null("a")
			TestBase.Check.Null([])
			TestBase.Check.Null([0, ""])
			TestBase.Check.Null(())
			TestBase.Check.Null((0, ""))
			TestBase.Check.Null({})
			TestBase.Check.Null({0: ""})
			TestBase.Check.Null(None, False)
#			TestBase.Check.Null(True, False)
#			TestBase.Check.Null(False, False)
#			TestBase.Check.Null(0, False)
#			TestBase.Check.Null(1, False)
#			TestBase.Check.Null("None", False)
#			TestBase.Check.Null("True", False)
#			TestBase.Check.Null("False", False)
#			TestBase.Check.Null("0", False)
#			TestBase.Check.Null("1", False)
#			TestBase.Check.Null("", False)
#			TestBase.Check.Null("a", False)
#			TestBase.Check.Null([], False)
#			TestBase.Check.Null([0, ""], False)
#			TestBase.Check.Null((), False)
#			TestBase.Check.Null((0, ""), False)
#			TestBase.Check.Null({}, False)
#			TestBase.Check.Null({0: ""}, False)

			TestBase.AddState(TestBase.CheckBlockCount(18))

			return


		def String(aaConfigurations):
			TestBase.AddCount()

			TestBase.Check.String(None)
			TestBase.Check.String(True)
			TestBase.Check.String(False)
			TestBase.Check.String(0)
			TestBase.Check.String(1)
			TestBase.Check.String("None")
			TestBase.Check.String("True")
			TestBase.Check.String("False")
			TestBase.Check.String("0")
			TestBase.Check.String("1")
#			TestBase.Check.String("")
			TestBase.Check.String("a")
			TestBase.Check.String([])
			TestBase.Check.String([0, ""])
			TestBase.Check.String(())
			TestBase.Check.String((0, ""))
			TestBase.Check.String({})
			TestBase.Check.String({0: ""})
			TestBase.Check.String(None, "a")
			TestBase.Check.String(True, "a")
			TestBase.Check.String(False, "a")
			TestBase.Check.String(0, "a")
			TestBase.Check.String(1, "a")
			TestBase.Check.String("None", "a")
			TestBase.Check.String("True", "a")
			TestBase.Check.String("False", "a")
			TestBase.Check.String("0", "a")
			TestBase.Check.String("1", "a")
			TestBase.Check.String("", "a")
#			TestBase.Check.String("a", "a")
			TestBase.Check.String([], "[]")
			TestBase.Check.String([0, ""], '[0, ""]')
			TestBase.Check.String((), "()")
			TestBase.Check.String((0, ""), '(0, "")')
			TestBase.Check.String({}, "{}")
			TestBase.Check.String({0: ""}, '{0, ""}')
			TestBase.Check.String(None, "a", False)
			TestBase.Check.String(True, "a", False)
			TestBase.Check.String(False, "a", False)
			TestBase.Check.String(0, "a", False)
			TestBase.Check.String(1, "a", False)
#			TestBase.Check.String("None", "a", False)
#			TestBase.Check.String("True", "a", False)
#			TestBase.Check.String("False", "a", False)
#			TestBase.Check.String("0", "a", False)
#			TestBase.Check.String("1", "a", False)
#			TestBase.Check.String("", "a", False)
			TestBase.Check.String("a", "a", False)
			TestBase.Check.String([], "[]", False)
			TestBase.Check.String([0, ""], '[0, ""]', False)
			TestBase.Check.String((), "()", False)
			TestBase.Check.String((0, ""), '(0, "")', False)
			TestBase.Check.String({}, "{}", False)
			TestBase.Check.String({0: ""}, '{0, ""}', False)

			TestBase.AddState(TestBase.CheckBlockCount(46))

			return


	class OK():
		def Boolean(aaConfigurations):
			TestBase.AddCount()

#			TestBase.Check.Boolean(None)
			TestBase.Check.Boolean(True)
#			TestBase.Check.Boolean(False)
#			TestBase.Check.Boolean(0)
#			TestBase.Check.Boolean(1)
#			TestBase.Check.Boolean("None")
#			TestBase.Check.Boolean("True")
#			TestBase.Check.Boolean("False")
#			TestBase.Check.Boolean("0")
#			TestBase.Check.Boolean("1")
#			TestBase.Check.Boolean("")
#			TestBase.Check.Boolean("a")
#			TestBase.Check.Boolean([])
#			TestBase.Check.Boolean([0, ""])
#			TestBase.Check.Boolean(())
#			TestBase.Check.Boolean((0, ""))
#			TestBase.Check.Boolean({})
#			TestBase.Check.Boolean({0: ""})
#			TestBase.Check.Boolean(None, False)
#			TestBase.Check.Boolean(True, False)
			TestBase.Check.Boolean(False, False)
#			TestBase.Check.Boolean(0, False)
#			TestBase.Check.Boolean(1, False)
#			TestBase.Check.Boolean("None", False)
#			TestBase.Check.Boolean("True", False)
#			TestBase.Check.Boolean("False", False)
#			TestBase.Check.Boolean("0", False)
#			TestBase.Check.Boolean("1", False)
#			TestBase.Check.Boolean("", False)
#			TestBase.Check.Boolean("a", False)
#			TestBase.Check.Boolean([], False)
#			TestBase.Check.Boolean([0, ""], False)
#			TestBase.Check.Boolean((), False)
#			TestBase.Check.Boolean((0, ""), False)
#			TestBase.Check.Boolean({}, False)
#			TestBase.Check.Boolean({0: ""}, False)

			TestBase.AddState(TestBase.CheckBlockCount())

			return


		def Integer(aaConfigurations):
			TestBase.AddCount()

#			TestBase.Check.Integer(None)
#			TestBase.Check.Integer(True)
#			TestBase.Check.Integer(False)
			TestBase.Check.Integer(0)
#			TestBase.Check.Integer(1)
#			TestBase.Check.Integer("None")
#			TestBase.Check.Integer("True")
#			TestBase.Check.Integer("False")
#			TestBase.Check.Integer("0")
#			TestBase.Check.Integer("1")
#			TestBase.Check.Integer("")
#			TestBase.Check.Integer("a")
#			TestBase.Check.Integer([])
#			TestBase.Check.Integer([0, ""])
#			TestBase.Check.Integer(())
#			TestBase.Check.Integer((0, ""))
#			TestBase.Check.Integer({})
#			TestBase.Check.Integer({0: ""})
#			TestBase.Check.Integer(None, 1)
#			TestBase.Check.Integer(True, 1)
#			TestBase.Check.Integer(False, 1)
#			TestBase.Check.Integer(0, 1)
			TestBase.Check.Integer(1, 1)
#			TestBase.Check.Integer("None", 1)
#			TestBase.Check.Integer("True", 1)
#			TestBase.Check.Integer("False", 1)
#			TestBase.Check.Integer("0", 1)
#			TestBase.Check.Integer("1", 1)
#			TestBase.Check.Integer("", 1)
#			TestBase.Check.Integer("a", 1)
#			TestBase.Check.Integer([], 1)
#			TestBase.Check.Integer([0, ""], 1)
#			TestBase.Check.Integer((), 1)
#			TestBase.Check.Integer((0, ""), 1)
#			TestBase.Check.Integer({}, 1)
#			TestBase.Check.Integer({0: ""}, 1)
#			TestBase.Check.Integer(None, 1, False)
#			TestBase.Check.Integer(True, 1, False)
#			TestBase.Check.Integer(False, 1, False)
			TestBase.Check.Integer(0, 1, False)
#			TestBase.Check.Integer(1, 1, False)
#			TestBase.Check.Integer("None", 1, False)
#			TestBase.Check.Integer("True", 1, False)
#			TestBase.Check.Integer("False", 1, False)
#			TestBase.Check.Integer("0", 1, False)
#			TestBase.Check.Integer("1", 1, False)
#			TestBase.Check.Integer("", 1, False)
#			TestBase.Check.Integer("a", 1, False)
#			TestBase.Check.Integer([], 1, False)
#			TestBase.Check.Integer([0, ""], 1, False)
#			TestBase.Check.Integer((), 1, False)
#			TestBase.Check.Integer((0, ""), 1, False)
#			TestBase.Check.Integer({}, 1, False)
#			TestBase.Check.Integer({0: ""}, 1, False)

			TestBase.AddState(TestBase.CheckBlockCount())

			return


		def Null(aaConfigurations):
			TestBase.AddCount()

			TestBase.Check.Null(None)
#			TestBase.Check.Null(True)
#			TestBase.Check.Null(False)
#			TestBase.Check.Null(0)
#			TestBase.Check.Null(1)
#			TestBase.Check.Null("None")
#			TestBase.Check.Null("True")
#			TestBase.Check.Null("False")
#			TestBase.Check.Null("0")
#			TestBase.Check.Null("1")
#			TestBase.Check.Null("")
#			TestBase.Check.Null("a")
#			TestBase.Check.Null([])
#			TestBase.Check.Null([0, ""])
#			TestBase.Check.Null(())
#			TestBase.Check.Null((0, ""))
#			TestBase.Check.Null({})
#			TestBase.Check.Null({0: ""})
#			TestBase.Check.Null(None, False)
			TestBase.Check.Null(True, False)
			TestBase.Check.Null(False, False)
			TestBase.Check.Null(0, False)
			TestBase.Check.Null(1, False)
			TestBase.Check.Null("None", False)
			TestBase.Check.Null("True", False)
			TestBase.Check.Null("False", False)
			TestBase.Check.Null("0", False)
			TestBase.Check.Null("1", False)
			TestBase.Check.Null("", False)
			TestBase.Check.Null("a", False)
			TestBase.Check.Null([], False)
			TestBase.Check.Null([0, ""], False)
			TestBase.Check.Null((), False)
			TestBase.Check.Null((0, ""), False)
			TestBase.Check.Null({}, False)
			TestBase.Check.Null({0: ""}, False)

			TestBase.AddState(TestBase.CheckBlockCount())

			return


		def String(aaConfigurations):
			TestBase.AddCount()

#			TestBase.Check.String(None)
#			TestBase.Check.String(True)
#			TestBase.Check.String(False)
#			TestBase.Check.String(0)
#			TestBase.Check.String(1)
#			TestBase.Check.String("None")
#			TestBase.Check.String("True")
#			TestBase.Check.String("False")
#			TestBase.Check.String("0")
#			TestBase.Check.String("1")
			TestBase.Check.String("")
#			TestBase.Check.String("a")
#			TestBase.Check.String([])
#			TestBase.Check.String([0, ""])
#			TestBase.Check.String(())
#			TestBase.Check.String((0, ""))
#			TestBase.Check.String({})
#			TestBase.Check.String({0: ""})
#			TestBase.Check.String(None, "a")
#			TestBase.Check.String(True, "a")
#			TestBase.Check.String(False, "a")
#			TestBase.Check.String(0, "a")
#			TestBase.Check.String(1, "a")
#			TestBase.Check.String("None", "a")
#			TestBase.Check.String("True", "a")
#			TestBase.Check.String("False", "a")
#			TestBase.Check.String("0", "a")
#			TestBase.Check.String("1", "a")
#			TestBase.Check.String("", "a")
			TestBase.Check.String("a", "a")
#			TestBase.Check.String([], "[]")
#			TestBase.Check.String([0, ""], '[0, ""]')
#			TestBase.Check.String((), "()")
#			TestBase.Check.String((0, ""), '(0, "")')
#			TestBase.Check.String({}, "{}")
#			TestBase.Check.String({0: ""}, '{0, ""}')
#			TestBase.Check.String(None, "a", False)
#			TestBase.Check.String(True, "a", False)
#			TestBase.Check.String(False, "a", False)
#			TestBase.Check.String(0, "a", False)
#			TestBase.Check.String(1, "a", False)
			TestBase.Check.String("None", "a", False)
			TestBase.Check.String("True", "a", False)
			TestBase.Check.String("False", "a", False)
			TestBase.Check.String("0", "a", False)
			TestBase.Check.String("1", "a", False)
			TestBase.Check.String("", "a", False)
#			TestBase.Check.String("a", "a", False)
#			TestBase.Check.String([], "[]", False)
#			TestBase.Check.String([0, ""], '[0, ""]', False)
#			TestBase.Check.String((), "()", False)
#			TestBase.Check.String((0, ""), '(0, "")', False)
#			TestBase.Check.String({}, "{}", False)
#			TestBase.Check.String({0: ""}, '{0, ""}', False)

			TestBase.AddState(TestBase.CheckBlockCount())

			return



