// @flow
import {  graphql } from 'react-relay';
import type { pages_indexQueryResponse } from '../__generated__/pages_indexQuery.graphql';
import ProductList from "../components/Product/List";

type Props = {
  ...pages_indexQueryResponse;
};

// Query
const productsQuery = graphql`
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
`;

function Index(props: Props) {
  return <ProductList products={props?.viewer?.products}/>
}

Index.query = productsQuery;

export default Index;



