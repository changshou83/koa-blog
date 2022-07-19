const statePrefox = (id: string) => `pinia-${id}`

export function setPiniaState(key: string, state: any) {
  console.log(state)
  localStorage.setItem(statePrefox(key), JSON.stringify(state))
  return state
}

export function getPiniaState(id: string) {
  return JSON.parse(localStorage.getItem(statePrefox(id)) || '{}')
}
