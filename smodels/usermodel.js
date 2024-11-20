const userModel = (sequelize, DataTypes)=>{

const UserModel_v = sequelize.define(
  'usermodel',
  	{
	    id:{
	      type:DataTypes.INTEGER,
	      autoIncrement: true,
	      primaryKey: true
	    },
	    
	    email:{
	      type: DataTypes.STRING,
	      allowNull: false,
	      unique: true,
	      validate:{
	      isEmail: true,
		  min: 6
	      }
	    },

	    password:{
	     type: DataTypes.STRING,
	     allowNull: false,
	     validate:{
			min: 6
	     }
	   }
   	}
   ,{
   	 tableName : 'User'
   }
 );

  return UserModel_v;

};


export default userModel;
