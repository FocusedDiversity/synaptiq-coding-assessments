# Anthony Mack‘s Technical Assessment

Show off some cool things that can be done in Next.js with Synaptiq branding in mind.  

* **How it started:** As I was looking through the documentation for the [Polaris Shopify Date Picker](https://polaris.shopify.com/components/selection-and-input/date-picker), the best practices headline quickly caught my eye.  One of the key points mentioned in that section is to not use it with date values that could possibly span many years in the future or the past.  Well, when applying for this position, I encountered a date picker that enforces a date selection without any ability to type your own and the only means of providing dates for start / end dates of previous employment is to click the next / prev buttons a ton of times.  Not ideal.  To go along with the jobs portal theme, I decided to create exactly that.  To follow with the best practice, I used the date picker component to provide the date when an applicant could start.  
* **How it works:** Now... I did have to stop somewhere in terms of what would be provided for time's sake, so for now, what I have created requires you to select a job from a list in which you are applying to and provide some basic information.  Once the information is applied, a mock server action is fired to collect the data and serve up a summary of what you're provided.  I should mention that it looks pretty... with some of Synaptiq's branding...  
* **How it inspires me:** There are pieces of technology that I have not had the privilege to dive into as of yet, but it's super exciting to get the opportunity to show off some of my abilities within this platform that I personally taught myself within the last year or so.  Next.js, Tailwind CSS, Storybook, are all fairly new tools (at least to me) and I already feel like I have been using them for years.  I hope this work assessment shows some of that confidence.  Did I mention my history with unit testing was also fairly light in the past?   Well I took a deep dive into Jest / React Testing library with this assessment and wrote some pretty detailed tests for the date picker component.  I now fully believe in testing and it's actually enjoyable to work in once you understand the user interaction when traversing in the DOM.   

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Once finished, run the development server:

```bash
npm run dev
# or
yarn run dev
```

Once the client / server are compiled, open your browser and navigate to [http://localhost:3000](http://localhost:3000).

You should now be able to fully interact with the application that I have created which is tailored to a very basic job application portal.  Select a job to apply for, provide some basic information, and submit.  

If inclined to do so, a production build can be generated with:

```bash
npm run build
# or
yarn run build
```

Or you can run the production build, directly in your browser (requires build script to be ran first):

```bash
npm run start
# or
yarn run start
```

Once the client / server are compiled, open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Testing

Combinations of [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/) are used to test the application.  These two libraries are a great combination with simplicity and user interaction as the primary focus.  Due to time restrictions, I have only added two test components, one for the required date picker and another for a common input field.  Many unit tests were created for the date picker to encapsulate the various user interactions such as opening / closing the date picker, selecting a date, and navigating to a different month / year.  As I write this, I just had an epiphany that I forgot to add keyboard / tabindex interactions with the date picker.  I'll keep note of that for future improvement.  As mentioned, unit testing is a bit new to me but it was a fun experience to deep dive into it.  

All tests are located in the `__tests__` directory within the root of the project.  They usually follow a naming convention of <component-name>.test.ext (ts/tsx/js/jsx)

To initiate the test runner (for all tests):

```bash
npm run test
# or
yarn run test
```

To run a specific test (file based):

```bash
npm test __tests__/DatePicker.test.tsx
# or
yarn test __tests__/DatePicker.test.tsx
```

Feedback of the tests progress should be visible within the console / terminal per component as well as individual unit tests.  I updated the test script to enable verbose mode for those details.  

## Showcase

To visually showcase various UI components and all the possible variants of those components, Storybook can be used.  It's also a great development tool to build in isolation.  User interfaces are meant to be simple, clean, and concise, and that's exactly how to use Storybook for UI development.  Start simple, minimize the bloat, break things out to more and more reusable components.  

To view Storybook in your browser:

```bash
npm run storybook
# or
yarn run storybook
```

Once compiled, navigate to [http://localhost:6006/?path=/story/date-picker--default](http://localhost:6006/?path=/story/date-picker--default) open Storybook and go directly to the date picker component.  For now, I removed the legacy Button / Page components as they were likely shipped with the boilerplate project.

### Final words

This has been an amazing experience thus far and I am so very thankful for the world of networking and for past colleagues to reach out to each other.  I basically taught myself (with the help of others) all that I know the past 10 years and I love seeing the hard work pay off.  React, Nextj.js, Tailwind CSS, Storybook, are all technologies I love to work in. I hope this opportunity continues to move forward and I am excited for what the future brings for Synaptiq.  Thank you for your time!
