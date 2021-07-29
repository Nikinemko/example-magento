define([
        "jquery",
        "select2",
        "domReady!"
    ],
    function($) {
        "use strict";
        $(function() {
            $("#sorter, .limiter-options").select2(
                {
                    closeOnSelect: true,
                    minimumResultsForSearch: -1
                }

            );
        });
    });
