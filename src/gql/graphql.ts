/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
  UUID: { input: any; output: any };
};

export type CreateBulkService = {
  amount: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  rate: Scalars['Float']['input'];
};

export type CreateProfile = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  logo_image?: InputMaybe<Scalars['String']['input']>;
  phone_no?: InputMaybe<Scalars['String']['input']>;
  phone_number_country_code: Scalars['String']['input'];
  signature_image?: InputMaybe<Scalars['String']['input']>;
  tax?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['ID']['input'];
};

export type CreateReceipt = {
  date: Scalars['Date']['input'];
  is_receipt_send: Scalars['Boolean']['input'];
  payment_method: Scalars['String']['input'];
  payment_note?: InputMaybe<Scalars['String']['input']>;
  receipt_name?: InputMaybe<Scalars['String']['input']>;
  receipt_no: Scalars['String']['input'];
  recipient_address?: InputMaybe<Scalars['String']['input']>;
  recipient_email?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_phone?: InputMaybe<Scalars['String']['input']>;
  total_amount?: InputMaybe<Scalars['Float']['input']>;
  user_id: Scalars['ID']['input'];
};

export type CreateService = {
  amount: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  rate: Scalars['Float']['input'];
  receipt_id: Scalars['UUID']['input'];
};

export type CreateUser = {
  id: Scalars['ID']['input'];
};

export type DownloadPdf = {
  Services?: InputMaybe<Array<CreateBulkService>>;
  date: Scalars['Date']['input'];
  is_receipt_send: Scalars['Boolean']['input'];
  orginazation_id: Scalars['ID']['input'];
  payment_method: Scalars['String']['input'];
  payment_note?: InputMaybe<Scalars['String']['input']>;
  receipt_name?: InputMaybe<Scalars['String']['input']>;
  receipt_no: Scalars['String']['input'];
  recipient_address?: InputMaybe<Scalars['String']['input']>;
  recipient_email?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_phone?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProfile: Profile;
  createReceipt: Receipt;
  createService: Service;
  createUser: User;
  deleteProfile: Scalars['Boolean']['output'];
  deleteReceipt: Scalars['Boolean']['output'];
  deleteService: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  downloadReceiptPDF: Scalars['String']['output'];
  downloadReceiptPDFWithReceiptId: Scalars['String']['output'];
  saveReceipt: Scalars['Boolean']['output'];
  sendReceiptPDFToEmail: Scalars['Boolean']['output'];
  sendReceiptPDFToEmailWithReceiptId: Scalars['Boolean']['output'];
  sendReceiptPDFToWhatsApp: Scalars['Boolean']['output'];
  sendReceiptPDFToWhatsAppWithReceiptId: Scalars['Boolean']['output'];
  updateProfile: Profile;
  updateReceipt: Receipt;
  updateService: Service;
};

export type MutationCreateProfileArgs = {
  input: CreateProfile;
};

export type MutationCreateReceiptArgs = {
  input: CreateReceipt;
};

export type MutationCreateServiceArgs = {
  input: CreateService;
};

export type MutationCreateUserArgs = {
  input: CreateUser;
};

export type MutationDeleteProfileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteReceiptArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteServiceArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDownloadReceiptPdfArgs = {
  input: DownloadPdf;
};

export type MutationDownloadReceiptPdfWithReceiptIdArgs = {
  orginazationId: Scalars['String']['input'];
  receiptId: Scalars['String']['input'];
};

export type MutationSaveReceiptArgs = {
  input: DownloadPdf;
};

export type MutationSendReceiptPdfToEmailArgs = {
  input: SendReceiptPdfToEmail;
};

export type MutationSendReceiptPdfToEmailWithReceiptIdArgs = {
  email: Scalars['String']['input'];
  orginazationId: Scalars['String']['input'];
  receiptId: Scalars['String']['input'];
};

export type MutationSendReceiptPdfToWhatsAppArgs = {
  input: SendReceiptPdfToWhatsApp;
};

export type MutationSendReceiptPdfToWhatsAppWithReceiptIdArgs = {
  orginazationId: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  receiptId: Scalars['String']['input'];
};

export type MutationUpdateProfileArgs = {
  input: UpdateProfile;
};

export type MutationUpdateReceiptArgs = {
  input: UpdateReceipt;
};

export type MutationUpdateServiceArgs = {
  input: UpdateService;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Profile = {
  __typename?: 'Profile';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  logo_image?: Maybe<Scalars['String']['output']>;
  phone_no?: Maybe<Scalars['String']['output']>;
  phone_number_country_code: Scalars['String']['output'];
  signature_image?: Maybe<Scalars['String']['output']>;
  tax: Scalars['Float']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  profile?: Maybe<Profile>;
  profileByUserId?: Maybe<Profile>;
  receipt?: Maybe<Receipt>;
  receipts: ReceiptConnection;
  searchReceipts: SearchReceipt;
  service?: Maybe<Service>;
  serviceByReceiptId?: Maybe<Array<Maybe<Service>>>;
  user?: Maybe<User>;
  users: UserConnection;
};

export type QueryProfileArgs = {
  id: Scalars['ID']['input'];
};

export type QueryProfileByUserIdArgs = {
  userId: Scalars['String']['input'];
};

export type QueryReceiptArgs = {
  id: Scalars['ID']['input'];
};

export type QueryReceiptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type QuerySearchReceiptsArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
  dateRange?: InputMaybe<Array<Scalars['String']['input']>>;
  page: Scalars['Int']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryServiceArgs = {
  id: Scalars['ID']['input'];
};

export type QueryServiceByReceiptIdArgs = {
  receiptId: Scalars['String']['input'];
};

export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type Receipt = {
  __typename?: 'Receipt';
  Services?: Maybe<Array<Maybe<Service>>>;
  created_at: Scalars['DateTime']['output'];
  date: Scalars['Date']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  is_receipt_send: Scalars['Boolean']['output'];
  payment_method: Scalars['String']['output'];
  payment_note?: Maybe<Scalars['String']['output']>;
  receipt_name?: Maybe<Scalars['String']['output']>;
  receipt_no: Scalars['String']['output'];
  recipient_address?: Maybe<Scalars['String']['output']>;
  recipient_email?: Maybe<Scalars['String']['output']>;
  recipient_name?: Maybe<Scalars['String']['output']>;
  recipient_phone?: Maybe<Scalars['String']['output']>;
  sub_total_amount?: Maybe<Scalars['Float']['output']>;
  tax_amount?: Maybe<Scalars['Float']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id: Scalars['ID']['output'];
};

export type ReceiptConnection = {
  __typename?: 'ReceiptConnection';
  edges: Array<ReceiptEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ReceiptEdge = {
  __typename?: 'ReceiptEdge';
  cursor: Scalars['String']['output'];
  node: Receipt;
};

export type SearchReceipt = {
  __typename?: 'SearchReceipt';
  foundCount: Scalars['Int']['output'];
  receipts: Array<Receipt>;
  totalCount: Scalars['Int']['output'];
};

export type SendReceiptPdfToEmail = {
  Services?: InputMaybe<Array<CreateBulkService>>;
  date: Scalars['Date']['input'];
  is_receipt_send: Scalars['Boolean']['input'];
  orginazation_id: Scalars['ID']['input'];
  payment_method: Scalars['String']['input'];
  payment_note?: InputMaybe<Scalars['String']['input']>;
  receipt_name?: InputMaybe<Scalars['String']['input']>;
  receipt_no: Scalars['String']['input'];
  recipient_address?: InputMaybe<Scalars['String']['input']>;
  recipient_email: Scalars['String']['input'];
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_phone?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['ID']['input'];
};

export type SendReceiptPdfToWhatsApp = {
  Services?: InputMaybe<Array<CreateBulkService>>;
  date: Scalars['Date']['input'];
  is_receipt_send: Scalars['Boolean']['input'];
  orginazation_id: Scalars['ID']['input'];
  payment_method: Scalars['String']['input'];
  payment_note?: InputMaybe<Scalars['String']['input']>;
  receipt_name?: InputMaybe<Scalars['String']['input']>;
  receipt_no: Scalars['String']['input'];
  recipient_address?: InputMaybe<Scalars['String']['input']>;
  recipient_email?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_phone: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};

export type Service = {
  __typename?: 'Service';
  amount: Scalars['Float']['output'];
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  quantity: Scalars['Int']['output'];
  rate: Scalars['Float']['output'];
  receipt_id: Scalars['UUID']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type UpdateProfile = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  logo_image?: InputMaybe<Scalars['String']['input']>;
  phone_no?: InputMaybe<Scalars['String']['input']>;
  phone_number_country_code?: InputMaybe<Scalars['String']['input']>;
  signature_image?: InputMaybe<Scalars['String']['input']>;
  tax?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReceipt = {
  date?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['UUID']['input'];
  is_receipt_send?: InputMaybe<Scalars['Boolean']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  payment_note?: InputMaybe<Scalars['String']['input']>;
  receipt_name?: InputMaybe<Scalars['String']['input']>;
  receipt_no?: InputMaybe<Scalars['String']['input']>;
  recipient_address?: InputMaybe<Scalars['String']['input']>;
  recipient_email?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_phone?: InputMaybe<Scalars['String']['input']>;
  total_amount?: InputMaybe<Scalars['Float']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateService = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
};

export type User = {
  __typename?: 'User';
  Profile?: Maybe<Profile>;
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  mode: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  use_count: Scalars['Int']['output'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type ProfileFragmentFragment = {
  __typename?: 'Profile';
  id: any;
  company_name?: string | null;
  logo_image?: string | null;
  phone_no?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  title?: string | null;
  signature_image?: string | null;
  currency: string;
  tax: number;
  phone_number_country_code: string;
} & { ' $fragmentName'?: 'ProfileFragmentFragment' };

export type DownloadReceiptPdfMutationVariables = Exact<{
  input: DownloadPdf;
}>;

export type DownloadReceiptPdfMutation = {
  __typename?: 'Mutation';
  downloadReceiptPDF: string;
};

export type SaveReceiptMutationVariables = Exact<{
  input: DownloadPdf;
}>;

export type SaveReceiptMutation = {
  __typename?: 'Mutation';
  saveReceipt: boolean;
};

export type SendReceiptPdfToEmailMutationVariables = Exact<{
  input: SendReceiptPdfToEmail;
}>;

export type SendReceiptPdfToEmailMutation = {
  __typename?: 'Mutation';
  sendReceiptPDFToEmail: boolean;
};

export type SendReceiptPdfToWhatsAppMutationVariables = Exact<{
  input: SendReceiptPdfToWhatsApp;
}>;

export type SendReceiptPdfToWhatsAppMutation = {
  __typename?: 'Mutation';
  sendReceiptPDFToWhatsApp: boolean;
};

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfile;
}>;

export type UpdateProfileMutation = {
  __typename?: 'Mutation';
  updateProfile: { __typename?: 'Profile' } & {
    ' $fragmentRefs'?: { ProfileFragmentFragment: ProfileFragmentFragment };
  };
};

export type UserProfileQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;

export type UserProfileQuery = {
  __typename?: 'Query';
  profileByUserId?:
    | ({ __typename?: 'Profile' } & {
        ' $fragmentRefs'?: { ProfileFragmentFragment: ProfileFragmentFragment };
      })
    | null;
};

export type ReceiptFragmentFragment = {
  __typename?: 'Receipt';
  id: any;
  receipt_name?: string | null;
  recipient_name?: string | null;
  recipient_phone?: string | null;
  recipient_email?: string | null;
  recipient_address?: string | null;
  receipt_no: string;
  user_id: string;
  date: any;
  payment_method: string;
  payment_note?: string | null;
  total_amount?: number | null;
  is_receipt_send: boolean;
} & { ' $fragmentName'?: 'ReceiptFragmentFragment' };

export type DownloadReceiptPdfWithReceiptIdMutationVariables = Exact<{
  receiptId: Scalars['String']['input'];
  orginazationId: Scalars['String']['input'];
}>;

export type DownloadReceiptPdfWithReceiptIdMutation = {
  __typename?: 'Mutation';
  downloadReceiptPDFWithReceiptId: string;
};

export type SendReceiptPdfToEmailWithReceiptIdMutationVariables = Exact<{
  receiptId: Scalars['String']['input'];
  orginazationId: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;

export type SendReceiptPdfToEmailWithReceiptIdMutation = {
  __typename?: 'Mutation';
  sendReceiptPDFToEmailWithReceiptId: boolean;
};

export type SendReceiptPdfToWhatsAppWithReceiptIdMutationVariables = Exact<{
  receiptId: Scalars['String']['input'];
  orginazationId: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
}>;

export type SendReceiptPdfToWhatsAppWithReceiptIdMutation = {
  __typename?: 'Mutation';
  sendReceiptPDFToWhatsAppWithReceiptId: boolean;
};

export type ReceiptQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type ReceiptQuery = {
  __typename?: 'Query';
  receipt?:
    | ({
        __typename?: 'Receipt';
        sub_total_amount?: number | null;
        tax_amount?: number | null;
        Services?: Array<{
          __typename?: 'Service';
          id: any;
          description: string;
          rate: number;
          quantity: number;
          amount: number;
        } | null> | null;
      } & {
        ' $fragmentRefs'?: { ReceiptFragmentFragment: ReceiptFragmentFragment };
      })
    | null;
};

export type SearchReceiptsQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  dateRange?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
}>;

export type SearchReceiptsQuery = {
  __typename?: 'Query';
  searchReceipts: {
    __typename?: 'SearchReceipt';
    totalCount: number;
    foundCount: number;
    receipts: Array<{
      __typename?: 'Receipt';
      id: any;
      receipt_name?: string | null;
      recipient_name?: string | null;
      recipient_phone?: string | null;
      recipient_email?: string | null;
      recipient_address?: string | null;
      receipt_no: string;
      user_id: string;
      date: any;
      total_amount?: number | null;
      payment_method: string;
      is_receipt_send: boolean;
    }>;
  };
};

export type GetUserReceiptsQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserReceiptsQuery = {
  __typename?: 'Query';
  receipts: {
    __typename?: 'ReceiptConnection';
    edges: Array<{
      __typename?: 'ReceiptEdge';
      cursor: string;
      node: { __typename?: 'Receipt' } & {
        ' $fragmentRefs'?: { ReceiptFragmentFragment: ReceiptFragmentFragment };
      };
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      startCursor?: string | null;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
};

export const ProfileFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'company_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logo_image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone_no' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'signature_image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tax' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'phone_number_country_code' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProfileFragmentFragment, unknown>;
export const ReceiptFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ReceiptFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Receipt' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'receipt_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recipient_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recipient_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recipient_email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recipient_address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'receipt_no' } },
          { kind: 'Field', name: { kind: 'Name', value: 'user_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_method' } },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_note' } },
          { kind: 'Field', name: { kind: 'Name', value: 'total_amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'is_receipt_send' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ReceiptFragmentFragment, unknown>;
export const DownloadReceiptPdfDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DownloadReceiptPDF' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DownloadPDF' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'downloadReceiptPDF' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DownloadReceiptPdfMutation,
  DownloadReceiptPdfMutationVariables
>;
export const SaveReceiptDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SaveReceipt' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DownloadPDF' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'saveReceipt' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SaveReceiptMutation, SaveReceiptMutationVariables>;
export const SendReceiptPdfToEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendReceiptPDFToEmail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'SendReceiptPDFToEmail' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sendReceiptPDFToEmail' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SendReceiptPdfToEmailMutation,
  SendReceiptPdfToEmailMutationVariables
>;
export const SendReceiptPdfToWhatsAppDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendReceiptPDFToWhatsApp' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'SendReceiptPDFToWhatsApp' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sendReceiptPDFToWhatsApp' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SendReceiptPdfToWhatsAppMutation,
  SendReceiptPdfToWhatsAppMutationVariables
>;
export const UpdateProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateProfile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateProfile' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateProfile' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProfileFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'company_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logo_image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone_no' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'signature_image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tax' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'phone_number_country_code' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateProfileMutation,
  UpdateProfileMutationVariables
>;
export const UserProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'UserProfile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profileByUserId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProfileFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'company_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logo_image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone_no' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'signature_image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tax' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'phone_number_country_code' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserProfileQuery, UserProfileQueryVariables>;
export const DownloadReceiptPdfWithReceiptIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DownloadReceiptPDFWithReceiptId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'receiptId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orginazationId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'downloadReceiptPDFWithReceiptId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'receiptId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'receiptId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orginazationId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orginazationId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DownloadReceiptPdfWithReceiptIdMutation,
  DownloadReceiptPdfWithReceiptIdMutationVariables
>;
export const SendReceiptPdfToEmailWithReceiptIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendReceiptPDFToEmailWithReceiptId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'receiptId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orginazationId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sendReceiptPDFToEmailWithReceiptId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'receiptId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'receiptId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orginazationId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orginazationId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SendReceiptPdfToEmailWithReceiptIdMutation,
  SendReceiptPdfToEmailWithReceiptIdMutationVariables
>;
export const SendReceiptPdfToWhatsAppWithReceiptIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendReceiptPDFToWhatsAppWithReceiptId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'receiptId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orginazationId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'phoneNumber' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'sendReceiptPDFToWhatsAppWithReceiptId',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'receiptId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'receiptId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orginazationId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orginazationId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'phoneNumber' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'phoneNumber' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SendReceiptPdfToWhatsAppWithReceiptIdMutation,
  SendReceiptPdfToWhatsAppWithReceiptIdMutationVariables
>;
export const ReceiptDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Receipt' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'receipt' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ReceiptFragment' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sub_total_amount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'tax_amount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'Services' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'rate' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'quantity' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'amount' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ReceiptFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Receipt' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'receipt_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recipient_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recipient_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recipient_email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recipient_address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'receipt_no' } },
          { kind: 'Field', name: { kind: 'Name', value: 'user_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_method' } },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_note' } },
          { kind: 'Field', name: { kind: 'Name', value: 'total_amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'is_receipt_send' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ReceiptQuery, ReceiptQueryVariables>;
export const SearchReceiptsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchReceipts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'year' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'dateRange' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'String' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'searchReceipts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'page' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'page' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'year' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'year' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'dateRange' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'dateRange' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'foundCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'receipts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'receipt_name' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'recipient_name' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'recipient_phone' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'recipient_email' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'recipient_address' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'receipt_no' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user_id' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'total_amount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'payment_method' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'is_receipt_send' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchReceiptsQuery, SearchReceiptsQueryVariables>;
export const GetUserReceiptsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUserReceipts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'receipts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ReceiptFragment' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cursor' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endCursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'startCursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasPreviousPage' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ReceiptFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Receipt' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'receipt_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recipient_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recipient_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recipient_email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recipient_address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'receipt_no' } },
          { kind: 'Field', name: { kind: 'Name', value: 'user_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_method' } },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_note' } },
          { kind: 'Field', name: { kind: 'Name', value: 'total_amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'is_receipt_send' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetUserReceiptsQuery,
  GetUserReceiptsQueryVariables
>;
