import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from '@sequelize/core';
import { Attribute, PrimaryKey, Table } from '@sequelize/core/decorators-legacy';
// import { config } from '../config/configuration';

@Table( { timestamps: true } )
export class Flag extends Model<InferAttributes<Flag>, InferCreationAttributes<Flag>> {
    @Attribute( DataTypes.STRING )
    declare cause: string | null;
    @Attribute( DataTypes.STRING )
    declare severity: string | null;

    @Attribute( DataTypes.INTEGER )
    @PrimaryKey
    // @AutoIncrement
    // 'CreationOptional' is a special type that marks the attribute as optional
    // when creating an instance of the model (such as using Model.create()).
    declare id: number;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

}

