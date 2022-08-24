import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  GenericScalar: any;
};

export type ActiveToggleInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type ActiveTogglePayload = {
  __typename?: 'ActiveTogglePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<UserType>;
};

export type ActivedToggleInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type ActivedTogglePayload = {
  __typename?: 'ActivedTogglePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<UserType>;
};

export type AdminToggleInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
};

export type AdminTogglePayload = {
  __typename?: 'AdminTogglePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<UserType>;
};

export type AnalyticCreateInput = {
  anonymousId?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  day?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['String']>;
  hour?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  resource?: InputMaybe<Scalars['String']>;
  responseTime?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type AnalyticCreatePayload = {
  __typename?: 'AnalyticCreatePayload';
  analytic?: Maybe<AnalyticType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AnalyticType = Node & {
  __typename?: 'AnalyticType';
  anonymousId?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  day?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  method?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  responseTime?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type AnalyticTypeConnection = {
  __typename?: 'AnalyticTypeConnection';
  count?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AnalyticTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AnalyticType` and its cursor. */
export type AnalyticTypeEdge = {
  __typename?: 'AnalyticTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<AnalyticType>;
};

export type AnalyticUpdateInput = {
  anonymousId?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  day?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['String']>;
  hour?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  method?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  resource?: InputMaybe<Scalars['String']>;
  responseTime?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type AnalyticUpdatePayload = {
  __typename?: 'AnalyticUpdatePayload';
  analytic?: Maybe<AnalyticType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AnalyticUpsertInput = {
  anonymousId?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  day?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['String']>;
  hour?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  method?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  resource?: InputMaybe<Scalars['String']>;
  responseTime?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type AnalyticUpsertPayload = {
  __typename?: 'AnalyticUpsertPayload';
  analytic?: Maybe<AnalyticType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AvatarUpdate = {
  __typename?: 'AvatarUpdate';
  user?: Maybe<UserType>;
};

export type BirthDayUpdate = {
  __typename?: 'BirthDayUpdate';
  user?: Maybe<UserType>;
};

export type DeleteJsonWebTokenCookieInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
};

export type DeleteJsonWebTokenCookiePayload = {
  __typename?: 'DeleteJSONWebTokenCookiePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deleted: Scalars['Boolean'];
};

export type DeleteRefreshTokenCookieInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
};

export type DeleteRefreshTokenCookiePayload = {
  __typename?: 'DeleteRefreshTokenCookiePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deleted: Scalars['Boolean'];
};

export type EmailUpdate = {
  __typename?: 'EmailUpdate';
  user?: Maybe<UserType>;
};

export type GenderUpdate = {
  __typename?: 'GenderUpdate';
  user?: Maybe<UserType>;
};

export type MeetingCreate = {
  __typename?: 'MeetingCreate';
  meeting?: Maybe<MeetingType>;
};

export type MeetingDeleteInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type MeetingDeletePayload = {
  __typename?: 'MeetingDeletePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  meeting?: Maybe<MeetingType>;
};

export type MeetingDescriptionUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type MeetingDescriptionUpdatePayload = {
  __typename?: 'MeetingDescriptionUpdatePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  meeting?: Maybe<MeetingType>;
};

export type MeetingEndInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  endedAt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  video?: InputMaybe<Scalars['String']>;
};

export type MeetingEndPayload = {
  __typename?: 'MeetingEndPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  meeting?: Maybe<MeetingType>;
};

export type MeetingImageUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  photo?: InputMaybe<Scalars['String']>;
};

export type MeetingImageUpdatePayload = {
  __typename?: 'MeetingImageUpdatePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  meeting?: Maybe<MeetingType>;
};

export type MeetingNameUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MeetingNameUpdatePayload = {
  __typename?: 'MeetingNameUpdatePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  meeting?: Maybe<MeetingType>;
};

export type MeetingScheduleInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  scheduledAt?: InputMaybe<Scalars['String']>;
};

export type MeetingSchedulePayload = {
  __typename?: 'MeetingSchedulePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  meeting?: Maybe<MeetingType>;
};

export type MeetingStartInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  startedAt?: InputMaybe<Scalars['String']>;
};

export type MeetingStartPayload = {
  __typename?: 'MeetingStartPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  meeting?: Maybe<MeetingType>;
};

export type MeetingType = Node & {
  __typename?: 'MeetingType';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  isDeleted: Scalars['Boolean'];
  isReoccuring: Scalars['Boolean'];
  modifiedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  photo: Scalars['String'];
  scheduledAt?: Maybe<Scalars['DateTime']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  starter: UserType;
};

export type MeetingTypeConnection = {
  __typename?: 'MeetingTypeConnection';
  count?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MeetingTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `MeetingType` and its cursor. */
export type MeetingTypeEdge = {
  __typename?: 'MeetingTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<MeetingType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activatedToggle?: Maybe<ActivedTogglePayload>;
  activeToggle?: Maybe<ActiveTogglePayload>;
  adminToggle?: Maybe<AdminTogglePayload>;
  analyticCreate?: Maybe<AnalyticCreatePayload>;
  analyticUpdate?: Maybe<AnalyticUpdatePayload>;
  analyticUpsert?: Maybe<AnalyticUpsertPayload>;
  avatarUpdate?: Maybe<AvatarUpdate>;
  birthdayUpdate?: Maybe<BirthDayUpdate>;
  deleteRefreshTokenCookie?: Maybe<DeleteRefreshTokenCookiePayload>;
  deleteTokenCookie?: Maybe<DeleteJsonWebTokenCookiePayload>;
  emailUpdate?: Maybe<EmailUpdate>;
  genderUpdate?: Maybe<GenderUpdate>;
  meetingCreate?: Maybe<MeetingCreate>;
  meetingDelete?: Maybe<MeetingDeletePayload>;
  meetingEnd?: Maybe<MeetingEndPayload>;
  meetingSchedule?: Maybe<MeetingSchedulePayload>;
  meetingStart?: Maybe<MeetingStartPayload>;
  meetingdescriptionUpdate?: Maybe<MeetingDescriptionUpdatePayload>;
  meetingimageUpdate?: Maybe<MeetingImageUpdatePayload>;
  meetingnameUpdate?: Maybe<MeetingNameUpdatePayload>;
  namesUpdate?: Maybe<NamesUpdate>;
  passwordReset?: Maybe<PasswordReset>;
  refreshToken?: Maybe<Refresh>;
  revokeToken?: Maybe<RevokePayload>;
  staffToggle?: Maybe<StaffTogglePayload>;
  superToggle?: Maybe<SupperTogglePayload>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  userCreate?: Maybe<UserCreate>;
  userDelete?: Maybe<UserDeletePayload>;
  userDeletefinal?: Maybe<UserDeleteFinalPayload>;
  verifyToken?: Maybe<Verify>;
};


export type MutationActivatedToggleArgs = {
  input: ActivedToggleInput;
};


export type MutationActiveToggleArgs = {
  input: ActiveToggleInput;
};


export type MutationAdminToggleArgs = {
  input: AdminToggleInput;
};


export type MutationAnalyticCreateArgs = {
  input: AnalyticCreateInput;
};


export type MutationAnalyticUpdateArgs = {
  input: AnalyticUpdateInput;
};


export type MutationAnalyticUpsertArgs = {
  input: AnalyticUpsertInput;
};


export type MutationAvatarUpdateArgs = {
  avatar?: InputMaybe<Scalars['String']>;
};


export type MutationBirthdayUpdateArgs = {
  birthDate: Scalars['String'];
};


export type MutationDeleteRefreshTokenCookieArgs = {
  input: DeleteRefreshTokenCookieInput;
};


export type MutationDeleteTokenCookieArgs = {
  input: DeleteJsonWebTokenCookieInput;
};


export type MutationEmailUpdateArgs = {
  email: Scalars['String'];
};


export type MutationGenderUpdateArgs = {
  gender: Scalars['String'];
};


export type MutationMeetingCreateArgs = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  scheduledAt?: InputMaybe<Scalars['String']>;
};


export type MutationMeetingDeleteArgs = {
  input: MeetingDeleteInput;
};


export type MutationMeetingEndArgs = {
  input: MeetingEndInput;
};


export type MutationMeetingScheduleArgs = {
  input: MeetingScheduleInput;
};


export type MutationMeetingStartArgs = {
  input: MeetingStartInput;
};


export type MutationMeetingdescriptionUpdateArgs = {
  input: MeetingDescriptionUpdateInput;
};


export type MutationMeetingimageUpdateArgs = {
  input: MeetingImageUpdateInput;
};


export type MutationMeetingnameUpdateArgs = {
  input: MeetingNameUpdateInput;
};


export type MutationNamesUpdateArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationPasswordResetArgs = {
  password: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']>;
};


export type MutationRevokeTokenArgs = {
  input: RevokeInput;
};


export type MutationStaffToggleArgs = {
  input: StaffToggleInput;
};


export type MutationSuperToggleArgs = {
  input: SupperToggleInput;
};


export type MutationTokenAuthArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUserCreateArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUserDeleteArgs = {
  input: UserDeleteInput;
};


export type MutationUserDeletefinalArgs = {
  input: UserDeleteFinalInput;
};


export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type NamesUpdate = {
  __typename?: 'NamesUpdate';
  user?: Maybe<UserType>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  refreshToken: Scalars['String'];
  token: Scalars['String'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PasswordReset = {
  __typename?: 'PasswordReset';
  user?: Maybe<UserType>;
};

export type Query = {
  __typename?: 'Query';
  analytic?: Maybe<AnalyticType>;
  analytics?: Maybe<AnalyticTypeConnection>;
  me?: Maybe<UserType>;
  meeting?: Maybe<MeetingType>;
  meetings?: Maybe<MeetingTypeConnection>;
  user?: Maybe<UserType>;
  usermeetings?: Maybe<MeetingTypeConnection>;
  users?: Maybe<UserTypeConnection>;
};


export type QueryAnalyticArgs = {
  id: Scalars['ID'];
};


export type QueryAnalyticsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Float']>;
  id_Icontains?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryMeetingArgs = {
  id: Scalars['ID'];
};


export type QueryMeetingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Float']>;
  id_Icontains?: InputMaybe<Scalars['Float']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isDeleted_Icontains?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Iendswith?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  starter?: InputMaybe<Scalars['ID']>;
  starterId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsermeetingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Float']>;
  id_Icontains?: InputMaybe<Scalars['Float']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isDeleted_Icontains?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Iendswith?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  starter?: InputMaybe<Scalars['ID']>;
  starterId?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Scalars['String']>;
  firstName_Icontains?: InputMaybe<Scalars['String']>;
  firstName_Iendswith?: InputMaybe<Scalars['String']>;
  firstName_Istartswith?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  id_Icontains?: InputMaybe<Scalars['Float']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isDeleted_Icontains?: InputMaybe<Scalars['Boolean']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  isVerified_Icontains?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastName_Icontains?: InputMaybe<Scalars['String']>;
  lastName_Iendswith?: InputMaybe<Scalars['String']>;
  lastName_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  username_Icontains?: InputMaybe<Scalars['String']>;
  username_Iendswith?: InputMaybe<Scalars['String']>;
  username_Istartswith?: InputMaybe<Scalars['String']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  refreshToken: Scalars['String'];
  token: Scalars['String'];
};

export type RevokeInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
};

export type RevokePayload = {
  __typename?: 'RevokePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  revoked: Scalars['Int'];
};

export type StaffToggleInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isStaff?: InputMaybe<Scalars['Boolean']>;
};

export type StaffTogglePayload = {
  __typename?: 'StaffTogglePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<UserType>;
};

export type SupperToggleInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isSuperuser?: InputMaybe<Scalars['Boolean']>;
};

export type SupperTogglePayload = {
  __typename?: 'SupperTogglePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<UserType>;
};

export type UserCreate = {
  __typename?: 'UserCreate';
  user?: Maybe<UserType>;
};

export type UserDeleteFinalInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type UserDeleteFinalPayload = {
  __typename?: 'UserDeleteFinalPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<UserType>;
};

export type UserDeleteInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type UserDeletePayload = {
  __typename?: 'UserDeletePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<UserType>;
};

export type UserType = Node & {
  __typename?: 'UserType';
  address?: Maybe<Scalars['String']>;
  avatar: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  dateJoined: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
  isBusiness: Scalars['Boolean'];
  isDeleted: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  isUsed: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['DateTime']>;
  password: Scalars['String'];
  userMeetings: MeetingTypeConnection;
  username: Scalars['String'];
};


export type UserTypeUserMeetingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Float']>;
  id_Icontains?: InputMaybe<Scalars['Float']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isDeleted_Icontains?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Iendswith?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  starter?: InputMaybe<Scalars['ID']>;
  starterId?: InputMaybe<Scalars['ID']>;
};

export type UserTypeConnection = {
  __typename?: 'UserTypeConnection';
  count?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserType` and its cursor. */
export type UserTypeEdge = {
  __typename?: 'UserTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserType>;
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type UserListQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
}>;


export type UserListQuery = { __typename?: 'Query', users?: { __typename?: 'UserTypeConnection', count?: number | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'UserTypeEdge', cursor: string, node?: { __typename?: 'UserType', id: string, username: string, firstName?: string | null, lastName?: string | null, avatar: string, mobile?: string | null, email?: string | null, gender?: string | null, bio?: string | null, address?: string | null, location?: string | null, birthDate?: any | null, isVerified: boolean, isBusiness: boolean, isUsed: boolean, isStaff: boolean, isAdmin: boolean, isActive: boolean, dateJoined: any, modifiedAt?: any | null, isDeleted: boolean, deletedAt?: any | null, userMeetings: { __typename?: 'MeetingTypeConnection', count?: number | null } } | null } | null> } | null };

export type UserSelectQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserSelectQuery = { __typename?: 'Query', user?: { __typename?: 'UserType', id: string, username: string, firstName?: string | null, lastName?: string | null, avatar: string, mobile?: string | null, email?: string | null, gender?: string | null, bio?: string | null, address?: string | null, location?: string | null, birthDate?: any | null, isVerified: boolean, isBusiness: boolean, isUsed: boolean, isStaff: boolean, isAdmin: boolean, isActive: boolean, dateJoined: any, modifiedAt?: any | null, isDeleted: boolean, deletedAt?: any | null, userMeetings: { __typename?: 'MeetingTypeConnection', count?: number | null, edges: Array<{ __typename?: 'MeetingTypeEdge', node?: { __typename?: 'MeetingType', id: string, createdAt: any, starter: { __typename?: 'UserType', id: string, username: string } } | null } | null> } } | null };

export type MeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryQuery = { __typename?: 'Query', me?: { __typename?: 'UserType', id: string, username: string, firstName?: string | null, lastName?: string | null, avatar: string, mobile?: string | null, email?: string | null, gender?: string | null, bio?: string | null, address?: string | null, location?: string | null, birthDate?: any | null, isVerified: boolean, isBusiness: boolean, isUsed: boolean, isStaff: boolean, isAdmin: boolean, isActive: boolean, dateJoined: any, modifiedAt?: any | null, isDeleted: boolean, deletedAt?: any | null, userMeetings: { __typename?: 'MeetingTypeConnection', count?: number | null, edges: Array<{ __typename?: 'MeetingTypeEdge', node?: { __typename?: 'MeetingType', id: string, createdAt: any, starter: { __typename?: 'UserType', id: string, username: string } } | null } | null> } } | null };

export type UserCreateMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserCreateMutation = { __typename?: 'Mutation', userCreate?: { __typename?: 'UserCreate', user?: { __typename?: 'UserType', id: string, username: string, password: string } | null } | null };

export type TokenAuthMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type TokenAuthMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainJSONWebToken', token: string } | null };

export type VerifyTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type VerifyTokenMutation = { __typename?: 'Mutation', verifyToken?: { __typename?: 'Verify', payload: any } | null };

export type NamesUpdateMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
}>;


export type NamesUpdateMutation = { __typename?: 'Mutation', namesUpdate?: { __typename?: 'NamesUpdate', user?: { __typename?: 'UserType', id: string, username: string, firstName?: string | null, lastName?: string | null } | null } | null };

export type EmailUpdateMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type EmailUpdateMutation = { __typename?: 'Mutation', emailUpdate?: { __typename?: 'EmailUpdate', user?: { __typename?: 'UserType', id: string, username: string, email?: string | null } | null } | null };

export type AvatarUpdateMutationVariables = Exact<{
  avatar: Scalars['String'];
}>;


export type AvatarUpdateMutation = { __typename?: 'Mutation', avatarUpdate?: { __typename?: 'AvatarUpdate', user?: { __typename?: 'UserType', id: string, username: string, avatar: string } | null } | null };

export type BirthdayUpdateMutationVariables = Exact<{
  birthDate: Scalars['String'];
}>;


export type BirthdayUpdateMutation = { __typename?: 'Mutation', birthdayUpdate?: { __typename?: 'BirthDayUpdate', user?: { __typename?: 'UserType', id: string, username: string, birthDate?: any | null } | null } | null };

export type GenderUpdateMutationVariables = Exact<{
  gender: Scalars['String'];
}>;


export type GenderUpdateMutation = { __typename?: 'Mutation', genderUpdate?: { __typename?: 'GenderUpdate', user?: { __typename?: 'UserType', id: string, username: string, gender?: string | null } | null } | null };

export type StaffToggleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type StaffToggleMutation = { __typename?: 'Mutation', staffToggle?: { __typename?: 'StaffTogglePayload', clientMutationId?: string | null } | null };

export type AdminToggleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AdminToggleMutation = { __typename?: 'Mutation', adminToggle?: { __typename?: 'AdminTogglePayload', clientMutationId?: string | null } | null };

export type SuperToggleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SuperToggleMutation = { __typename?: 'Mutation', superToggle?: { __typename?: 'SupperTogglePayload', clientMutationId?: string | null } | null };

export type ActiveToggleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ActiveToggleMutation = { __typename?: 'Mutation', activeToggle?: { __typename?: 'ActiveTogglePayload', clientMutationId?: string | null } | null };

export type ActivatedToggleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ActivatedToggleMutation = { __typename?: 'Mutation', activatedToggle?: { __typename?: 'ActivedTogglePayload', clientMutationId?: string | null } | null };

export type UserDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserDeleteMutation = { __typename?: 'Mutation', userDelete?: { __typename?: 'UserDeletePayload', clientMutationId?: string | null, user?: { __typename?: 'UserType', id: string } | null } | null };

export type AnalyticListQueryVariables = Exact<{
  last?: InputMaybe<Scalars['Int']>;
}>;


export type AnalyticListQuery = { __typename?: 'Query', analytics?: { __typename?: 'AnalyticTypeConnection', count?: number | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'AnalyticTypeEdge', node?: { __typename?: 'AnalyticType', id: string, anonymousId?: string | null, title?: string | null, event?: string | null, channel?: string | null, category?: string | null, resource?: string | null, url?: string | null, path?: string | null, userId?: string | null, method?: string | null, day?: string | null, responseTime?: string | null, hour?: string | null, createdAt?: any | null } | null } | null> } | null };

export type AnalyticSelectQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AnalyticSelectQuery = { __typename?: 'Query', analytic?: { __typename?: 'AnalyticType', anonymousId?: string | null, title?: string | null, event?: string | null, channel?: string | null, category?: string | null, resource?: string | null, url?: string | null, path?: string | null, userId?: string | null, method?: string | null, responseTime?: string | null, day?: string | null, hour?: string | null, createdAt?: any | null } | null };

export type AnalyticCreateMutationVariables = Exact<{
  anonymousId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  resource?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  responseTime?: InputMaybe<Scalars['String']>;
  day?: InputMaybe<Scalars['String']>;
  hour?: InputMaybe<Scalars['String']>;
}>;


export type AnalyticCreateMutation = { __typename?: 'Mutation', analyticCreate?: { __typename?: 'AnalyticCreatePayload', analytic?: { __typename?: 'AnalyticType', id: string } | null } | null };

export type AnalyticUpsertMutationVariables = Exact<{
  id: Scalars['ID'];
  anonymousId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  resource?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  responseTime?: InputMaybe<Scalars['String']>;
  day?: InputMaybe<Scalars['String']>;
  hour?: InputMaybe<Scalars['String']>;
}>;


export type AnalyticUpsertMutation = { __typename?: 'Mutation', analyticUpsert?: { __typename?: 'AnalyticUpsertPayload', analytic?: { __typename?: 'AnalyticType', id: string } | null } | null };

export type AnalyticUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  anonymousId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  resource?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  responseTime?: InputMaybe<Scalars['String']>;
  day?: InputMaybe<Scalars['String']>;
  hour?: InputMaybe<Scalars['String']>;
}>;


export type AnalyticUpdateMutation = { __typename?: 'Mutation', analyticUpdate?: { __typename?: 'AnalyticUpdatePayload', analytic?: { __typename?: 'AnalyticType', id: string } | null } | null };

export type MeetingListQueryVariables = Exact<{
  starterId?: InputMaybe<Scalars['ID']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
}>;


export type MeetingListQuery = { __typename?: 'Query', meetings?: { __typename?: 'MeetingTypeConnection', count?: number | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'MeetingTypeEdge', node?: { __typename?: 'MeetingType', id: string, name: string, description?: string | null, photo: string, createdAt: any, modifiedAt?: any | null, scheduledAt?: any | null, startedAt?: any | null, endedAt?: any | null, deletedAt?: any | null, isDeleted: boolean, isReoccuring: boolean, starter: { __typename?: 'UserType', id: string, username: string } } | null } | null> } | null };

export type UsermeetingListQueryVariables = Exact<{
  starterId?: InputMaybe<Scalars['ID']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
}>;


export type UsermeetingListQuery = { __typename?: 'Query', usermeetings?: { __typename?: 'MeetingTypeConnection', count?: number | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'MeetingTypeEdge', node?: { __typename?: 'MeetingType', id: string, name: string, description?: string | null, photo: string, createdAt: any, modifiedAt?: any | null, scheduledAt?: any | null, startedAt?: any | null, endedAt?: any | null, deletedAt?: any | null, isDeleted: boolean, isReoccuring: boolean, starter: { __typename?: 'UserType', id: string, username: string } } | null } | null> } | null };

export type MeetingSelectQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MeetingSelectQuery = { __typename?: 'Query', meeting?: { __typename?: 'MeetingType', id: string, name: string, description?: string | null, photo: string, createdAt: any, modifiedAt?: any | null, scheduledAt?: any | null, startedAt?: any | null, endedAt?: any | null, deletedAt?: any | null, isDeleted: boolean, isReoccuring: boolean, starter: { __typename?: 'UserType', id: string, username: string } } | null };

export type MeetingCreateMutationVariables = Exact<{
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  scheduledAt?: InputMaybe<Scalars['String']>;
}>;


export type MeetingCreateMutation = { __typename?: 'Mutation', meetingCreate?: { __typename?: 'MeetingCreate', meeting?: { __typename?: 'MeetingType', id: string } | null } | null };

export type MeetingnameUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
}>;


export type MeetingnameUpdateMutation = { __typename?: 'Mutation', meetingnameUpdate?: { __typename?: 'MeetingNameUpdatePayload', meeting?: { __typename?: 'MeetingType', id: string } | null } | null };

export type MeetingdescriptionUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
}>;


export type MeetingdescriptionUpdateMutation = { __typename?: 'Mutation', meetingdescriptionUpdate?: { __typename?: 'MeetingDescriptionUpdatePayload', meeting?: { __typename?: 'MeetingType', id: string } | null } | null };

export type MeetingimageUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  photo?: InputMaybe<Scalars['String']>;
}>;


export type MeetingimageUpdateMutation = { __typename?: 'Mutation', meetingimageUpdate?: { __typename?: 'MeetingImageUpdatePayload', meeting?: { __typename?: 'MeetingType', id: string } | null } | null };

export type MeetingScheduleMutationVariables = Exact<{
  id: Scalars['ID'];
  scheduledAt?: InputMaybe<Scalars['String']>;
}>;


export type MeetingScheduleMutation = { __typename?: 'Mutation', meetingSchedule?: { __typename?: 'MeetingSchedulePayload', meeting?: { __typename?: 'MeetingType', id: string } | null } | null };

export type MeetingStartMutationVariables = Exact<{
  id: Scalars['ID'];
  startedAt?: InputMaybe<Scalars['String']>;
}>;


export type MeetingStartMutation = { __typename?: 'Mutation', meetingStart?: { __typename?: 'MeetingStartPayload', meeting?: { __typename?: 'MeetingType', id: string } | null } | null };

export type MeetingEndMutationVariables = Exact<{
  id: Scalars['ID'];
  endedAt?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['String']>;
}>;


export type MeetingEndMutation = { __typename?: 'Mutation', meetingEnd?: { __typename?: 'MeetingEndPayload', meeting?: { __typename?: 'MeetingType', id: string } | null } | null };

export type MeetingDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MeetingDeleteMutation = { __typename?: 'Mutation', meetingDelete?: { __typename?: 'MeetingDeletePayload', clientMutationId?: string | null, meeting?: { __typename?: 'MeetingType', id: string } | null } | null };


export const UserListDocument = gql`
    query userList($search: String, $isVerified: Boolean, $isDeleted: Boolean, $last: Int) {
  users(
    search: $search
    isVerified: $isVerified
    isDeleted: $isDeleted
    last: $last
  ) {
    count
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        username
        firstName
        lastName
        avatar
        mobile
        email
        gender
        bio
        address
        location
        birthDate
        isVerified
        isBusiness
        isUsed
        isStaff
        isAdmin
        isActive
        dateJoined
        modifiedAt
        isDeleted
        deletedAt
        userMeetings {
          count
        }
      }
    }
  }
}
    `;

/**
 * __useUserListQuery__
 *
 * To run a query within a React component, call `useUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListQuery({
 *   variables: {
 *      search: // value for 'search'
 *      isVerified: // value for 'isVerified'
 *      isDeleted: // value for 'isDeleted'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useUserListQuery(baseOptions?: Apollo.QueryHookOptions<UserListQuery, UserListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
      }
export function useUserListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserListQuery, UserListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
        }
export type UserListQueryHookResult = ReturnType<typeof useUserListQuery>;
export type UserListLazyQueryHookResult = ReturnType<typeof useUserListLazyQuery>;
export type UserListQueryResult = Apollo.QueryResult<UserListQuery, UserListQueryVariables>;
export const UserSelectDocument = gql`
    query userSelect($id: ID!) {
  user(id: $id) {
    id
    username
    firstName
    lastName
    avatar
    mobile
    email
    gender
    bio
    address
    location
    birthDate
    isVerified
    isBusiness
    isUsed
    isStaff
    isAdmin
    isActive
    dateJoined
    modifiedAt
    isDeleted
    deletedAt
    userMeetings {
      count
      edges {
        node {
          id
          starter {
            id
            username
          }
          createdAt
        }
      }
    }
  }
}
    `;

/**
 * __useUserSelectQuery__
 *
 * To run a query within a React component, call `useUserSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSelectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserSelectQuery(baseOptions: Apollo.QueryHookOptions<UserSelectQuery, UserSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserSelectQuery, UserSelectQueryVariables>(UserSelectDocument, options);
      }
export function useUserSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserSelectQuery, UserSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserSelectQuery, UserSelectQueryVariables>(UserSelectDocument, options);
        }
export type UserSelectQueryHookResult = ReturnType<typeof useUserSelectQuery>;
export type UserSelectLazyQueryHookResult = ReturnType<typeof useUserSelectLazyQuery>;
export type UserSelectQueryResult = Apollo.QueryResult<UserSelectQuery, UserSelectQueryVariables>;
export const MeQueryDocument = gql`
    query meQuery {
  me {
    id
    username
    firstName
    lastName
    avatar
    mobile
    email
    gender
    bio
    address
    location
    birthDate
    isVerified
    isBusiness
    isUsed
    isStaff
    isAdmin
    isActive
    dateJoined
    modifiedAt
    isDeleted
    deletedAt
    userMeetings {
      count
      edges {
        node {
          id
          starter {
            id
            username
          }
          createdAt
        }
      }
    }
  }
}
    `;

/**
 * __useMeQueryQuery__
 *
 * To run a query within a React component, call `useMeQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQueryQuery(baseOptions?: Apollo.QueryHookOptions<MeQueryQuery, MeQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQueryQuery, MeQueryQueryVariables>(MeQueryDocument, options);
      }
export function useMeQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQueryQuery, MeQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQueryQuery, MeQueryQueryVariables>(MeQueryDocument, options);
        }
export type MeQueryQueryHookResult = ReturnType<typeof useMeQueryQuery>;
export type MeQueryLazyQueryHookResult = ReturnType<typeof useMeQueryLazyQuery>;
export type MeQueryQueryResult = Apollo.QueryResult<MeQueryQuery, MeQueryQueryVariables>;
export const UserCreateDocument = gql`
    mutation userCreate($username: String!, $password: String!) {
  userCreate(username: $username, password: $password) {
    user {
      id
      username
      password
    }
  }
}
    `;
export type UserCreateMutationFn = Apollo.MutationFunction<UserCreateMutation, UserCreateMutationVariables>;

/**
 * __useUserCreateMutation__
 *
 * To run a mutation, you first call `useUserCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateMutation, { data, loading, error }] = useUserCreateMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUserCreateMutation(baseOptions?: Apollo.MutationHookOptions<UserCreateMutation, UserCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserCreateMutation, UserCreateMutationVariables>(UserCreateDocument, options);
      }
export type UserCreateMutationHookResult = ReturnType<typeof useUserCreateMutation>;
export type UserCreateMutationResult = Apollo.MutationResult<UserCreateMutation>;
export type UserCreateMutationOptions = Apollo.BaseMutationOptions<UserCreateMutation, UserCreateMutationVariables>;
export const TokenAuthDocument = gql`
    mutation tokenAuth($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
  }
}
    `;
export type TokenAuthMutationFn = Apollo.MutationFunction<TokenAuthMutation, TokenAuthMutationVariables>;

/**
 * __useTokenAuthMutation__
 *
 * To run a mutation, you first call `useTokenAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenAuthMutation, { data, loading, error }] = useTokenAuthMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useTokenAuthMutation(baseOptions?: Apollo.MutationHookOptions<TokenAuthMutation, TokenAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenAuthMutation, TokenAuthMutationVariables>(TokenAuthDocument, options);
      }
export type TokenAuthMutationHookResult = ReturnType<typeof useTokenAuthMutation>;
export type TokenAuthMutationResult = Apollo.MutationResult<TokenAuthMutation>;
export type TokenAuthMutationOptions = Apollo.BaseMutationOptions<TokenAuthMutation, TokenAuthMutationVariables>;
export const VerifyTokenDocument = gql`
    mutation verifyToken {
  verifyToken(
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJleHAiOjE1NzI5NDg4MDQsIm9yaWdJYXQiOjE1NzI5NDg1MDR9.eZy4DNchj-K-QThICqZ8pmbBSVkQrnJvTOaTmfZh3tQ"
  ) {
    payload
  }
}
    `;
export type VerifyTokenMutationFn = Apollo.MutationFunction<VerifyTokenMutation, VerifyTokenMutationVariables>;

/**
 * __useVerifyTokenMutation__
 *
 * To run a mutation, you first call `useVerifyTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyTokenMutation, { data, loading, error }] = useVerifyTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useVerifyTokenMutation(baseOptions?: Apollo.MutationHookOptions<VerifyTokenMutation, VerifyTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyTokenMutation, VerifyTokenMutationVariables>(VerifyTokenDocument, options);
      }
export type VerifyTokenMutationHookResult = ReturnType<typeof useVerifyTokenMutation>;
export type VerifyTokenMutationResult = Apollo.MutationResult<VerifyTokenMutation>;
export type VerifyTokenMutationOptions = Apollo.BaseMutationOptions<VerifyTokenMutation, VerifyTokenMutationVariables>;
export const NamesUpdateDocument = gql`
    mutation namesUpdate($firstName: String!, $lastName: String!) {
  namesUpdate(firstName: $firstName, lastName: $lastName) {
    user {
      id
      username
      firstName
      lastName
    }
  }
}
    `;
export type NamesUpdateMutationFn = Apollo.MutationFunction<NamesUpdateMutation, NamesUpdateMutationVariables>;

/**
 * __useNamesUpdateMutation__
 *
 * To run a mutation, you first call `useNamesUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNamesUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [namesUpdateMutation, { data, loading, error }] = useNamesUpdateMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useNamesUpdateMutation(baseOptions?: Apollo.MutationHookOptions<NamesUpdateMutation, NamesUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NamesUpdateMutation, NamesUpdateMutationVariables>(NamesUpdateDocument, options);
      }
export type NamesUpdateMutationHookResult = ReturnType<typeof useNamesUpdateMutation>;
export type NamesUpdateMutationResult = Apollo.MutationResult<NamesUpdateMutation>;
export type NamesUpdateMutationOptions = Apollo.BaseMutationOptions<NamesUpdateMutation, NamesUpdateMutationVariables>;
export const EmailUpdateDocument = gql`
    mutation emailUpdate($email: String!) {
  emailUpdate(email: $email) {
    user {
      id
      username
      email
    }
  }
}
    `;
export type EmailUpdateMutationFn = Apollo.MutationFunction<EmailUpdateMutation, EmailUpdateMutationVariables>;

/**
 * __useEmailUpdateMutation__
 *
 * To run a mutation, you first call `useEmailUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEmailUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [emailUpdateMutation, { data, loading, error }] = useEmailUpdateMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useEmailUpdateMutation(baseOptions?: Apollo.MutationHookOptions<EmailUpdateMutation, EmailUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EmailUpdateMutation, EmailUpdateMutationVariables>(EmailUpdateDocument, options);
      }
export type EmailUpdateMutationHookResult = ReturnType<typeof useEmailUpdateMutation>;
export type EmailUpdateMutationResult = Apollo.MutationResult<EmailUpdateMutation>;
export type EmailUpdateMutationOptions = Apollo.BaseMutationOptions<EmailUpdateMutation, EmailUpdateMutationVariables>;
export const AvatarUpdateDocument = gql`
    mutation avatarUpdate($avatar: String!) {
  avatarUpdate(avatar: $avatar) {
    user {
      id
      username
      avatar
    }
  }
}
    `;
export type AvatarUpdateMutationFn = Apollo.MutationFunction<AvatarUpdateMutation, AvatarUpdateMutationVariables>;

/**
 * __useAvatarUpdateMutation__
 *
 * To run a mutation, you first call `useAvatarUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAvatarUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [avatarUpdateMutation, { data, loading, error }] = useAvatarUpdateMutation({
 *   variables: {
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useAvatarUpdateMutation(baseOptions?: Apollo.MutationHookOptions<AvatarUpdateMutation, AvatarUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AvatarUpdateMutation, AvatarUpdateMutationVariables>(AvatarUpdateDocument, options);
      }
export type AvatarUpdateMutationHookResult = ReturnType<typeof useAvatarUpdateMutation>;
export type AvatarUpdateMutationResult = Apollo.MutationResult<AvatarUpdateMutation>;
export type AvatarUpdateMutationOptions = Apollo.BaseMutationOptions<AvatarUpdateMutation, AvatarUpdateMutationVariables>;
export const BirthdayUpdateDocument = gql`
    mutation birthdayUpdate($birthDate: String!) {
  birthdayUpdate(birthDate: $birthDate) {
    user {
      id
      username
      birthDate
    }
  }
}
    `;
export type BirthdayUpdateMutationFn = Apollo.MutationFunction<BirthdayUpdateMutation, BirthdayUpdateMutationVariables>;

/**
 * __useBirthdayUpdateMutation__
 *
 * To run a mutation, you first call `useBirthdayUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBirthdayUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [birthdayUpdateMutation, { data, loading, error }] = useBirthdayUpdateMutation({
 *   variables: {
 *      birthDate: // value for 'birthDate'
 *   },
 * });
 */
export function useBirthdayUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BirthdayUpdateMutation, BirthdayUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BirthdayUpdateMutation, BirthdayUpdateMutationVariables>(BirthdayUpdateDocument, options);
      }
export type BirthdayUpdateMutationHookResult = ReturnType<typeof useBirthdayUpdateMutation>;
export type BirthdayUpdateMutationResult = Apollo.MutationResult<BirthdayUpdateMutation>;
export type BirthdayUpdateMutationOptions = Apollo.BaseMutationOptions<BirthdayUpdateMutation, BirthdayUpdateMutationVariables>;
export const GenderUpdateDocument = gql`
    mutation genderUpdate($gender: String!) {
  genderUpdate(gender: $gender) {
    user {
      id
      username
      gender
    }
  }
}
    `;
export type GenderUpdateMutationFn = Apollo.MutationFunction<GenderUpdateMutation, GenderUpdateMutationVariables>;

/**
 * __useGenderUpdateMutation__
 *
 * To run a mutation, you first call `useGenderUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenderUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [genderUpdateMutation, { data, loading, error }] = useGenderUpdateMutation({
 *   variables: {
 *      gender: // value for 'gender'
 *   },
 * });
 */
export function useGenderUpdateMutation(baseOptions?: Apollo.MutationHookOptions<GenderUpdateMutation, GenderUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenderUpdateMutation, GenderUpdateMutationVariables>(GenderUpdateDocument, options);
      }
export type GenderUpdateMutationHookResult = ReturnType<typeof useGenderUpdateMutation>;
export type GenderUpdateMutationResult = Apollo.MutationResult<GenderUpdateMutation>;
export type GenderUpdateMutationOptions = Apollo.BaseMutationOptions<GenderUpdateMutation, GenderUpdateMutationVariables>;
export const StaffToggleDocument = gql`
    mutation staffToggle($id: ID!) {
  staffToggle(input: {id: $id, isStaff: true}) {
    clientMutationId
  }
}
    `;
export type StaffToggleMutationFn = Apollo.MutationFunction<StaffToggleMutation, StaffToggleMutationVariables>;

/**
 * __useStaffToggleMutation__
 *
 * To run a mutation, you first call `useStaffToggleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStaffToggleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [staffToggleMutation, { data, loading, error }] = useStaffToggleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStaffToggleMutation(baseOptions?: Apollo.MutationHookOptions<StaffToggleMutation, StaffToggleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StaffToggleMutation, StaffToggleMutationVariables>(StaffToggleDocument, options);
      }
export type StaffToggleMutationHookResult = ReturnType<typeof useStaffToggleMutation>;
export type StaffToggleMutationResult = Apollo.MutationResult<StaffToggleMutation>;
export type StaffToggleMutationOptions = Apollo.BaseMutationOptions<StaffToggleMutation, StaffToggleMutationVariables>;
export const AdminToggleDocument = gql`
    mutation adminToggle($id: ID!) {
  adminToggle(input: {id: $id, isAdmin: true}) {
    clientMutationId
  }
}
    `;
export type AdminToggleMutationFn = Apollo.MutationFunction<AdminToggleMutation, AdminToggleMutationVariables>;

/**
 * __useAdminToggleMutation__
 *
 * To run a mutation, you first call `useAdminToggleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminToggleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminToggleMutation, { data, loading, error }] = useAdminToggleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdminToggleMutation(baseOptions?: Apollo.MutationHookOptions<AdminToggleMutation, AdminToggleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminToggleMutation, AdminToggleMutationVariables>(AdminToggleDocument, options);
      }
export type AdminToggleMutationHookResult = ReturnType<typeof useAdminToggleMutation>;
export type AdminToggleMutationResult = Apollo.MutationResult<AdminToggleMutation>;
export type AdminToggleMutationOptions = Apollo.BaseMutationOptions<AdminToggleMutation, AdminToggleMutationVariables>;
export const SuperToggleDocument = gql`
    mutation superToggle($id: ID!) {
  superToggle(input: {id: $id, isSuperuser: true}) {
    clientMutationId
  }
}
    `;
export type SuperToggleMutationFn = Apollo.MutationFunction<SuperToggleMutation, SuperToggleMutationVariables>;

/**
 * __useSuperToggleMutation__
 *
 * To run a mutation, you first call `useSuperToggleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSuperToggleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [superToggleMutation, { data, loading, error }] = useSuperToggleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSuperToggleMutation(baseOptions?: Apollo.MutationHookOptions<SuperToggleMutation, SuperToggleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SuperToggleMutation, SuperToggleMutationVariables>(SuperToggleDocument, options);
      }
export type SuperToggleMutationHookResult = ReturnType<typeof useSuperToggleMutation>;
export type SuperToggleMutationResult = Apollo.MutationResult<SuperToggleMutation>;
export type SuperToggleMutationOptions = Apollo.BaseMutationOptions<SuperToggleMutation, SuperToggleMutationVariables>;
export const ActiveToggleDocument = gql`
    mutation activeToggle($id: ID!) {
  activeToggle(input: {id: $id, isActive: true}) {
    clientMutationId
  }
}
    `;
export type ActiveToggleMutationFn = Apollo.MutationFunction<ActiveToggleMutation, ActiveToggleMutationVariables>;

/**
 * __useActiveToggleMutation__
 *
 * To run a mutation, you first call `useActiveToggleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActiveToggleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activeToggleMutation, { data, loading, error }] = useActiveToggleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useActiveToggleMutation(baseOptions?: Apollo.MutationHookOptions<ActiveToggleMutation, ActiveToggleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ActiveToggleMutation, ActiveToggleMutationVariables>(ActiveToggleDocument, options);
      }
export type ActiveToggleMutationHookResult = ReturnType<typeof useActiveToggleMutation>;
export type ActiveToggleMutationResult = Apollo.MutationResult<ActiveToggleMutation>;
export type ActiveToggleMutationOptions = Apollo.BaseMutationOptions<ActiveToggleMutation, ActiveToggleMutationVariables>;
export const ActivatedToggleDocument = gql`
    mutation activatedToggle($id: ID!) {
  activatedToggle(input: {id: $id, isActive: true}) {
    clientMutationId
  }
}
    `;
export type ActivatedToggleMutationFn = Apollo.MutationFunction<ActivatedToggleMutation, ActivatedToggleMutationVariables>;

/**
 * __useActivatedToggleMutation__
 *
 * To run a mutation, you first call `useActivatedToggleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivatedToggleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activatedToggleMutation, { data, loading, error }] = useActivatedToggleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useActivatedToggleMutation(baseOptions?: Apollo.MutationHookOptions<ActivatedToggleMutation, ActivatedToggleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ActivatedToggleMutation, ActivatedToggleMutationVariables>(ActivatedToggleDocument, options);
      }
export type ActivatedToggleMutationHookResult = ReturnType<typeof useActivatedToggleMutation>;
export type ActivatedToggleMutationResult = Apollo.MutationResult<ActivatedToggleMutation>;
export type ActivatedToggleMutationOptions = Apollo.BaseMutationOptions<ActivatedToggleMutation, ActivatedToggleMutationVariables>;
export const UserDeleteDocument = gql`
    mutation userDelete($id: ID!) {
  userDelete(input: {id: $id}) {
    clientMutationId
    user {
      id
    }
  }
}
    `;
export type UserDeleteMutationFn = Apollo.MutationFunction<UserDeleteMutation, UserDeleteMutationVariables>;

/**
 * __useUserDeleteMutation__
 *
 * To run a mutation, you first call `useUserDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userDeleteMutation, { data, loading, error }] = useUserDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserDeleteMutation(baseOptions?: Apollo.MutationHookOptions<UserDeleteMutation, UserDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserDeleteMutation, UserDeleteMutationVariables>(UserDeleteDocument, options);
      }
export type UserDeleteMutationHookResult = ReturnType<typeof useUserDeleteMutation>;
export type UserDeleteMutationResult = Apollo.MutationResult<UserDeleteMutation>;
export type UserDeleteMutationOptions = Apollo.BaseMutationOptions<UserDeleteMutation, UserDeleteMutationVariables>;
export const AnalyticListDocument = gql`
    query analyticList($last: Int) {
  analytics(last: $last) {
    count
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        anonymousId
        title
        event
        channel
        category
        resource
        url
        path
        userId
        method
        day
        responseTime
        hour
        createdAt
      }
    }
  }
}
    `;

/**
 * __useAnalyticListQuery__
 *
 * To run a query within a React component, call `useAnalyticListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnalyticListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnalyticListQuery({
 *   variables: {
 *      last: // value for 'last'
 *   },
 * });
 */
export function useAnalyticListQuery(baseOptions?: Apollo.QueryHookOptions<AnalyticListQuery, AnalyticListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnalyticListQuery, AnalyticListQueryVariables>(AnalyticListDocument, options);
      }
export function useAnalyticListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnalyticListQuery, AnalyticListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnalyticListQuery, AnalyticListQueryVariables>(AnalyticListDocument, options);
        }
export type AnalyticListQueryHookResult = ReturnType<typeof useAnalyticListQuery>;
export type AnalyticListLazyQueryHookResult = ReturnType<typeof useAnalyticListLazyQuery>;
export type AnalyticListQueryResult = Apollo.QueryResult<AnalyticListQuery, AnalyticListQueryVariables>;
export const AnalyticSelectDocument = gql`
    query analyticSelect($id: ID!) {
  analytic(id: $id) {
    anonymousId
    title
    event
    channel
    category
    resource
    url
    path
    userId
    method
    responseTime
    day
    hour
    createdAt
  }
}
    `;

/**
 * __useAnalyticSelectQuery__
 *
 * To run a query within a React component, call `useAnalyticSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnalyticSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnalyticSelectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAnalyticSelectQuery(baseOptions: Apollo.QueryHookOptions<AnalyticSelectQuery, AnalyticSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnalyticSelectQuery, AnalyticSelectQueryVariables>(AnalyticSelectDocument, options);
      }
export function useAnalyticSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnalyticSelectQuery, AnalyticSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnalyticSelectQuery, AnalyticSelectQueryVariables>(AnalyticSelectDocument, options);
        }
export type AnalyticSelectQueryHookResult = ReturnType<typeof useAnalyticSelectQuery>;
export type AnalyticSelectLazyQueryHookResult = ReturnType<typeof useAnalyticSelectLazyQuery>;
export type AnalyticSelectQueryResult = Apollo.QueryResult<AnalyticSelectQuery, AnalyticSelectQueryVariables>;
export const AnalyticCreateDocument = gql`
    mutation analyticCreate($anonymousId: String, $title: String, $event: String, $channel: String, $category: String, $resource: String, $url: String, $path: String, $userId: String, $method: String, $responseTime: String, $day: String, $hour: String) {
  analyticCreate(
    input: {anonymousId: $anonymousId, title: $title, event: $event, channel: $channel, category: $category, resource: $resource, url: $url, path: $path, userId: $userId, method: $method, responseTime: $responseTime, day: $day, hour: $hour}
  ) {
    analytic {
      id
    }
  }
}
    `;
export type AnalyticCreateMutationFn = Apollo.MutationFunction<AnalyticCreateMutation, AnalyticCreateMutationVariables>;

/**
 * __useAnalyticCreateMutation__
 *
 * To run a mutation, you first call `useAnalyticCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnalyticCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [analyticCreateMutation, { data, loading, error }] = useAnalyticCreateMutation({
 *   variables: {
 *      anonymousId: // value for 'anonymousId'
 *      title: // value for 'title'
 *      event: // value for 'event'
 *      channel: // value for 'channel'
 *      category: // value for 'category'
 *      resource: // value for 'resource'
 *      url: // value for 'url'
 *      path: // value for 'path'
 *      userId: // value for 'userId'
 *      method: // value for 'method'
 *      responseTime: // value for 'responseTime'
 *      day: // value for 'day'
 *      hour: // value for 'hour'
 *   },
 * });
 */
export function useAnalyticCreateMutation(baseOptions?: Apollo.MutationHookOptions<AnalyticCreateMutation, AnalyticCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AnalyticCreateMutation, AnalyticCreateMutationVariables>(AnalyticCreateDocument, options);
      }
export type AnalyticCreateMutationHookResult = ReturnType<typeof useAnalyticCreateMutation>;
export type AnalyticCreateMutationResult = Apollo.MutationResult<AnalyticCreateMutation>;
export type AnalyticCreateMutationOptions = Apollo.BaseMutationOptions<AnalyticCreateMutation, AnalyticCreateMutationVariables>;
export const AnalyticUpsertDocument = gql`
    mutation analyticUpsert($id: ID!, $anonymousId: String, $title: String, $event: String, $channel: String, $category: String, $resource: String, $url: String, $path: String, $userId: String, $method: String, $responseTime: String, $day: String, $hour: String) {
  analyticUpsert(
    input: {id: $id, anonymousId: $anonymousId, title: $title, event: $event, channel: $channel, category: $category, resource: $resource, url: $url, path: $path, userId: $userId, method: $method, responseTime: $responseTime, day: $day, hour: $hour}
  ) {
    analytic {
      id
    }
  }
}
    `;
export type AnalyticUpsertMutationFn = Apollo.MutationFunction<AnalyticUpsertMutation, AnalyticUpsertMutationVariables>;

/**
 * __useAnalyticUpsertMutation__
 *
 * To run a mutation, you first call `useAnalyticUpsertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnalyticUpsertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [analyticUpsertMutation, { data, loading, error }] = useAnalyticUpsertMutation({
 *   variables: {
 *      id: // value for 'id'
 *      anonymousId: // value for 'anonymousId'
 *      title: // value for 'title'
 *      event: // value for 'event'
 *      channel: // value for 'channel'
 *      category: // value for 'category'
 *      resource: // value for 'resource'
 *      url: // value for 'url'
 *      path: // value for 'path'
 *      userId: // value for 'userId'
 *      method: // value for 'method'
 *      responseTime: // value for 'responseTime'
 *      day: // value for 'day'
 *      hour: // value for 'hour'
 *   },
 * });
 */
export function useAnalyticUpsertMutation(baseOptions?: Apollo.MutationHookOptions<AnalyticUpsertMutation, AnalyticUpsertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AnalyticUpsertMutation, AnalyticUpsertMutationVariables>(AnalyticUpsertDocument, options);
      }
export type AnalyticUpsertMutationHookResult = ReturnType<typeof useAnalyticUpsertMutation>;
export type AnalyticUpsertMutationResult = Apollo.MutationResult<AnalyticUpsertMutation>;
export type AnalyticUpsertMutationOptions = Apollo.BaseMutationOptions<AnalyticUpsertMutation, AnalyticUpsertMutationVariables>;
export const AnalyticUpdateDocument = gql`
    mutation analyticUpdate($id: ID!, $anonymousId: String, $title: String, $event: String, $channel: String, $category: String, $resource: String, $url: String, $path: String, $userId: String, $method: String, $responseTime: String, $day: String, $hour: String) {
  analyticUpdate(
    input: {id: $id, anonymousId: $anonymousId, title: $title, event: $event, channel: $channel, category: $category, resource: $resource, url: $url, path: $path, userId: $userId, method: $method, responseTime: $responseTime, day: $day, hour: $hour}
  ) {
    analytic {
      id
    }
  }
}
    `;
export type AnalyticUpdateMutationFn = Apollo.MutationFunction<AnalyticUpdateMutation, AnalyticUpdateMutationVariables>;

/**
 * __useAnalyticUpdateMutation__
 *
 * To run a mutation, you first call `useAnalyticUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnalyticUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [analyticUpdateMutation, { data, loading, error }] = useAnalyticUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      anonymousId: // value for 'anonymousId'
 *      title: // value for 'title'
 *      event: // value for 'event'
 *      channel: // value for 'channel'
 *      category: // value for 'category'
 *      resource: // value for 'resource'
 *      url: // value for 'url'
 *      path: // value for 'path'
 *      userId: // value for 'userId'
 *      method: // value for 'method'
 *      responseTime: // value for 'responseTime'
 *      day: // value for 'day'
 *      hour: // value for 'hour'
 *   },
 * });
 */
export function useAnalyticUpdateMutation(baseOptions?: Apollo.MutationHookOptions<AnalyticUpdateMutation, AnalyticUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AnalyticUpdateMutation, AnalyticUpdateMutationVariables>(AnalyticUpdateDocument, options);
      }
export type AnalyticUpdateMutationHookResult = ReturnType<typeof useAnalyticUpdateMutation>;
export type AnalyticUpdateMutationResult = Apollo.MutationResult<AnalyticUpdateMutation>;
export type AnalyticUpdateMutationOptions = Apollo.BaseMutationOptions<AnalyticUpdateMutation, AnalyticUpdateMutationVariables>;
export const MeetingListDocument = gql`
    query meetingList($starterId: ID, $isDeleted: Boolean, $last: Int) {
  meetings(starterId: $starterId, isDeleted: $isDeleted, last: $last) {
    count
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        name
        description
        photo
        starter {
          id
          username
        }
        createdAt
        modifiedAt
        scheduledAt
        startedAt
        endedAt
        deletedAt
        isDeleted
        isReoccuring
      }
    }
  }
}
    `;

/**
 * __useMeetingListQuery__
 *
 * To run a query within a React component, call `useMeetingListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeetingListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeetingListQuery({
 *   variables: {
 *      starterId: // value for 'starterId'
 *      isDeleted: // value for 'isDeleted'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useMeetingListQuery(baseOptions?: Apollo.QueryHookOptions<MeetingListQuery, MeetingListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeetingListQuery, MeetingListQueryVariables>(MeetingListDocument, options);
      }
export function useMeetingListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeetingListQuery, MeetingListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeetingListQuery, MeetingListQueryVariables>(MeetingListDocument, options);
        }
export type MeetingListQueryHookResult = ReturnType<typeof useMeetingListQuery>;
export type MeetingListLazyQueryHookResult = ReturnType<typeof useMeetingListLazyQuery>;
export type MeetingListQueryResult = Apollo.QueryResult<MeetingListQuery, MeetingListQueryVariables>;
export const UsermeetingListDocument = gql`
    query usermeetingList($starterId: ID, $isDeleted: Boolean, $last: Int) {
  usermeetings(starterId: $starterId, isDeleted: $isDeleted, last: $last) {
    count
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        name
        description
        photo
        starter {
          id
          username
        }
        createdAt
        modifiedAt
        scheduledAt
        startedAt
        endedAt
        deletedAt
        isDeleted
        isReoccuring
      }
    }
  }
}
    `;

/**
 * __useUsermeetingListQuery__
 *
 * To run a query within a React component, call `useUsermeetingListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsermeetingListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsermeetingListQuery({
 *   variables: {
 *      starterId: // value for 'starterId'
 *      isDeleted: // value for 'isDeleted'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useUsermeetingListQuery(baseOptions?: Apollo.QueryHookOptions<UsermeetingListQuery, UsermeetingListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsermeetingListQuery, UsermeetingListQueryVariables>(UsermeetingListDocument, options);
      }
export function useUsermeetingListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsermeetingListQuery, UsermeetingListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsermeetingListQuery, UsermeetingListQueryVariables>(UsermeetingListDocument, options);
        }
export type UsermeetingListQueryHookResult = ReturnType<typeof useUsermeetingListQuery>;
export type UsermeetingListLazyQueryHookResult = ReturnType<typeof useUsermeetingListLazyQuery>;
export type UsermeetingListQueryResult = Apollo.QueryResult<UsermeetingListQuery, UsermeetingListQueryVariables>;
export const MeetingSelectDocument = gql`
    query meetingSelect($id: ID!) {
  meeting(id: $id) {
    id
    name
    description
    photo
    starter {
      id
      username
    }
    createdAt
    modifiedAt
    scheduledAt
    startedAt
    endedAt
    deletedAt
    isDeleted
    isReoccuring
  }
}
    `;

/**
 * __useMeetingSelectQuery__
 *
 * To run a query within a React component, call `useMeetingSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeetingSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeetingSelectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMeetingSelectQuery(baseOptions: Apollo.QueryHookOptions<MeetingSelectQuery, MeetingSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeetingSelectQuery, MeetingSelectQueryVariables>(MeetingSelectDocument, options);
      }
export function useMeetingSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeetingSelectQuery, MeetingSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeetingSelectQuery, MeetingSelectQueryVariables>(MeetingSelectDocument, options);
        }
export type MeetingSelectQueryHookResult = ReturnType<typeof useMeetingSelectQuery>;
export type MeetingSelectLazyQueryHookResult = ReturnType<typeof useMeetingSelectLazyQuery>;
export type MeetingSelectQueryResult = Apollo.QueryResult<MeetingSelectQuery, MeetingSelectQueryVariables>;
export const MeetingCreateDocument = gql`
    mutation meetingCreate($name: String!, $description: String, $photo: String, $scheduledAt: String) {
  meetingCreate(
    name: $name
    description: $description
    photo: $photo
    scheduledAt: $scheduledAt
  ) {
    meeting {
      id
    }
  }
}
    `;
export type MeetingCreateMutationFn = Apollo.MutationFunction<MeetingCreateMutation, MeetingCreateMutationVariables>;

/**
 * __useMeetingCreateMutation__
 *
 * To run a mutation, you first call `useMeetingCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMeetingCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [meetingCreateMutation, { data, loading, error }] = useMeetingCreateMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      photo: // value for 'photo'
 *      scheduledAt: // value for 'scheduledAt'
 *   },
 * });
 */
export function useMeetingCreateMutation(baseOptions?: Apollo.MutationHookOptions<MeetingCreateMutation, MeetingCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MeetingCreateMutation, MeetingCreateMutationVariables>(MeetingCreateDocument, options);
      }
export type MeetingCreateMutationHookResult = ReturnType<typeof useMeetingCreateMutation>;
export type MeetingCreateMutationResult = Apollo.MutationResult<MeetingCreateMutation>;
export type MeetingCreateMutationOptions = Apollo.BaseMutationOptions<MeetingCreateMutation, MeetingCreateMutationVariables>;
export const MeetingnameUpdateDocument = gql`
    mutation meetingnameUpdate($id: ID!, $name: String) {
  meetingnameUpdate(input: {id: $id, name: $name}) {
    meeting {
      id
    }
  }
}
    `;
export type MeetingnameUpdateMutationFn = Apollo.MutationFunction<MeetingnameUpdateMutation, MeetingnameUpdateMutationVariables>;

/**
 * __useMeetingnameUpdateMutation__
 *
 * To run a mutation, you first call `useMeetingnameUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMeetingnameUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [meetingnameUpdateMutation, { data, loading, error }] = useMeetingnameUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useMeetingnameUpdateMutation(baseOptions?: Apollo.MutationHookOptions<MeetingnameUpdateMutation, MeetingnameUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MeetingnameUpdateMutation, MeetingnameUpdateMutationVariables>(MeetingnameUpdateDocument, options);
      }
export type MeetingnameUpdateMutationHookResult = ReturnType<typeof useMeetingnameUpdateMutation>;
export type MeetingnameUpdateMutationResult = Apollo.MutationResult<MeetingnameUpdateMutation>;
export type MeetingnameUpdateMutationOptions = Apollo.BaseMutationOptions<MeetingnameUpdateMutation, MeetingnameUpdateMutationVariables>;
export const MeetingdescriptionUpdateDocument = gql`
    mutation meetingdescriptionUpdate($id: ID!, $description: String) {
  meetingdescriptionUpdate(input: {id: $id, description: $description}) {
    meeting {
      id
    }
  }
}
    `;
export type MeetingdescriptionUpdateMutationFn = Apollo.MutationFunction<MeetingdescriptionUpdateMutation, MeetingdescriptionUpdateMutationVariables>;

/**
 * __useMeetingdescriptionUpdateMutation__
 *
 * To run a mutation, you first call `useMeetingdescriptionUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMeetingdescriptionUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [meetingdescriptionUpdateMutation, { data, loading, error }] = useMeetingdescriptionUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useMeetingdescriptionUpdateMutation(baseOptions?: Apollo.MutationHookOptions<MeetingdescriptionUpdateMutation, MeetingdescriptionUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MeetingdescriptionUpdateMutation, MeetingdescriptionUpdateMutationVariables>(MeetingdescriptionUpdateDocument, options);
      }
export type MeetingdescriptionUpdateMutationHookResult = ReturnType<typeof useMeetingdescriptionUpdateMutation>;
export type MeetingdescriptionUpdateMutationResult = Apollo.MutationResult<MeetingdescriptionUpdateMutation>;
export type MeetingdescriptionUpdateMutationOptions = Apollo.BaseMutationOptions<MeetingdescriptionUpdateMutation, MeetingdescriptionUpdateMutationVariables>;
export const MeetingimageUpdateDocument = gql`
    mutation meetingimageUpdate($id: ID!, $photo: String) {
  meetingimageUpdate(input: {id: $id, photo: $photo}) {
    meeting {
      id
    }
  }
}
    `;
export type MeetingimageUpdateMutationFn = Apollo.MutationFunction<MeetingimageUpdateMutation, MeetingimageUpdateMutationVariables>;

/**
 * __useMeetingimageUpdateMutation__
 *
 * To run a mutation, you first call `useMeetingimageUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMeetingimageUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [meetingimageUpdateMutation, { data, loading, error }] = useMeetingimageUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      photo: // value for 'photo'
 *   },
 * });
 */
export function useMeetingimageUpdateMutation(baseOptions?: Apollo.MutationHookOptions<MeetingimageUpdateMutation, MeetingimageUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MeetingimageUpdateMutation, MeetingimageUpdateMutationVariables>(MeetingimageUpdateDocument, options);
      }
export type MeetingimageUpdateMutationHookResult = ReturnType<typeof useMeetingimageUpdateMutation>;
export type MeetingimageUpdateMutationResult = Apollo.MutationResult<MeetingimageUpdateMutation>;
export type MeetingimageUpdateMutationOptions = Apollo.BaseMutationOptions<MeetingimageUpdateMutation, MeetingimageUpdateMutationVariables>;
export const MeetingScheduleDocument = gql`
    mutation meetingSchedule($id: ID!, $scheduledAt: String) {
  meetingSchedule(input: {id: $id, scheduledAt: $scheduledAt}) {
    meeting {
      id
    }
  }
}
    `;
export type MeetingScheduleMutationFn = Apollo.MutationFunction<MeetingScheduleMutation, MeetingScheduleMutationVariables>;

/**
 * __useMeetingScheduleMutation__
 *
 * To run a mutation, you first call `useMeetingScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMeetingScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [meetingScheduleMutation, { data, loading, error }] = useMeetingScheduleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      scheduledAt: // value for 'scheduledAt'
 *   },
 * });
 */
export function useMeetingScheduleMutation(baseOptions?: Apollo.MutationHookOptions<MeetingScheduleMutation, MeetingScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MeetingScheduleMutation, MeetingScheduleMutationVariables>(MeetingScheduleDocument, options);
      }
export type MeetingScheduleMutationHookResult = ReturnType<typeof useMeetingScheduleMutation>;
export type MeetingScheduleMutationResult = Apollo.MutationResult<MeetingScheduleMutation>;
export type MeetingScheduleMutationOptions = Apollo.BaseMutationOptions<MeetingScheduleMutation, MeetingScheduleMutationVariables>;
export const MeetingStartDocument = gql`
    mutation meetingStart($id: ID!, $startedAt: String) {
  meetingStart(input: {id: $id, startedAt: $startedAt}) {
    meeting {
      id
    }
  }
}
    `;
export type MeetingStartMutationFn = Apollo.MutationFunction<MeetingStartMutation, MeetingStartMutationVariables>;

/**
 * __useMeetingStartMutation__
 *
 * To run a mutation, you first call `useMeetingStartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMeetingStartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [meetingStartMutation, { data, loading, error }] = useMeetingStartMutation({
 *   variables: {
 *      id: // value for 'id'
 *      startedAt: // value for 'startedAt'
 *   },
 * });
 */
export function useMeetingStartMutation(baseOptions?: Apollo.MutationHookOptions<MeetingStartMutation, MeetingStartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MeetingStartMutation, MeetingStartMutationVariables>(MeetingStartDocument, options);
      }
export type MeetingStartMutationHookResult = ReturnType<typeof useMeetingStartMutation>;
export type MeetingStartMutationResult = Apollo.MutationResult<MeetingStartMutation>;
export type MeetingStartMutationOptions = Apollo.BaseMutationOptions<MeetingStartMutation, MeetingStartMutationVariables>;
export const MeetingEndDocument = gql`
    mutation meetingEnd($id: ID!, $endedAt: String, $video: String) {
  meetingEnd(input: {id: $id, endedAt: $endedAt, video: $video}) {
    meeting {
      id
    }
  }
}
    `;
export type MeetingEndMutationFn = Apollo.MutationFunction<MeetingEndMutation, MeetingEndMutationVariables>;

/**
 * __useMeetingEndMutation__
 *
 * To run a mutation, you first call `useMeetingEndMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMeetingEndMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [meetingEndMutation, { data, loading, error }] = useMeetingEndMutation({
 *   variables: {
 *      id: // value for 'id'
 *      endedAt: // value for 'endedAt'
 *      video: // value for 'video'
 *   },
 * });
 */
export function useMeetingEndMutation(baseOptions?: Apollo.MutationHookOptions<MeetingEndMutation, MeetingEndMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MeetingEndMutation, MeetingEndMutationVariables>(MeetingEndDocument, options);
      }
export type MeetingEndMutationHookResult = ReturnType<typeof useMeetingEndMutation>;
export type MeetingEndMutationResult = Apollo.MutationResult<MeetingEndMutation>;
export type MeetingEndMutationOptions = Apollo.BaseMutationOptions<MeetingEndMutation, MeetingEndMutationVariables>;
export const MeetingDeleteDocument = gql`
    mutation meetingDelete($id: ID!) {
  meetingDelete(input: {id: $id}) {
    clientMutationId
    meeting {
      id
    }
  }
}
    `;
export type MeetingDeleteMutationFn = Apollo.MutationFunction<MeetingDeleteMutation, MeetingDeleteMutationVariables>;

/**
 * __useMeetingDeleteMutation__
 *
 * To run a mutation, you first call `useMeetingDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMeetingDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [meetingDeleteMutation, { data, loading, error }] = useMeetingDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMeetingDeleteMutation(baseOptions?: Apollo.MutationHookOptions<MeetingDeleteMutation, MeetingDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MeetingDeleteMutation, MeetingDeleteMutationVariables>(MeetingDeleteDocument, options);
      }
export type MeetingDeleteMutationHookResult = ReturnType<typeof useMeetingDeleteMutation>;
export type MeetingDeleteMutationResult = Apollo.MutationResult<MeetingDeleteMutation>;
export type MeetingDeleteMutationOptions = Apollo.BaseMutationOptions<MeetingDeleteMutation, MeetingDeleteMutationVariables>;