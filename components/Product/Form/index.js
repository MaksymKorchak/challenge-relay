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
    initialValues?: object | null;
};

  function ProductForm ({ handleSubmit, initialValues }: ProductFormProps) {

    return (
        <Form 
            onSubmit={handleSubmit}
            initialValues={initialValues} 
            validate={(values) => {
                const errors = {};
                    switch (true) {
                        case !values.name:
                            errors.name = "Field is required";
                        case values.name.length < 3:
                            errors.name = "Should be at least 3 characters";
                        case !values.category:
                            errors.category = "Field is required";
                        case values.category.length < 3:
                            errors.category = "Should be at least 3 characters";
                        case !values.description:
                            errors.description = "Field is required";
                        case values.description.length < 20:
                            errors.description = "Should be at least 20 characters";
                        case !/^\d+$/.test(values.price):
                            errors.price = 'Should be a numeric value';
                        default:
                            break;
                    }
                return errors;
            }}
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
                            id="caregory" 
                            label="Category" 
                            variant="standard" 
                            error={meta.error && meta.touched}
                            required
                            margin="normal"
                            style={{width: '100%'}}
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
                        color='secondary'>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        size='large'
                        variant='outlined'
                        aria-label="submit"
                        color='primary'
                        disabled={!valid}>
                        Submit
                    </Button>
                </CardActions>
            </>
            )}
        />
    )
};

export default ProductForm;