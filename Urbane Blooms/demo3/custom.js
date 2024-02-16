document.addEventListener('DOMContentLoaded', function () {
    const previewContainer = document.querySelector('.product-preview');
    const previewBox = previewContainer.querySelectorAll('.preview');

    document.querySelectorAll('.product-container').forEach((container) => {
        container.addEventListener('click', (event) => {
            const product = event.target.closest('.product');

            if (product) {
                previewContainer.style.display = 'flex';
                const name = product.getAttribute('data-name');

                previewBox.forEach((preview) => {
                    const target = preview.getAttribute('data-target');
                    if (name === target) {
                        preview.classList.add('active');
                    } else {
                        preview.classList.remove('active');
                    }
                });
            }
        });
    });

    previewContainer.addEventListener('click', (event) => {
        if (!event.target.closest('.preview')) {
            previewContainer.style.display = 'none';
            previewBox.forEach((preview) => {
                preview.classList.remove('active');
            });
        }
    });

    previewBox.forEach((close) => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            previewContainer.style.display = 'none';
        };
    });
});
