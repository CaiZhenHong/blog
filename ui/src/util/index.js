export function throttle(func, wait, options = {}) {
  let timeout,
    previous = 0

  return function () {
    let now = +new Date()
    let remain = wait - (now - previous)

    if (remain < 0) {
      if (previous === 0 && !options.begin) {
        previous = now
        return
      }

      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }

      previous = now
      func.call(this, arguments)
    } else if (!timeout && options.end) {
      timeout = setTimeout(() => {
        func.call(this, arguments)
        timeout = null
      }, wait)
    }
  }
}