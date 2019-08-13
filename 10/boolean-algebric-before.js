let enableEmpty
let radioButtonA
let radioButtonB

function switchRadioButtonAV1() {
  if (enableEmpty) {
    radioButtonA = !radioButtonA
    radioButtonB = radioButtonA ? false : radioButtonB
  } else {
    radioButtonA = radioButtonA ? radioButtonA : !radioButtonA

    radioButtonB = !radioButtonA
  }
}

















//  const A = a ? b : c
//  const B = a && b || !a && c
//  abc    A    B
//  000    0    0
//  001    1    1
//  010    0    0
//  011    1    1
//  100    0    0
//  101    0    0
//  110    1    1
//  111    1    1