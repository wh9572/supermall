export function debounce(func,dealy) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this,args)
    },dealy)
  }
}