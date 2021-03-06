var i18n = new (require('../../translations/i18n'))

window.localization = window.localization || {},
    function (n) {
        localization.translate = {

            menu: function () {
                $('#welcome-menu').text(i18n.__('Welcome'));
            },

            welcome: function () {
                $('#welcome .inner p').text(i18n.__('Hopefully this helps someone to get up to speed with electron.'));
            },

            init: function () {
                this.welcome();
                this.menu();
            }
        };

        n(function () {
            localization.translate.init();
        })

    }(jQuery);