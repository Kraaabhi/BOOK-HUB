Book Inventory API 

        This is a RESTful API for managing books.

The architecture for the book inventory API service can be described as follows:

                1. Node.js: Node.js is used as the server-side JavaScript runtime environment for the book inventory API service.

                2. Express.js: Express.js is a popular Node.js web application framework that is used to define the API routes and handle incoming requests. It provides a set of tools and utilities for building APIs and web applications.

                3. json-server: json-server is a Node.js module that allows developers to easily create a RESTful API with a JSON file as the persistent storage. json-server is used to implement the persistent storage for the book inventory API service.

                4. Logging: Proper logging is implemented to monitor the activity of the service. The logs include details such as the endpoint accessed, the timestamp, and the user who accessed it.

                5. Security: The book inventory API service is secured using a static API key that is included in the headers of all API requests. The API key is verified on the server before allowing access to the endpoints.

                6. API Endpoints: The book inventory API service includes the following endpoints:

                    GET api/books: This endpoint returns the list of all books in the inventory.

                    POST api/books: This endpoint adds a new book to the inventory.

                    DELETE api/books/:id: This endpoint deletes a book with a specific ID from the inventory.

                    GET api/books/search: This endpoint searches for books by name and/or author.

                    GET api/books/:id: This endpoint gets the details of a book with a specific ID.

                7. Data Structure: The persistent storage for the book inventory API service is implemented using a JSON file format. Specifically, the data is stored in a single JSON file with an array of books, where each book is represented as a JSON object with properties such as "id", "title", "author", "isbn", and "publicationDate".
                
                
                

Installation: 
        Clone the repository.
        Install dependencies using npm install.
        Start the server using npm start.


Authentication:
        To authenticate requests, you need to include an "auth-api-key" header in your requests with a valid access token.
                                auth-api-key: YOUR_ACCESS_TOKEN 


Configuration:
        Before running the server, you need to create a config folder and inside that create config.env file in the root directory of the project. add below key value pair in the file:

           PORT: 3000, // the port number to run the server on
           API_KEY: your api key //





Usage:

        The following endpoints are available:

        GET api/books - retrieves all books
        POST api/books - adds a new book
        DELETE api/books/:id - deletes a book with the specified ID
        POST api/books/search - searches for books by name and/or author



    GET api/books
            Retrieves all books.
            

            Example response:
                               {
                                "success": true,
                                "books": [
                                    {
                                    "id": "bde36a27-bb52-447e-8cfe-ac1b8490cd3e",
                                    "title": "book1",
                                    "author": "author1",
                                    "genre": "genre1",
                                    "description": "description1",
                                    "publicationDate": "2021-02-01"
                                    },
                                    {
                                    "id": "3b239c3e-1939-48fc-9d2a-b0f07ed1fbb7",
                                    "title": "book2",
                                    "author": "author2",
                                    "genre": "genre2",
                                    "description": "description2",
                                    "publicationDate": "2021-03-01"
                                    }
                                ]
                                }
<----------------------------------------------------------------------->

      POST api/books
            Adds a new book.

            Example request body:

                                {
                                    "title": "book3",
                                    "author": "author3",
                                    "genre": "genre3",
                                    "description": "description3",
                                    "publicationDate": "2021-04-01"
                                }
            Example response:
                                {
                                    "success": true,
                                    "message": "added successfully"
                                }

<----------------------------------------------------------------------->        

     DELETE api/books/:id
            Deletes a book with the specified ID.

            Example response:
                                 {
                                    "success": true,
                                    "message": "deleted successfully"
                                }

                                
<----------------------------------------------------------------------->

    POST api/books/search
            Searches for books by name and/or author.

            Example request body:
                                 {
                                    "name": "book1",
                                    "author": "author1"
                                 }



            Example response:    
                                
                                {
                                    "success": true,
                                    "books": [
                                        {
                                        "id": "bde36a27-bb52-447e-8cfe-ac1b8490cd3e",
                                        "title": "book1",
                                        "author": "author1",
                                        "genre": "genre1",
                                        "description": "description1",
                                        "publicationDate": "2021-02-01"
                                        }
                                    ]
                                }







