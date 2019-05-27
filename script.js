        $('.my-accordeon .panel').on('click', function () {
            toggleAccordeon($(this));
        });

        function toggleAccordeon(el) {
            if (el.hasClass('show')) {
                el
                    .removeClass('show')
                    .find('.toggle')
                    .slideUp();
            } else {
                el
                    .addClass('show')
                    .find('.toggle')
                    .slideDown();
            }
        }
