# strategyPatternNodeJS
Implementing a famous design pattern in NodeJS, the Strategy.

## Explain the workfolder
- /db/

In this folder have any files with the name of your database, for example: postgres.


- /db/interfaces/

There is a file with two classes, NotImplementedException(that is extended of the class Error) and
Icrud. Icrud is an interface created to define the methods used in an CRUD, for example.

- /db/bases/

An class that receive an another class in your constructor defining as a database in use in that instance. So, now you can use multi-databases in your project NodeJS.

