createTable() ;
let currentElement={"row" : 0, "col" : 0};

    /**
     * table behavior
     * 
    */
    


   /**
    * fill an array 2 dimension : 9*9 with all possible value
    */ 

    function createTable () {
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




    
/*  
    - Take all element tr in the table
    - Add listener on each element
*/
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
        
        // recharger les cases des choix possible en les mettant actif
        reloadPossibleValue ();
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
        // this.setAttribute("actif","");
        if ( this.getAttribute ("actif") != null)
          allSudokuElement[currentElement["row"]*9+currentElement["col"]].textContent = event.target.textContent;
          reloadPossibleValue();
    });
});

/**
    * button behavior
    * catch submit event to solve the sudoku 
*/
const buttonSolveIt = document.getElementById ('buttonSolveIt');

/* catch Event on button click and not on form submit */
buttonSolveIt.addEventListener ('click', function  (event){
    event.preventDefault();
    console.log ('Resoudre le table, a ajouter');
    resoudreUneCaseVersionSimple();
   /* let ligne  = getLigneValue();
    let column = getColumnValue();
    let square = getSquareValue();
    let possibleValeur = Array (1,2,3,4,5,6,7,8,9);
 
    possibleValeur = getAvailableValue (possibleValeur,ligne);
    
    possibleValeur = getAvailableValue (possibleValeur,column);
 
    possibleValeur = getAvailableValue (possibleValeur,square);
    console.log(" Nombre restant . ");
    console.log(possibleValeur);*/
});


reloadPossibleValue();
// FIN DU SCRIPT

/**
 * FUNCTIONS
 */


   /**
    * retourne un table de nombre contenu dans la ligne courrante
    */
   function getLigneValue (posLigne) {
       let ligne = new Array();
       for (j=0;j<9;j++) {
            if ( allSudokuElement[posLigne*9+j].textContent.length > 0 )
                ligne.push (parseInt ( allSudokuElement[posLigne*9+j].textContent ) );
            else 
                ligne.push ( null );
    }
   // console.log(" ligne : ");   
   // console.log(ligne);
    
    return ligne;
   }

   /**
    * retourne un table de nombre contenu dans la column courrante
    */
   function getColumnValue (posColumn) {
       let column = new Array();
       for (j=0;j<9;j++) {
            if ( allSudokuElement[j*9+posColumn].textContent.length > 0 )
                column.push ( parseInt ( allSudokuElement[j*9+posColumn].textContent ) );
            else 
                column.push ( null );
    }
    // console.log(" column : ");   
    // console.log(column);
    
    return column;
   }
   /**
    * retourne un table de nombre contenu dans le carré courrant
    */
   function getSquareValue (posLigne,posColumn) {
       let squareArr = new Array();


        let debutCol = parseInt ( posColumn /3 ) * 3;
        let debutRow = parseInt ( posLigne /3 ) * 3;
    
        for (i=debutRow;i<debutRow+3;i++) {
            for (j=debutCol;j<debutCol+3;j++) {
                if ( allSudokuElement[i*9+j].textContent.length > 0 )
                squareArr.push ( parseInt ( allSudokuElement[i*9+j].textContent ) );
            else 
                squareArr.push ( null );
            }
        }
    // console.log(" Square : ");
    // console.log(squareArr.sort());
    
    return squareArr;
   }

/**
 * retourne un tableau des possibilité restante en fonction du tableau rentré
 * ArrayComparaison : Array des possibilité restante
 * arrayValueToRemove : Array de nombre qui seront retiré du arrayComparaison
 * returne le arraComparaison sans les valeur dans arrayValueToRemove
 */
function getAvailableValue ( arrayComparaison , arrayValueToRemove ) {
    
    for ( i=0 ; i<arrayValueToRemove.length ; i++ ) {
        
        if ( arrayValueToRemove[i] == null ) 
            continue;

        let found = arrayComparaison.indexOf (arrayValueToRemove[i]);

        // si le nombre existe dans le table, l'enlever 
        if (found != -1) {
            arrayComparaison.splice (found,1);
    }
}

    // renvoyer le nouveau table sans les valeur qu on vient de retirer.
    return arrayComparaison;
   }

/**
 * 
 * @param {*} textToAdd : Text a ajouter a la suite des messages déjà présent
 */
function newMessages (textToAdd) {
    let newMess = document.getElementById ("messages");
    let msg = document.createElement ("P");
    msg.textContent = textToAdd;

    newMess.appendChild (msg);
}

/**
 * Fonction qui effacle les traces 
 */
function clearMessages() {
    newMess = document.getElementById ("messages");
    newMess.textContent = "";
}


/**
 * Fonction qui va lire la ligne,colonne, et carré correspondant à la position courant ( 0,0 par default )
 */
function reloadPossibleValue () {
    let ligne  = getLigneValue(currentElement["row"]);
    let column = getColumnValue(currentElement["col"]);
    let square = getSquareValue(currentElement["row"],currentElement["col"]);
    let possibleValeur = Array (1,2,3,4,5,6,7,8,9);
    
    possibleValeur = getAvailableValue (possibleValeur,ligne);
    
    possibleValeur = getAvailableValue (possibleValeur,column);
    
    possibleValeur = getAvailableValue (possibleValeur,square);

    console.log ( "Nombre restant . " );
    console.log ( possibleValeur );
    // console.log ( allChoiceNumberElement );
    
    // on set correctement les nombres valide pour la case selectionné
    for ( i = 0 ; i<allChoiceNumberElement.length ; i++ ) {
        // Si l element courrent est dans la liste des valeurs possible
        if (possibleValeur.indexOf (parseInt (allChoiceNumberElement[i].textContent)) != -1 )
            allChoiceNumberElement[i].setAttribute ("actif","");
        else
            allChoiceNumberElement[i].removeAttribute ("actif");
    }
}

function resoudreUneCaseVersionSimple() {
    allSudokuElement.forEach(element => {
        //console.log (element);
        if (element.textContent == "") {
           // console.log("Candidat a check " + element.cellIndex + " : " + element.parentNode.rowIndex);
            
            let ligne  = getLigneValue(element.parentNode.rowIndex);
            let column = getColumnValue(element.cellIndex);
            let square = getSquareValue(element.parentNode.rowIndex,element.cellIndex);
            
            let possibleValeur = Array (1,2,3,4,5,6,7,8,9);
    
            possibleValeur = getAvailableValue (possibleValeur,ligne);
            
            possibleValeur = getAvailableValue (possibleValeur,column);
            
            possibleValeur = getAvailableValue (possibleValeur,square);
        
            if ( possibleValeur.length == 1 ) {
                console.log ( "Trouvé candidat à remplir" );
                element.textContent = possibleValeur[0];
                return true;
            }
            //console.log ( possibleValeur );
        }
    });
    return false;
}