//## 01 refactor this code, using named function and passing them as callback

const fs = require('fs');
const file = './todo.txt';

const addTodo = function (error, todoList, todoItem) {
  if (error) {
    errorHandler(error);
    return;
  }
  fs.write(file, `${todoList} \n ${todoItem}`, errorHandler(error, 'Todo Written'));
};

const errorHandler = function (error, success) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(success);
};

fs.readFile(file, 'utf8', addTodo(error, todoList, 'watch GOT'));

//## 02 create a 08_callback.exercise_01.test.js file and... test :)
