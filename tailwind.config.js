module.exports = {
    purge: false,
    theme: {
        screens: {
            'md': '850px',
        },
        extend: {
            colors : {
                primary : '#161844',
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