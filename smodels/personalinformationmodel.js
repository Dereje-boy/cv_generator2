export const personalinformationModel =  (sequelize, DataTypes)=>{
	const personalinformationModel_v = sequelize.define(
		'personalinformation',{
			id:{
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			
			firstname: {
				type: DataTypes.STRING,
				allowNull: false,
				validation:{
					len: [3, 25]
				}
			},

			lastname: {
				type: DataTypes.STRING,
				allowNull: false,
				validation:{
					len: [3, 25]
				}
			},

			phonenumber: {
				type: DataTypes.STRING,
				allowNull: false,
				validation:{
					min: 9
				}
			},

			city:{
				type: DataTypes.STRING,
				allowNull: false,
			},

			state: {
				type: DataTypes.STRING,
				allowNull: false,
			},

			aboutme:{
				type: DataTypes.STRING,
				allowNull: false,
			},

			ppimagepath:{
				type: DataTypes.STRING,
				allowNull: true,
			}
		},{
			tableName:'personalinformation'
		}
	);

	return personalinformationModel_v;
}
