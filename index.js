document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btnYes');
    const phase1 = document.getElementById('phase1');
    const phase2 = document.getElementById('phase2');

    // Sự kiện khi chọn "Tôi ổn"
    if (btnYes) {
        btnYes.addEventListener('click', () => {
            // Ẩn khối 1, hiện khối 2
            phase1.style.display = 'none';
            phase2.style.display = 'flex'; // Dùng flex để giữ căn giữa theo class .buttons
            phase2.style.flexDirection = 'column'; 
            phase2.style.animation = "fadeIn 0.8s ease-in-out";
        });
    }

    
});
