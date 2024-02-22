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
- Work on the carousel and the logic needed from a higher point (the screen).
- add the design for the carousel
- same for the checklist, implementing new logics
- look for edge cases
- look how to improve the code

## Use Cases
- several taxRules for one user
- when there is just one user in the checklist that is checked, it is impossible to uncheck the tax group or the user
- when the last user is checked on two rules, if we uncheck the rule with the displayed flag, change the flag
- There is one use case that I didnt implement but I am aware of: when a user is on two rules and one of the taxRule itself is not checked, but inside the user was checked. In this case I dont display near the user grant the good flag always. If the user itself was uncheck it would have been different. The way to fix that is to check in checkedGroups if the rule is checked and if not to move over the taxRules array.

## Notice
- I didnt implement several things because I wanted to work on that a reasonnable amount of time and because it was not reflecting that much my skills after what I already did (exemples: everal css animations that we could add, grey arrow when you cannot click on it etc..).
- In real work I would have considered all the usecases and work on the css animation and work on the logic in a deeper scale (maybe with hooks redux or redux if need to store the states all over the app for exemple ), taking into account the whole application and the long run of it.

## Exercice
# **Exercise: Carousel Component**

---

### Background

Slice Company specializes in assisting companies with granting equity to employees globally, adhering to each country's local tax rules. Your task is to implement a key component of their system.

### Exercise Description

You are required to develop a Carousel Component for navigating through grant documents. This component is part of a larger system that displays grant awards for various stakeholders.

**Your task does not include implementing the document viewer.**

### Main Requirements

1. **Navigation Functionality**: Ability to move from one grant document to another.
2. **Filtering by Tax Rules**: Capability to filter grants based on the tax rules of different countries.
3. **Display Information**: Show the number of grants under each set of tax rules and the stakeholders relevant to those tax rules.

### Data Model

- **Tax Object**:
    
    ```jsx
    {
      countryCode: number; // Example: 1, 2, 3...
      taxRuleName: string; // Example: "Rule A", "Rule B"...
    }
    
    ```
    
- **Grant Object**:
    
    ```jsx
    {
      stakeholderName: string; // Example: "Aki Avni"
      taxRules: Tax[];
    }
    
    ```
    
- You will be provided with an array of `Grant` objects.
- Note that a single grant may be associated with multiple tax rules. If you filter by one tax rule, grants associated with multiple rules should still appear if they include the filtered rule.

### Task Breakdown

1. **Component Hierarchy**: Decompose the component hierarchy for the carousel.
2. **Execution Plan**: Outline your plan for implementing the carousel, including the setup of your development environment, libraries or frameworks you plan to use, and steps of development.
3. **Use Cases**: Document all use cases your carousel implementation will cover. This should include normal operations, edge cases, and how the component behaves under different conditions.

### Deliverables

- A clear component hierarchy diagram or description.
- A detailed execution plan for the carousel component.
- A comprehensive list of use cases your implementation covers.
- The implemented carousel component code (in React), adhering to modern coding standards and best practices.
- Please submit your solution to: https://codesandbox.io/

### Evaluation Criteria

- **Functionality**: The carousel works as described, with smooth navigation and accurate filtering.
- **Code Quality**: Clean, readable, and well-structured code.
- **Component Design**: Effective decomposition and organization of the component and its children.
- **Attention to Detail**: Fulfillment of all requirements and considerations for edge cases..
