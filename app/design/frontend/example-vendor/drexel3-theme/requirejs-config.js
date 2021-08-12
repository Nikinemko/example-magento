var config = {
    paths: {
        GiftrWindow: 'js/giftr-window',
        slick: 'js/slick.min'
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