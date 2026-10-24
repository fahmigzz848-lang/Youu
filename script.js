document.addEventListener("DOMContentLoaded", () => {
    const btnYes = document.getElementById("btn-yes");
    const btnNo = document.getElementById("btn-no");
    const modal = document.getElementById("success-modal");
    const btnClose = document.getElementById("btn-close");

    // Ketika klik "Mau Banget!" -> Munculkan pop-up dan kejutan Confetti dari bawah
    btnYes.addEventListener("click", () => {
        // Tampilkan modal pop-up
        modal.classList.remove("hidden");

        // Konfigurasi Confetti dari sudut bawah kiri
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 70,
            origin: { x: 0, y: 1 } // Kiri bawah
        });

        // Konfigurasi Confetti dari sudut bawah kanan
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 70,
            origin: { x: 1, y: 1 } // Kanan bawah
        });
    });

    // Trik interaktif: Tombol "Nanti Deh..." akan menghindar saat didekati/diklik
    const moveButton = () => {
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
    });
});
