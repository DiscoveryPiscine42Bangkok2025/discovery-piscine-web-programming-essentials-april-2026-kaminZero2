document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.typing').forEach(function(element) {
        const text = element.textContent.trim();
        element.textContent = '';
        element.style.visibility = 'visible';

        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i += 1;
                setTimeout(type, 100);
            } else {
                setTimeout(function() {
                    element.style.borderRight = 'none';
                }, 2000);
            }
        }
        type();
    });
});


