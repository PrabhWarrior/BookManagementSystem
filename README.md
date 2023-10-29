# API Documentation

This Markdown document provides documentation for the API endpoints in your application, including descriptions, route paths, and how to use them.

## Test Endpoint

### GET /api/books/test

- **Description**: Test endpoint for the books route.
- **Access**: Public
- **Usage**:
  - Make a GET request to `/api/books/test`.
- **Response**:
  - Returns a JSON response with a "message" property.
  - Example:
    ```json
    { "message": "Books Works" }
    ```

## Create a Book

### POST /api/books/

- **Description**: Create a new book.
- **Access**: Public
- **Usage**:
  - Make a POST request to `/api/books/` with a JSON body containing book details (title, author, and summary).
  - Example:
    ```json
    {
      "title": "New Book",
      "author": "Author Name",
      "summary": "This is a new book summary."
    }
    ```
- **Response**:
  - Returns a JSON response with the created book.
  - Example:
    ```json
    {
      "title": "New Book",
      "author": "Author Name",
      "summary": "This is a new book summary."
    }
    ```

## View All Books

### GET /api/books/

- **Description**: View all books.
- **Access**: Public
- **Usage**:
  - Make a GET request to `/api/books/`.
- **Response**:
  - Returns a JSON response with an array of books.
  - Example:
    ```json
    {
      "books": [
        { "title": "Book 1", "author": "Author 1", "summary": "Summary 1" },
        { "title": "Book 2", "author": "Author 2", "summary": "Summary 2" }
      ]
    }
    ```

## View Book by ID

### GET /api/books/:id

- **Description**: View a book by its unique identifier (ID).
- **Access**: Public
- **Usage**:
  - Make a GET request to `/api/books/:id`, where `:id` is the book's unique identifier.
- **Response**:
  - Returns a JSON response with the book.
  - Example:
    ```json
    {
      "title": "Book Title",
      "author": "Author Name",
      "summary": "Book Summary"
    }
    ```

## Update Book

### PUT /api/books/:id

- **Description**: Update a book's details by its unique identifier (ID).
- **Access**: Public
- **Usage**:
  - Make a PUT request to `/api/books/:id`, where `:id` is the book's unique identifier.
  - Include a JSON body with the updated book details (title, author, and summary).
  - Example:
    ```json
    {
      "title": "Updated Book Title",
      "author": "Updated Author Name",
      "summary": "Updated Book Summary"
    }
    ```
- **Response**:
  - Returns a JSON response with the updated book details.
  - Example:
    ```json
    {
      "title": "Updated Book Title",
      "author": "Updated Author Name",
      "summary": "Updated Book Summary"
    }
    ```

## Delete Book

### DELETE /api/books/:id

- **Description**: Delete a book by its unique identifier (ID).
- **Access**: Public
- **Usage**:
  - Make a DELETE request to `/api/books/:id`, where `:id` is the book's unique identifier.
- **Response**:
  - Returns a JSON response with the deleted book.
  - Example:
    ```json
    {
      "title": "Deleted Book Title",
      "author": "Deleted Author Name",
      "summary": "Deleted Book Summary"
    }
    ```

---

# Application Setup

This Markdown document provides a step-by-step guide for setting up an backend application, including the installation of dependencies, creating the project structure, and basic configuration.

## Prerequisites

Before you start, ensure that you have Node.js and npm (Node Package Manager) installed on your machine.

You can download them from [Node.js official website](https://nodejs.org/).

## Step 1: Open Terminal and clone repo

1. Clone the repository url for your project:
   ```bash
   git clone {repo url}
   cd BookManagementSystem
   ```

## Step 2: Install the dependencies

1. Clone the repository url:
   ```bash
   npm i
   ```

## Step 2: Replace the mogodb url

1. Create a config folder:
   ```bash
   touch config
   ```
2. Inside config folder create keys.js:
   ```bash
   touch keys.js
   ```
3. Write the following the statement and replae it with your mongodb cloud cluster url

```module.exports = {
  mongoURI:
    "mongodb+srv://username:<password>@cluster0.dv7m8vt.mongodb.net/?retryWrites=true&w=majority",
};
```
