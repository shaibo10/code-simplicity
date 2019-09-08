# code-simplicity
## Some practical refactoring examples how to reduce cyclomatic complexity
### Instructions to the refactoring challenge
* Clone the git repo to your local machine <br>
```git clone git@github.com:shaibo10/code-simplicity.git```
* Install the dependencies for getting the complexity score by using ESlint <br>
```cd code-simplicity```<br>
```npm i```
* Run the script "challenge-score" to get the complexity score of the challenge <br>
```npm run challenge-score```
* __An important rule__ - you can't be sure that the server will return all the properties of the book, you need to validate that each property is exists
* Start to refactor the challenge code and test the complexity each time <br>
```src/11/the-challenge.ts``` 
* You can run the code using online IDE to test the functionality - https://stackblitz.com/edit/typescript
* You can fake it (ESlint test the complexity in the function level), But try to improve the complexity of the all application <br>
using advanced techniques you saw in the presentation and other examples from this repository 
