export default {
  addCounter(state,payload) {
    payload.count++
  },
  addToCart(state,payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  checked(state,payload) {
    payload.checked = !payload.checked
  }
}