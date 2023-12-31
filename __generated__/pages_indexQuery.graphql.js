/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type pages_indexQueryVariables = {||};
export type pages_indexQueryResponse = {|
  +viewer: {|
    +products: $ReadOnlyArray<{|
      +id: string,
      +name: string,
      +description: string,
      +price: number,
      +category: string,
      +createdAt: string,
    |}>
  |}
|};
export type pages_indexQuery = {|
  variables: pages_indexQueryVariables,
  response: pages_indexQueryResponse,
|};
*/


/*
query pages_indexQuery {
  viewer {
    products {
      id
      name
      description
      price
      category
      createdAt
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Viewer",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "products",
        "plural": true,
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_indexQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_indexQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c9b7c57df2ed51dc939b1022626516b8",
    "id": null,
    "metadata": {},
    "name": "pages_indexQuery",
    "operationKind": "query",
    "text": "query pages_indexQuery {\n  viewer {\n    products {\n      id\n      name\n      description\n      price\n      category\n      createdAt\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '077283366c7d915ca456a3589fb7f0ec';

module.exports = node;
