import { BaseEntity, IDataProvider } from '@/data/types';
import { API_URL } from '@/data/constants';

export const makeGetTag = (tag: string) => `get-${tag}`;
export const makListTag = (tag: string) => `list-${tag}`;

export default class DataProvider<Entity extends BaseEntity>
  implements IDataProvider<Entity>
{
  constructor(
    private readonly _tag: string,
    private readonly _endpoint: string
  ) {}

  async list(): Promise<Entity[]> {
    const result = await fetch(`${API_URL}/${this._endpoint}`, {
      next: { tags: [makListTag(this._tag)] },
    });

    return result.json();
  }

  async delete(id: Entity['id']): Promise<void> {
    // return void delete this._entities[id];
  }

  async create(entity: Omit<Entity, 'id' | 'createdAt'>): Promise<Entity> {
    const result = await fetch(`${API_URL}/${this._endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify(entity),
    });

    return result.json();
  }

  async get(id: Entity['id']): Promise<Entity | null> {
    const result = await fetch(`${API_URL}/${this._endpoint}/${id}`, {
      next: { tags: [makeGetTag(this._tag)] },
    });

    return result.json();
  }

  async set(id: Entity['id'], entity: Entity): Promise<void> {
    // this._entities[id] = entity;
  }

  async update(id: Entity['id'], entity: Partial<Entity>): Promise<void> {
    const result = await fetch(`${API_URL}/${this._endpoint}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify(entity),
    });

    return result.json();
  }
}
