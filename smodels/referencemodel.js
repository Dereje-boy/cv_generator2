export const referenceModel = (sequelize, DataTypes)=>{
	const referencemodel_v = sequelize.define(
		'reference',
		{
			id:{
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},

			fullname: {
				type: DataTypes.STRING,
				allowNull: false,
				validation: {
					min: 5
				}
			},

			phonenumber:{
				type: DataTypes.STRING,
				allowNull: false,
				validation: {
					min: 9
				}
			},

			email: {
				type: DataTypes.STRING,
				allowNull: true,				
			},

			role: {
				type: DataTypes.STRING,
				allowNull: false,
				validation: {
					min:5
				}
			}
		},{
			tableName:'reference'
		}
	)

	return referencemodel_v;
}
