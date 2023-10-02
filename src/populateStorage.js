"use strict"

export function addToStorage(key, value) {
    localStorage.setItem(key, value)
}
export function removeFromStorage(key) {
    localStorage.removeItem(key)
}
export function retrieveFromItems(key) {
    localStorage.getItem(key)
}
