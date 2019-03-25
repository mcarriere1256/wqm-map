# wqm-map
Last updated: 8-Nov-2018  
Written by: caminosdeagua | ask53   
Contact: www.caminosdeagua.org/en/contact  

## What is the map?
The map shows a point for every water sample that Caminos de Agua (and perhaps some other groups) has ever tested in the Laguna Seca and Alta del Rio Laja sub basins in the northern part of the state of Guanajuato, México. These two sub-basins, part of the larger Lerma'Chapala basin, contain the municipalities of San Miguel de Allende, Dolores Hidalgo, San Diego de la Unión, San Luis de la Paz, San José Iturbide, Doctor Mora, and San Felipe. Points are color'coded by risk level for various contaminants: arsenic, fluoride, etc. When you select a point, all of the known historical data for the site, as far back as 2012, is displayed. When you click these points, or points without historical data, more details are displayed. Some points popups have links to water quality monitoring reports written by Caminos de Agua or our partners.

The map is a combination of html., css, sql, javascript, and various javascript tools (leaflet.js, carto, mapbox). If that doesn't mean anything to you, no worries, but you probably shouldn't be making any functional changes to the map, unless you have significant non-web coding experience or feel like sinking a bunch of time into learning this stuff. That said, its totally doable if you've got the time. 

## Use
Since this project is exclusively a "front end" with no server-based code, it lives here on github and is accessible for viewing in github pages. You can view it at: https://caminosdeagua.github.io/wqm-map

To embed this page on a website, simply use an iframe with the following code, adjusting the width, height, and language as desired:

```html
<iframe width="100%" height="520" frameborder="0" src="https://caminosdeagua.github.io/wqm-map#en" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
```

To use the map in another language, just add a hash. So ...io/wqm-map#es will display in spanish while ...io/wqm-map#en will display in English. Default (no hash) displays in English. Currently only available in English & Spanish.

## How it works | how to update
If you are not a member of the Caminos de Agua team and/or cannot commit to this repo, ignore the rest of this page and enjoy perusing or using the map! To use, please see the license information below. 

*The data for this project was originally stored in a JSON in this repository. THAT IS NOW OUTDATED. If you have any instructions for updating the map that involve a JSON, javascript, or an excel file, please ignore them. These are the most up-to-date instructions (as of 8-Nov-2018).*

The data is stored in a public, read-only Google Sheet, called "WQM Map PUBLIC" stored in Caminos de Agua's Google Drive. You can access these data at:
https://docs.google.com/spreadsheets/d/1pUrg48cqrHdYrcsGww0g0pAcCe65lU9ff0EKWHYlJnc/edit?usp=sharing

A few notes:
1. In "WQM Map PUBLIC," the column A **must** be date column B **must** be the site name (household, colonia, community, well name, etc.). The rows do not need to be in any particular order.

2. DO NOT change the column names, as the map reads the spreadsheet based on specific column headers. The data is read in through Google's Visualization API. 

3. Dates need to be in 'date' format in Google Sheets, but it doesn't matter how they are displayed. 

## License
This work is shared under a Creative Commons 4.0 attribution, non-commercial license. It is also covered under [The MIT License](https://opensource.org/licenses/MIT). 

To give propper attribution, please cite:

Creative Commons License
[Water Quality Map | Caminos de Agua](https://caminosdeagua.github.io/wqm-map) by [Caminos de Agua](https://www.caminosdeagua.org) is distributed under a [4.0 International Atribution-NoCommercial Creative Commons License](https://creativecommons.org/share-your-work/licensing-types-examples/).

## Contact
With any questions please use the contact page for [Caminos de Agua](caminosdeagua.org) or contact github users @caminosdeagua or @ask53. 


