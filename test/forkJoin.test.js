const { forkJoin, from } = require('rxjs')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

describe.skip('forkJoin', () => {
  it('should ok', done => {
    const step01 = async () => { await sleep(10); console.log('--- step01'); return 1 }
    const step02 = async () => { await sleep(20); console.log('--- step02'); return 2 }

    const observable01 = from(step01())
    const observable02 = from(step02())

    const observableEnd = forkJoin([observable01, observable02])

    observableEnd.subscribe({
      next: value => {
        expect(value).toEqual([1, 2])
        done()
      }
    })
  })

  it('should ok', done => {
    const ctx = []
    const step01 = async () => { await sleep(1000); console.log('--- step01'); ctx.push(1); throw new Error(1) }
    const step02 = async () => { await sleep(100); console.log('--- step02'); ctx.push(2); return 2 }

    const observable01 = from(step01())
    const observable02 = from(step02())

    const observableEnd = forkJoin([observable01, observable02])

    observableEnd.subscribe({
      next: value => {
        console.log(value)
        done()
      },
      error: err => {
        console.log(err.message)
        expect(err.message).toBe('1')
        done()
      },
      complete: () => {
        console.log(ctx)
        done()
      }
    })
  })
})