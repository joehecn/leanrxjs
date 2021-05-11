
const { from, of } = require('rxjs')
const { catchError } = require('rxjs/operators')
const {
  run
} = require('../src/index.js')

const STATES = [
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
    17: true,
    18: true
  },
  {
    1: true,
    2: false,
    3: false,
    4: false,
    5: true,
    6: true,
    7: true,
    8: true,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  },
  {
    1: true,
    2: true,
    3: false,
    4: false,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  },
  {
    1: true,
    2: true,
    3: true,
    4: false,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
    17: true,
    18: true
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: false,
    16: false,
    17: false,
    18: false
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: false,
    16: false,
    17: false,
    18: false
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
    17: true,
    18: true
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
    17: true,
    18: true
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
    17: true,
    18: true
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
    17: true,
    18: true
  },
  {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
    17: true,
    18: true
  }
]

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const initStateMap = () => {
  return {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  }
}
const makeStepFun = (sleep, ms, ok, stateMap, key) => {
  const fun = async gogo => {
    if (gogo) {
      await sleep(ms)
      stateMap[key] = true
      console.log(key)
      if (!ok) throw Error(key)
    }
    return gogo
  }
  return gogo => from(fun(gogo)).pipe(catchError(() => of(false)))
}
const makeStepMap = ({ indexs = [0], arr = [
  [3, true],
  [2, true],
  [1, true],
  [6, true],
  [5, true],
  [4, true],
  [9, true],
  [8, true],
  [7, true],
  [12, true],
  [11, true],
  [1, true],
  [15, true],
  [14, true],
  [13, true],
  [18, true],
  [17, true],
  [16, true]
]}) => {
  const stepMap = []
  const stateMap = initStateMap()

  arr.forEach(([ms, ok], index) => {
    const key = index + 1
    if (indexs.includes(key)) ok = false
    stepMap.push(makeStepFun(sleep, ms, ok, stateMap, key))
  })
  return { stepMap, stateMap }
}

describe('run', () => {
  it('should ok', async () => {
    for (let i = 0, len = 19; i < len; i++) {
      const { stepMap, stateMap } = makeStepMap({ indexs: [i] })
      await run(stepMap)
      expect(stateMap).toEqual(STATES[i])
    }
  })

  it.only('should ok', async () => {
    const i = 2
    const { stepMap, stateMap } = makeStepMap({ indexs: [i] })
    await run(stepMap)
    expect(stateMap).toEqual(STATES[i])
  })

  it.skip('should ok', async () => {
    const { stepMap, stateMap } = makeStepMap({ indexs: [1, 5] })
    const value = await run(stepMap)
    console.log(value)
    expect(stateMap).toEqual({
      1: true,
      2: false,
      3: false,
      4: false,
      5: true,
      6: true,
      7: true,
      8: true,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
      18: false
    })
  })
  it.skip('should ok', async () => {
    const { stepMap, stateMap } = makeStepMap({ indexs: [2, 9] })
    const value = await run(stepMap)
    console.log(value)
    expect(stateMap).toEqual({
      1: true,
      2: true,
      3: false,
      4: false,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
      18: false
    })
  })

  it('should ok', async () => {
    const { stepMap, stateMap } = makeStepMap({ indexs: [4, 11] })
    const value = await run(stepMap)
    console.log(value)
    expect(stateMap).toEqual({
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true,
      10: true,
      11: true,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
      18: false
    })
  })
})
