document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    const navbarCollapse = document.getElementById('navbarContent');
    
    dropdownItems.forEach(item => {
        const dropdownToggle = item.querySelector('.dropdown-toggle');
        
        dropdownToggle.addEventListener('click', function(e) {
            // Hentikan propagasi event ke Bootstrap
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle hanya jika navbar sedang terbuka (di mobile)
            if(window.innerWidth < 992 && !navbarCollapse.classList.contains('show')) return;
            
            // Logic toggle existing
            dropdownItems.forEach(otherItem => {
                if(otherItem !== item) otherItem.classList.remove('dropdown-active');
            });
            item.classList.toggle('dropdown-active');
        });
    });

    // Tambahkan handler untuk menutup dropdown saat navbar collapse ditutup
    navbarCollapse.addEventListener('hidden.bs.collapse', function() {
        dropdownItems.forEach(item => item.classList.remove('dropdown-active'));
    });
});