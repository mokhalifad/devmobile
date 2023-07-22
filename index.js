
function ajouterTache() {
    const tache = document.getElementById('tache');
    const taskList = document.getElementById('taskList');

    if (!tache.value) {
      tache.focus();
      return;
    }

    const newTask = document.createElement('li');
    newTask.innerText = tache.value;

    $(newTask).on('swiperight', function () {
      if (this.classList.contains('termine')) {
        this.classList.remove('termine');
        $('#taskList').append(this);
      } else {
        this.classList.add('termine');
        $('#taskListTerminees').append(this);
      }
      $(this).listview('refresh');
    });

    $(newTask).on('swipeleft', function () {
      $(this).hide('slow', function () {
        this.remove();
      });
    });

    taskList.appendChild(newTask);
    $(taskList).listview('refresh');
    tache.value = '';
    tache.focus();
  }

  function reinitialiserListe() {
    const taskList = document.getElementById('taskList');
    const taskListTerminees = document.getElementById('taskListTerminees');
    taskList.innerHTML = '';
    taskListTerminees.innerHTML = '';
    $(taskList).listview('refresh');
    $(taskListTerminees).listview('refresh');
  }