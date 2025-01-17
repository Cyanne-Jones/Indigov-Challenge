# Indigov Tech Challenge

## Welcome to the Representative portal! 
This application provides an interface for you, a government representative of beautiful Citytown, WA, USA to interact with your constituents in the following ways:
- See all your constituents in a variety of different filters and orders
- Add a new constituent without worrying about accidentally duplicating them 
- Download a CSV of your constituents


### Instructions to run 
- Run `npm i` in root, `/api` and `web`
- Run `npm run dev` in the root (starts both FE + BE) 
- Navigate to localhost:3000 in your browser

### View your constituents
From the home page you're able to view all of your constituents in a handy table

[Screencap here!! ]

You're able to manipulate the order of the list using arrow buttons in the table's header to view your list in different ways! 

Click the button to download a CSV of your constituents in order of date joined by default, but use the dropdown menu in the download button to download in different orders.

[Screencap here!! ]

### Add a constituent
- Use the link in the nav bar, or navigate directly to `localhost:3000/add`
- Enter *all* the information for your constituent and add
- If you add a constituent that already exists based on email address, the new information you entered will be merged to that constituent without duplicating.
- User feedback in the form of a snackbar for communicative UX