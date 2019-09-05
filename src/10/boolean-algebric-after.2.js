let enableEmpty = false
let radioButtonA = false
let radioButtonB = false

function switchRadioButtonAV1() {
    radioButtonA = enableEmpty && !radioButtonA || !enableEmpty && true
    radioButtonB = enableEmpty && !radioButtonA && radioButtonB || !enableEmpty && false
}


// simple boolean algebraic













// if(a){
//  x = b
// } else {
//   x = c
// }
// x = a ? b : c 
// x = a && b || !a && c

//  abc    x    
//  000    0    
//  001    1    
//  010    0    
//  011    1    
//  100    0    
//  101    0    
//  110    1    
//  111    1    
