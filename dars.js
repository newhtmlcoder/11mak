document.getElementById("generate-schedule").addEventListener("click", () => {
    const startTime = "08:00"; 
    const schedule = calculateSchedule(startTime);
  
    const tableBody = document.querySelector("#schedule-table tbody");
    tableBody.innerHTML = ""; 
  
    schedule.forEach((lesson, index) => {
      const row = document.createElement("tr");
  
     
      const numberCell = document.createElement("td");
      numberCell.textContent = index + 1 + '- soat';
      row.appendChild(numberCell);
  
     
      const timeCell = document.createElement("td");
      timeCell.textContent = lesson;
      row.appendChild(timeCell);
  
      tableBody.appendChild(row);
    });
  });
  document.getElementById("generate-schedule-1").addEventListener("click", () => {
    const startTime = "08:00"; 
    const schedule = calculateSchedule(startTime); 
    generateScheduleTable(schedule);
  });
  
  document.getElementById("generate-schedule-2").addEventListener("click", () => {
    const startTime = "13:30";  
    const schedule = calculateSchedule(startTime);  
    generateScheduleTable(schedule);
  });
  
  document.getElementById("home-button").addEventListener("click", () => {
    window.location.href = "index.html";  
  });
  
  function generateScheduleTable(schedule) {
    const tableBody = document.querySelector("#schedule-table tbody");
    tableBody.innerHTML = "";  
    
    schedule.forEach((lesson, index) => {
      const row = document.createElement("tr");
  
      const numberCell = document.createElement("td");
      numberCell.textContent = index + 1;
      row.appendChild(numberCell);
  
      const timeCell = document.createElement("td");
      timeCell.textContent = lesson;
      row.appendChild(timeCell);
  
      tableBody.appendChild(row);
    });
  }
  function calculateSchedule(startTime) {
    const lessons = [];
    let currentTime = startTime;
    
    
    for (let i = 0; i < 6; i++) {  
      lessons.push(currentTime); 
      currentTime = addMinutes(currentTime, 50); 
      lessons.push(addMinutes(currentTime, 5)); 
    
      if (i == 4) {
        currentTime = addMinutes(currentTime, 25); 
      }
    }
  
    return lessons;
  }
  
  function addMinutes(time, minutes) {
    let [hours, mins] = time.split(':').map(Number);
    mins += minutes;
    while (mins >= 60) {
      mins -= 60;
      hours++;
    }
    return `${hours}:${mins.toString().padStart(2, '0')}`;
  }
    