fetch('data.json')
  .then(res => res.json())
  .then(data => {
    
    // Unresolved Tickets Section
    document.getElementById('ticket-group').textContent = `Group: ${data.unresolvedTickets.group}`;
    const ticketList = document.getElementById('ticket-list');
    data.unresolvedTickets.items.forEach(ticket => {
      ticketList.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${ticket.title}
          <span class="badge bg-primary rounded-pill">${ticket.count}</span>
        </li>
      `;
    });

    // Tasks Section
    document.getElementById('task-date').textContent = data.tasks.date;
    const taskList = document.getElementById('task-list');
    data.tasks.items.forEach((task, index) => {
      const taskId = `task-${index}`;
      const checked = task.checked ? "checked" : "";

      // Badge logic
      let badge;
      if (task.status === "Urgent") {
        badge = `<button type="button" class="btn btn-warning btn-sm">Urgent</button>`;
      } else if (task.status === "New") {
        badge = `<button type="button" class="btn btn-success btn-sm ms-auto">New</button>`;
      } else {
        badge = `<button type="button" class="btn btn-outline-secondary btn-sm">Default</button>`;
      }

      taskList.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="taskOptions" id="${taskId}" ${checked}>
            <label class="form-check-label" for="${taskId}">
              ${task.label}
            </label>
          </div>
          ${badge}
        </li>
      `;
    });
  })
  
  .catch(err => console.error('JSON load error:', err));
  
  
// Populate summary cards
const summaryCards = data.summaryCards;


