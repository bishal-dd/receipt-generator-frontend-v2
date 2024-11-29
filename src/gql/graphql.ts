/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type CreateProfile = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_name: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  logo_image?: InputMaybe<Scalars['String']['input']>;
  phone_no: Scalars['Int']['input'];
  signature_image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['ID']['input'];
};

export type CreateReceipt = {
  amount: Scalars['Float']['input'];
  date: Scalars['Date']['input'];
  receipt_name: Scalars['String']['input'];
  recipient_name: Scalars['String']['input'];
  recipient_phone: Scalars['Int']['input'];
  total_amount?: InputMaybe<Scalars['Float']['input']>;
  transaction_no?: InputMaybe<Scalars['Int']['input']>;
  user_id: Scalars['ID']['input'];
};

export type CreateService = {
  amount: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  rate: Scalars['Float']['input'];
  receipt_id: Scalars['UUID']['input'];
};

export type CreateUser = {
  id: Scalars['ID']['input'];
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
  company_name: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  logo_image?: Maybe<Scalars['String']['output']>;
  phone_no: Scalars['Int']['output'];
  signature_image?: Maybe<Scalars['String']['output']>;
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
  amount: Scalars['Float']['output'];
  created_at: Scalars['DateTime']['output'];
  date: Scalars['Date']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  receipt_name: Scalars['String']['output'];
  recipient_name: Scalars['String']['output'];
  recipient_phone: Scalars['Int']['output'];
  total_amount?: Maybe<Scalars['Float']['output']>;
  transaction_no?: Maybe<Scalars['Int']['output']>;
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

export type Service = {
  __typename?: 'Service';
  amount: Scalars['Int']['output'];
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
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  logo_image?: InputMaybe<Scalars['String']['input']>;
  phone_no?: InputMaybe<Scalars['Int']['input']>;
  signature_image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReceipt = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['UUID']['input'];
  receipt_name?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_phone?: InputMaybe<Scalars['Int']['input']>;
  total_amount?: InputMaybe<Scalars['Float']['input']>;
  transaction_no?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateService = {
  amount?: InputMaybe<Scalars['Int']['input']>;
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

export type ProfileFragmentFragment = { __typename?: 'Profile', id: any, company_name: string, logo_image?: string | null, phone_no: number, email?: string | null, address?: string | null, city?: string | null, title?: string | null, signature_image?: string | null } & { ' $fragmentName'?: 'ProfileFragmentFragment' };

export type UserProfileQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type UserProfileQuery = { __typename?: 'Query', profileByUserId?: (
    { __typename?: 'Profile' }
    & { ' $fragmentRefs'?: { 'ProfileFragmentFragment': ProfileFragmentFragment } }
  ) | null };

export const ProfileFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"company_name"}},{"kind":"Field","name":{"kind":"Name","value":"logo_image"}},{"kind":"Field","name":{"kind":"Name","value":"phone_no"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"signature_image"}}]}}]} as unknown as DocumentNode<ProfileFragmentFragment, unknown>;
export const UserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"company_name"}},{"kind":"Field","name":{"kind":"Name","value":"logo_image"}},{"kind":"Field","name":{"kind":"Name","value":"phone_no"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"signature_image"}}]}}]} as unknown as DocumentNode<UserProfileQuery, UserProfileQueryVariables>;