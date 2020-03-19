import { SchemaComposer } from 'graphql-compose';

const schemaComposer = new SchemaComposer();

import {StoreMutation, StoreQuery} from "./store";
import {UserMutation, UserQuery} from "./user";
import {ItemMutation, ItemQuery} from "./item";

schemaComposer.Query.addFields({
    ...StoreQuery,
    ...UserQuery,
    ...ItemQuery
});

schemaComposer.Mutation.addFields({
    ...StoreMutation,
    ...UserMutation,
    ...ItemMutation
});

export default schemaComposer.buildSchema();