const { DataTypes }= require('sequelize');

module.exports= (sequelize)=>{
    sequelize.define(
        "Country",
        {
            id:{
                type: DataTypes.INTEGER,
                allownull: false,
                unique: true, 
                primaryKey: true
            },
            name:{
                type:DataTypes.STRING,
                allownull:false,
            },
            image:{
                type: DataTypes.STRING,
                allownull: false,
            },
            continent:{
                type: DataTypes.STRING,
                allownull: false,
            },
            capital:{
                type: DataTypes.STRING,
                allownull:false,
            },
            subregion:{
                type: DataTypes.STRING,
                allownull: false,
            },
            area:{
                type: DataTypes.FLOAT,
                allownull: false,
            },
            population:{
                type: DataTypes.INTEGER,
                allownull: false,
            },
        },
        {timestamps: false}
    )

}