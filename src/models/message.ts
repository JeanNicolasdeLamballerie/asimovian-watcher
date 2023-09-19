import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes, NonAttribute } from '@sequelize/core';
import { Attribute, AutoIncrement, PrimaryKey, Table, HasOne, BelongsTo, Unique } from '@sequelize/core/decorators-legacy';
import { Flag } from './flag';
// import { config } from '../config/configuration';

@Table( { timestamps: true } )
export class Message extends Model<InferAttributes<Message>, InferCreationAttributes<Message>> {
  @Attribute( DataTypes.TEXT )
  declare event: string | null;
  @Attribute( DataTypes.STRING )
  declare url: string | null;
  @BelongsTo( () => Flag, 'flag' )
  declare flagDefinition?: NonAttribute<Flag>;
  @Attribute( DataTypes.INTEGER )
  declare flag: number;

  @Attribute( DataTypes.DATE( 6 ) )
  declare timestamp: Date;

  @Attribute( DataTypes.STRING )
  declare version: string;
  @Attribute( DataTypes.BOOLEAN ) //TODO could be resolved by a mapping with FLAGS
  declare isError: boolean;

  @Attribute( DataTypes.INTEGER )
  @PrimaryKey
  @AutoIncrement
  @Unique
  // 'CreationOptional' is a special type that marks the attribute as optional
  // when creating an instance of the model (such as using Model.create()).
  declare id: CreationOptional<number>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}


export default Message;
