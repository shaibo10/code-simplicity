let enableEmpty = false
let radioButtonA = false
let radioButtonB = false

function switchRadioButtonAV1() {
  if (enableEmpty) {
    radioButtonA = !radioButtonA
    radioButtonB = radioButtonA && false || !radioButtonA && radioButtonB
  } else {
    radioButtonA = radioButtonA && radioButtonA || !radioButtonA && !radioButtonA

    radioButtonB = !radioButtonA
  }
}

// simple boolean algebraic
