// @flow
import { Field, Form } from "react-final-form";
import {
  TextField,
  Button,
  Typography,
  CardActions
} from '@material-ui/core';

type ProductFormProps  = {
    handleSubmit?: () => void;
    initialValues?: Object | null;
};

type ProductValues = {
    name?: string;
    category?: string;
    description?: string;
    price?: string;
  };
  
  const validateProduct = (values: ProductValues) => {
    const errors = {};
  
    if (!values.name) {
      errors.name = "Field is required";
    } else if (values.name.length < 3) {
      errors.name = "Should be at least 3 characters";
    }
  
    if (!values.category) {
      errors.category = "Field is required";
    } else if (values.category.length < 3) {
      errors.category = "Should be at least 3 characters";
    }
  
    if (!values.description) {
      errors.description = "Field is required";
    } else if (values.description.length < 20) {
      errors.description = "Should be at least 20 characters";
    }
  
    if (!/^\d+$/.test(values.price)) {
      errors.price = 'Should be a numeric value';
    }
  
    return errors;
  };

  function ProductForm ({ handleSubmit, initialValues }: ProductFormProps) {

    return (
        <Form 
            onSubmit={handleSubmit}
            initialValues={initialValues} 
            validate={validateProduct}
            render={({ handleSubmit, valid }) => (
            <>
                <Field name="name">
                    {({ input, meta }) => (
                    <>
                    <TextField 
                        id="name" 
                        label="Name" 
                        variant="standard" 
                        error={meta.error && meta.touched}
                        required
                        margin="normal"
                        style={{width: '100%'}}
                        inputProps={{'data-testid': 'name-input'}}
                        {...input}
                        />
                        {meta.error && meta.touched && (
                            <Typography variant="body2" color="secondary" component="p">
                                {meta.error}
                            </Typography>
                        )}
                    </>
                    )}
                </Field>

                <Field name="description">
                    {({ input, meta }) => (
                    <>
                        <TextField 
                            id="description" 
                            label="Description" 
                            variant="standard" 
                            error={meta.error && meta.touched}
                            required
                            multiline
                            margin="normal"
                            minRows={1}
                            maxRows={5}
                            style={{width: '100%'}}
                            inputProps={{'data-testid': 'description-input'}}
                            {...input}
                        />
                        {meta.error && meta.touched && (
                            <Typography variant="body2" color="secondary" component="p">
                                {meta.error}
                            </Typography>
                        )}
                    </>
                    )}
                </Field>

                <Field name="category">
                    {({ input, meta }) => (
                    <>
                        <TextField 
                            id="category" 
                            label="Category" 
                            variant="standard" 
                            error={meta.error && meta.touched}
                            required
                            margin="normal"
                            style={{width: '100%'}}
                            inputProps={{'data-testid': 'category-input'}}
                            {...input}
                        />
                        {meta.error && meta.touched && (
                            <Typography variant="body2" color="secondary" component="p">
                                {meta.error}
                            </Typography>
                        )}
                    </>
                    )}
                </Field>

                <Field name="price">
                    {({ input, meta }) => (
                    <>
                        <TextField 
                            id="price" 
                            type='number'
                            label="Price" 
                            variant="standard" 
                            error={meta.error && meta.touched}
                            required
                            margin="normal"
                            style={{width: '100%'}}
                            inputProps={{'data-testid': 'price-input'}}
                            {...input}
                        />
                        {meta.error && meta.touched && (
                            <Typography variant="body2" color="secondary" component="p">
                                {meta.error}
                            </Typography>
                        )}
                    </>
                    )}
                </Field>

                <CardActions style={{justifyContent: 'center'}}>
                    <Button
                        href={`/`}
                        size='large'
                        variant='outlined'
                        aria-label="submit"
                        color='secondary'
                        data-testid="cancel-button">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        size='large'
                        variant='outlined'
                        aria-label="submit"
                        color='primary'
                        disabled={!valid}
                        data-testid="submit-button">
                        Submit
                    </Button>
                </CardActions>
            </>
            )}
        />
    )
};

export default ProductForm;