export function getYear() {
    const copyrightEl = document.querySelector('.copyright');
    if (copyrightEl) {
        let currentYear = new Date().getFullYear();
        let copyrightText = `Keïsha Alexander - &copy;${currentYear}`;

        copyrightEl.innerHTML = copyrightText;

    }
}

