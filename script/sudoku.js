    /**
     * table behavior
     * 
    */
    
   /**
    * fill an array 2 dimension : 9*9 with all possible value
    */ 

   let solution = new Array (9);
   for ( i=0 ; i<solution.length ; i++ ){

       solution[i] = new Array(9);
       for ( j=0 ; j<solution[i].length ; j++ ) {
        solution[i][j] = {
            "1" : true,
            "2" : true,
            "3" : true,
            "4" : true,
            "5" : true,
            "6" : true,
            "7" : true,
            "8" : true,
            "9" : true};
       } 
   }
   console.log (solution)
    /*  
        - Take all element tr in the table
        - Add listener on each element
    */

    


   let currentElement={"row" : 0, "col" : 0};
   console.log(currentElement);

  const allSudokuElement = document.querySelectorAll ("#tableSudoku td");
  console.log (allSudokuElement);
  allSudokuElement.forEach(element => {
       element.addEventListener ('click', function (event) {

       currentElement["col"] = event.target.cellIndex
       console.log (event.target.cellIndex);
       
       currentElement["row"] = event.target.parentNode.rowIndex;
       console.log (event.target.parentNode.rowIndex);
       
       console.log (event.target.textContent);

       getPossibleValue ();
        });
  });

  /*
  Active all listener for each number
  when you click on a number, you assign the value to the current sudou case
  */
  const allChoiceNumberElement = document.querySelectorAll ("#tableChoiceNumber td");
        allChoiceNumberElement.forEach(element => {
        element.addEventListener ('click', function (event) {
        allSudokuElement[currentElement["row"]*9+currentElement["col"]].textContent = event.target.textContent;
        });
  });

  /*
       - get each line element
       - check if double exist
           - if exist print red wrong element
           - else return an array of possible value
   */


   /*
       - get each column element
       - check if double exist
           - if exist print red wrong element
           - else return an array of possible value

  */
  /*
       - get each square element
       - check if double exist
           - if exist print red wrong element
           - else return an array of possible value

  */
  /*
  */
  /*
  */
  /*
  */
  /*
  */
  /*
  */


   /**
    * button behavior
   /* catch submit event to solve the sudoku */
   const buttonSolveIt = document.getElementById ('buttonSolveIt');

   /* catch Event on button click and not on form submit */
   buttonSolveIt.addEventListener ('click', function  (event){
       event.preventDefault();
       console.log ('Done ...');
   });


   /**
    * 
    */
   function getPossibleValue (line, column,square) {

   }
