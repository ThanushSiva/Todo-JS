const title = document.querySelector('#title');
const note = document.querySelector('.note');
const btn = document.querySelector('button');
const upd = document.querySelector('.update');
const notes = document.querySelector('.notes');
let str;
let idUpdate = 0;

let data = [
    {
        id: 1234425,
        title: 'College',
        note: 'graduation on oct 29',
        date: new Date().toLocaleTimeString()
    },
    {
        id: 12344374825,
        title: 'ineuron fsjs',
        note: 'javascript assignments dom + plain + project',
        date: new Date().toLocaleTimeString()
    },
    {
        id: 12344342325,
        title: 'College',
        note: 'graduation on oct 29',
        date: new Date().toLocaleTimeString()
    },
    {
        id: 1234413512374825,
        title: 'ineuron fsjs',
        note: 'javascript assignments dom + plain + project',
        date: new Date().toLocaleTimeString()
    },
    {
        id: 12342454425,
        title: 'College',
        note: 'graduation on oct 29',
        date: new Date().toLocaleTimeString()
    },
    {
        id: 123443735644825,
        title: 'ineuron fsjs',
        note: 'javascript assignments dom + plain + project',
        date: new Date().toLocaleTimeString()
    }
];

function edit(arg) {
    let temp = data.find(e => arg === e.id);
    title.value = temp.title;
    note.value = temp.note;
    idUpdate = temp.id;
}

function del(arg) {
    data = data.filter(e => e.id !== arg);
    renderNote();
}

function renderNote() {
    str = ''
    data.forEach(e => {
        str += `
        <div class="card">
        <div class="title">${(e.title) ? e.title : 'No Title'}</div>
        <div class="note-data">
            ${(e.note) ? e.note : 'No description'}
        </div>
        <div class="btn">
          <p>${e.date}</p>
          <button class="edit" onclick="edit(${e.id})">Edit</button
          ><button class="delete" onclick="del(${e.id})">Delete</button>
        </div>
      </div>
        `
    })
    notes.innerHTML = str;
}

btn.addEventListener('click', () => {
    if (title.value.length !== 0 || note.value.length !== 0) {
        data.push({
            id: Math.floor(Math.random() * 10000),
            title: title.value,
            note: note.value,
            date: new Date().toLocaleTimeString()
        });
        title.value = note.value = '';
        renderNote();
    }
})

upd.addEventListener('click', () => {
    if (title.value.length !== 0 || note.value.length !== 0) {
        data.find(e => {
            if (e.id === idUpdate) {
                e.title = title.value;
                e.note = note.value;
                e.date = new Date().toLocaleTimeString();
            }
        })
        title.value = note.value = '';
        renderNote();
    }
})

renderNote();