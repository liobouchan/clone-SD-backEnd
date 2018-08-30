import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInputObjectType
} from 'graphql'

export const CuponType = new GraphQLObjectType({
    name: "Cupones",
    description: "Cupones de descuento disponibles en la aplicacion",
    fields: () => ({
        _id:{
            type: GraphQLNonNull(GraphQLID)
        },
        cupon: {
            type : GraphQLString
        },
        descuento: {
            type : GraphQLString
        },
        descripcion: {
            type : GraphQLString
        }
    })
});

export const CuponInputType = new GraphQLInputObjectType({
    name: "AddCupon",
    description: "Agrega cupones existentes para Promociones",
    fields: () => ({
        cupon: {
            type : GraphQLString
        },
        descuento: {
            type : GraphQLString
        },
        descripcion: {
            type : GraphQLString
        } 
    })
});