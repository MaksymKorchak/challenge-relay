/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddProductInput = {|
  name: string,
  description: string,
  category: string,
  price: number,
|};
export type CreateProductMutationVariables = {|
  input: AddProductInput
|};
export type CreateProductMutationResponse = {|
  +addProduct: {|
    +id: string,
    +name: string,
    +description: string,
    +price: number,
    +category: string,
    +createdAt: string,
  |}
|};
export type CreateProductMutation = {|
  variables: CreateProductMutationVariables,
  response: CreateProductMutationResponse,
|};
*/


/*
mutation CreateProductMutation(
  $input: AddProductInput!
) {
  addProduct(input: $input) {
    id
    name
    description
    price
    category
    createdAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "addProduct",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "price",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "category",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateProductMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateProductMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "209df1894253d6189d7754b7f87589b2",
    "id": null,
    "metadata": {},
    "name": "CreateProductMutation",
    "operationKind": "mutation",
    "text": "mutation CreateProductMutation(\n  $input: AddProductInput!\n) {\n  addProduct(input: $input) {\n    id\n    name\n    description\n    price\n    category\n    createdAt\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '441c2288d72f44f59c67d3f632adbcad';

module.exports = node;
