// @flow
import { useRouter } from 'next/router';
import type { EditProductMutation } from '../__generated__/EditProductMutation.graphql';
import type { Product } from '../../../types';
import { 
  graphql, 
  useMutation, 
  useRelayEnvironment
} from 'react-relay';
import {
  Card,
  Container,
  CardContent,
} from '@material-ui/core';
import ProductForm from '../index';

// Mutation
const editMutation = graphql`
  mutation EditProductMutation($id: ID!, $edits: EditProductInput!) {
    updateProduct(id: $id, edits: $edits) {
      id
      name
      description
      price
      category
      createdAt
    }
  }
`;

function EditProductForm({ product }: { product: Product}) {
  
  const router = useRouter();
  const environment = useRelayEnvironment();
  const [editProduct] = useMutation<EditProductMutation>(editMutation);

const handleSubmit = (values: Object) => {

    try{
      editProduct({
        variables: {
          id: product.id,
          edits: {
            name: values.name,
            description: values.description,
            category: values.category,
            createdAt: product.createdAt,
            price: Number(values.price),
          },
        },
        onCompleted() {
          router.push({ pathname: '/' });
        },
        onError(error) {
          console.error(error);
        },
    });
    } catch (error) {
        console.log(error)
    } 
  };

  return (
    <Container maxWidth="sm" style={{padding: 0}}>
      <Card>
        <CardContent>
            <ProductForm initialValues={product} handleSubmit={handleSubmit}/>
        </CardContent>
      </Card>
    </Container>
  );
}

export default EditProductForm;
