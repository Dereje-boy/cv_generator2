export const experienceModel = (sequelize, DataTypes)=>{
  const experiencemodel_v = sequelize.define(
	'experience',{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},

		position: {
			type: DataTypes.STRING,
			allowNull: false,
			validation: {
				min: 2
			}
		},

		companyName: {
			type: DataTypes.STRING,
			allowNull: false,
			validation: {
				min: 2
			}
		},

		aboutexperience: {
			type: DataTypes.STRING,
			allowNull: false,
			validation: {
				min: 5
			}
		},

		startDate: {
			type: DataTypes.DATEONLY,
			allowNull: false,			
		},

		endDate:{
			type: DataTypes.DATEONLY,
			allowNull: true,
			defaultValue: null
		},

		stillhere:{
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
			validation: {
				min:0,
				max:1
			}
		}
		
	},{
		tableName: 'experience'
	}
  );

  return experiencemodel_v;
}
