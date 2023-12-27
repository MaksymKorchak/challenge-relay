// @flow
import type { Product } from '../../../pages/api/products/types';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles';


function ProductCard({ product }: { product: Product }) {

  const classes = useStyles();
  const transformDate = (date: string) => new Date(date).toLocaleDateString();

  return (
      <Card className={classes['product-card']}>
        <CardContent>
          <Typography variant="h5" color="textPrimary" component="div" m={20}>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{ margin: '5px 0' }}>
            Price: ${Number(product?.price).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ margin: '10px 0' }}>
            Category: {product.category}
          </Typography>
          <Typography variant="caption" color="textPrimary" display="block">
            Created At: {transformDate(product?.createdAt)}
          </Typography>
        </CardContent>
        <CardActions style={{marginTop: 'auto'}}>
          <Button
            href={`/edit/${product.id}`}
            size='small'
            variant='outlined'
            aria-label="edit"
            color='primary'>
            <Typography variant="caption" color="primary" style={{ fontWeight: 'bold' }}>
              Edit
            </Typography>
            <EditIcon fontSize="small" />
          </Button>
        </CardActions>
      </Card>
  );
};

export default ProductCard;