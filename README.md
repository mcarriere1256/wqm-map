# wqm-map
Last updated: 8-Nov-2018 
Written by: ask53 | caminosdeagua 
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

## Where is the data?

The data 
