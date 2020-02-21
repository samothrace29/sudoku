    /**
     * table behavior
     * 
    */
    
   /**
    * fill an array 2 dimension : 9*9 with all possible value
    */ 

   function createTable (){
    const tab = document.getElementById("tableSudoku");
        for (j=0;j<9;j++) {
            // Create line
            const column = document.createElement("TR");
            for (i=0;i<9;i++) {
                // create column
                const row = document.createElement("TD");
                column.appendChild(row);
            }
            tab.appendChild (column);
        }
    }

   createTable() ;



    
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

            // retirer le focus sur la case precedement selectionné ( CSS )
            allSudokuElement[currentElement["row"]*9+currentElement["col"]].removeAttribute ("actif");

            // Assigner le nouveau current
            currentElement["col"] = event.target.cellIndex;
            currentElement["row"] = event.target.parentNode.rowIndex;

            // remettre le focus sur la nouvelle case cliqué ( CSS )
            allSudokuElement[currentElement["row"]*9+currentElement["col"]].setAttribute ("actif","");

            getPossibleValue ();
        });
  });

  allSudokuElement[currentElement["row"]*9+currentElement["col"]].setAttribute ("actif","");


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
   function getPossibleValue () {

   }
