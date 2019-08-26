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

function switchRadioButtonAV2() {
  radioButtonA = !enableEmpty || !radioButtonA
  radioButtonB = false
}

function figureGoingToFromUrl(path: string) {
  if (path) {
    if (path.includes('reports/budgets')) return 'budgets'
    if (path.includes('reports/content')) return 'content'
    if (path.includes('reports/byDay')) return 'byDay'
    if (path.includes('reports/byMonth')) return 'byMonth'
    if (path.includes('reports/byDayAndHour')) return 'byDayAndHour'
    if (path.includes('reports/byDayOfWeek')) return 'byDayOfWeek'
    if (path.includes('reports/byHour')) return 'byHour'
  }
}

function maxPrime(limit) {
  let prime = 0,
    i = 0,
    j = 0
  OUTER: for (i = 0; i < limit; ++i) {
    if (i < 2) {
      continue
    }
    for (j = 2; j < i; ++j) {
      if (i % j === 0) {
        continue OUTER
      }
    }
    prime = i
  }
  return prime
}
