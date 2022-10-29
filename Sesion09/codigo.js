
function uno() {
    a = 1;
    b = 0;
    for (i=1; i<9; i++){
        if (i%2==1){
            console.log(a);
        } else {
            console.log(b);
        }
    }
}

//1-1 1-1 1-1 1-1
function dos() {
    a = 1;
    b = -1;
    for (i=1; i<9; i++){
        if (i%2==1){
            console.log(a);
        } else {
            console.log(b);
        }
    }
}


//1 2 -1-2 1 2 -1 -2
function tres() {    
    for (k=1;k<3;k++){
        for (i=1; i<3; i++){      
                console.log(i);
            }
        for (j=1; j<3; j++){      
                console.log("-",j);
            }
        }
    }
//3 4 5 3 4 5 3 4
function cuatro() {    
        c=0;
        while (c<3){
            for (i=3; i<6; i++){        
                    console.log(i);        
            } 
            c++;       
        }
       
    }