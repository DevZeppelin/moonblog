module.exports = {
    purge: false,
    theme: {
        screens: {
            'md': '850px',
        },
        extend: {
            colors : {
                primary : '#0e364e',
                secundary: '#13a89e',
                background: '#eff2f5',
                backgroundSecundary: '#ebf4f5'
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