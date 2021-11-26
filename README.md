# FE Task
What you’ll be doing
Create a Vue.js project based on the design in the attached XD file. For the bookmakers data
use the attached bookmakers.json file.
Requirements
The dropdown above the list should should be able to filter it and show:
● all bookmakers
● all active bookmakers
● all inactive bookmakers
● a specific bookmaker
The check all button should make all bookmakers active, and the remove all - inactive.
By default all the bookmakers are active. The user should be able to deactivate/activate
each bookmaker by unchecking/checking its checkbox in the list. The user should be able to
change the bookmakers order by dragging the list rows. Each bookmaker should have a
default link that cannot be empty.
The user should be able to add one or many country specific (local) links for each
bookmaker with the add local link button. Clicking it should add an extra row with an input
for the local link and a countries dropdown. Use the attached countries.json file to populate
the countries in the dropdown. Clicking the X icon should remove the added local link row.
After clicking the Save button update the bookmakers.json file with the new information.
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
