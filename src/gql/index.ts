/* eslint-disable */
import { gql } from 'apollo-boost';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
  uuid: string;
};

/** columns and relationships of "channels" */
export type Channels = {
  __typename?: 'channels';
  createdAt: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  messages: Array<Relation_Channel_User_Messages>;
  /** An aggregated array relationship */
  messages_aggregate: Relation_Channel_User_Messages_Aggregate;
  name: Scalars['String'];
  /** An array relationship */
  subscriptions: Array<Subscriptions>;
  /** An aggregated array relationship */
  subscriptions_aggregate: Subscriptions_Aggregate;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  users: Array<Relation_Channel_Users>;
  /** An aggregated array relationship */
  users_aggregate: Relation_Channel_Users_Aggregate;
};


/** columns and relationships of "channels" */
export type ChannelsMessagesArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_User_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_User_Messages_Order_By>>;
  where?: Maybe<Relation_Channel_User_Messages_Bool_Exp>;
};


/** columns and relationships of "channels" */
export type ChannelsMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_User_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_User_Messages_Order_By>>;
  where?: Maybe<Relation_Channel_User_Messages_Bool_Exp>;
};


/** columns and relationships of "channels" */
export type ChannelsSubscriptionsArgs = {
  distinct_on?: Maybe<Array<Subscriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscriptions_Order_By>>;
  where?: Maybe<Subscriptions_Bool_Exp>;
};


/** columns and relationships of "channels" */
export type ChannelsSubscriptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Subscriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscriptions_Order_By>>;
  where?: Maybe<Subscriptions_Bool_Exp>;
};


/** columns and relationships of "channels" */
export type ChannelsUsersArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_Users_Order_By>>;
  where?: Maybe<Relation_Channel_Users_Bool_Exp>;
};


/** columns and relationships of "channels" */
export type ChannelsUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_Users_Order_By>>;
  where?: Maybe<Relation_Channel_Users_Bool_Exp>;
};

/** aggregated selection of "channels" */
export type Channels_Aggregate = {
  __typename?: 'channels_aggregate';
  aggregate?: Maybe<Channels_Aggregate_Fields>;
  nodes: Array<Channels>;
};

/** aggregate fields of "channels" */
export type Channels_Aggregate_Fields = {
  __typename?: 'channels_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channels_Max_Fields>;
  min?: Maybe<Channels_Min_Fields>;
};


/** aggregate fields of "channels" */
export type Channels_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channels_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Channels_Max_Fields = {
  __typename?: 'channels_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Channels_Min_Fields = {
  __typename?: 'channels_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "channels" */
export type Channels_Mutation_Response = {
  __typename?: 'channels_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Channels>;
};

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  content: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  subscription: Subscriptions;
  subscriptionId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Messages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subscriptionId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subscriptionId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Messages>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "channels" */
  delete_channels?: Maybe<Channels_Mutation_Response>;
  /** delete single row from the table: "channels" */
  delete_channels_by_pk?: Maybe<Channels>;
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
  /** delete data from the table: "subscriptions" */
  delete_subscriptions?: Maybe<Subscriptions_Mutation_Response>;
  /** delete single row from the table: "subscriptions" */
  delete_subscriptions_by_pk?: Maybe<Subscriptions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "channels" */
  insert_channels?: Maybe<Channels_Mutation_Response>;
  /** insert a single row into the table: "channels" */
  insert_channels_one?: Maybe<Channels>;
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
  /** insert data into the table: "subscriptions" */
  insert_subscriptions?: Maybe<Subscriptions_Mutation_Response>;
  /** insert a single row into the table: "subscriptions" */
  insert_subscriptions_one?: Maybe<Subscriptions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "channels" */
  update_channels?: Maybe<Channels_Mutation_Response>;
  /** update single row of the table: "channels" */
  update_channels_by_pk?: Maybe<Channels>;
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
  /** update data of the table: "subscriptions" */
  update_subscriptions?: Maybe<Subscriptions_Mutation_Response>;
  /** update single row of the table: "subscriptions" */
  update_subscriptions_by_pk?: Maybe<Subscriptions>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_ChannelsArgs = {
  where: Channels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channels_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SubscriptionsArgs = {
  where: Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscriptions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ChannelsArgs = {
  objects: Array<Channels_Insert_Input>;
  on_conflict?: Maybe<Channels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channels_OneArgs = {
  object: Channels_Insert_Input;
  on_conflict?: Maybe<Channels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubscriptionsArgs = {
  objects: Array<Subscriptions_Insert_Input>;
  on_conflict?: Maybe<Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscriptions_OneArgs = {
  object: Subscriptions_Insert_Input;
  on_conflict?: Maybe<Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ChannelsArgs = {
  _set?: Maybe<Channels_Set_Input>;
  where: Channels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channels_By_PkArgs = {
  _set?: Maybe<Channels_Set_Input>;
  pk_columns: Channels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _set?: Maybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _set?: Maybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SubscriptionsArgs = {
  _set?: Maybe<Subscriptions_Set_Input>;
  where: Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscriptions_By_PkArgs = {
  _set?: Maybe<Subscriptions_Set_Input>;
  pk_columns: Subscriptions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "channels" */
  channels: Array<Channels>;
  /** fetch aggregated fields from the table: "channels" */
  channels_aggregate: Channels_Aggregate;
  /** fetch data from the table: "channels" using primary key columns */
  channels_by_pk?: Maybe<Channels>;
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "relation_channel_user_messages" */
  relation_channel_user_messages: Array<Relation_Channel_User_Messages>;
  /** fetch aggregated fields from the table: "relation_channel_user_messages" */
  relation_channel_user_messages_aggregate: Relation_Channel_User_Messages_Aggregate;
  /** fetch data from the table: "relation_channel_users" */
  relation_channel_users: Array<Relation_Channel_Users>;
  /** fetch aggregated fields from the table: "relation_channel_users" */
  relation_channel_users_aggregate: Relation_Channel_Users_Aggregate;
  /** fetch data from the table: "relation_user_channels" */
  relation_user_channels: Array<Relation_User_Channels>;
  /** fetch aggregated fields from the table: "relation_user_channels" */
  relation_user_channels_aggregate: Relation_User_Channels_Aggregate;
  /** fetch data from the table: "subscriptions" */
  subscriptions: Array<Subscriptions>;
  /** fetch aggregated fields from the table: "subscriptions" */
  subscriptions_aggregate: Subscriptions_Aggregate;
  /** fetch data from the table: "subscriptions" using primary key columns */
  subscriptions_by_pk?: Maybe<Subscriptions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootChannelsArgs = {
  distinct_on?: Maybe<Array<Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channels_Order_By>>;
  where?: Maybe<Channels_Bool_Exp>;
};


/** query root */
export type Query_RootChannels_AggregateArgs = {
  distinct_on?: Maybe<Array<Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channels_Order_By>>;
  where?: Maybe<Channels_Bool_Exp>;
};


/** query root */
export type Query_RootChannels_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** query root */
export type Query_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** query root */
export type Query_RootMessages_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootRelation_Channel_User_MessagesArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_User_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_User_Messages_Order_By>>;
  where?: Maybe<Relation_Channel_User_Messages_Bool_Exp>;
};


/** query root */
export type Query_RootRelation_Channel_User_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_User_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_User_Messages_Order_By>>;
  where?: Maybe<Relation_Channel_User_Messages_Bool_Exp>;
};


/** query root */
export type Query_RootRelation_Channel_UsersArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_Users_Order_By>>;
  where?: Maybe<Relation_Channel_Users_Bool_Exp>;
};


/** query root */
export type Query_RootRelation_Channel_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_Users_Order_By>>;
  where?: Maybe<Relation_Channel_Users_Bool_Exp>;
};


/** query root */
export type Query_RootRelation_User_ChannelsArgs = {
  distinct_on?: Maybe<Array<Relation_User_Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_User_Channels_Order_By>>;
  where?: Maybe<Relation_User_Channels_Bool_Exp>;
};


/** query root */
export type Query_RootRelation_User_Channels_AggregateArgs = {
  distinct_on?: Maybe<Array<Relation_User_Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_User_Channels_Order_By>>;
  where?: Maybe<Relation_User_Channels_Bool_Exp>;
};


/** query root */
export type Query_RootSubscriptionsArgs = {
  distinct_on?: Maybe<Array<Subscriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscriptions_Order_By>>;
  where?: Maybe<Subscriptions_Bool_Exp>;
};


/** query root */
export type Query_RootSubscriptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Subscriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscriptions_Order_By>>;
  where?: Maybe<Subscriptions_Bool_Exp>;
};


/** query root */
export type Query_RootSubscriptions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "relation_channel_user_messages" */
export type Relation_Channel_User_Messages = {
  __typename?: 'relation_channel_user_messages';
  /** An object relationship */
  channel?: Maybe<Channels>;
  channelId?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subscriptionId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "relation_channel_user_messages" */
export type Relation_Channel_User_Messages_Aggregate = {
  __typename?: 'relation_channel_user_messages_aggregate';
  aggregate?: Maybe<Relation_Channel_User_Messages_Aggregate_Fields>;
  nodes: Array<Relation_Channel_User_Messages>;
};

/** aggregate fields of "relation_channel_user_messages" */
export type Relation_Channel_User_Messages_Aggregate_Fields = {
  __typename?: 'relation_channel_user_messages_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Relation_Channel_User_Messages_Max_Fields>;
  min?: Maybe<Relation_Channel_User_Messages_Min_Fields>;
};


/** aggregate fields of "relation_channel_user_messages" */
export type Relation_Channel_User_Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Relation_Channel_User_Messages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Relation_Channel_User_Messages_Max_Fields = {
  __typename?: 'relation_channel_user_messages_max_fields';
  channelId?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subscriptionId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Relation_Channel_User_Messages_Min_Fields = {
  __typename?: 'relation_channel_user_messages_min_fields';
  channelId?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subscriptionId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "relation_channel_users" */
export type Relation_Channel_Users = {
  __typename?: 'relation_channel_users';
  channelId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  channels: Array<Relation_User_Channels>;
  /** An aggregated array relationship */
  channels_aggregate: Relation_User_Channels_Aggregate;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};


/** columns and relationships of "relation_channel_users" */
export type Relation_Channel_UsersChannelsArgs = {
  distinct_on?: Maybe<Array<Relation_User_Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_User_Channels_Order_By>>;
  where?: Maybe<Relation_User_Channels_Bool_Exp>;
};


/** columns and relationships of "relation_channel_users" */
export type Relation_Channel_UsersChannels_AggregateArgs = {
  distinct_on?: Maybe<Array<Relation_User_Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_User_Channels_Order_By>>;
  where?: Maybe<Relation_User_Channels_Bool_Exp>;
};

/** aggregated selection of "relation_channel_users" */
export type Relation_Channel_Users_Aggregate = {
  __typename?: 'relation_channel_users_aggregate';
  aggregate?: Maybe<Relation_Channel_Users_Aggregate_Fields>;
  nodes: Array<Relation_Channel_Users>;
};

/** aggregate fields of "relation_channel_users" */
export type Relation_Channel_Users_Aggregate_Fields = {
  __typename?: 'relation_channel_users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Relation_Channel_Users_Max_Fields>;
  min?: Maybe<Relation_Channel_Users_Min_Fields>;
};


/** aggregate fields of "relation_channel_users" */
export type Relation_Channel_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Relation_Channel_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Relation_Channel_Users_Max_Fields = {
  __typename?: 'relation_channel_users_max_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Relation_Channel_Users_Min_Fields = {
  __typename?: 'relation_channel_users_min_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** columns and relationships of "relation_user_channels" */
export type Relation_User_Channels = {
  __typename?: 'relation_user_channels';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  users: Array<Relation_Channel_Users>;
  /** An aggregated array relationship */
  users_aggregate: Relation_Channel_Users_Aggregate;
};


/** columns and relationships of "relation_user_channels" */
export type Relation_User_ChannelsUsersArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_Users_Order_By>>;
  where?: Maybe<Relation_Channel_Users_Bool_Exp>;
};


/** columns and relationships of "relation_user_channels" */
export type Relation_User_ChannelsUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_Users_Order_By>>;
  where?: Maybe<Relation_Channel_Users_Bool_Exp>;
};

/** aggregated selection of "relation_user_channels" */
export type Relation_User_Channels_Aggregate = {
  __typename?: 'relation_user_channels_aggregate';
  aggregate?: Maybe<Relation_User_Channels_Aggregate_Fields>;
  nodes: Array<Relation_User_Channels>;
};

/** aggregate fields of "relation_user_channels" */
export type Relation_User_Channels_Aggregate_Fields = {
  __typename?: 'relation_user_channels_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Relation_User_Channels_Max_Fields>;
  min?: Maybe<Relation_User_Channels_Min_Fields>;
};


/** aggregate fields of "relation_user_channels" */
export type Relation_User_Channels_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Relation_User_Channels_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Relation_User_Channels_Max_Fields = {
  __typename?: 'relation_user_channels_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Relation_User_Channels_Min_Fields = {
  __typename?: 'relation_user_channels_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "channels" */
  channels: Array<Channels>;
  /** fetch aggregated fields from the table: "channels" */
  channels_aggregate: Channels_Aggregate;
  /** fetch data from the table: "channels" using primary key columns */
  channels_by_pk?: Maybe<Channels>;
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "relation_channel_user_messages" */
  relation_channel_user_messages: Array<Relation_Channel_User_Messages>;
  /** fetch aggregated fields from the table: "relation_channel_user_messages" */
  relation_channel_user_messages_aggregate: Relation_Channel_User_Messages_Aggregate;
  /** fetch data from the table: "relation_channel_users" */
  relation_channel_users: Array<Relation_Channel_Users>;
  /** fetch aggregated fields from the table: "relation_channel_users" */
  relation_channel_users_aggregate: Relation_Channel_Users_Aggregate;
  /** fetch data from the table: "relation_user_channels" */
  relation_user_channels: Array<Relation_User_Channels>;
  /** fetch aggregated fields from the table: "relation_user_channels" */
  relation_user_channels_aggregate: Relation_User_Channels_Aggregate;
  /** fetch data from the table: "subscriptions" */
  subscriptions: Array<Subscriptions>;
  /** fetch aggregated fields from the table: "subscriptions" */
  subscriptions_aggregate: Subscriptions_Aggregate;
  /** fetch data from the table: "subscriptions" using primary key columns */
  subscriptions_by_pk?: Maybe<Subscriptions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootChannelsArgs = {
  distinct_on?: Maybe<Array<Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channels_Order_By>>;
  where?: Maybe<Channels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannels_AggregateArgs = {
  distinct_on?: Maybe<Array<Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channels_Order_By>>;
  where?: Maybe<Channels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannels_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRelation_Channel_User_MessagesArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_User_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_User_Messages_Order_By>>;
  where?: Maybe<Relation_Channel_User_Messages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRelation_Channel_User_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_User_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_User_Messages_Order_By>>;
  where?: Maybe<Relation_Channel_User_Messages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRelation_Channel_UsersArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_Users_Order_By>>;
  where?: Maybe<Relation_Channel_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRelation_Channel_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_Users_Order_By>>;
  where?: Maybe<Relation_Channel_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRelation_User_ChannelsArgs = {
  distinct_on?: Maybe<Array<Relation_User_Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_User_Channels_Order_By>>;
  where?: Maybe<Relation_User_Channels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRelation_User_Channels_AggregateArgs = {
  distinct_on?: Maybe<Array<Relation_User_Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_User_Channels_Order_By>>;
  where?: Maybe<Relation_User_Channels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSubscriptionsArgs = {
  distinct_on?: Maybe<Array<Subscriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscriptions_Order_By>>;
  where?: Maybe<Subscriptions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSubscriptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Subscriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscriptions_Order_By>>;
  where?: Maybe<Subscriptions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSubscriptions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "subscriptions" */
export type Subscriptions = {
  __typename?: 'subscriptions';
  /** An object relationship */
  channel: Channels;
  channelId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregated array relationship */
  messages_aggregate: Messages_Aggregate;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};


/** columns and relationships of "subscriptions" */
export type SubscriptionsMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** columns and relationships of "subscriptions" */
export type SubscriptionsMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** aggregated selection of "subscriptions" */
export type Subscriptions_Aggregate = {
  __typename?: 'subscriptions_aggregate';
  aggregate?: Maybe<Subscriptions_Aggregate_Fields>;
  nodes: Array<Subscriptions>;
};

/** aggregate fields of "subscriptions" */
export type Subscriptions_Aggregate_Fields = {
  __typename?: 'subscriptions_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Subscriptions_Max_Fields>;
  min?: Maybe<Subscriptions_Min_Fields>;
};


/** aggregate fields of "subscriptions" */
export type Subscriptions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Subscriptions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Subscriptions_Max_Fields = {
  __typename?: 'subscriptions_max_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Subscriptions_Min_Fields = {
  __typename?: 'subscriptions_min_fields';
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "subscriptions" */
export type Subscriptions_Mutation_Response = {
  __typename?: 'subscriptions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Subscriptions>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  channels: Array<Relation_User_Channels>;
  /** An aggregated array relationship */
  channels_aggregate: Relation_User_Channels_Aggregate;
  createdAt: Scalars['timestamptz'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['uuid'];
  lastName: Scalars['String'];
  /** An array relationship */
  messages: Array<Relation_Channel_User_Messages>;
  /** An aggregated array relationship */
  messages_aggregate: Relation_Channel_User_Messages_Aggregate;
  /** An array relationship */
  subscriptions: Array<Subscriptions>;
  /** An aggregated array relationship */
  subscriptions_aggregate: Subscriptions_Aggregate;
  updatedAt: Scalars['timestamptz'];
  username: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersChannelsArgs = {
  distinct_on?: Maybe<Array<Relation_User_Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_User_Channels_Order_By>>;
  where?: Maybe<Relation_User_Channels_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersChannels_AggregateArgs = {
  distinct_on?: Maybe<Array<Relation_User_Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_User_Channels_Order_By>>;
  where?: Maybe<Relation_User_Channels_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMessagesArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_User_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_User_Messages_Order_By>>;
  where?: Maybe<Relation_Channel_User_Messages_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Relation_Channel_User_Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Relation_Channel_User_Messages_Order_By>>;
  where?: Maybe<Relation_Channel_User_Messages_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSubscriptionsArgs = {
  distinct_on?: Maybe<Array<Subscriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscriptions_Order_By>>;
  where?: Maybe<Subscriptions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSubscriptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Subscriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscriptions_Order_By>>;
  where?: Maybe<Subscriptions_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** unique or primary key constraints on table "channels" */
export enum Channels_Constraint {
  /** unique or primary key constraint */
  ChannelsNameKey = 'channels_name_key',
  /** unique or primary key constraint */
  ChannelsPkey = 'channels_pkey'
}

/** select columns of table "channels" */
export enum Channels_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** update columns of table "channels" */
export enum Channels_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey'
}

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SubscriptionId = 'subscriptionId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SubscriptionId = 'subscriptionId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** select columns of table "relation_channel_user_messages" */
export enum Relation_Channel_User_Messages_Select_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SubscriptionId = 'subscriptionId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** select columns of table "relation_channel_users" */
export enum Relation_Channel_Users_Select_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** select columns of table "relation_user_channels" */
export enum Relation_User_Channels_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** unique or primary key constraints on table "subscriptions" */
export enum Subscriptions_Constraint {
  /** unique or primary key constraint */
  SubscriptionsPkey = 'subscriptions_pkey',
  /** unique or primary key constraint */
  SubscriptionsUserIdChannelIdKey = 'subscriptions_user_id_channel_id_key'
}

/** select columns of table "subscriptions" */
export enum Subscriptions_Select_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** update columns of table "subscriptions" */
export enum Subscriptions_Update_Column {
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersUsernameKey = 'users_username_key'
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** order by aggregate values of table "channels" */
export type Channels_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Channels_Max_Order_By>;
  min?: Maybe<Channels_Min_Order_By>;
};

/** input type for inserting array relation for remote table "channels" */
export type Channels_Arr_Rel_Insert_Input = {
  data: Array<Channels_Insert_Input>;
  on_conflict?: Maybe<Channels_On_Conflict>;
};

/** Boolean expression to filter rows from the table "channels". All fields are combined with a logical 'AND'. */
export type Channels_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channels_Bool_Exp>>>;
  _not?: Maybe<Channels_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channels_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  messages?: Maybe<Relation_Channel_User_Messages_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  subscriptions?: Maybe<Subscriptions_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  users?: Maybe<Relation_Channel_Users_Bool_Exp>;
};

/** input type for inserting data into table "channels" */
export type Channels_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  subscriptions?: Maybe<Subscriptions_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "channels" */
export type Channels_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** order by min() on columns of table "channels" */
export type Channels_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "channels" */
export type Channels_Obj_Rel_Insert_Input = {
  data: Channels_Insert_Input;
  on_conflict?: Maybe<Channels_On_Conflict>;
};

/** on conflict condition type for table "channels" */
export type Channels_On_Conflict = {
  constraint: Channels_Constraint;
  update_columns: Array<Channels_Update_Column>;
  where?: Maybe<Channels_Bool_Exp>;
};

/** ordering options when selecting data from "channels" */
export type Channels_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  messages_aggregate?: Maybe<Relation_Channel_User_Messages_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  subscriptions_aggregate?: Maybe<Subscriptions_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
  users_aggregate?: Maybe<Relation_Channel_Users_Aggregate_Order_By>;
};

/** primary key columns input for table: "channels" */
export type Channels_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** input type for updating data in table "channels" */
export type Channels_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Messages_Max_Order_By>;
  min?: Maybe<Messages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  _not?: Maybe<Messages_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  content?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  subscription?: Maybe<Subscriptions_Bool_Exp>;
  subscriptionId?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subscription?: Maybe<Subscriptions_Obj_Rel_Insert_Input>;
  subscriptionId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  content?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  subscriptionId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  content?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  subscriptionId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "messages" */
export type Messages_Obj_Rel_Insert_Input = {
  data: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** on conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns: Array<Messages_Update_Column>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** ordering options when selecting data from "messages" */
export type Messages_Order_By = {
  content?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  subscription?: Maybe<Subscriptions_Order_By>;
  subscriptionId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "messages" */
export type Messages_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subscriptionId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by aggregate values of table "relation_channel_user_messages" */
export type Relation_Channel_User_Messages_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Relation_Channel_User_Messages_Max_Order_By>;
  min?: Maybe<Relation_Channel_User_Messages_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "relation_channel_user_messages". All fields are combined with a logical 'AND'. */
export type Relation_Channel_User_Messages_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Relation_Channel_User_Messages_Bool_Exp>>>;
  _not?: Maybe<Relation_Channel_User_Messages_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Relation_Channel_User_Messages_Bool_Exp>>>;
  channel?: Maybe<Channels_Bool_Exp>;
  channelId?: Maybe<Uuid_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  subscriptionId?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "relation_channel_user_messages" */
export type Relation_Channel_User_Messages_Max_Order_By = {
  channelId?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  subscriptionId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** order by min() on columns of table "relation_channel_user_messages" */
export type Relation_Channel_User_Messages_Min_Order_By = {
  channelId?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  subscriptionId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** ordering options when selecting data from "relation_channel_user_messages" */
export type Relation_Channel_User_Messages_Order_By = {
  channel?: Maybe<Channels_Order_By>;
  channelId?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  subscriptionId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** order by aggregate values of table "relation_channel_users" */
export type Relation_Channel_Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Relation_Channel_Users_Max_Order_By>;
  min?: Maybe<Relation_Channel_Users_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "relation_channel_users". All fields are combined with a logical 'AND'. */
export type Relation_Channel_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Relation_Channel_Users_Bool_Exp>>>;
  _not?: Maybe<Relation_Channel_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Relation_Channel_Users_Bool_Exp>>>;
  channelId?: Maybe<Uuid_Comparison_Exp>;
  channels?: Maybe<Relation_User_Channels_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "relation_channel_users" */
export type Relation_Channel_Users_Max_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** order by min() on columns of table "relation_channel_users" */
export type Relation_Channel_Users_Min_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** ordering options when selecting data from "relation_channel_users" */
export type Relation_Channel_Users_Order_By = {
  channelId?: Maybe<Order_By>;
  channels_aggregate?: Maybe<Relation_User_Channels_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** order by aggregate values of table "relation_user_channels" */
export type Relation_User_Channels_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Relation_User_Channels_Max_Order_By>;
  min?: Maybe<Relation_User_Channels_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "relation_user_channels". All fields are combined with a logical 'AND'. */
export type Relation_User_Channels_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Relation_User_Channels_Bool_Exp>>>;
  _not?: Maybe<Relation_User_Channels_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Relation_User_Channels_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
  users?: Maybe<Relation_Channel_Users_Bool_Exp>;
};

/** order by max() on columns of table "relation_user_channels" */
export type Relation_User_Channels_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** order by min() on columns of table "relation_user_channels" */
export type Relation_User_Channels_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** ordering options when selecting data from "relation_user_channels" */
export type Relation_User_Channels_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  users_aggregate?: Maybe<Relation_Channel_Users_Aggregate_Order_By>;
};

/** order by aggregate values of table "subscriptions" */
export type Subscriptions_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Subscriptions_Max_Order_By>;
  min?: Maybe<Subscriptions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "subscriptions" */
export type Subscriptions_Arr_Rel_Insert_Input = {
  data: Array<Subscriptions_Insert_Input>;
  on_conflict?: Maybe<Subscriptions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "subscriptions". All fields are combined with a logical 'AND'. */
export type Subscriptions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Subscriptions_Bool_Exp>>>;
  _not?: Maybe<Subscriptions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Subscriptions_Bool_Exp>>>;
  channel?: Maybe<Channels_Bool_Exp>;
  channelId?: Maybe<Uuid_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  messages?: Maybe<Messages_Bool_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "subscriptions" */
export type Subscriptions_Insert_Input = {
  channel?: Maybe<Channels_Obj_Rel_Insert_Input>;
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "subscriptions" */
export type Subscriptions_Max_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** order by min() on columns of table "subscriptions" */
export type Subscriptions_Min_Order_By = {
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "subscriptions" */
export type Subscriptions_Obj_Rel_Insert_Input = {
  data: Subscriptions_Insert_Input;
  on_conflict?: Maybe<Subscriptions_On_Conflict>;
};

/** on conflict condition type for table "subscriptions" */
export type Subscriptions_On_Conflict = {
  constraint: Subscriptions_Constraint;
  update_columns: Array<Subscriptions_Update_Column>;
  where?: Maybe<Subscriptions_Bool_Exp>;
};

/** ordering options when selecting data from "subscriptions" */
export type Subscriptions_Order_By = {
  channel?: Maybe<Channels_Order_By>;
  channelId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "subscriptions" */
export type Subscriptions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** input type for updating data in table "subscriptions" */
export type Subscriptions_Set_Input = {
  channelId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  channels?: Maybe<Relation_User_Channels_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  firstName?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lastName?: Maybe<String_Comparison_Exp>;
  messages?: Maybe<Relation_Channel_User_Messages_Bool_Exp>;
  subscriptions?: Maybe<Subscriptions_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  subscriptions?: Maybe<Subscriptions_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  channels_aggregate?: Maybe<Relation_User_Channels_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  messages_aggregate?: Maybe<Relation_Channel_User_Messages_Aggregate_Order_By>;
  subscriptions_aggregate?: Maybe<Subscriptions_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};



export type ListChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListChannelsQuery = (
  { __typename?: 'query_root' }
  & { channels: Array<(
    { __typename?: 'channels' }
    & Pick<Channels, 'name' | 'description' | 'id' | 'updatedAt'>
  )> }
);

export type FindChannelQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type FindChannelQuery = (
  { __typename?: 'query_root' }
  & { channel?: Maybe<(
    { __typename?: 'channels' }
    & Pick<Channels, 'id' | 'name' | 'updatedAt'>
    & { messages: Array<(
      { __typename?: 'relation_channel_user_messages' }
      & Pick<Relation_Channel_User_Messages, 'id' | 'content' | 'createdAt'>
      & { user?: Maybe<(
        { __typename?: 'users' }
        & Pick<Users, 'firstName' | 'lastName' | 'username'>
      )> }
    )> }
  )> }
);

export type ListUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUsersQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'firstName' | 'lastName' | 'username' | 'updatedAt'>
  )> }
);


export const ListChannelsDocument = gql`
    query listChannels {
  channels {
    name
    description
    id
    updatedAt
  }
}
    `;

/**
 * __useListChannelsQuery__
 *
 * To run a query within a Vue component, call `useListChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListChannelsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListChannelsQuery(
 *   {
 *   }
 * );
 */
export function useListChannelsQuery(options: VueApolloComposable.UseQueryOptions<ListChannelsQuery, ListChannelsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ListChannelsQuery, ListChannelsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ListChannelsQuery, ListChannelsQueryVariables>> = {}) {
            return VueApolloComposable.useQuery<ListChannelsQuery, undefined>(ListChannelsDocument, undefined, options);
          }
export type ListChannelsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ListChannelsQuery, ListChannelsQueryVariables>;
export const FindChannelDocument = gql`
    query findChannel($id: uuid!) {
  channel: channels_by_pk(id: $id) {
    id
    name
    updatedAt
    messages {
      id
      content
      createdAt
      user {
        firstName
        lastName
        username
      }
    }
  }
}
    `;

/**
 * __useFindChannelQuery__
 *
 * To run a query within a Vue component, call `useFindChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindChannelQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFindChannelQuery(
 *   {
 *      id: // value for 'id'
 *   }
 * );
 */
export function useFindChannelQuery(variables: FindChannelQueryVariables | VueCompositionApi.Ref<FindChannelQueryVariables> | ReactiveFunction<FindChannelQueryVariables>, options: VueApolloComposable.UseQueryOptions<FindChannelQuery, FindChannelQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<FindChannelQuery, FindChannelQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<FindChannelQuery, FindChannelQueryVariables>> = {}) {
            return VueApolloComposable.useQuery<FindChannelQuery, FindChannelQueryVariables>(FindChannelDocument, variables, options);
          }
export type FindChannelQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<FindChannelQuery, FindChannelQueryVariables>;
export const ListUsersDocument = gql`
    query listUsers {
  users {
    id
    firstName
    lastName
    username
    updatedAt
  }
}
    `;

/**
 * __useListUsersQuery__
 *
 * To run a query within a Vue component, call `useListUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUsersQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListUsersQuery(
 *   {
 *   }
 * );
 */
export function useListUsersQuery(options: VueApolloComposable.UseQueryOptions<ListUsersQuery, ListUsersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ListUsersQuery, ListUsersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ListUsersQuery, ListUsersQueryVariables>> = {}) {
            return VueApolloComposable.useQuery<ListUsersQuery, undefined>(ListUsersDocument, undefined, options);
          }
export type ListUsersQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ListUsersQuery, ListUsersQueryVariables>;