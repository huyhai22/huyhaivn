// Hàm chọn công việc và điền vào form ứng tuyển
function apply(jobTitle) {
    document.getElementById('jobTitle').value = jobTitle;
    window.location.href = '#apply';
}

// Xử lý sự kiện gửi form ứng tuyển
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi form mặc định
    alert("Application submitted successfully!");
    this.reset(); // Xóa các trường sau khi gửi
});

// Xử lý sự kiện đăng nhập
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi form mặc định
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra đăng nhập mẫu
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        window.location.href = '#home';
    } else {
        alert("Incorrect username or password.");
    }
});
// Thanh tìm kiếm
function expandSearchBar() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.add('expanded');
}

function shrinkSearchBar() {
    const searchBar = document.getElementById('searchBar');
    if (document.getElementById('searchInput').value === '') {
        searchBar.classList.remove('expanded');
    }
}

function searchFunction() {
    const input = document.getElementById('searchInput').value;
    if (input.trim() === "") {
        alert("Vui lòng nhập từ khóa để tìm kiếm.");
    } else {
        alert("Đang tìm kiếm: " + input);
    }
}
function toggleContent() {
    const moreContent = document.getElementById("moreContent");
    const toggleButton = document.getElementById("toggleButton");
  
    if (moreContent.style.display === "none") {
      moreContent.style.display = "block";
      toggleButton.textContent = "Thu gọn";
    } else {
      moreContent.style.display = "none";
      toggleButton.textContent = "Xem thêm";
    }
  }
  
