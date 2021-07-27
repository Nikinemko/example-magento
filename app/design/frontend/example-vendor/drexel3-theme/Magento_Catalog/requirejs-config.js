var config = {
    deps: [
        'Magento_Catalog/js/select'
    ],
    paths: {
        'select2': 'Magento_Catalog/js/select2.min',
    },
    shim: {
        'select2': {
            'deps': ['jquery']
        }
    }
};

