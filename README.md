# fluendo_test

This is a Django app on Docker for Fluendo test 

## Installation

clone this repo:

    $ git clone git@github.com:renemontilva/fluendo_test.git
    $ cd fluendo_test 


## Configure the project

Build the docker image

    $ docker build -t renemontilva/fluendo_test . 

Run the cointainer

    $ docker run -it -p 8000:8000 renemontilva/fluendo_test

Test App
    got to a browser an open http://127.0.0.1/

Steps
   1.- Create your user
   2.- create your new item
   3.- Enjoy

WebServices API:

    1.- Create accounts http://127.0.0.1/api/account
    2.- Manage Items http://127.0.0.1/api/todo
