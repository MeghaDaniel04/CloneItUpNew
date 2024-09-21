const cardsData = [
    {
        title: "HTML for beginners",
        image: "./assets/CardImage.png",
        rating: 4.5,
        content: "Learning HTML for modern interactive web applications",
        tags: ["HTML", "Web"]
    },
    {
        title: "CSS for mobile",
        image: "./assets/CardImage (1).png",
        rating: 4.3,
        content: "You will learn about CSS layouts, wrappers, sticky navbar",
        tags: ["Engineering", "Testing"]
    },
    {
        title: "JavaScript",
        image: "./assets/CardImage (2).png",
        rating: 4.7,
        content: "This course provides a complete comprehensive introduction to JavaScript",
        tags: ["JavaScript", "Development"]
    }
];

const cardsContainer = document.getElementById('cardsContainer');

cardsData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = "card bg-[#FFFFFF]  py-4 pl-4 pr-2 flex space-x-8 rounded-xl mb-4";
    cardElement.dataset.aos = "fade-right";

    cardElement.innerHTML = `
        <img class="card-img" src="${card.image}" alt="">
        <div class="flex flex-col gap-10">
            <div>
                <div class="flex justify-between">
                    <h3 class="font-bold">${card.title}</h3>
                    <div class="flex items-center">
                        <img src="./assets/star.png" alt="">
                        <p class="rating">${card.rating}</p>
                    </div>
                </div>
                <p class=" pt-2 text-sm" >${card.content}</p>
            </div>
           <div class="flex justify-between items-center space-x-2">
    <div class="flex space-x-2">
        ${card.tags.map(tag => `
            <button class="border border-gray-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white px-3 py-1 rounded">${tag}</button>`).join('')}
    </div>
    <button class="btn-color border border-gray-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-xl">
        <img src="./assets/arrow_forward.png" alt="">
    </button>
</div>

        </div>
    `;

    cardsContainer.appendChild(cardElement);
});




document.addEventListener("DOMContentLoaded", function() {
    // Sample JSON data
    const data = {
      "calendar": [
        { "dayName": "SUN", "dayNumber": 12, "active": true },
        { "dayName": "MON", "dayNumber": 13, "active": false },
        { "dayName": "TUE", "dayNumber": 14, "active": false },
        { "dayName": "WED", "dayNumber": 15, "active": false },
        { "dayName": "THU", "dayNumber": 16, "active": false },
        { "dayName": "FRI", "dayNumber": 17, "active": false },
        { "dayName": "SAT", "dayNumber": 18, "active": false }
      ],
      "mentors": [
        {
          "name": "John Wilson",
          "image": "./assets/Avatar (1).png",
          "role": "UI / UX Designer",
          "experience": "6 yr."
        },
        {
          "name": "Daniel Hill",
          "image": "./assets/Avatar (2).png",
          "role": "Test Engineer",
          "experience": "5 yr."
        },
        {
          "name": "Sofia Harris",
          "image": "./assets/Avatar (3).png",
          "role": "Python Developer",
          "experience": "8 yr."
        },
        {
          "name": "Eva Smith",
          "image": "./assets/Avatar (4).png",
          "role": "Motion Designer",
          "experience": "4 yr."
        }
      ],
      "learningProcess": [
        {
          "course": "Python Developer",
          "progress": 80,
          "color": "#4DA1FF"
        },
        {
          "course": "Test Engineer",
          "progress": 60,
          "color": "#8BC34A"
        }
      ]
    };
  
  
    // Calendar
const calendarWidget = document.querySelector(".calendar-widget");
calendarWidget.innerHTML = data.calendar.map(day => {
  return `
    <div class="calendar-day ">
      <span class="day-name">${day.dayName}</span>
      <span class="day-number">${day.dayNumber}</span>
    </div>
  `;
}).join(""); 

  
    // Mentors
    const mentorsSection = document.querySelector(".mentors-section");
    const mentorsHTML = data.mentors.map(mentor => {
      return `
        <div class="mentor pt-1 pl-2">
          <img src="${mentor.image}" alt="${mentor.name}">
          <div class="mentor-info">
            <h4>${mentor.name}</h4>
            <p>${mentor.role}</p>
            <p>Exp. ${mentor.experience}</p>
          </div>
        </div>
      `;
    }).join("");
    mentorsSection.innerHTML += mentorsHTML;
  
    // Learning Process section
    const learningProcessSection = document.querySelector(".learning-process-section");
    const learningProcessHTML = data.learningProcess.map(process => {
      return `
        <div class="progress-bar ">
          <p>${process.course}</p>
          <div class="progress">
            <div class="progress-fill" style="width: ${process.progress}%; background-color: ${process.color};"></div>
          </div>
          <p>${process.progress}%</p>
        </div>
      `;
    }).join("");
    learningProcessSection.innerHTML += learningProcessHTML;
  });
  