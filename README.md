Book API 

        This is a RESTful API for managing books.

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







