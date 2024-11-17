document.getElementById('toggleSidebar').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
});

// Alternar visibilidade no mobile
const sidebar = document.getElementById('sidebar');
document.body.addEventListener('click', function (e) {
    if (window.innerWidth <= 768 && e.target.id !== 'toggleSidebar' && !sidebar.contains(e.target)) {
      sidebar.classList.remove('active');
    }
});

// Seleciona todos os elementos com a classe '.kanban-card' e adiciona eventos a cada um deles
document.querySelectorAll('.kanban-card').forEach(card => {
    // Evento disparado quando começa a arrastar um card
    card.addEventListener('dragstart', e => {
        // Adiciona a classe 'dragging' ao card que está sendo arrastado
        e.currentTarget.classList.add('dragging');
    });

    // Evento disparado quando termina de arrastar o card
    card.addEventListener('dragend', e => {
        // Remove a classe 'dragging' quando o card é solto
        e.currentTarget.classList.remove('dragging');
    });
});

// Seleciona todos os elementos com a classe '.kanban-cards' (as colunas) e adiciona eventos a cada um deles
document.querySelectorAll('.kanban-cards').forEach(column => {
    // Evento disparado quando um card arrastado passa sobre uma coluna (drag over)
    column.addEventListener('dragover', e => {
        // Previne o comportamento padrão para permitir o "drop" (soltar) do card
        e.preventDefault();
        // Adiciona a classe 'cards-hover'
        e.currentTarget.classList.add('cards-hover');
    });

    // Evento disparado quando o card sai da área da coluna (quando o card é arrastado para fora)
    column.addEventListener('dragleave', e => {
        // Remove a classe 'cards-hover' quando o card deixa de estar sobre a coluna
        e.currentTarget.classList.remove('cards-hover');
    });

    // Evento disparado quando o card é solto (drop) dentro da coluna
    column.addEventListener('drop', e => {
        // Remove a classe 'cards-hover', já que o card foi solto
        e.currentTarget.classList.remove('cards-hover');

        // Seleciona o card que está sendo arrastado (que tem a classe 'dragging')
        const dragCard = document.querySelector('.kanban-card.dragging');
        
        // Anexa (move) o card arrastado para a coluna onde foi solto
        e.currentTarget.appendChild(dragCard);
    });
});

const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close');
const saveTaskBtn = document.getElementById('saveTask');
const taskContainer = document.getElementById('taskContainer');

// Abrir e fechar o modal
openModalBtn.onclick = () => {
    modal.style.display = 'block';
};

closeModalBtn.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Carregar tarefas do localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskContainer.innerHTML = '';
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task-card';
        taskElement.innerHTML = `
            <h4>${task.title}</h4>
            <p>${task.description}</p>
            <p><strong>Data de Entrega:</strong> ${task.dueDate}</p>
            <p><strong>Prioridade:</strong> ${task.priority}</p>
        `;
        taskContainer.appendChild(taskElement);
    });
}

// Salvar nova tarefa no localStorage
saveTaskBtn.onclick = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    if (title && description) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ title, description, dueDate, priority });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        modal.style.display = 'none';
        loadTasks();
    } else {
        alert('Por favor, preencha os campos obrigatórios.');
    }
};

// Inicializar a exibição de tarefas
loadTasks();