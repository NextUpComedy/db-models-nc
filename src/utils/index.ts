import { AES, enc } from 'crypto-js';
import { Settings } from '../database';
import { IDashboardSettings, IVariables } from '../interfaces';
import config from '../config';

const { ENCRYPTION_SECRET_KEY } = config;

const getDashboardSettings = async (): Promise<IDashboardSettings> => {
  const settings = (await Settings.findOne({ where: { name: 'variables' } }))?.value as IVariables;
  const regularVariables = settings?.regularVariables;
  const encryptedVariables = settings?.encryptedVariables;

  // ? SPLIT_PERCENTAGE
  const nextUpToOwedSplitPercentage = regularVariables?.nextupToOwedSplitPercentage;
  if (!nextUpToOwedSplitPercentage) throw new Error('nextUpToOwedSplitPercentage not found');
  // ? SYSTEM_ACTIVATION_DATE
  const systemActivationDate = regularVariables?.systemActivationDate;
  if (!systemActivationDate) throw new Error('systemActivatingDate not found');
  // ? FETCH_MAX_COUNT
  const maxCount = Number(regularVariables?.fetchMaxCount);
  if (!maxCount) throw new Error('fetchMaxCount not found');
  // ? EXPIRED_AFTER_IN_YEARS
  const expiredAfterInYears = Number(regularVariables?.expiredAfterInYears);
  if (!expiredAfterInYears) throw new Error('expiredAfterInYears not found');

  // ? USCREEN_ENDPOINT
  const uScreenEndpoint = regularVariables?.uScreenEndpoint;
  if (!uScreenEndpoint) throw new Error('uScreenEndpoint not found');
  // ? USCREEN_WATCHES_FETCH_LIMIT
  const limit = Number(regularVariables?.uScreenWatchesFetchLimit);
  if (!limit) throw new Error('uScreenWatchesFetchLimit not found');
  // ? USCREEN_CALCULATOR_ENDPOINT
  const calculatorEndpoint = regularVariables?.calculatorEndpoint;
  if (!calculatorEndpoint) throw new Error('calculatorEndpoint not found');

  let uscreenApiKey = encryptedVariables?.uscreenApiKey;
  if (!uscreenApiKey) throw new Error('Uscreen Api Key not found');
  // ? USCREEN_API_KEY

  uscreenApiKey = AES
    .decrypt(uscreenApiKey, ENCRYPTION_SECRET_KEY)
    .toString(enc.Utf8);

  let stripeKey = encryptedVariables?.stripeKey;
  if (!stripeKey) throw new Error('stripeKey not found');
  // ? stripeKey

  stripeKey = AES
    .decrypt(stripeKey, ENCRYPTION_SECRET_KEY)
    .toString(enc.Utf8);

  return {
    nextUpToOwedSplitPercentage,
    systemActivationDate,
    uScreenEndpoint,
    uscreenApiKey,
    maxCount,
    expiredAfterInYears,
    limit,
    stripeKey,
    calculatorEndpoint,
  };
};

const getPlansFromSettings = async (): Promise<{ [key: string]: number }> => {
  const plans = (await Settings.findOne({ where: { name: 'plans' } }))?.value as { [key: string]: number };

  return plans;
};

export { getDashboardSettings, getPlansFromSettings };
