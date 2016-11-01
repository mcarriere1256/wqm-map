////////////////////////////////////////////////////////////////////////////////
////				Stuff to be Translated 									////
////	The stuff in the next section is all of the text that appears at 	////
////	any point on the map. It's stored in simple strings for ease of 	////
////	translation. Enjoy =)												////
////////////////////////////////////////////////////////////////////////////////

var MONTHS = ["Jan", "Feb", "Mar", 		// Array of names of months for displaying
			"Apr", "May", "Jun", 		//	the date in an accessible, clear format,
			"Jul", "Aug", "Sep", 		// 	even for silly US people who choose to put 
			"Oct", "Nov", "Dec"];		//	the month first. Ugh. 

var CONTAMINANTS = ["Fluoride", "Arsenic", "Total Risk"]; 	// Array with list of contaminants in same order
															// 	such that CONTAMINANTS[FLUORIDE] = "Fluoride"
															//	(since FLUORIDE == 0 above...)
var DATE = "Date";
var SEE_MORE = "Complete test results";						// This message gets displayed as a link to show 
															//	more info about the given datapoint
var CARTO_ATTRIBUTION = 'Data hosting on <a href="http://www.dropbox.com">Dropbox</a> legends by <a href="http://www.carto.com">Carto</a>';

var NO_DATA_MSG = "No data";

var F_LABELS = ["0-1.5", "1.5-4", "4-10", "10+"];
var AS_LABELS = ["0-10","10-25","25+"];
var RISK_LABELS = ["\xa0\xa0\xa0Meets\xa0all\xa0standards",
"\xa0\xa0\xa0Exceeds\xa0at\xa0least\xa0one\xa0standard\xa0-\xa0not\xa0safe\xa0for\xa0children",
"\xa0\xa0\xa0Dangerous\xa0if\xa0consumed\xa0regularly",
"\xa0\xa0\xa0Potentially\xa0acutely\xa0toxic!"];

var F_TITLE = "Fluoride (mg/L): WHO Limit = 1.5; Mexican Limit = 1.5";
var AS_TITLE = "Arsenic (&mu;g/L): WHO Limit = 10; Mexican Limit = 25";
var RISK_TITLE = "Water Risk Level";

var OLD_DATA_MSG = "<em>\xa0\xa0\xa0\xa0\xa0\xa0\xa0HISTORICAL DATA</em><br>";