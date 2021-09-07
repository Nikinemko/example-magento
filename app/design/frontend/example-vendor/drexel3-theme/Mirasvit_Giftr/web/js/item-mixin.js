define([
    'jquery',
    'uiComponent',
    'underscore',
    'Magento_Customer/js/customer-data',
    'mage/translate'
], function($, Component, _, customerData, $t) {
    'use strict';
    var mixin = ({

        initRegistries: function() {
            var customerRegistries = customerData.get('gift-registry')();
            this.isLoggedIn(customerRegistries.is_logged_in || false);
            this.registries(customerRegistries.registries || []);
            this.selected(customerRegistries.selected || []);
            this.hasRegistries(this.registries().length > 0);
        },


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
                    if (response.status === this.login) {
                        setLocation(response.message);
                    }
                }
            });
        },

        defineBehaviour: function(data, event) {
            if (!this.isLoggedIn()) {
                window.location.href = this.loginUrl;
            }
            this.initRegistries();

            if (this.registries().length <= 1) {
                event.stopPropagation();
                this.addProduct();
            }
        },
    });
    return function (target) { // target == Result that Magento_Ui/.../columns returns.
        return target.extend(mixin); // new result that all other modules receive
    };
});
