document.addEventListener("DOMContentLoaded", () => {
    const btnYes = document.getElementById("btn-yes");
    const btnNo = document.getElementById("btn-no");
    const modal = document.getElementById("success-modal");
    const btnClose = document.getElementById("btn-close");

    // Ketika klik "Mau Banget!" -> Munculkan pop-up
    btnYes.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    // Trik interaktif: Tombol "Nanti Deh..." akan menghindar saat didekati (desktop) atau diklik (mobile)
    const moveButton = () => {
        // Menghitung batas area aman agar tombol tidak keluar layar jauh
        const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 40);
        const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 40);
        
        btnNo.style.position = "fixed";
        btnNo.style.left = `${Math.max(20, x)}px`;
        btnNo.style.top = `${Math.max(20, y)}px`;
    };

    btnNo.addEventListener("mouseenter", moveButton);
    btnNo.addEventListener("click", moveButton);

    // Menutup Modal Sukses
    btnClose.addEventListener("click", () => {
        modal.classList.add("hidden");
        
        // OPSIONAL: Kamu bisa mengarahkan otomatis ke WhatsApp kamu dengan membuka tanda komentar (//) di bawah:
        // window.location.href = "https://wa.me"; 
    });
});
