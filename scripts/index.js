document.addEventListener("DOMContentLoaded", () => {
    // Update current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();
  
    // Update last modified date
    document.getElementById("lastModified").textContent += ` ${document.lastModified}`;
  
    // Responsive menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  
    // Course data
    const courses = [
      { code: "CSE 110", completed: true },
      { code: "WDD 130", completed: false },
      { code: "CSE 111", completed: true },
      { code: "CSE 210", completed: false },
      { code: "WDD 131", completed: false },
      { code: "WDD 231", completed: true },
    ];
  
    const courseList = document.getElementById("course-list");
    const allBtn = document.getElementById("all");
    const cseBtn = document.getElementById("cse");
    const wddBtn = document.getElementById("wdd");
  
    function renderCourses(filter = null) {
      courseList.innerHTML = "";
      const filteredCourses = filter
        ? courses.filter((course) => course.code.startsWith(filter))
        : courses;
  
      filteredCourses.forEach((course) => {
        const courseItem = document.createElement("div");
        courseItem.textContent = course.code;
        courseItem.style.background = course.completed ? "#8fbc8f" : "#f4a460";
        courseItem.className = "course-item";
        courseList.appendChild(courseItem);
      });
    }
  
    allBtn.addEventListener("click", () => renderCourses());
    cseBtn.addEventListener("click", () => renderCourses("CSE"));
    wddBtn.addEventListener("click", () => renderCourses("WDD"));
  
    // Initial render
    renderCourses();
  });
  document.addEventListener("DOMContentLoaded", () => {
    // Filter functionality for the course list
    const filterButtons = document.querySelectorAll(".filters button");
    const courseItems = document.querySelectorAll(".course-item");
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.id;
  
        courseItems.forEach((item) => {
          if (filter === "all" || item.textContent.startsWith(filter.toUpperCase())) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  
    // Update date and time in the footer
    function updateDateTime() {
      const footer = document.querySelector("footer p:last-child");
      const now = new Date();
      const formattedDateTime = now.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      footer.textContent = `Last Update: ${formattedDateTime}`;
    }
  
    // Initialize the date and time once and then update every second
    updateDateTime();
    setInterval(updateDateTime, 1000);
  });
  