import { SchemaComposer } from 'graphql-compose';

const schemaComposer = new SchemaComposer();

import {StoreMutation, StoreQuery} from "./store";
import {UserMutation, UserQuery} from "./user";
import {RecipeMutation, RecipeQuery} from "./recipe";
import {ItemMutation, ItemQuery} from "./item";

schemaComposer.Query.addFields({
    ...StoreQuery,
    ...UserQuery,
    ...RecipeQuery,
    ...ItemQuery
});

schemaComposer.Mutation.addFields({
    ...StoreMutation,
    ...UserMutation,
    ...RecipeMutation,
    ...ItemMutation
});

export default schemaComposer.buildSchema();