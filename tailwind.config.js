module.exports = {
    purge: false,
    theme: {
        screens: {
            'md': '850px',
        },
        extend: {
            colors : {
                primary : '#000000',
                secundary: '#13a89e'
            },
            fontFamily : {
                body : ['Dosis']
            }
        },
    },
    
    variants: {
        borderColor: ["hover", "focus"],
    },
    plugins: []
}