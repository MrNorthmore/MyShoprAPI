import { RecipeTC } from '../models/recipeModel';

const RecipeQuery = {
    recipeById: RecipeTC.getResolver('findById'),
    recipeByIds: RecipeTC.getResolver('findByIds'),
    recipeOne: RecipeTC.getResolver('findOne'),
    recipeMany: RecipeTC.getResolver('findMany'),
    recipeCount: RecipeTC.getResolver('count'),
    recipeConnection: RecipeTC.getResolver('connection'),
    recipePagination: RecipeTC.getResolver('pagination')
};

const RecipeMutation = {
    recipeCreateOne: RecipeTC.getResolver('createOne'),
    recipeCreateMany: RecipeTC.getResolver('createMany'),
    recipeUpdateById: RecipeTC.getResolver('updateById'),
    recipeUpdateOne: RecipeTC.getResolver('updateOne'),
    recipeUpdateMany: RecipeTC.getResolver('updateMany'),
    recipeRemoveById: RecipeTC.getResolver('removeById'),
    recipeRemoveOne: RecipeTC.getResolver('removeOne'),
    recipeRemoveMany: RecipeTC.getResolver('removeMany')
};

export {RecipeQuery, RecipeMutation}