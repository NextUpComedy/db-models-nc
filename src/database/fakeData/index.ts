const settings = [
  {
    name: 'variables',
    value: JSON.stringify({
      regularVariables: {
        nextupToOwedSplitPercentage: '0.5',
        systemActivationDate: '2022-09-29',
        fetchMaxCount: '10',
        expiredAfterInYears: '2',
        viewliftEmail: 'ibrahim.jarada@gmail.com',
        uScreenEndpoint: 'https://export-api.viewlift.com',
        uScreenWatchesFetchLimit: '1000',
        calculatorEndpoint: 'https://sjtisy3q46.execute-api.us-east-2.amazonaws.com/dev/',
      },
      encryptedVariables: {
        viewliftPassword: 'U2FsdGVkX1/3B+fSkAa/x9w21hKYPlsV1an8kbIxGDA=',
        stripeKey: 'U2FsdGVkX1+6ph+Vx39ZD+B2d+CoPgyuOBso2YEGaWa9lH36zJU5wq9vdgDrQ1axQaOYjqyEQLXe66zRuMzgRvnlvG3OC6gPErcRdiDv/kSkoI9DIg8c/gM0PE7dnv50WHm3Yiy6BPgBBMkj8Irtlax8KxEAU/9x4PxuLT9SYNc=',
      },
    }),
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'plans',
    value: JSON.stringify({
      '57da63f9-49cd-4728-8494-18d33b1fe365': 12,
      '6839856e-4495-4652-9253-d6f526d886b4': 12,
      '2c22c49e-fe1c-4184-a55e-7f0b0340f48f': 12,
      '2c22c49d-fe1c-4184-a55e-8f0b0340f48e': 12,
      '1bc4ef27-eddc-4ef9-916c-79960a8a946a': 12,
      '838b29a4-6923-4678-9d38-c893e6101601': 12,
      '4ef8f8c1-b865-43a3-34e4-8078b3952b0a': 12,
      '6c801b8a-e2cb-4834-9638-e7b5132d8008': 12,
      '652fa303-46ca-4795-bb5b-ef0bad11aa48': 12,
      'b70236b6-0f90-4b7a-89d6-62e9b608bbc8': 12,
      '1f4fafa8-eccd-41b3-b4a0-53010c30c2b4': 12,
      'fab337b3-a9dc-46e6-944c-573fb75e6285': 12,
      '5981bc33-088f-4467-b030-994cc8caa24f': 12,
      '5282cf46-c31c-4669-b0a4-671750b6bc56': 12,
      'b6f5c67b-59f6-48cf-b0f5-d24ce559bf70': 12,
      'fb9a41c2-f5ad-4237-9df2-93bad868cae1': 12,
      'f5004bff-d37e-4c81-a8d6-3f2a9adbfd66': 1,
      'c73d8014-b5aa-4d5c-be2e-82176da1a5fc': 1,
      '1d02b12f-f2dd-40e4-85db-fc49cad2cfc8': 1,
      '5ee8f9c1-a865-43a3-b4e4-8078a3952b0a': 1,
      '8e00712a-e6b9-400f-8ab4-fa00002a690f': 1,
      '6747d7ed-990a-4f4f-8cf1-4a645dc59285': 1,
      '83b4b6d8-7c42-423a-9f3e-31f281eef189': 1,
      '298bcc2d-1b18-45e8-9d2a-cfea02f0d603': 1,
      '799f85b6-9d84-446f-a8f5-634dad5529f5': 1,

      'f861defb-35a4-4b6d-9719-af3dc176fc30': 1,
      'b6a7799f-2568-4042-b69c-63c6efbaa4fc': 3,
      '058be946-4893-4017-9016-9059d2047b27': 1,
      '80ac8c95-9134-444e-b92c-ad87fc550237': 1,
      'e071f7cd-bc41-48a4-91e8-876174f096ff': 12,
      'fa060d0a-235b-441b-a2df-8ce085a57839': 12,
      '637b27a4-5823-4278-9d38-c595e2101500': 1,
      '57b752ea-61df-4974-823f-401f389aff77': 12,
      '2b4ad1ef-8516-41fb-beb9-84cb6ba69f05': 12,
      'cb16c277-96ac-48b8-adb8-ccd860fe5c50': 12,
      'ee8f49e3-d266-458c-afee-225845795676': 12,
      '1f161f80-5bee-4dec-bf38-8f3333f30a46': 1,
      '6c801b8a-e2cb-4834-9638-e7b5122d8008': 12,
    }),
    updated_at: new Date(),
    created_at: new Date(),
  },
];

const userRoles = [
  {
    name: 'system',
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'master_admin',
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'admin',
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'comedian',
    updated_at: new Date(),
    created_at: new Date(),
  },
];

const userStatus = [
  {
    name: 'PENDING',
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'APPROVED',
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'REJECTED',
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'BANNED',
    updated_at: new Date(),
    created_at: new Date(),
  },
];

const payoutStatuses = userStatus.slice(0, 3).concat({
  name: 'CANCELLED',
  updated_at: new Date(),
  created_at: new Date(),
});

const users = [
  {
    name: 'System',
    email: 'nextup.comedy22@gmail.com',
    password: '$2b$10$m8ZV7QOrCLHlvXroQZgz5.qUds1eIXy1rD4S7kNR1Hl6w4CHu5l6u',
    user_role_id: 1,
    user_status_id: 2,
    total_revenue: 0,
    paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Master Admin',
    email: 'masteradmin@gmail.com',
    password: '$2b$10$m8ZV7QOrCLHlvXroQZgz5.qUds1eIXy1rD4S7kNR1Hl6w4CHu5l6u',
    user_role_id: 2,
    user_status_id: 2,
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/5ca5dcb59121e1000152fc2c/0x0.png',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
];

export {
  settings,
  userRoles,
  userStatus,
  users,
  payoutStatuses,
};
