// @flow
import {  graphql,  useMutation } from 'react-relay';
import { useRouter } from 'next/router';
import type { CreateProductMutation } from '../__generated__/CreateProductMutation.graphql';
import {
  Card,
  Container,
  CardContent,
} from '@material-ui/core';
import ProductForm from '../index';

// Mutation
const addMutation = graphql`
  mutation CreateProductMutation($input: AddProductInput!) {
    addProduct(input: $input) {
        id
        name
        description
        price
        category
        createdAt
    }
  }
`;

function CreateProductForm() {

  const router = useRouter();
  const [createProduct] = useMutation<CreateProductMutation>(addMutation);

  const handleSubmit = (values: Object) => {
    try{
      createProduct({
        variables: {
          input: {
            name: values.name,
            description: values.description,
            category: values.category,
            price: Number(values.price),
          },
        },
        onCompleted() {
          router.push({ pathname: '/' });
        },
        onError(error) {
          console.log(error);
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
            <ProductForm handleSubmit={handleSubmit}/>
        </CardContent>
      </Card>
    </Container>
  );

};


export default CreateProductForm;
