/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditProductInput = {|
  name?: ?string,
  description?: ?string,
  category?: ?string,
  price?: ?number,
|};
export type EditProductMutationVariables = {|
  id: string,
  edits: EditProductInput,
|};
export type EditProductMutationResponse = {|
  +updateProduct: {|
    +id: string,
    +name: string,
    +description: string,
    +price: number,
    +category: string,
    +createdAt: string,
  |}
|};
export type EditProductMutation = {|
  variables: EditProductMutationVariables,
  response: EditProductMutationResponse,
|};
*/


/*
mutation EditProductMutation(
  $id: ID!
  $edits: EditProductInput!
) {
  updateProduct(id: $id, edits: $edits) {
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "edits"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "edits",
        "variableName": "edits"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "updateProduct",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditProductMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "EditProductMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "1bd04cfb6d755e265d0e956fcdf1cf68",
    "id": null,
    "metadata": {},
    "name": "EditProductMutation",
    "operationKind": "mutation",
    "text": "mutation EditProductMutation(\n  $id: ID!\n  $edits: EditProductInput!\n) {\n  updateProduct(id: $id, edits: $edits) {\n    id\n    name\n    description\n    price\n    category\n    createdAt\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8bbb04a86fa212dec9280dc22c86b1cc';

module.exports = node;
