// @flow
import type { Product } from '../../../types';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Grid } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ProductCard from "../Card";


function ProductList({products} : { products: Product[]}) {

  return (
    <Box>
      <Box m={4}>
        <Typography align="center" variant="h1">Products List</Typography>
        <Box display="flex" justifyContent="center" my={2}>
          <Button
              href={`/create`}
              size='large'
              variant='contained'
              aria-label="create"
              color='primary'>
              Create
              <AddCircleIcon fontSize="medium"/>
            </Button>
        </Box>
      </Box>

      {products?.length  
      ? 
        (
          <Grid container spacing={3}>
            {products?.map((p) => (
              <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                <ProductCard product={p}/>
              </Grid>
            ))}
          </Grid>
        )
      : 
        (
          <Typography variant="h4" align="center" color="secondary">
            There is no products yet ... 
          </Typography>
        )}
    </Box>
  );
};

export default ProductList;

