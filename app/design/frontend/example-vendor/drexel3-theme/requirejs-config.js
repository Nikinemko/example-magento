var config = {
    paths: {
        GiftrWindow: 'Mirasvit_Giftr/js/giftr-window',
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
                'Mirasvit_Giftr/js/item-mixin': true
            }
        }
    }
};