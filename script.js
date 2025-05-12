function addHabit() {

    const taskText = $('#todo-input').val().trim();
    if (taskText !== '') {
        const $li = $('<li></li>');

        const $checkbox = $('<input type="checkbox" class="habit-check" />').on('change', function()
    {
        $text.toggleClass('done', this.checked);
    })

    const $text = $('<span id="task-text"></span>').text(taskText);

    const $delBtn = $('<button class="del-btn">X</button>').on('click', function(){
        $li.remove();
    });


    $li.append($checkbox, $text, $delBtn);
    $('#list-habits').append($li);
    $('#todo-input').val('');
        
    }
}