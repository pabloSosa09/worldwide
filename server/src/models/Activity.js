const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define(
        "Activity",
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            difficulty:{
                type: DataTypes.INTEGER,
                allowNull: false,
                validate:{
                    inIn:[[1,2,3,4,5]],
                },
            },
            duration:{
                type: DataTypes.FLOAT,
            },
            season:{
                type: DataTypes.ENUM("Summer","Winter","Spring","Autumn"),
                allowNull: false,
            },
        },
        {timestamps: false }
    )
}