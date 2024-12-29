# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js applications where a long-running synchronous operation in the request handler causes the server to hang or become unresponsive.  The `server.js` file contains the buggy code, and `serverSolution.js` provides the solution.

## Bug Description

The server uses a simple `for` loop to simulate a long-running task.  Because this task is synchronous, it blocks the event loop, preventing the server from processing other requests.  This leads to unresponsiveness and poor performance.

## Solution

The solution involves refactoring the code to use asynchronous operations.  This allows the event loop to remain responsive while the long-running task executes in the background.