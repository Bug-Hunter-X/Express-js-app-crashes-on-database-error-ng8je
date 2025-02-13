# Express.js Database Error Handling Bug

This repository demonstrates a common bug in Express.js applications: insufficient error handling when interacting with databases.  The `bug.js` file shows an example where a database error can cause the entire server to crash. The `bugSolution.js` file provides a solution implementing comprehensive error handling.

## Bug

The `bug.js` file lacks proper error handling. If the database query fails, the application crashes without informing the client about the issue.  The error is logged to the console, but this is not sufficient for production applications.

## Solution

The `bugSolution.js` file demonstrates the correct approach to handling errors: Using try...catch and creating a centralized error handling middleware function to catch unexpected errors.