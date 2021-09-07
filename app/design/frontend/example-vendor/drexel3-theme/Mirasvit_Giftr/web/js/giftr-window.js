define(
    [
        'jquery',
        'Magento_Ui/js/modal/modal'
    ],
    function($, modal) {
        const options = {
            type: 'popup',
            responsive: true,
            innerScroll: true,
            // title: 'Pop-up title',
            show:{
                effect:"fade",
                duration: 200
            },
            hide:{
                effect:"fade",
                duration: 200
            },
            buttons: []
        };

        modal(options, $('.giftr-list'));
        $('.togiftr').on('click',function(){
            $('.giftr-list').modal("openModal");
        });
    }
);