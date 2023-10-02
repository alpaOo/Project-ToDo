"use strict"

import { addToStorage } from "./populateStorage"
import { removeFromStorage } from "./populateStorage"
import { retrieveFromItems } from "./populateStorage"

function noteConfig() {
    const userInput = document.getElementById("userInput")
    const createNoteBtn = document.getElementById("createBtn")
    const mainSection = document.querySelector(".mainSection")
    const todoList = document.querySelector(".todoList")
    return {
        userInput,
        createNoteBtn,
        mainSection,
        todoList,
    }
}
export function createNote() {
    const userInput = noteConfig().userInput
    const createNoteBtn = noteConfig().createNoteBtn
    const mainSection = noteConfig().mainSection
    const todoList = noteConfig().todoList

    let noteIdCounter = 1

    function eventHandler() {
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.name = "note"
        checkbox.id = `note${noteIdCounter}`

        const label = document.createElement("label")
        label.htmlFor = `note${noteIdCounter}`
        label.textContent = ""

        const noteContainer = document.createElement("li")
        noteContainer.className = `noteContainer${noteIdCounter}`

        if (userInput.value === "") {
            return
        } else {
            label.textContent = userInput.value
        }
        noteContainer.appendChild(checkbox)
        noteContainer.appendChild(label)
        todoList.appendChild(noteContainer)
        mainSection.appendChild(todoList)

        addToStorage(checkbox.id, userInput.value)
        console.log(localStorage.getItem(checkbox))

        userInput.value = ""
        noteIdCounter += 1
    }
    userInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            eventHandler()
        }
    })
    createNoteBtn.addEventListener("click", eventHandler)
    return {
        todoList,
    }
}
export function deleteNote() {
    const todoList = createNote().todoList

    todoList.addEventListener("dblclick", function (e) {
        if (e.target.tagName !== "LI") {
            return
        } else {
            todoList.removeChild(e.target)
            removeFromStorage(e.target.firstChild.id)
        }
    })
}
export function appendItemsFromStorage() {
    const todoList = createNote().todoList
    const checkbox = createNote().checkbox
}
