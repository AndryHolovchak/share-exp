export interface BaseEntity {
  id: string;
  createdAt: string;
}

export interface IDataProvider<Entity extends BaseEntity> {
  list(): Promise<Entity[]>;
  delete(id: string): Promise<void>;
  create(entity: Entity): Promise<Entity>;
  get(id: string): Promise<Entity | null>;
  set(id: string, entity: Entity): Promise<void>;
  update(id: string, entity: Partial<Entity>): Promise<void>;
}
