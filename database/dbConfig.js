const Sequelize = require("sequelize");
const sequelize = new Sequelize("modulo_psicologia", "root", "admin", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.role = require("../models/role.js")(sequelize, Sequelize);
db.patient = require("../models/patient.js")(sequelize, Sequelize);
db.psicologo = require("../models/psicologo.js")(sequelize, Sequelize);
db.patientSchedule = require("../models/patient-schedule.js")(
  sequelize,
  Sequelize,
);
db.patientContact = require("../models/patient-contact.js")(
  sequelize,
  Sequelize,
);
db.patientCuestionario = require("../models/patient-cuestionario.js")(
  sequelize,
  Sequelize,
);
db.user = require("../models/user.js")(sequelize, Sequelize);
db.cita = require("../models/citas.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.user.hasMany(db.patient, { onDelete: "cascade" });
db.user.hasMany(db.psicologo, { onDelete: "cascade" });

db.patient.hasMany(db.patientSchedule, { onDelete: "cascade" });
db.patient.hasMany(db.patientContact, { onDelete: "cascade" });
db.patient.hasMany(db.patientCuestionario, { onDelete: "cascade" });
db.patient.hasMany(db.cita, { onDelete: "cascade" });
db.psicologo.hasMany(db.cita, { onDelete: "cascade" });

db.cita.belongsTo(db.psicologo, { foreignKey: { allowNull: false } });
db.cita.belongsTo(db.patient, { foreignKey: { allowNull: false } });

db.patient.belongsTo(db.user, { foreignKey: { allowNull: false } });
db.psicologo.belongsTo(db.user, { foreignKey: { allowNull: false } });
db.patientSchedule.belongsTo(db.patient, { foreignKey: { allowNull: false } });
db.patientContact.belongsTo(db.patient, { foreignKey: { allowNull: false } });
db.patientCuestionario.belongsTo(db.patient, {
  foreignKey: { allowNull: false },
});

module.exports = db;
