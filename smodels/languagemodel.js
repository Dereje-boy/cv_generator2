export const languageModel = (sequelize, DataTypes)=>{
	const languagemodel_v = sequelize.define(
		'language',{
			id:{
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},

			langauge:{
				type: DataTypes.STRING,
				allowNull: false,
				validation:{
					min:2
				}
			},

			level: {
				type: DataTypes.ENUM('beginner','advanced','fluent','native'),
				allowNull: false
			}
		},{
			tableName:'language'
		}
	);

	return languagemodel_v;
}
