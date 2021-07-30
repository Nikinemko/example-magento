define([
        "jquery",
        "select2",
        "domReady!"
    ],
    function($) {
        "use strict";
        $(function() {
            $("#sorter").select2(
                {
                    closeOnSelect: true,
                    minimumResultsForSearch: -1
                }

            );
        });
    });
