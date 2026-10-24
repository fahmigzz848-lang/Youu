<script>
document.addEventListener("DOMContentLoaded", () => {
    const btnYes = document.getElementById("btn-yes");
    const btnNo = document.getElementById("btn-no");
    const modal = document.getElementById("success-modal");
    const btnClose = document.getElementById("btn-close");

    // Ketika klik "Mau Banget!" -> Munculkan pop-up kebahagiaan
    btnYes.addEventListener("click", () => {
        modal.classList.remove("hidden");

          // Trik interaktif: Tombol "Nanti Deh..." akan menghindar saat didekati/diklik
    const moveButton = () => {
        const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 50);
        const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 50);
        
        btnNo.style.position = "fixed";
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    };

    btnNo.addEventListener("mouseenter", moveButton);
    btnNo.addEventListener("click", moveButton);

    // Menutup Modal
    btnClose.addEventListener("click", () => {
        modal.classList.add("hidden");
        // Kamu bisa mengarahkan ke chat WhatsApp otomatis di sini jika mau:
        // window.location.href = "https://wa.me";
    });
});
  
</script>

    
