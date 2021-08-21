var config = {
    paths: {
        GiftrWindow: 'js/giftr-window',
        slick: 'js/slick.min',
        footerShow: 'js/footer-show'
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    },
    config: {
        mixins: {
            'Mirasvit_Giftr/js/item': {
                'js/item-mixin': true
            }
        }
    }
};