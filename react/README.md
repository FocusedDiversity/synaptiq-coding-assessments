# Synaptiq React Skills Test

## DateList Component

The DateList component provides the following usability features and capabilities:

### Suggested Dates

- The DateList component includes suggested dates such as "Today" and "Last 30 days," simplifying the date selection process.

### Templated Date Selection

- Users can easily select from templated dates without needing to filter through historical information.

### Component Usage

- The DateList component is built using the Button, OptionList, and Popover components, ensuring a consistent and user-friendly interface.

## Usage Examples

The DateList component takes in a prop (`ranges`) and can be used as follows:

```tsx
import { DateList } from '../stories/DateList';

export default function DateListPage() {
    const ranges = [
        {
            title: "No Date",
            alias: "no-date",
            period: null,
        },
        {
            title: "Today",
            alias: "today",
            period: {
                since: "today",
                until: "today",
            },
        },
        // ...additional ranges...
    ];

    return (
        <DateList ranges={ranges} />
    );
}
```

## Shared Layout

All the pages use a common layout as follows:

```tsx
import SharedLayout from '../app/SharedLayout';

export default function MyPage() {
    return (
        <SharedLayout>
            {/* Your page content goes here */}
        </SharedLayout>
    );
}
```

# Project Overview

## Technologies Used

- **Yarn:** Package manager for managing project dependencies.
- **Storybook:** Used for component development, testing, and documentation.
- **Next.js:** The framework for building React applications, providing server-side rendering and routing.
- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for quickly styling components.
- **TypeScript:** Typed superset of JavaScript, enhancing code quality and development.

## Project Structure

- The project includes a set of highly extensible components, with DateList as an example.
- All components are fully tested and documented, viewable in Storybook.
- The project is designed to be easily extendable for implementing other date picker types described in Shopify Polaris documentation.

# Running the App

To run the app, follow the commands in the `package.json` file:

- `yarn dev`: Start the development server.
- `yarn build`: Build the application for production.
- `yarn start`: Start the application in production mode.
- `yarn lint`: Lint the code for consistent style.
- `yarn test`: Run tests to ensure code quality.
- `yarn storybook`: Start Storybook for component development.
- `yarn build-storybook`: Build the Storybook documentation.
- `yarn test-storybook`: Test the Storybook documentation.

# Extensibility

We set up `/pages` so that we can implement the other date pickers in the future, without having to make large architecture changes to the codebase.

The project also includes a base file in `/lib/utilities` for extending complex date math. This can be useful when adding more complex date pickers to the project in the future.

It also has corresponding tests that can be found in `/__tests__/utilities`.

# Contributing

1. Fork this repository.
2. Make your changes, including new components or features.
3. Open a pull request against this repository with your changes.

# GitHub Actions

The code is set up to automatically compile and test via GitHub Actions, ensuring code quality and reliability.

# Future Enhancements

## 1. Improved Documentation with TSDoc

We will enhance our documentation using TSDoc, providing detailed code comments and type annotations to make the codebase more understandable and accessible for other developers. This will include precise descriptions, type definitions, and examples to facilitate easy usage.

## 2. Integration Testing with Cypress

We plan to implement integration testing using Cypress. This will ensure that our components work seamlessly together, identify potential issues, and validate user interactions and workflows. Integration testing will be a crucial part of our testing strategy.

## 3. Internationalization (i18n) for Accessibility

To improve accessibility, we will introduce internationalization (i18n) features to support various languages and locales. This will make our components accessible to a broader user base and ensure a more inclusive user experience.

## 4. Expanding Component Library

Expanding our component library is a priority. We will create additional components to support other date pickers, such as single date and date range pickers. These components will adhere to the same usability guidelines and testing standards as our DateList component.

## 5. Enhanced Utility Functions

In the `/lib/utilities` directory, we will continue to develop utility functions for complex date calculations and formatting. These functions will be valuable when adding more advanced date pickers to the project. Our goal is to provide a solid foundation for handling intricate date-related operations.
