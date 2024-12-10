//IMAGES HOVER TEXT SCRIPT

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".scroll-image");
  const descriptions = document.querySelectorAll(".description");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      const targetId = image.getAttribute("data-target");
      const targetDescription = document.getElementById(targetId);

      if (targetDescription.classList.contains("visible")) {
        targetDescription.classList.add("hidden");
        targetDescription.classList.remove("visible");
      } else {
        descriptions.forEach((desc) => {
          desc.classList.add("hidden");
          desc.classList.remove("visible");
        });

        targetDescription.classList.remove("hidden");
        targetDescription.classList.add("visible");
      }
    });
  });
});

// CALENDAR SCRIPT

const startMonth = 9;
const startYear = 2024;
const endMonth = 9;
const endYear = 2025;

let currentMonth = startMonth;
let currentYear = startYear;

function getDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function getWeekNumber(date) {
  const tempDate = new Date(date.valueOf());
  const dayNumber = (date.getDay() + 6) % 7;
  tempDate.setDate(tempDate.getDate() - dayNumber + 3);
  const firstThursday = tempDate.valueOf();
  tempDate.setMonth(0, 1);
  if (tempDate.getDay() !== 4) {
    tempDate.setMonth(0, 1 + ((4 - tempDate.getDay() + 7) % 7));
  }
  return 1 + Math.ceil((firstThursday - tempDate) / 604800000);
}

function renderCalendar() {
  const monthLabel = document.getElementById("monthLabel");
  const calendar = document.getElementById("calendar");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  monthLabel.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  let calendarHTML = "<table><tr>";
  calendarHTML += `<th class="month-number">${currentMonth + 1}</th>`;
  ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"].forEach((day) => {
    calendarHTML += `<th>${day}</th>`;
  });
  calendarHTML += "</tr><tr>";

  const blankDays = firstDay === 0 ? 6 : firstDay - 1;
  let weekNumber = getWeekNumber(new Date(currentYear, currentMonth, 1));
  calendarHTML += `<td class="week-number">${weekNumber}</td>`;

  for (let i = 0; i < blankDays; i++) {
    calendarHTML += '<td class="inactive"></td>';
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarHTML += `<td>${day}</td>`;
    if ((day + blankDays) % 7 === 0 && day < daysInMonth) {
      weekNumber++;
      calendarHTML += `</tr><tr><td class="week-number">${weekNumber}</td>`;
    }
  }

  const remainingCells = (7 - ((daysInMonth + blankDays) % 7)) % 7;
  for (let i = 0; i < remainingCells; i++) {
    calendarHTML += '<td class="inactive"></td>';
  }

  calendarHTML += "</tr></table>";
  calendar.innerHTML = calendarHTML;

  updateArrows();
}

function prevMonth() {
  if (
    currentYear > startYear ||
    (currentYear === startYear && currentMonth > startMonth)
  ) {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  }
}

function nextMonth() {
  if (
    currentYear < endYear ||
    (currentYear === endYear && currentMonth < endMonth)
  ) {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  }
}

function updateArrows() {
  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");

  prevArrow.classList.toggle(
    "disabled",
    currentYear === startYear && currentMonth === startMonth
  );
  nextArrow.classList.toggle(
    "disabled",
    currentYear === endYear && currentMonth === endMonth
  );
}

// RENDER CALENDAR ON CLICK

document.addEventListener("DOMContentLoaded", function () {
  const datepickerContainer = document.getElementById("datepicker-container");

  const buttons = document.querySelectorAll(
    '.container-button, .container-button-mobile'
  );

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonRect = button.getBoundingClientRect();

      datepickerContainer.style.position = "absolute";
      datepickerContainer.style.top = `${buttonRect.bottom + window.scrollY}px`;
      datepickerContainer.style.left = `${buttonRect.left}px`;

      if (datepickerContainer.style.display === "none" || datepickerContainer.style.display === "") {
        datepickerContainer.style.display = "block";
      } else {
        datepickerContainer.style.display = "none";
      }
    });
  });

  renderCalendar();
});


