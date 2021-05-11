
const { Subject, forkJoin } = require('rxjs')

const run = ([
  step01,
  step02,
  step03,
  step04,
  step05,
  step06,
  step07,
  step08,
  step09,
  step10,
  step11,
  step12,
  step13,
  step14,
  step15,
  step16,
  step17,
  step18,
]) => {
  return new Promise(resolve => {
    // 先并行跑5个
    const observable01 = step01(true)
    const observable05 = step05(true)
    const observable06 = step06(true)
    const observable07 = step07(true)
    const observable08 = step08(true)
  
    const subject01 = new Subject()
    const subject02 = new Subject()
    const subject03 = new Subject()
    const subject04 = new Subject()

    const subject05 = new Subject()
    const subject06 = new Subject()
    const subject07 = new Subject()
    const subject08 = new Subject()

    const subject09 = new Subject()
    const subject10 = new Subject()
    const subject11 = new Subject()
    const subject0411 = new Subject()
    const subject1213 = new Subject()
    const subject14 = new Subject()
    const subject15 = new Subject()
    const subject16 = new Subject()
    const subject17 = new Subject()
    const subject18 = new Subject()

    // forkJoin
    // 01, 05, 06, 07, 08
    const observableNode = forkJoin([
      subject01,
      subject05,
      subject06,
      subject07,
      subject08
    ])
    // 04, 11
    const observable0411 = forkJoin([subject04, subject11])
    // 10, 14, 15, 16, 17, 18
    const observableEnd = forkJoin([
      subject10,
      subject14,
      subject15,
      subject16,
      subject17,
      subject18
    ])

    // subscribe
    observable01.subscribe(subject01)

    observable05.subscribe(subject05)
    observable06.subscribe(subject06)
    observable07.subscribe(subject07)
    observable08.subscribe(subject08)

    subject01.subscribe({
      next: value => {
        const observable02 = step02(value) /*? value */
        observable02.subscribe(subject02)
      }
    })
 
    subject02.subscribe({
      next: value => {
        const observable03 = step03(value) /*? value */
        observable03.subscribe(subject03)
      }
    })

    subject03.subscribe({
      next: value => {
        const observable04 = step04(value) /*? value */
        observable04.subscribe(subject04)
      }
    })

    observableNode.subscribe({
      next: value => {
        let gogo = true
        if (value.some(item => !item) /*? value */) gogo = false
        const observable09 = step09(gogo) /*? gogo */
        observable09.subscribe(subject09)
      }
    })

    // 9
    subject09.subscribe({
      next: value => {
        const observable10 = step10(value) /*? value */
        observable10.subscribe(subject10)
      }
    })
    subject09.subscribe({
      next: value => {
        const observable11 = step11(value) /*? value */
        observable11.subscribe(subject11)
      }
    })

    observable0411.subscribe(subject0411)

    subject0411.subscribe({
      next: value => {
        let gogo = true
        if (value.some(item => !item) /*? value */) gogo = false 
        const observable12 = step12(gogo) /*? gogo */
        const observable13 = step13(gogo)

        const observable1213 = forkJoin([observable12, observable13])
        observable1213.subscribe(subject1213)
      }
    })
    subject0411.subscribe({
      next: value => {
        let gogo = true
        if (value.some(item => !item) /*? value */) gogo = false
        const observable14 = step14(gogo) /*? gogo */
        observable14.subscribe(subject14)
      }
    })

    subject1213.subscribe({
      next: value => {
        let gogo = true
        if (value.some(item => !item) /*? value */) gogo = false
        const observable15 = step15(gogo) /*? gogo */
        observable15.subscribe(subject15)
      }
    })
    subject1213.subscribe({
      next: value => {
        let gogo = true
        if (value.some(item => !item) /*? value */) gogo = false
        const observable16 = step16(gogo) /*? gogo */
        observable16.subscribe(subject16)
      }
    })
    subject1213.subscribe({
      next: value => {
        let gogo = true
        if (value.some(item => !item) /*? value */) gogo = false
        const observable17 = step17(gogo) /*? gogo */
        observable17.subscribe(subject17)
      }
    })
    subject1213.subscribe({
      next: value => {
        let gogo = true
        if (value.some(item => !item) /*? value */) gogo = false
        const observable18 = step18(gogo) /*? gogo */
        observable18.subscribe(subject18)
      }
    })

    observableEnd.subscribe({
      next: resolve
    })
  })
}

module.exports = {
  run
}
