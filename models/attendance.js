module.exports = function (sequelize, DataTypes) {
    var attendance = sequelize.define('attendance', {
        idx: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            primaryKey: true,
            validate: {
                isDate: true,
            },
        },
        memo: {
            type: DataTypes.STRING(2000),
            allowNull: true,
        },
        submit_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        file_name: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        delete_hash: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
    }, {
        timestamps: false,
        tableName: 'attendance'
    });
    return attendance;
};