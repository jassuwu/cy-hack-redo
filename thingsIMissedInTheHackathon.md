1. - The endpoint for getting a balance was supposed to be a POST request with the address in the body, not a GET request with the address in the URL.
2. - 2.1 The id field in the response had to be checked with for later endpoints, but I didn't do it. 
    - Looking at it now, I would probably cache the id in the client and use it for later requests, due to the enormous amount of data returned by the 2.1 endpoint.
    - 2.2 The validation mentioned was not done.
    - If I had more time, I would have done the validation thru the class-validator package. 

Things I did in the redo: 
2.  - 2.2 I did the validation thru the class-validator package. 

## I completed everything, did not cache everything tho.