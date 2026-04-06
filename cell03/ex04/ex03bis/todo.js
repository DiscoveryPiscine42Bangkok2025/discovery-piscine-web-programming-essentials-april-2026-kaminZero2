const $list = $('#ft_list');

(function() {
    const m = document.cookie.match(/todo_list=([^;]*)/);
    if (m) JSON.parse(decodeURIComponent(m[1])).reverse().forEach(t => add(t));
})();

function add(text) {
    const $d = $('<div></div>')
        .addClass('todo-item')
        .text(text)
        .on('click', () => {
            if (confirm('Delete?')) {
                $d.remove();
                save();
            }
        });
    $list.prepend($d);
}

function save() {
    const tasks = $list.children().map((_, e) => $(e).text()).get();
    const exp = new Date(Date.now() + 7 * 86400000).toUTCString();
    document.cookie = `todo_list=${encodeURIComponent(JSON.stringify(tasks))}; expires=${exp}; path=/`;
}

function newTask() {
    const t = prompt("Title:");
    if (t?.trim()) {
        add(t.trim());
        save();
    }
}