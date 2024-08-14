window.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');
    var footer = document.getElementById('footer');
  
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', './components/navbar.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            navbar.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
  
    // Code pour charger le contenu du footer
    var xhrFooter = new XMLHttpRequest();
    
    xhrFooter.open('GET', './components/footer.html', true);
    xhrFooter.onreadystatechange = function() {
        if (xhrFooter.readyState === 4 && xhrFooter.status === 200) {
            footer.innerHTML = xhrFooter.responseText;
        }
    };
    xhrFooter.send();


  });
  