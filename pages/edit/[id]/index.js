// @flow
import { useRouter } from 'next/router';
import { graphql } from 'react-relay';
import { Box, Typography } from '@material-ui/core';
import EditProductForm from '../../../components/Product/Form/Edit/index';
import { Id_ProductsQueryResponse } from '../../../__generated__/Id_ProductsQuery.graphql';

type Props = {
  ...Id_ProductsQueryResponse;
};

// Query 
const productsQuery = graphql`
  query Id_ProductsQuery {
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

function ProductEditPage (props: Props) {

  const router = useRouter();
  const { id } = router.query;
  const product = props?.viewer?.products?.find((product) => product.id === id) || null;

    return (
      <>
        <Box m={4}>
          <Typography align="center" variant="h2">Edit Product - ({product?.name})</Typography>
        </Box>
         <EditProductForm product={product}/>
      </>
    );

  };

  ProductEditPage.query = productsQuery;
  
  export default ProductEditPage;