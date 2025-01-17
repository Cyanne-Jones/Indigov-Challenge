# Indigov Tech Challenge

## Welcome to the Representative portal! 
This application provides an interface for you, a government representative, to interact with your constituents in the following ways:
- See all your constituents in a variety of different orders
- Add a new constituent without worrying about accidentally duplicating them 
- Download a CSV of your constituents in different orders


### Instructions to run 
- Run `npm i` in root, `/api` and `web`
- Run `npm run dev` in the root (starts both FE + BE) 
- Navigate to `localhost:3000/` in your browser

### View your constituents
From the home page you're able to view all of your constituents in a handy table

[Screencap here!! ]

You're able to manipulate the order of the list using arrow buttons in the table's header to view your list in different ways! 

Click the button to download a CSV of your constituents and use the dropdown menu in the download button to download in different orders.

[Screencap here!! ]

### Add a constituent
- Use the link in the nav bar, or navigate directly to `localhost:3000/add`
- Enter all fields of information for your constituent and add them to your database
- If you add a constituent that already exists based on email address, the new information you entered will be merged to that constituent without duplicating.
- User feedback in the form of a snackbar for communicative UX
- Navigate back to view your constituents and you can see your new addition is there!

Please let me know if there's any questions, but I really appreciate your time and consideration for the engineering position at Indigov!