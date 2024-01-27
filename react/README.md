# README

## Testing

Run tests as follows:

```
$ yarn test
```

Run tests including coverage as follows:

```
$ yarn test:coverage
```

This will create a directory called `/coverage` in this directory. The output of the tests will look something like:

<img width="603" alt="image" src="https://github.com/frodosamoa/synaptiq-coding-assessments/assets/1582620/0f27114b-ead4-474c-a9e7-cb76787c1d7e">

### Date Picker Features & Capabilities

- You can use the arrow keys to change the date, once a date is selected:
  - up arrow key to decrease the date by seven days
  - down arrow key to increase the date by seven day
  - left arrow key to decrease the date by one day
  - right arrow key to increase the date by one day
- You can use the Escape key to close the Date Picker panel if it is open

---

### Synaptiq React Skills Test

#### Your mission

Create a new "combined date" control as described in the shopify polaris "patterns"
documentation at https://polaris.shopify.com/patterns/date-picking/single-date

    - You should fork this repository and open a pull request against it with your changes.
    - Your code should compile and test cleanly via github actions.
        - Opening a pull request will verify this
        - You can also use `act -C..` from https://github.com/nektos/act to run locally
    -You should build off the framework and tools in this repo, namely:
        - yarn
        - storybook
        - next.js
        - react
        - tailwind.css
        - typescript
    - You may pick any of the patterns described (single-date, date range or date list)
    - You should include your component in a sample next.js page added to this project
    - Your example page can do anything you want, so show off what it can do!
    - Your component should be added to the storybook in this project
    - Your component should be tested and demonstrate your command of css, html and react
    - Your should add (and document) the commands used to run your tests
    - Your component should meet the usability guidelines from polaris
    - You should update this readme explaining what usability features and capabilities you have implemented
    - You should be prepared to discuss your changes in detail and explain why they are great.
