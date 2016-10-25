

var map;								// initialize the variable to hold the map

var DATA_URL = "https://dl.dropboxusercontent.com/s/eb80ajfv59csvo3/ask_test_dataset.JSON";
											// ^--- The URL where the data lives in JSON form.
var DATA_NAMES = {							// And store the titles of the columns 
	date: "date",							//	(get from carto.com once you import the dataset.)
	name: "community_name",	
	f: "fluoride",
	as: "arsenic",
	lat: "latitude",
	lng: "longitude",
	docs: "documents"
};

var FLUORIDE = 0; 						// Initialize constants for each contaminant to use as 
var ARSENIC = 1;						// 	an index to call contaminant-specific information, like
var TOTAL_RISK = 2; 					//  how to bin markers and draw legends and labels. 

var F_BINS = [1.49, 3.99, 9.99];		// Store the contamination bins. For fluoride, for example, the
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
var SPIDER_LABEL_OFFSET = [-50, -8];	// offset for spider date labels 
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
										
var X_URL = "https://dl.dropboxusercontent.com/s/n3wh4pazt501ckn/xButton_blue.png";		// URL for x-button used to close the spider
									
var BASE_URLS = ["https://dl.dropboxusercontent.com/s/4a9kueof9sgf0hq/greyPoint.png",				// Store array of all images to use as marker icons. 
	'https://dl.dropboxusercontent.com/s/tfpxfn55cl8q83j/greenPoint.png',	// 	[0]: no data, [1]: green, [2]: orange, [3]: red, [4] black
	'https://dl.dropboxusercontent.com/s/g1ujd6fvgv67ae4/yellowPoint.png',
	'https://dl.dropboxusercontent.com/s/ijl44tp7uuwzis6/redPoint.png',
	'https://dl.dropboxusercontent.com/s/2khvqz8eez00ph2/blackPoint.png'
];
var SPIDER_URLS = ["https://dl.dropboxusercontent.com/s/ckhdv1fv116xcbe/greySpider.png",			// URLs for points to be spidered
	'https://dl.dropboxusercontent.com/s/uuaqbad4bce8m24/greenSpider.png',
	"https://dl.dropboxusercontent.com/s/vovd77flyqt93fb/yellowSpider.png",
	"https://dl.dropboxusercontent.com/s/lrpnedopnejjpxo/redSpider.png",
	"https://dl.dropboxusercontent.com/s/bj4u49t6xfu2df4/blackSpider.png"
];

var SMALL_ICON_SIZE = [16,16]; 			// The pixel x and y that the final marker icon image is scaled to. 
var LARGE_ICON_SIZE = [24,24];			// A larger marker for the base of the spider 
var BASE_ICONS = [0,0,0,0];				// Initialize an array to hold all the icons, so the images 
var SPIDER_ICONS = [0,0,0,0];			//	only need to be grabbed once. 
var BASE_SPIDER_ICONS = [0,0,0,0];


