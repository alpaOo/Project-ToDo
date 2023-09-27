"use strict";

function noteConfig() {
  const userInput = document.getElementById('userInput');
  const createNoteBtn = document.getElementById('createBtn');
  const mainSection = document.querySelector('.mainSection');
  const todoList = document.querySelector('.todoList');
  return {
    userInput,
    createNoteBtn,
    mainSection,
    todoList,
  };
}
export function createNote() {
  const userInput = noteConfig().userInput;
  const createNoteBtn = noteConfig().createNoteBtn;
  const mainSection = noteConfig().mainSection;
  const todoList = noteConfig().todoList;

  let noteIdCounter = 1;

  createNoteBtn.addEventListener('click', function () {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'note';
    checkbox.id = `note${noteIdCounter}`;

    const label = document.createElement('label');
    label.htmlFor = `note${noteIdCounter}`;
    label.textContent = '';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = `deleteBtnNote${noteIdCounter}`;

    const noteContainer = document.createElement('li');
    noteContainer.className = `noteContainer${noteIdCounter}`;

    if (userInput.value === '') {
      return;
    } else {
      label.textContent = userInput.value;
    }
    noteContainer.appendChild(checkbox);
    noteContainer.appendChild(label);
    // noteContainer.appendChild(deleteButton);
    todoList.appendChild(noteContainer);
    mainSection.appendChild(todoList);

    userInput.value = '';
    noteIdCounter += 1;

    deleteNote(
      todoList,
      noteContainer,
      deleteButton
    );
  });
}
function deleteNote(todoList, noteContainer, deleteButton) {

  deleteButton.addEventListener('click', function () {
    todoList.removeChild(noteContainer);
  });
}