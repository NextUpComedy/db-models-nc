import Big from 'big.js';
import {
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

interface IDatabase {
  DATABASE_URL: string;
  ENCRYPTION_SECRET_KEY: string;
}

interface IBasicContent {
  type?: string;
  id: string;
  userId?: number;
  title: string;
  publishDate: number;
  permalink: string;
  nextUpAccRevenue: string;
  owedAccRevenue: string;
  launchDate?: string;
  advance?: number;
  feePaid?: number;
  filmingCosts?: number;
  paidToOwedAmount?: number;
  freeToBePaid?: number;
  createdBy: number;
  updatedBy: number;
  runtime: number;
}

interface IVLContent extends IBasicContent {
  primaryCategory: { title: string };
}

interface ISubscription {
  planIdentifier: string;
  offersApplied: [];
}

interface IPurchase {
  subscription: ISubscription;
}

interface IVLUser {
  email: string[];
  purchases: IPurchase[];
}

interface IWatchedStream {
  streamId: string;
  contentId: string;
  duration: number;
  content: IVLContent;
  user?: IVLUser;
}

interface IDbWatches extends Pick<IWatchedStream, 'streamId' | 'contentId' | 'duration'> {
  createdBy: number;
  updatedBy: number;
}

interface IAccumulatedWatchesDurationPerContent {
  contentId: string;
  watchedSeconds: number;
  watches: IDbWatches[];
  revenue: string | Big;
  reportId?: number;
  createdBy: number;
  updatedBy: number;
  tvodTicketsCount: number;
  tvodSeconds: number;
  title?: string;
  nextupRevenue?: string | Big | null;
  owedRevenue?: string | Big | null;
  beforeExpiryReportDaysPercentage?: string | Big | null;
  beforeExpRevenue?: string | Big | null;
  splittableBeforeExpRevenue?:string | Big | null;
  reimbursementBeforeExpRevenue?:string | Big | null;
  afterExpRevenue?:string | Big | null;

}

interface IContent extends Model<
InferAttributes<IContent>, InferCreationAttributes<IContent>
> {
  id: string;
  userId?: number | null;
  title: string;
  publishDate: number;
  permalink: string;
  nextUpAccRevenue: string;
  owedAccRevenue: string;
  launchDate?: string;
  advance?: string;
  feePaid?: string;
  filmingCosts?: string;
  createdBy: number;
  updatedBy: number;
  runtime: number;
  primaryCategory:string;
  recoveredCosts: string;
  contentReports?: IContentReport[];
  createdAt?: string;
  updatedAt?: string;
}

interface IContentReport extends Model<
InferAttributes<IContentReport>, InferCreationAttributes<IContentReport>
> {
  id?: number;
  contentId: string;
  reportId?: number;
  watchedSeconds: number;
  revenue: string | Big;
  createdBy: number;
  updatedBy: number;
  tvodTicketsCount: number;
  tvodSeconds: number;
  watches?: IWatchedStream[] | IDbWatches[];
  nextupRevenue: string | Big | null;
  owedRevenue: string | Big | null;
  beforeExpiryReportDaysPercentage: string | Big | null;
  beforeExpRevenue: string | Big | null;
  splittableBeforeExpRevenue: string | Big | null;
  reimbursementBeforeExpRevenue: string | null;
  afterExpRevenue: string | Big | null;
  report?: IReport;
  createdAt?: string;
  updatedAt?: string;
}

interface IReport extends Model<
InferAttributes<IReport>, InferCreationAttributes<IReport>
> {
  id?: number;
  watchTimeFrom: string;
  watchTimeTo: string;
  overallWatchedSeconds?: number;
  totalRevenue?: number;
  nextUpToOwedSplitPercentage: string;
  createdBy: number;
  updatedBy: number;
  contentReports?: IAccumulatedWatchesDurationPerContent[];
  createdAt?: string;
  updatedAt?: string;
}

interface IUserRole extends Model<
InferAttributes<IUserRole>, InferCreationAttributes<IUserRole>
> {
  id?: number;
  name: string;
}

interface IVariables {
  regularVariables: {
    nextupToOwedSplitPercentage: string;
    systemActivationDate: string;
    fetchMaxCount: string;
    expiredAfterInYears: string;
    viewliftEmail: string;
    viewliftEndpoint: string;
    viewliftWatchesFetchLimit: string;
    calculatorEndpoint: string;
  };
  encryptedVariables: {
    viewliftPassword: string;
    stripeKey: string;
  };
}

interface IDashboardSettings {
  nextUpToOwedSplitPercentage: string;
  systemActivationDate: string;
  maxCount: number;
  expiredAfterInYears: number;
  email: string;
  viewliftEndpoint: string;
  limit: number;
  password: string;
  stripeKey: string;
  calculatorEndpoint: string;
}

interface ISettings extends Model<InferAttributes<ISettings>, InferCreationAttributes<ISettings>> {
  id?: number;
  name: string;
  value: unknown;
}

interface IUser extends Model<
InferAttributes<IUser>, InferCreationAttributes<IUser>
> {
  id?: number;
  name: string;
  email: string;
  password: string;
  googleId?: string;
  userRoleId: number;
  userStatusId?: number;
  totalRevenue: number | Big | string;
  paidRevenue: number | Big | string;
  image?: string;
  rejectionReason?: string;
  stripeAccount?: string;
  createdBy: number;
  updatedBy?: number;
  createdAt?: string;
  updatedAt?: string;
}

type ICustomUser = Pick<IUser, 'id' | 'name' | 'email' | 'password' | 'googleId' | 'userRoleId' | 'userStatusId' | 'totalRevenue' | 'paidRevenue' | 'image' | 'rejectionReason' | 'createdBy' | 'updatedBy' >;
interface IWatches extends Model<
InferAttributes<IWatches>, InferCreationAttributes<IWatches>
> {
  id?: number;
  streamId: string;
  duration: number;
  contentId: string;
  contentReportId: number;
  createdBy: number;
  updatedBy: number;
}

interface IUserStatus extends Model<
InferAttributes<IUserStatus>, InferCreationAttributes<IUserStatus>
> {
  id?: number;
  name: string;
}

interface IPayout extends Model<
InferAttributes<IPayout>, InferCreationAttributes<IPayout>
> {
  id?: number;
  userId: number;
  payoutStatusId: number;
  amount: number | Big | string;
  rejectionReason?: string;
  createdBy: number;
  updatedBy: number;
  createdAt?: string;
  updatedAt?: string;
  user?:IUser;
}

interface IPayoutStatus extends Model<
InferAttributes<IPayoutStatus>, InferCreationAttributes<IPayoutStatus>
> {
  id?: number;
  name: string;
}

interface ITransactions extends Model<
InferAttributes<ITransactions>, InferCreationAttributes<ITransactions>
> {
  id?: number;
  contentId: string;
  nextUpAccRevenue: number;
  owedAccRevenue: number;
  prevNextUpAccRevenue: number;
  prevOwedAccRevenue: number;
  recoveredCosts: number;
  prevRecoveredCosts: number;
  contentReportId : number;
  revenue: number;
  nextUpToOwedSplitPercentage: number;
  createdAt?: string;
  updatedAt?: string;
}

export {
  IContent,
  IContentReport,
  IUserRole,
  ISettings,
  IUser,
  IWatches,
  IReport,
  IDatabase,
  IUserStatus,
  ITransactions,
  IVariables,
  IDashboardSettings,
  IPayout,
  IPayoutStatus,
  ICustomUser,
};
