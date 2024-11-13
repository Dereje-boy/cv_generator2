export const educationModel = (sequelize, DataTypes)=>{
	const educationmodel_v = sequelize.define(
	  'educationmodel',
	  {
	  	id:{
	  		type: DataTypes.INTEGER,
	  		autoIncrement: true,
	  		primaryKey: true
	  	},

	  	nameofuniversity:{
	  		type: DataTypes.STRING,
	  		allowNull: false,
	  		validation:{
	  			min: 2
	  		}
	  	},

	  	titleofdocument:{
	  		type: DataTypes.STRING,
	  		allowNull: false,
	  		validation: {
	  			min:2
	  		}
	  	},

	  	cgpa: {
	  		type:DataTypes.FLOAT,
	  		allowNull: false,
	  		validation:{
	  			min: 2,
	  			max: 4
	  		}
	  	},

	  	yearofgraduation: {
	  		type: DataTypes.DATEONLY,
	  		allowNull: false,
	  	}
	  },
	  {
	  	tableName: 'education'
	  }	
	);

	return educationmodel_v;
	
}
