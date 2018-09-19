
var map;								// initialize the variable to hold the map
										// ^--- The URL where the data lives in JSON form.

var DATA_NAMES = {							// And store the titles of the columns 							
	day: "day",
	month: "month",
	year: "year",
	name: "community_name",	
	f: "fluoride",
	as: "arsenic",
	lat: "latitude",
	lng: "longitude",
	docs: "documents",
	test_org: "Testing Organisation",
	site_type: "Type"
};

var ORGS = []; 							// To hold a list of all the organizations who perform sampling/testing

var FLUORIDE = 0; 						// Initialize constants for each contaminant to use as 
var ARSENIC = 1;						// 	an index to call contaminant-specific information, like
var TOTAL_RISK = 2; 					//  how to bin markers and draw legends and labels. 
var MAP_TYPES = [FLUORIDE, ARSENIC, TOTAL_RISK];

var GREY = 0;							// Color codes used to determine which color point to plot. 
var GREEN = 1;
var YELLOW = 2;
var RED = 3;
var BLACK = 4;

var F_COLORS = [GREY, GREEN, YELLOW, RED, BLACK];	// set the order of the colors to be displayed on each map
var AS_COLORS = [GREY, GREEN, RED, BLACK];
var TOTAL_RISK_COLORS = [GREY, GREEN, YELLOW, RED, BLACK];
var COLORS = [F_COLORS, AS_COLORS, TOTAL_RISK_COLORS];

var F_BINS = [1.49, 2.99, 9.99];		// Store the contamination bins. For fluoride, for example, the
var AS_BINS = [9.99,24.99]				//	bins are 0-1.5 mg/L, 1.5-4 mg/L, 4-10 mg/L, and >10 mg/L. 
var TOTAL_RISK_BINS = ["combined", FLUORIDE, ARSENIC]; 
										// If we're combining contaminants, use the 
										//	form ["combined", contam_1, contam_2, ... , contam_n]
var BINS = [F_BINS, AS_BINS, TOTAL_RISK_BINS]; 
										// Store them all in BINS. 

var NOT_PRESENT = -1;					// The default value of an index if an element doesn't exist in an array
var EPS = 0.0001; 						// This epsilon is the acceptable difference in lat or lng 										
										//	between 2 points to classify them as occupying the same location.
var activeContaminant = -1; 			// A value that indicates the current contaminant being mapped								

var base;	 							// Store all info relevant to base points		
var dup_indices;						// An array of arrays of the data indices of duplicate points.
										// 	Each internal array holds points with the same latLng. 
var AllData;							// Global var to hold all data.
var spiderFeatures; 					// a global var to store all of the data that's being spidered
var spiderOpen = false; 				// Records whether any spidered points are visible.
var spiderOpenIndex = -1; 				// stores the data index of the currently open (or last opened, if none) spider

var POPUP_OFFSET = [88, 6]; 			// offset of the popup from the point
var SPIDER_Z_OFFSET = 100; 				// define the z-axes for the various layers, spidered points			
var BASE_Z_OFFSET = 10; 				//	and base points. 
var SPIDER_LABEL_OFFSET = [-80, -8];	// offset for spider date labels 
var X_OFFSET = 999999;					// The x-index-offset for the x-out button

var MAP_CENTER = [21.05,-100.65];		// Set all map starting parameters
var MAP_MIN_ZOOM = 2;
var MAP_MAX_ZOOM = 18;
var MAP_INIT_ZOOM = 10;

var X_STRETCH = 12;						// Constants used to setup the spider
var Y_STRETCH = 30;						//	geometry.

var POLY_WEIGHT = 5;					// weight of the spidered polylines
var POLY_OPACITY = 1;					// opacity of the spidered polylines
var POLY_COLOR = '#2027f9';				// color of the spidered polylines

var MAX_LABEL_LINE_CHARS = 20;			// the max number of characters on a line in the floating labels

var STAMEN_MAP_TYPE = "terrain";		// Set which type of stamen map we want as a base layer.
										// 	options include: "terrain", "watercolor", and "toner"	
										
var X_URL = "https://caminosdeagua.github.io/wqm-map/img/xButton_blue.png";		// URL for x-button used to close the spider
									
var BASE_URLS = ["https://caminosdeagua.github.io/wqm-map/img/grey-grey.png",		// URLs for points with white borders
				"https://caminosdeagua.github.io/wqm-map/img/green-green.png",
				"https://caminosdeagua.github.io/wqm-map/img/yellow-yellow.png",
				"https://caminosdeagua.github.io/wqm-map/img/red-red.png",
				"https://caminosdeagua.github.io/wqm-map/img/black-black.png"];

var SPIDER_URLS = ["https://caminosdeagua.github.io/wqm-map/img/greySpider.png",	// URLs for point with blue borders
				"https://caminosdeagua.github.io/wqm-map/img/greenSpider.png",
				"https://caminosdeagua.github.io/wqm-map/img/yellowSpider.png",
				"https://caminosdeagua.github.io/wqm-map/img/redSpider.png",
				"https://caminosdeagua.github.io/wqm-map/img/blackSpider.png"];
				
var HISTORICAL_BASE_URLS = [["https://caminosdeagua.github.io/wqm-map/img/grey-white.png",		// URLs for points with specific borders
							"https://caminosdeagua.github.io/wqm-map/img/grey-green.png",
							"https://caminosdeagua.github.io/wqm-map/img/grey-yellow.png",
							"https://caminosdeagua.github.io/wqm-map/img/grey-red.png",
							"https://caminosdeagua.github.io/wqm-map/img/grey-black.png"],
							[0,"https://caminosdeagua.github.io/wqm-map/img/green-white.png",
							"https://caminosdeagua.github.io/wqm-map/img/green-yellow.png",
							"https://caminosdeagua.github.io/wqm-map/img/green-red.png",
							"https://caminosdeagua.github.io/wqm-map/img/green-black.png"],
							[0,0,"https://caminosdeagua.github.io/wqm-map/img/yellow-white.png",
							"https://caminosdeagua.github.io/wqm-map/img/yellow-red.png",
							"https://caminosdeagua.github.io/wqm-map/img/yellow-black.png"],
							[0,0,0,"https://caminosdeagua.github.io/wqm-map/img/red-white.png",
							"https://caminosdeagua.github.io/wqm-map/img/red-black.png"],
							[0,0,0,0,"https://caminosdeagua.github.io/wqm-map/img/black-white.png"]];

var SMALL_ICON_SIZE = [16,16]; 			// The pixel x and y that the final marker icon image is scaled to. 
var LARGE_ICON_SIZE = [24,24];			// A larger marker for the base of the spider
var EXTRA_SMALL_ICON_SIZE = [12,12]		// extra small icon size for base point without historical data	 
var BASE_ICONS = [0,0,0,0,0];				// Initialize an array to hold all the icons, so the images 
var SPIDER_ICONS = [0,0,0,0,0];			//	only need to be grabbed once. 
var BASE_SPIDER_ICONS = [0,0,0,0,0];
var HISTORICAL_BASE_ICONS = [[0,0,0,0,0],[0,0,0,0],[0,0,0],[0,0],[0]];

var HELP_URL = "https://caminosdeagua.github.io/wqm-map/img/questionMark2.png";
var HELP_URL_HOVER = "https://caminosdeagua.github.io/wqm-map/img/questionMark2Hover.png"

var MAPBOX_ID = "pk.eyJ1IjoiY2FtaW5vc2RlYWd1YSIsImEiOiJjaXRsb3V1MDUwMGR2Mm9tdThncnYydTU4In0.DcxDn8J5RJ--WQ3gckONIw";
var MAPBOX_MAP_TYPE = "caminosdeagua.935ff2fb";	// Which mapbox tile set to display. options: "mapbox.streets" (classic), "caminosdeagua.935ff2fb" (displays small towns one zoom level earlier)		
	
var MAX_SEARCH_LENGTH = 6; 
