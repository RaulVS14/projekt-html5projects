// Set todo list variable
var todoList = JSON.parse(localStorage.getItem('todos'));

$(document).ready(function () {

    // Set Ccounter
    var i = 0;

    // Check for todos
    if(localStorage.getItem('todos') != null){
        items='';
        // Loop through and output li items
        $.each(todoList, function (key,value) {
            items='<li id="task-'+i+'"><a id="todo_link" href="#edit" data-todo_name="'+value.todo_name+'" data-todo_date="'+value.todo_date+'">'+value.todo_name+'</a></li>'+items;
            i++
        });
        $('#todos').html(items);
        // Refresh
        $('#todos').listview('refresh');
    }


    // Add a Todo
    $('#add_form').submit(function () {

        // Get submitted values
        var todo_name = $('#todo_name').val();
        var todo_date = $('#todo_date').val();

        // Simple field validation
        if (todo_name == '') {
            alert('Please give the todo a name');
        } else if (todo_date == '') {
            alert('Please add date');
        } else {
            var todos = JSON.parse(localStorage.getItem('todos'));

            //Check todos
            if (todos == null) {
                todos = [];
            }

            // Create array with new todo
            var new_todo = {
                "todo_name": todo_name,
                "todo_date": todo_date
            }

            todos.push(new_todo);
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    });

    $('#todos').on('click', '#todo_link',function(){
        localStorage.setItem('currentTodoName',$(this).data('todo_name'));
        localStorage.setItem('currentTodoDate',$(this).data('todo_date'));
    });

    // Clear Todos
    $('#clear_btn').click(function(){
        localStorage.clear();
    });

});