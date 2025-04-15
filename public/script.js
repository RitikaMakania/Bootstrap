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

      
    });
    const summaryContainer = document.getElementById('summary-cards');

data.summaryCards.forEach(card => {
  const col = document.createElement('div');
  col.className = 'col-md-3 col-sm-6 mb-4';

  col.innerHTML = `
    <div class="card">
      <div class="card-body text-center">
        <p class="card-text">${card.label}</p>
        <h3 class="card-title">${card.value}</h3>
      </div>
    </div>
  `;

  summaryContainer.appendChild(col);
});
  })
  
  .catch(err => console.error('JSON load error:', err));
  
  
// Populate summary cards
const summaryCards = data.summaryCards;


