let enableEmpty
let radioButtonA
let radioButtonB

function switchRadioButtonAV1() {
    radioButtonA =  !radioButtonA && enableEmpty || !enableEmpty
    radioButtonB = enableEmpty && !radioButtonA && radioButtonB
}









// f = a && b || !b 

// abf
// 001
// 010
// 101
// 111

// Demorgan
// f= !(!a && b) = a || !b
// f = a && b || !b = a || !b
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