
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registerForm').addEventListener('submit', function (event) {
        event.preventDefault();


        const username = document.getElementById('username').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Parollar mos kelmaydi!');
            return;
        }

        if (localStorage.getItem(username)) {
            alert('Bu foydalanuvchi nomi allaqachon ro\'yxatdan o\'tgan!');
            return;
        }

        const user = { username, lastname, email, password };
        localStorage.setItem(username, JSON.stringify(user));

        alert('Ro\'yxatdan o\'tish muvaffaqiyatli!');
        window.location.href = 'index.html';
    });

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();


        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;


        const storedUser = localStorage.getItem(username);


        if (!storedUser) {
            alert('Foydalanuvchi nomi topilmadi!');
            return;
        }


        const user = JSON.parse(storedUser);
        if (user.password === password) {
            alert('Kirish muvaffaqiyatli!');
            window.location.href = 'index.html';
        } else {
            alert('Parol noto\'g\'ri!');
        }
    });
});

function calculateSchedule(startTime) {
    const lessons = [];
    let currentTime = startTime; // Boshlanish vaqti (soat va minut).

    for (let i = 1; i <= 6; i++) {
        const start = formatTime(currentTime); 
        currentTime = addMinutes(currentTime, 45); 

        lessons.push(`Dars ${i}: ${start} - ${end}`);

     
        if (i === 5) {
            currentTime = addMinutes(currentTime, 25);
        } else if (i < 6) {
            
            currentTime = addMinutes(currentTime, 5);
        }
    }

    return lessons;
}
function calculateSchedule(startTime) {
    const lessons = [];
    let currentTime = startTime; 

    for (let i = 1; i <= 6; i++) {
        const start = formatTime(currentTime); 
        currentTime = addMinutes(currentTime, 45); 
        const end = formatTime(currentTime);

        lessons.push(`${start} - ${end}`); 

  
        if (i === 5) {
            currentTime = addMinutes(currentTime, 5);
        } else if (i < 6) {
                  currentTime = addMinutes(currentTime, 5);
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
    return `${hours}:${mins}`;
}

function formatTime(time) {
    let [hours, mins] = time.split(':').map(Number);
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

const startTime = "08:00";
const schedule = calculateSchedule(startTime);
console.log(schedule.join('\n'));
document.getElementById("generate-schedule-1").addEventListener("click", () => {
    const startTime = "08:00"; 
    const schedule = calculateSchedule(startTime);  // 1-smana uchun jadval
    generateScheduleTable(schedule);
  });
  
  document.getElementById("generate-schedule-2").addEventListener("click", () => {
    const startTime = "13:30";  // 2-smana boshlanishi
    const schedule = calculateSchedule(startTime);  // 2-smana uchun jadval
    generateScheduleTable(schedule);
  });
  
  document.getElementById("home-button").addEventListener("click", () => {
    window.location.href = "index.html";  // Bosh sahifaga qaytish
  });
  
  function generateScheduleTable(schedule) {
    const tableBody = document.querySelector("#schedule-table tbody");
    tableBody.innerHTML = "";  // Yangi jadvalni tozalash
    
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
  


  