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
import { CuponType } from './cupon';
import Cupon from '../../models/cupon'
import { UserType } from '../../graphql/types/user'
import User from '../../models/user'
import { StoreType } from './tienda';
import Tienda from '../../models/tienda'
import { ProductType } from './producto';
import Producto from '../../models/producto'

  export const PedidosType = new GraphQLObjectType({
      name: "Pedidos",
      description: "Pedidos de la apliacion",
      fields: () => ({
        _id:{
            type: GraphQLNonNull(GraphQLID)
        },
        status_pedido:{
            type: GraphQLBoolean
        },
        status_pago:{
            type: GraphQLBoolean
        },
        direccion:{
            type: GraphQLString
        },
        cupon:{
            type: CuponType,
            resolve(pedido){
                const {cupon} = pedido
                return Cupon.findById(cupon).exec()
            }
        },
        user:{
            type: UserType,
            resolve(pedido){
                const {user} = pedido
                return User.findById(user).exec()
            }
        },
        tienda:{
            type: StoreType,
            resolve(pedido){
                const {tienda} = pedido
                return Tienda.findById(tienda).exec()
            }
        },
        monto:{
            type: GraphQLString
        },
        productos:{
            type: new GraphQLList(ProductType),
            resolve(pedido){
              const {productos} = pedido
              return Producto.find({_id:{$in:productos}}).exec()
            }
        }
      })
  });

  export const PedidosInputType = new GraphQLInputObjectType({
    name: "addPedidos",
    description: "Pedidos de la apliacion",
    fields: () => ({
      status_pedido:{
          type: GraphQLBoolean
      },
      status_pago:{
          type: GraphQLBoolean
      },
      direccion:{
          type: GraphQLString
      },
      cupon:{
          type: GraphQLNonNull(GraphQLID)
      },
      user:{
          type: GraphQLNonNull(GraphQLID)
      },
      tienda:{
          type: GraphQLNonNull(GraphQLID)
      },
      monto:{
          type: GraphQLString
      },
      productos:{
          type: GraphQLNonNull(GraphQLID)
      }
    })
});