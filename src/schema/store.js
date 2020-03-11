import { StoreTC } from '../models/storeModel';

const StoreQuery = {
    storeById: StoreTC.getResolver('findById'),
    storeByIds: StoreTC.getResolver('findByIds'),
    storeOne: StoreTC.getResolver('findOne'),
    storeMany: StoreTC.getResolver('findMany'),
    storeCount: StoreTC.getResolver('count'),
    storeConnection: StoreTC.getResolver('connection'),
    storePagination: StoreTC.getResolver('pagination')
};

const StoreMutation = {
    storeCreateOne: StoreTC.getResolver('createOne'),
    storeCreateMany: StoreTC.getResolver('createMany'),
    storeUpdateById: StoreTC.getResolver('updateById'),
    storeUpdateOne: StoreTC.getResolver('updateOne'),
    storeUpdateMany: StoreTC.getResolver('updateMany'),
    storeRemoveById: StoreTC.getResolver('removeById'),
    storeRemoveOne: StoreTC.getResolver('removeOne'),
    storeRemoveMany: StoreTC.getResolver('removeMany')
};

export {StoreQuery, StoreMutation}