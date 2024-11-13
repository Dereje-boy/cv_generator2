import {Sequelize, DataTypes } from 'sequelize';

//models
import {userModel} from './usermodel.js';
import {personalinformationModel} from './personalinformationmodel.js';
import {educationModel} from './educationmodel.js';
import {experienceModel} from './experiencemodel.js';
import {referenceModel} from './referencemodel.js';
import {languageModel} from './languagemodel.js';
import {hobbyModel} from './hobbymodel.js';

//sequelize
const sequelize = new Sequelize(
  'cvgenerator',
  'avnadmin',
  'AVNS_D7LpPmWwqkUpb8sQIW6',
  {
   host:"mysql-cv-generator2-cv-generator2.k.aivencloud.com",
   port: '15018',
   logging: false,
   dialect:"mysql",
   dialectOptions: {
      connectTimeout: 60000
    }
  }
);

export const db = {
   sequelize: sequelize,
   Sequelize: Sequelize,
   userModel: userModel(sequelize, Sequelize.DataTypes),
   personalinformationModel: personalinformationModel(sequelize, Sequelize.DataTypes),
   educationModel: educationModel(sequelize, Sequelize.DataTypes),
   experienceModel: experienceModel(sequelize, Sequelize.DataTypes),
   referenceModel: referenceModel(sequelize, Sequelize.DataTypes),
   languageModel: languageModel(sequelize, Sequelize.DataTypes),
   hobbyModel: hobbyModel(sequelize, Sequelize.DataTypes)
}


//user and personal information association
db.userModel.hasOne(db.personalinformationModel, {
  foreignKey: 'userId',  
  // foreign key in PersonalInformationModel referencing UserModel
  //name of field from user model
  sourceKey: 'id',
  // alias for easy reference
  as: 'personalinformation'
});

db.personalinformationModel.belongsTo(
  db.userModel, {
  	foreignKey: 'userId',
  	targetKey: 'id',
  	as: 'user'  // alias for easy reference
  }
);


//user and education association
db.userModel.hasOne(
	db.educationModel, {
	  foreignKey: 'userId',  
	  // foreign key in experienceModel referencing UserModel
	  //name of field from user model
	  sourceKey: 'id',
	  // alias for easy reference
	  as: 'education'
	}
);

db.educationModel.belongsTo(
  db.userModel, {
  	foreignKey: 'userId',
  	targetKey: 'id',
  	as: 'user'  // alias for easy reference
  }
);

//user and experience association
db.userModel.hasOne(
	db.experienceModel,{
	  foreignKey: 'userId',
  	  sourceKey: 'id',
  	  as: 'experience'
	}
);

db.experienceModel.belongsTo(
  db.userModel, {
  	foreignKey: 'userId',
  	targetKey: 'id',
  	as: 'user'  // alias for easy reference
  }
);

//user and reference association
db.userModel.hasOne(db.referenceModel, {
	  foreignKey: 'userId',
  	  sourceKey: 'id',
  	  as: 'reference'
});
db.referenceModel.belongsTo(
  db.userModel, {
  	foreignKey: 'userId',
  	targetKey: 'id',
  	as: 'user'  // alias for easy reference
  }
);

//user and language association
db.userModel.hasOne(db.languageModel, {
	  foreignKey: 'userId',
  	  sourceKey: 'id',
  	  as: 'language'
});
db.languageModel.belongsTo(
  db.userModel, {
  	foreignKey: 'userId',
  	targetKey: 'id',
  	as: 'user'  // alias for easy reference
  }
);


//user and hobby association
db.userModel.hasOne(db.hobbyModel, {
	  foreignKey: 'userId',
  	  sourceKey: 'id',
  	  as: 'hobby'
});
db.hobbyModel.belongsTo(
  db.userModel, {
  	foreignKey: 'userId',
  	targetKey: 'id',
  	as: 'user'  // alias for easy reference
  }
);

// module.exports = { db };
