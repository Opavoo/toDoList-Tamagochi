const todoList = {
    items: [
      {
        text: 'Сделать ДЗ',
        completed: false,
      },
      {
        text: 'Узнать больше про модули',
        completed: false,
      },
      {
        text: 'Помочь одногруппнику понять тему',
        completed: false,
      },
      {
        text: 'Сходить за продуктами',
        completed: true,
      },
    ],
    printAll: function() {
        for(let i = 0; i < todoList.items.length; i++) {
            console.log(todoList.items[i]);
        }
    },
  
    add: function(text) {
       todoList.items.unshift(text);
    },
  
    remove: function(index) {
        let myIndex = todoList.items.splice(index, 1);
        return myIndex;
    },
  
    print: function(index) {},
  
    complete: function(index) {},
  };
  
  