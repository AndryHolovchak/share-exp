import { BaseEntity, IDataProvider } from '@/data/types';

export default class DataProvider<Entity extends BaseEntity>
  implements IDataProvider<Entity>
{
  constructor(private readonly _entities: Record<BaseEntity['id'], Entity>) {}

  async list(): Promise<Entity[]> {
    return Object.values(this._entities);
  }

  async delete(id: Entity['id']): Promise<void> {
    return void delete this._entities[id];
  }

  async create(entity: Entity): Promise<Entity> {
    return (this._entities[entity.id] = entity);
  }

  async get(id: Entity['id']): Promise<Entity | null> {
    return this._entities[id] || null;
  }

  async set(id: Entity['id'], entity: Entity): Promise<void> {
    this._entities[id] = entity;
  }
}
