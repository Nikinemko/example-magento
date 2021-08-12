define([
    'jquery',
    'uiComponent',
    'underscore',
    'Magento_Customer/js/customer-data',
    'mage/translate'
], function($, Component, _, customerData, $t) {
    'use strict';
    var mixin = ({
        addProduct: function() {
            if (!$('#product_addtocart_form').valid()) {
                return false;
            }

            $.ajax({
                url: this.url,
                method: 'POST',
                data: this.getData(),
                dataType: 'json',
                showLoader: true,
                success: function (response) {
                    $('.giftr-dropdown').hide();
                    if (response.status == this.login) {
                        setLocation(response.message);
                    }
                }
            });
        },

        defineBehaviour: function(data, event) {
            if (!this.isLoggedIn())
                window.location.href = this.loginUrl;
        },
    });
    return function (target) { // target == Result that Magento_Ui/.../columns returns.
        return target.extend(mixin); // new result that all other modules receive
    };
});
