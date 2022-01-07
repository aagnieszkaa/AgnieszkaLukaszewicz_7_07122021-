	const dbConfig = require("../config/db.config.js");
	
	const Sequelize = require("sequelize");
	const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	  host: dbConfig.HOST,
	  dialect: dbConfig.dialect,
	  operatorsAliases: false,
	  pool: {
	    max: dbConfig.pool.max,
	    min: dbConfig.pool.min,
	    acquire: dbConfig.pool.acquire,
	    idle: dbConfig.pool.idle
	  }
	});
	
	const db = {};
	
	db.Sequelize = Sequelize;
	db.sequelize = sequelize;
	
	// LES MODELS
	db.Utilisateur = require("./utilisateur.model.js")(sequelize, Sequelize);
	db.Publication = require("./publication.model.js")(sequelize, Sequelize);
	// ...
	
	module.exports = db;
