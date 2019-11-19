export function add() {
    return { type: 'ADD'}
}

export function rem(e) {
    return { type: 'REM', payload: e.target.id}
}