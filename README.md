# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Execution Plan
Here are the big steps to code this carousel:
- App with a RouterProvider
- Add Important folders: components, constants, images, screens
- Add the Carousel Screen with a Carousel comp and a dropdown Checklist (with nothing inside the two comps)
- Work on the carousel and the logig needed from a higher point (the screen).
- add the designfor the carousel
- same for the checklist, implementing new logics
- look for edge cases
- look how to improve the code

## Use Cases
- several taxRules for one user
- when there is just one user in the checklist that is checked, it is impossible to uncheck the tax group or the user
- when the last user is checked on two rules, if we uncheck the rule with the displayed flag, change the flag

## Notice
- I didnt implement several things because I wanted to work on that a reasonnable amount of time and because it was not reflecting that much my skills (exemple the arrows ups and downs on the tax groups in the check list the change of colours when you cannot click on an arrow, etc..).
- In real work I would have considered all the usecase and work on the css animation and work on the logic in a deeper scale (maybe with redux for exemple), taking into account the whole application and the long run of it.