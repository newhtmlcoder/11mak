const searchInput = document.getElementById("search-input");
const resultsList = document.getElementById("results-list");
const homeButton = document.getElementById("home-button");

// O'quvchilarning malumotlari (taxminiy)
const students = [
    { name: "Ali Karimov", birthYear: 2007, grade: 11 },
    { name: "Zarina Ergasheva", birthYear: 2008, grade: 10 },
    { name: "Javlonbek Rakhmonov", birthYear: 2009, grade: 9 },
    { name: "Aida Akhmedova", birthYear: 2010, grade: 8 },

    { name: "Dilorom Qodirova", birthYear: 2006, grade: 11 },
    { name: "Shahnoza Rasulova", birthYear: 2007, grade: 11 },
    { name: "Muhammad Ali", birthYear: 2009, grade: 9 },
    { name: "Asal Nurmatova", birthYear: 2010, grade: 8 },
    { name: "Aziza Shomurodova", birthYear: 2008, grade: 10 },
    { name: "Tugba Yusupova", birthYear: 2009, grade: 9 },
    { name: "Dilshodbek Mirzayev", birthYear: 2007, grade: 11 },
    { name: "Gulbahor Tursunova", birthYear: 2006, grade: 11 },

    { name: "Maksuda Rakhimova", birthYear: 2008, grade: 10 },
    { name: "Baxrom Salimov", birthYear: 2009, grade: 9 },
    { name: "Marhamatbek Yuldashev", birthYear: 2010, grade: 8 },
    { name: "Vohidbek Tokhirjonov", birthYear: 2007, grade: 11 },
    { name: "Suhrob Bekmurodov", birthYear: 2006, grade: 11 },
    { name: "Shukhratbek Asadov", birthYear: 2008, grade: 10 },
    { name: "Lola Mamatova", birthYear: 2009, grade: 9 },
    { name: "Nasiba Ergasheva", birthYear: 2007, grade: 11 },
    { name: "Anvarbek Odilov", birthYear: 2006, grade: 11 },

    { name: "Yulduzbek Nuriddinov", birthYear: 2008, grade: 10 },
    { name: "Gulnoza Ishmuratova", birthYear: 2009, grade: 9 },
    { name: "Shavkatbek Zohidov", birthYear: 2007, grade: 11 },

    { name: "Nodirbek Hakimov", birthYear: 2006, grade: 11 },
    { name: "Tursunoy Jumaeva", birthYear: 2009, grade: 9 },
    { name: "Boshbek Rakhimov", birthYear: 2007, grade: 11 },
    { name: "Sirojiddin Khamidov", birthYear: 2008, grade: 10 },
    { name: "Dilbar Avezova", birthYear: 2009, grade: 9 },
    { name: "Zarina Xolmatova", birthYear: 2007, grade: 11 },
    { name: "Shokhrukhbek Sadikov", birthYear: 2006, grade: 11 },

    { name: "Dilshodbek Usmonov", birthYear: 2008, grade: 10 },
    { name: "Zuhra Kamilova", birthYear: 2009, grade: 9 },
    { name: "Ravshanbek Alimov", birthYear: 2007, grade: 11 },
    { name: "Ozoda Isroilova", birthYear: 2006, grade: 11 },

    { name: "Jannat Tashpulatova", birthYear: 2008, grade: 10 },
    { name: "Farrukhbek Asqarov", birthYear: 2009, grade: 9 },
    { name: "Muhammadjon Tohirov", birthYear: 2007, grade: 11 },
    { name: "Shukhratbek Komilov", birthYear: 2006, grade: 11 },

    { name: "Sardorbek Muminov", birthYear: 2008, grade: 10 },
    { name: "Zaynab Shamsiyeva", birthYear: 2009, grade: 9 },
    { name: "Azamatbek Jalilov", birthYear: 2007, grade: 11 },

    { name: "Samarbek Jumaev", birthYear: 2006, grade: 11 },
    { name: "Nodira Tashpulatova", birthYear: 2008, grade: 10 },
    { name: "Islombek Mukhammadov", birthYear: 2009, grade: 9 },
    { name: "Gulbahor Toshpulatova", birthYear: 2007, grade: 11 },
    { name: "Sirojiddin Ibragimov", birthYear: 2006, grade: 11 }
];


function getGrade(birthYear) {
    const currentYear = 2024;
    const age = currentYear - birthYear;
    return age >= 7 ? `Sinf ${age - 6}` : 'Kirish uchun yosh kichik';
}

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const clearButton = document.getElementById("clear-button");
    clearButton.addEventListener("click", function () {
        searchInput.value = '';
        resultsList.innerHTML = '';
    });

    const filteredStudents = students.filter(student => {
        const fullName = student.name.toLowerCase();
        const grade = getGrade(student.birthYear).toLowerCase();
        return fullName.includes(searchTerm) || grade.includes(searchTerm);
    });
    displayResults(filteredStudents);
});

function displayResults(students) {
    resultsList.innerHTML = '';
    students.forEach(student => {
        const li = document.createElement("li");
        const grade = getGrade(student.birthYear);
        li.textContent = `${student.name} - ${student.grade} -sinf  ${student.birthYear} -yil`;
        resultsList.appendChild(li);

    });

}


homeButton.addEventListener("click", function () {
    window.location.href = "index.html";
});
