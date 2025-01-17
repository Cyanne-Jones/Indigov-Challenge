# Indigov Tech Challenge

## Welcome to the Representative portal! 
This application provides an interface for you, a government representative, to interact with your constituents in the following ways:
- See all your constituents in a variety of different orders
- Add a new constituent without worrying about accidentally duplicating them 
- Download a CSV of your constituents in different orders

## Tech Stack
Typescript used across full stack
### Front end:
- Next.js built on React
- MaterialUI

### Back end:
- Node.js
- Express.js
- csv-writer


## Instructions to run 
- clone this repository
- Run `npm i` in root, `/api` and `web`
- Run `npm run dev` in the root (starts both FE + BE using Concurrently) 
- Navigate to `localhost:3000/` in your browser

## View your constituents
From the home page you're able to view all of your constituents in a handy table

![Screenshot 2025-01-17 at 2 18 59 PM](https://github.com/user-attachments/assets/d6ddf80f-c19c-4848-9ebf-5f84713add0d)

You're able to manipulate the order of the list using arrow buttons in the table's header to view your list in different ways! 

Click the button to download a CSV of your constituents and use the dropdown menu in the download button to download in different orders.

![Screenshot 2025-01-17 at 2 19 22 PM](https://github.com/user-attachments/assets/0c69504e-c980-48e0-a5a8-8b31c3c237c1)

## Add a constituent

Use the link in the nav bar, or navigate directly to `localhost:3000/add`
![Screenshot 2025-01-17 at 2 20 10 PM](https://github.com/user-attachments/assets/3302c09d-5046-4dd8-ba7b-6215a15247ab)


- Enter all fields of information for your constituent and add them to your database
- If you add a constituent that already exists based on email address, the new information you entered will be merged to that constituent without duplicating.
- User feedback in the form of a snackbar for communicative UX
- Navigate back to view your constituents and you can see your new addition is there!

## Thoughts for more additions if I had all the time in the world
- A real relational database back end
- Something like GraphQL/Apollo to ensure type-safety across front and back end
- Authentication between the front and backends, this challenges uses mock data, but this is plenty of PII to secure with care in real life
- Sign in between different representatives
- Test suites for back end service layer functions
- End-to-end testing of user flows using Playwright or Cypress
- Deployment

## Thank you for your time!
Please let me know if there's any questions, but I really appreciate your consideration for the engineering position at Indigov!
