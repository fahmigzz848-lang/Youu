document.addEventListener("DOMContentLoaded", () => {
    const btnYes = document.getElementById("btn-yes");
    const btnNo = document.getElementById("btn-no");
    const modal = document.getElementById("success-modal");
    const btnClose = document.getElementById("btn-close");

    // Ketika klik "Mau Banget!" -> Efek Confetti dari bawah dulu, baru Pop-up muncul
    btnYes.addEventListener("click", () => {
        
        // Picu Confetti dari sudut bawah kiri
        window.confetti({
            particleCount: 100,
            angle: 60,
            spread: 70,
            origin: { x: 0, y: 1 },
            zIndex: 99999 // Diatur sangat tinggi agar berada di depan modal teratas
        });

        // Picu Confetti dari sudut bawah kanan
        window.confetti({
            particleCount: 100,
            angle: 120,
            spread: 70,
            origin: { x: 1, y: 1 },
            zIndex: 99999
        });

        // Berikan jeda sedikit (300ms) sebelum menampilkan modal agar confetti terlihat meluncur bebas
        setTimeout(() => {
            modal.classList.remove("hidden");
        }, 300);
    });

    // Trik interaktif: Tombol "Nanti Deh..." akan menghindar saat didekati/diklik
    const moveButton = (e) => {
        if (e.type === "click" || e.type === "touchstart") {
            e.preventDefault();
        }
        
        const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 40);
        const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 40);
        
        btnNo.style.position = "fixed";
        btnNo.style.left = `${Math.max(20, x)}px`;
        btnNo.style.top = `${Math.max(20, y)}px`;
    };

    // Deteksi interaksi mouse (Desktop) dan sentuhan (Mobile)
    btnNo.addEventListener("mouseenter", moveButton);
    btnNo.addEventListener("click", moveButton);
    btnNo.addEventListener("touchstart", moveButton);

    // Menutup Modal Sukses
    btnClose.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
});
