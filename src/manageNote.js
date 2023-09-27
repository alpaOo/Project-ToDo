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

  function eventHandler() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'note';
    checkbox.id = `note${noteIdCounter}`;

    const label = document.createElement('label');
    label.htmlFor = `note${noteIdCounter}`;
    label.textContent = '';

    const noteContainer = document.createElement('li');
    noteContainer.className = `noteContainer${noteIdCounter}`;

    if (userInput.value === '') {
      return;
    } else {
      label.textContent = userInput.value;
    }
    noteContainer.appendChild(checkbox);
    noteContainer.appendChild(label);
    todoList.appendChild(noteContainer);
    mainSection.appendChild(todoList);

    userInput.value = '';
    noteIdCounter += 1;

  };
  userInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      eventHandler();
    }
  });
  createNoteBtn.addEventListener('click', eventHandler);
  deleteNote(todoList);
}
function deleteNote(todoList) {
  todoList.addEventListener('dblclick', function (e) {
    if (e.target.tagName !== 'LI') {
      return;
    } else {
      todoList.removeChild(e.target);
    }
  });
}