define([
        "jquery",
        "select2",
        "domReady!"
    ],
    function($) {
        "use strict";
        $(function() {
            $('#sorter').select2(
                {
                    dropdownCssClass: "select-dropdown",
                    closeOnSelect: true,
                    minimumResultsForSearch: -1
                }

            );
        });
    });
