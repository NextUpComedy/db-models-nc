import sequelize from './connections';
import {
  Settings,
  Content,
  ContentReport,
  Report,
  UserRole,
  UserStatus,
  User,
  Watches,
  Transactions,
  Payout,
  PayoutStatus,
} from './models';

UserRole.hasMany(User);
User.belongsTo(UserRole, { as: 'userRole' });

UserStatus.hasMany(User);
User.belongsTo(UserStatus, { as: 'userStatus' });

User.hasMany(Content);
Content.belongsTo(User);

Content.hasMany(ContentReport, { as: 'contentReports' });
ContentReport.belongsTo(Content);
const ReportContentReportAssociation = Report.hasMany(ContentReport, { as: 'contentReports' });
ContentReport.belongsTo(Report);

Content.hasMany(Watches);
Watches.belongsTo(Content);
const ContentReportWatchesAssociation = ContentReport.hasMany(Watches);
Watches.belongsTo(ContentReport, { as: 'contentReports' });

User.hasMany(User, { foreignKey: 'createdBy' });
User.belongsTo(User, { foreignKey: 'createdBy' });

User.hasMany(User, { foreignKey: 'updatedBy' });
User.belongsTo(User, { foreignKey: 'updatedBy' });

User.hasMany(Content, { foreignKey: 'createdBy' });
Content.belongsTo(User, { foreignKey: 'createdBy' });

User.hasMany(Content, { foreignKey: 'updatedBy' });
Content.belongsTo(User, { foreignKey: 'updatedBy' });

User.hasMany(ContentReport, { foreignKey: 'createdBy' });
ContentReport.belongsTo(User, { foreignKey: 'createdBy' });

User.hasMany(ContentReport, { foreignKey: 'updatedBy' });
ContentReport.belongsTo(User, { foreignKey: 'updatedBy' });

User.hasMany(Report, { foreignKey: 'createdBy' });
Report.belongsTo(User, { foreignKey: 'createdBy' });

User.hasMany(Report, { foreignKey: 'updatedBy' });
Report.belongsTo(User, { foreignKey: 'updatedBy' });

User.hasMany(Watches, { foreignKey: 'createdBy' });
Watches.belongsTo(User, { foreignKey: 'createdBy' });

User.hasMany(Watches, { foreignKey: 'updatedBy' });
Watches.belongsTo(User, { foreignKey: 'updatedBy' });

User.hasMany(Payout, { foreignKey: 'createdBy' });
Payout.belongsTo(User, { foreignKey: 'createdBy' });

User.hasMany(Payout, { foreignKey: 'updatedBy' });
Payout.belongsTo(User, { foreignKey: 'updatedBy' });

PayoutStatus.hasMany(Payout);
Payout.belongsTo(PayoutStatus, { as: 'payoutStatus' });

export {
  sequelize,
  Settings,
  Content,
  ContentReport,
  Report,
  UserRole,
  UserStatus,
  User,
  Watches,
  ContentReportWatchesAssociation,
  ReportContentReportAssociation,
  Transactions,
  Payout,
  PayoutStatus,
};
