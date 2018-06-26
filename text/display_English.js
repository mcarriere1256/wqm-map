////////////////////////////////////////////////////////////////////////////////
////				Stuff to be Translated 									////
////	The stuff in the next section is all of the text that appears at 	////
////	any point on the map. It's stored in simple strings for ease of 	////
////	translation. Enjoy =)												////
////////////////////////////////////////////////////////////////////////////////
var TITLE = "Independence Watershed Water Risk Map | Caminos de Agua";
var MONTHS = ["Jan", "Feb", "Mar", 		// Array of names of months for displaying
			"Apr", "May", "Jun", 		//	the date in an accessible, clear format,
			"Jul", "Aug", "Sep", 		// 	even for silly US people who choose to put 
			"Oct", "Nov", "Dec"];		//	the month first. Ugh. 

var CONTAMINANTS = ["Fluoride", "Arsenic", "Total Risk"]; 	// Array with list of contaminants in same order
															// 	such that CONTAMINANTS[FLUORIDE] = "Fluoride"
															//	(since FLUORIDE == 0 above...)
var DATE = "Date";
var TEST_ORG = "Testing organization";					
var SEE_MORE = "Official report(s)";						// This message gets displayed as a link to show 
															//	more info about the given datapoint
var CARTO_ATTRIBUTION = 'Data hosting on <a href="http://www.dropbox.com">Dropbox</a> legends by <a href="http://www.carto.com">Carto</a>';

var NO_DATA_MSG = "No data";

var F_LABELS = ["0-1.5", "1.5-3", "3-10", "10+"];
var AS_LABELS = ["0-10","10-25","25+"];
var RISK_LABELS = ["\xa0\xa0\xa0Meets\xa0all\xa0standards",
"\xa0\xa0\xa0Not\xa0safe\xa0for\xa0children\xa0under\xa0the\xa0age\xa0of\xa0seven",
"\xa0\xa0\xa0Dangerous\xa0if\xa0consumed\xa0regularly",
"\xa0\xa0\xa0Potentially\xa0acutely\xa0toxic!"];

var LABELS = [F_LABELS, AS_LABELS];

var F_TITLE = "Fluoride (mg/L): WHO Limit = 1.5; Mexican Limit = 1.5";
var AS_TITLE = "Arsenic (&mu;g/L): WHO Limit = 10; Mexican Limit = 25";
var RISK_TITLE = "<big>Water Risk Level</big> <br>WHO Limits: Fluoride = 1.5 mg/L; Arsenic = 10 &mu;g/L";

var OLD_DATA_MSG = "<em>\xa0\xa0\xa0\xa0\xa0\xa0\xa0HISTORICAL DATA</em><br>";

var LEGEND_URL = "https://caminosdeagua.github.io/Independence-Watershed-Point-Map-English/img/howToRead_ENG.png";
var ARROW_URL = "https://caminosdeagua.github.io/Independence-Watershed-Point-Map-English/img/closeArrowENG.png";

var PRINTING_SUMMARY_MSG = "\n-----***-----***-----***-----***-----***-----***-----\nGreat job, you hacker you! Enjoy the summary...\n-----***-----***-----***-----***-----***-----***-----\n "
var TOTAL_SITES_MSG = "Distinct sites (wells, taps, pipa, etc.) sampled at least once:";
var TOTAL_WELLS_MSG = "Distinct wells sampled at least once:";
var TOTAL_POINTS_MSG = "Total number of datapoints collected (includes duplicates for single site):";
var TOTAL_ORGS_MSG = "Number of testing organizations:";
var ORG_NAMES_MSG = "All testing organizations:";
var CONTAMINANT_HEADER_MSG = "----------------";	
var CONTAM_LIMIT_MSG = "Number of locations whose most recently sampled point is";	
var TOTAL_ABOVE_MSG = "All sites above the WHO limit:";
var TOTAL_ABOVE_BOTH_MSG = "All sites above the WHO limit for both As & F:";
var BOTH_MSG = "Arsenic & Fluoride";

var SEARCH_HELPER_TEXT = "Search...";
var NO_RESULTS_MSG = "Nothing so far";
