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
                background: '#d6d4d4',
                backgroundSecundary: '#608b9b'
            },
            fontFamily : {
                body : ['Dosis']
            }
        },
    },
    
    variants: {
       
        borderColor: ["hover", "focus"],
        borderStyle: ['hover', 'focus'], 
          
    },
    plugins: []
}