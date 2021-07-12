# Hollow Knight Checklist
A way to keep track of everything that counts towards 112% completion (including all Charm Notches and Pale Ore).

**THIS PAGE CONTAINS SPOILERS!**

Everything that counts towards 112% completion is listed on this page (Charm Notches and Pale Ore [on its own] do not count towards the completion percentage but are included here as a means to track which ones you've already gotten). A running tally of total completion percentage and number of Charm Notches (counting the three you start with) appear along the bottom of the page and will turn gold once everything is checked off.

# Usage
Simply click on a row to mark that item as aquired. To save time, clicking the heading of each section will toggle every item in that section on/off.

Some items have requirements to get them. These can be anything from obtaining a specific piece of equipment, to needing a certain charm, or having enough Geo to buy it.

The location column gives hints as to where to find the item. If the item is located in a named sub-area (e.g. Ancestral Mound) then the main area will be listed next to it in parenthesis.

A few charms have alternative versions. For these, the alternate version is listed in the same row, with the location and requirements of how to unlock.
Everything on the list counts as 1 percentage point, with a few exceptions:
  
  * All equipment except for Godtuner counts as 2%
  * Masks only count as 1% once you acquire 4 Mask Shards
  * Soul Vessels only count as 1% once you acquire 3 Vessel Fragments
  * Charm Notches and Pale Ore do not contribute to the total

# Future Additions
  * A less terrible UI
  * Add Hunter's Journal
  * Add locations for every relic (Wanderer's Journal, Hollownest Seal, King's Idol, and Arcane Egg)
  * Silksong!

# If you want to help out
This project was written in React. It uses React Components to display the data on the page. There are 4 React Components:

  * `App` => The main React App. This is what renders all the other components
  * `Section` => Each section of collectables. This component renders the section headers and instantiates two subcomponents: `TableHeader` and `ListItem`. This component is also responsible for checking all of the items when it is clicked.
  * `TableHeader` => Renders the header of each table. This takes all of the data points in the `items` array of each section in `checklist.json` and puts them in the table header.
  * `ListItem` => Renders the row of each table with the data from the `items` array that is passed in by the `Section` component. This component also handles the logic for incrementing the counters when a row is clicked on.

The data is stored in the file `src/checklist.json`. This file contains an array of objects. Each element of the array is a separate section. Each section has a `section`, `items`, and `description` (currently not in use). `name` is the name of the section and `items` is an array that contains everything for that section (names, requirements, locations, etc). 
