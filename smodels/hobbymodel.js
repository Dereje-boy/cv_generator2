export const hobbyModel = (sequelize, DataTypes)=>{
	const hobbymodel_v = sequelize.define(
		'hobby',{
			id:{
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},

			hobby:{
				type: DataTypes.STRING(500),
				allowNull: false,
				validation:{
					min:3
				}
			}
		},{
			tableName:'hobby'
		}
	);

	return hobbymodel_v;
}
