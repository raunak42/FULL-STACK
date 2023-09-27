## Flaw
A user can use other users jwt token by inputting there own username and password in the headers/body and inputting the jwt token in the header.

## ToDo App API Documentation

### Authentication

The API uses JSON Web Tokens (JWT) for authentication. Users obtain a token upon successful login, which they need to include in the `authentication` header for secure endpoints (`/todos`, `/todos/:todoId`). The token is valid for 10 hours (`expiresIn: "10h"`) from the time of login.

### Middleware

The API includes the following middleware functions:

- `authenticateJwt`: Verifies the JWT token sent in the `authentication` header for secure endpoints.
- `userDetailsFromBody`: Extracts the `username` and `password` from the request body for signup and login endpoints.
- `userDetailsFromHeaders`: Extracts the `username` and `password` from the request headers for secure endpoints.
- `middleWare`: An example middleware that sets the `req.name` property based on the `username` provided in the request body.

### Database

The API uses MongoDB as the database, and Mongoose is used as the ODM (Object-Document Mapping) library to interact with the database.

**Note:** For actual deployment, make sure to replace the MongoDB connection string with your actual MongoDB cluster URL and provide an appropriate frontend HTML file for the `/` endpoint.

### Endpoints

#### 1. Sign Up

- URL: `/todos/signup`
- Method: `POST`
- Description: Allows users to sign up by creating a new account with a unique username and password.
- Request Body (Object):
  - `username`: String (required) - The unique username for the new user.
  - `password`: String (required) - The password for the new user.
- Response:
  - Success: 200 OK
    - `{ message: "user created successfully" }`
  - Error: 409 Conflict (If the username is already taken)
    - `{ error: "username taken" }`

#### 2. Log In

- URL: `/todos/login`
- Method: `POST`
- Description: Allows users to log in using their username and password.
- Request Body (Object):
  - `username`: String (required) - The username of the user.
  - `password`: String (required) - The password of the user.
- Response:
  - Success: 200 OK
    - `{ message: "successfully logged in", token: "<jwt_token>" }`
      - The `token` field in the response will contain the JWT token that the user can use for authentication in subsequent requests.
  - Error: 401 Unauthorized (If the username or password is incorrect)
    - `{ message: "incorrect username or password" }`

#### 3. Get User's Todos

- URL: `/todos`
- Method: `GET`
- Description: Retrieves all todos associated with the authenticated user.
- Headers:
  - `authentication`: String (required) - The JWT token obtained after login.
  - `username`: String (required) - The username of the user.
  - `password`: String (required) - The password of the user.
- Response:
  - Success: 200 OK
    - `{ Your_Todos: [<todo_1>, <todo_2>, ...] }`
  - Error: 401 Unauthorized (If the provided JWT token is invalid)
    - `{ message: "recheck the token you input" }`

#### 4. Create Todo

- URL: `/todos`
- Method: `POST`
- Description: Adds a new todo for the authenticated user.
- Headers:
  - `authentication`: String (required) - The JWT token obtained after login.
  - `username`: String (required) - The username of the user.
  - `password`: String (required) - The password of the user.
- Request Body (Object):
  - `title`: String (required) - The title of the new todo.
  - `description`: String - The description of the new todo.
  - `completed`: Boolean - Indicates if the todo is completed or not.
- Response:
  - Success: 200 OK
    - `{ message: "todo saved", todo: <created_todo> }`
  - Error: 400 Bad Request (If the user doesn't exist)
    - `{ message: "user doesn't exist" }`

#### 5. Update Todo

- URL: `/todos/:todoId`
- Method: `PUT`
- Description: Updates a specific todo for the authenticated user.
- Headers:
  - `authentication`: String (required) - The JWT token obtained after login.
  - `username`: String (required) - The username of the user.
  - `password`: String (required) - The password of the user.
- Parameters:
  - `todoId`: String (required) - The unique identifier of the todo to be updated.
- Request Body (Object):
  - `title`: String (required) - The updated title of the todo.
  - `description`: String - The updated description of the todo.
  - `completed`: Boolean - Indicates if the todo is completed or not.
- Response:
  - Success: 200 OK
    - `{ message: "Todo updated successfully", updatedTodo: <updated_todo> }`
  - Error: 404 Not Found (If the todo with the given ID is not found)
    - `{ message: "todo not found" }`
  - Error: 401 Unauthorized (If the provided JWT token is invalid)
    - `{ message: "recheck the token you input" }`

#### 6. Delete Todo

- URL: `/todos/:todoId`
- Method: `DELETE`
- Description: Deletes a specific todo for the authenticated user.
- Headers:
  - `authentication`: String (required) - The JWT token obtained after login.
- Request Body (Object):
  - `username`: String (required) - The username of the user.
  - `password`: String (required) - The password of the user.
- Parameters:
  - `todoId`: String (required) - The unique identifier of the todo to be deleted.
- Response:
  - Success: 200 OK
    - `{ message: "Todo deleted successfully", Your_Todos: [<remaining_todos>] }`
  - Error: 404 Not Found (If the todo with the given ID is not found)
    - `{ message: "todo not found" }`
  - Error: 401 Unauthorized (If the provided JWT token is invalid)
    - `{ message: "recheck the token you input" }`

#### 7. Home

- URL: `/`
- Method: `GET`
- Description: Serves the frontend HTML file for the ToDo App.
- Response:
  - Success: 200 OK (HTML file)

That concludes the complete documentation for the ToDo App API. If you have any additional questions or need further assistance, please refer to the API documentation and the code implementation.