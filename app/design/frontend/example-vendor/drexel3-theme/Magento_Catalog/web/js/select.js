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
                    width: 'resolve',
                    closeOnSelect: true,
                    minimumResultsForSearch: -1
                }

            );
        });
    });
