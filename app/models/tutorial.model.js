module.exports=(sequilize,Sequelize)=>{
    const tutorial =sequilize.define('tutorial', {
        title:{
            type: Sequelize.STRING
        },
    descreption:{
        type: Sequelize.STRING
    },
    published :{
        type: Sequelize.Boloon
    }
    
    })
    
    
    
    }