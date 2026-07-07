function changeTheme(themeName, btnElement) {
    document.body.setAttribute('data-theme', themeName);
    
    let buttons = document.querySelectorAll('.demo-bar button');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
}