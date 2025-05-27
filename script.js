// Dropdown Learn menu
const learnBtn = document.getElementById("learnBtn");
const learnDropdown = learnBtn ? learnBtn.closest(".learn-dropdown") : null;
const learnMenu = document.getElementById("learnMenu");

if (learnBtn && learnDropdown && learnMenu) {
  learnBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    learnDropdown.classList.toggle("open");
  });

  // Đóng menu khi click ra ngoài
  document.addEventListener("click", function () {
    learnDropdown.classList.remove("open");
  });

  // Đóng menu khi chọn mục
  learnMenu.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", function () {
      learnDropdown.classList.remove("open");
      // Thêm xử lý chuyển trang nếu muốn
    });
  });
}

// Search functionality
document.querySelector(".search-btn")?.addEventListener("click", function () {
  const searchTerm = document.querySelector(".search-input").value;
  if (searchTerm.trim()) {
    alert("Searching for: " + searchTerm);
  }
});

// Enter key search
document
  .querySelector(".search-input")
  ?.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const searchTerm = this.value;
      if (searchTerm.trim()) {
        alert("Searching for: " + searchTerm);
      }
    }
  });

// Hero search functionality
document
  .querySelector(".hero-search-btn")
  ?.addEventListener("click", function () {
    const searchTerm = document.querySelector(".hero-search-input").value;
    if (searchTerm.trim()) {
      alert("Searching courses for: " + searchTerm);
    }
  });

// Hero search Enter key
document
  .querySelector(".hero-search-input")
  ?.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const searchTerm = this.value;
      if (searchTerm.trim()) {
        alert("Searching courses for: " + searchTerm);
      }
    }
  });

// Course slider functionality (only for mobile)
let currentSlideIndex = 1;
const totalSlides = 3;

function currentSlide(n) {
  showSlide((currentSlideIndex = n));
}

function showSlide(n) {
  const slider = document.querySelector(".courses-slider");
  if (!slider || window.getComputedStyle(slider).display === "none") return;

  const track = document.getElementById("coursesTrack");
  const dots = document.querySelectorAll(".dot");

  if (n > totalSlides) currentSlideIndex = 1;
  if (n < 1) currentSlideIndex = totalSlides;

  if (track) {
    track.style.transform = `translateX(-${(currentSlideIndex - 1) * 100}%)`;
  }
  dots.forEach((dot) => dot.classList.remove("active"));
  if (dots[currentSlideIndex - 1]) {
    dots[currentSlideIndex - 1].classList.add("active");
  }
}

// Auto slide (only for mobile)
setInterval(() => {
  const slider = document.querySelector(".courses-slider");
  if (!slider || window.getComputedStyle(slider).display === "none") return;

  currentSlideIndex++;
  if (currentSlideIndex > totalSlides) currentSlideIndex = 1;
  showSlide(currentSlideIndex);
}, 5000);

// Reset slider when window resizes
window.addEventListener("resize", () => {
  const slider = document.querySelector(".courses-slider");
  if (slider && window.getComputedStyle(slider).display === "none") {
    currentSlideIndex = 1;
  }
});

// Responsive behavior for courses grid
function handleResize() {
  const width = window.innerWidth;
  const coursesGrid = document.getElementById("coursesGrid");
  if (!coursesGrid) return;
  if (width <= 768) {
    coursesGrid.style.gridTemplateColumns = "1fr";
  } else if (width <= 1024) {
    coursesGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
  } else {
    coursesGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
  }
}
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// Hiệu ứng nổi khi cuộn tới đâu
document.addEventListener("DOMContentLoaded", function () {
  const scrollEls = document.querySelectorAll(".scroll-animate");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  scrollEls.forEach((el) => observer.observe(el));
});

// Hover effect for footer
document.querySelectorAll(".footer-col li").forEach((li) => {
  li.addEventListener("mouseenter", () => {
    li.style.background = "#dc2626";
    li.style.color = "#fff";
    li.style.borderRadius = "4px";
    li.style.paddingLeft = "8px";
    li.style.transition = "all 0.2s";
  });
  li.addEventListener("mouseleave", () => {
    li.style.background = "none";
    li.style.color = "";
    li.style.paddingLeft = "";
  });
});

// Hiển thị thông báo khi đăng ký email ở footer
const subscribeForm = document.querySelector(".subscribe-form");
if (subscribeForm) {
  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email.trim()) {
      alert("Thank you for subscribing, " + email + "!");
      this.reset();
    }
  });
}

// Hiệu ứng cuộn mượt khi bấm "Learn More"
function scrollToLessons() {
  const lessonGrid = document.getElementById("lessonGrid");
  if (lessonGrid) {
    lessonGrid.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
// Xử lý nút 3 sọc (menu mobile)
const menuBtn = document.getElementById("menuBtn"); // nút 3 sọc
const mobileMenu = document.getElementById("mobileMenu"); // menu mobile

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileMenu.classList.toggle("open");
    // Nếu menu mở, thêm class open cho các phần tử cần hiện
    if (mobileMenu.classList.contains("open")) {
      document.body.classList.add("menu-open");
      // Nếu có các phần tử khác cần hiện, thêm class hoặc style tại đây
      // Ví dụ: document.querySelector('.learn-dropdown')?.classList.add('show-on-mobile');
    } else {
      document.body.classList.remove("menu-open");
      // document.querySelector('.learn-dropdown')?.classList.remove('show-on-mobile');
    }
  });

  // Đóng menu khi click ra ngoài
  document.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    // document.querySelector('.learn-dropdown')?.classList.remove('show-on-mobile');
  });

  // Ngăn click trong menu đóng menu
  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

// Khi nhấn vào link Premium User Benefits
document.querySelector(".premium-benefits").onclick = function (e) {
  e.preventDefault();
  document.getElementById("premiumOverlay").style.display = "flex";
};
function closePremium() {
  document.getElementById("premiumOverlay").style.display = "none";
}
// Khi nhấn "Nâng cấp ngay" nếu đã đăng nhập thì hiện popup chọn phương thức
document.querySelector(".premium-btn")?.addEventListener("click", function () {
  const user = localStorage.getItem("userName");
  if (!user) {
    alert("Bạn cần đăng nhập tài khoản mới sử dụng được tính năng này!");
  } else {
    document.getElementById("upgradeMethodOverlay").style.display = "flex";
  }
});
function closeUpgradeMethod() {
  document.getElementById("upgradeMethodOverlay").style.display = "none";
}
// Xử lý các nút phương thức thanh toán
document.querySelectorAll(".upgrade-method-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    alert("Chức năng đang được cập nhật!");
  });
});
