document.addEventListener("DOMContentLoaded", () => {
    const btnYes = document.getElementById("btn-yes");
    const btnNo = document.getElementById("btn-no");
    const modal = document.getElementById("success-modal");
    const btnClose = document.getElementById("btn-close");

    // Ketika klik "Mau Banget!" -> Munculkan pop-up dan efek Confetti dari bawah
    btnYes.addEventListener("click", () => {
        modal.classList.remove("hidden");

        // Konfigurasi Confetti dari sudut bawah kiri
        confetti({
            particleCount: 80,
            angle: 60,
            spread: 60,
            origin: { x: 0, y: 1 },
            zIndex: 9999 // Memastikan efek confetti muncul di atas kartu tapi tidak memblokir tombol setelahnya
        });

        // Konfigurasi Confetti dari sudut bawah kanan
        confetti({
            particleCount: 80,
            angle: 120,
            spread: 60,
            origin: { x: 1, y: 1 },
            zIndex: 9999
        });
    });

    // Trik interaktif: Tombol "Nanti Deh..." akan menghindar saat didekati/diklik
    const moveButton = (e) => {
        // Cegah aksi default jika di perangkat sentuh agar tidak macet
        if (e.type === "click") {
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
