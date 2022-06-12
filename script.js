const app = new function() {
  this.el = document.getElementById('tasks');
  this.tasks = [];

  this.fetchAll = function() {
    let data = "";

    if (this.tasks.length > 0) {
      for (let i = 0; i < this.tasks.length; i++) {
        data += '<tr>'
        data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
        data += '</tr>';

        console.log(data)
      }
    }
    this.Count(this.tasks.length);
    return this.el.innerHTML = data;
  };

  this.Add = function() {
    el = document.getElementById('add-todo');
    let task = el.value;

    if (task) {
      this.tasks.push(task.trim());
      el.value="";
      this.fetchAll();
    }
  };

  this.Edit = function(item) {
    let el = document.getElementById('edit-todo');

    el.value = this.tasks[item];

    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      let task = el.value;

      if (task) {
        self.tasks.splice(item, 1, task.trim());
        self.fetchAll();
        closeInput();
      }
    }
  }

  this.Delete = function(item) {
    this.tasks.splice(item, 1);
    this.fetchAll();
  }

  this.Count = function(data) {
    let el = document.getElementById('counter');
    let name = 'Tasks';

    if (data) {
      if (data == 1) {
        name = 'Task';
      }
      el.innerHTML = `${data} ${name}`;
    }
    else {
      el.innerHTML = `No ${name}`;
    }
  };
};

app.fetchAll();

const closeInput = () => {
  document.getElementById('edit-box').style.display = 'none';
};
