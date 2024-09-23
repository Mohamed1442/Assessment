# Front-End Developer Technical Assessment

## Overview

This assessment consists of multiple tasks aimed at evaluating your React skills, including state management, custom hooks, responsive design, form validation, and performance optimization.

## Application Features

1. **Dynamic Todo List**

   - A form to add new todo items with a title and description.
   - A list displaying all todos with options to mark them as completed or delete them.
   - A filter to view all todos, only completed todos, or only incomplete todos.
   - Todos are persisted in local storage to retain data after a page refresh.
   - Basic validation ensures that both title and description are provided before adding a todo.

2. **Custom Hook (`useFetch`)**

   - A custom hook to handle data fetching from a public API.
   - Returns the data, loading state, and error state.
   - Displays loading indicators and error messages based on the state.

3. **Responsive Navigation Menu**

   - A hamburger menu icon that toggles the visibility of navigation links on smaller screens.
   - Styled using CSS modules.

4. **Form with Validation**

   - A registration form with fields for Full Name, Email, Password, and Terms Agreement.
   - Client-side validation checks for:
     - Non-empty Full Name
     - Valid Email format
     - Matching Password and Password Confirmation
     - Checked Terms checkbox before submission
   - Controlled components manage form inputs, with error messages displayed for validation failures.

5. **Performance Optimization**
   - Optimized a React component with performance issues using `React.memo`, `useMemo`, and `useCallback`.

## Tech Stack

- React
- TypeScript
- Vite
- React Hook Form
- Yup for validation
- Vercel for deployment

## Demo

You can view a live demo of the application [here](https://assessment-ten-iota.vercel.app/).

## Setup Instructions

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohamed1442/Assessment.git

   ```

2. Navigate to the project directory:

   ```bash
   cd Assessment

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
