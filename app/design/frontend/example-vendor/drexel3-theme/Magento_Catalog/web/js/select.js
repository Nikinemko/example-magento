"use strict";

define([
        "jquery",
        "select2",
        "domReady!"
    ],
    function($) {

        $(function() {
            $("#sorter").select2(
                {
                    closeOnSelect: true,
                    minimumResultsForSearch: -1
                }
            );
            $(".limiter-id").select2(
                {
                    closeOnSelect: true,
                    minimumResultsForSearch: -1
                }
            );
        });
    });
