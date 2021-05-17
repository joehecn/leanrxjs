
const { forkJoin, from } = require('rxjs')
const moment = require('moment')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

describe('from', () => {
  it('should ok', done => {
    const beginTime = Date.now()
    console.log({ beginTime })

    const step01 = async () => { await sleep(5000); console.log('--- step01'); return 1 }
    const step02 = async () => { await sleep(5000); console.log('--- step02'); return 2 }

    const observable01 = from(step01())
    const observable02 = from(step02())

    const observableEnd = forkJoin([observable01, observable02])

    observableEnd.subscribe({
      next: value => {
        const now = Date.now()
        console.log('beginTime:', moment(beginTime).format('YYYY-MM-DD HH:mm:ss'))
        console.log('endTime:', moment(now).format('YYYY-MM-DD HH:mm:ss'))
        const ms = now - beginTime
        console.log(`time consuming: ${Math.floor(ms / 1000)} s`)
        expect(value).toEqual([1, 2])
        done()
      }
    })
  })
})