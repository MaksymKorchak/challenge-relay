import { 
    render, 
    cleanup, 
    screen, 
    fireEvent
} from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductForm from "../../components/Product/Form";


afterEach(cleanup);

describe('ProductForm Test', () => {
    
    const handleSubmit = jest.fn();

    it ('Renders ProductForm component with all fields', async () => {

        render ( <ProductForm handleSubmit={handleSubmit}/>)

        // Test the rendering of input fields
        expect(screen.getByTestId('name-input')).toBeInTheDocument();
        expect(screen.getByTestId('description-input')).toBeInTheDocument();
        expect(screen.getByTestId('category-input')).toBeInTheDocument();
        expect(screen.getByTestId('price-input')).toBeInTheDocument();

        // Test the rendering of submit button
        expect(screen.getByTestId('submit-button')).toBeInTheDocument();
        expect(screen.getByTestId('cancel-button')).toBeInTheDocument();
    });

    it ('Tests validity of Form when fields is correct filled', async () => {

        render ( <ProductForm handleSubmit={handleSubmit}/>)

        // Mock user input in the form
        fireEvent.change(screen.getByTestId('name-input'), { 
            target: { value: 'Test Name' } 
        });
        fireEvent.change(screen.getByTestId('description-input'), { 
            target: { value: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.' } 
        });
        fireEvent.change(screen.getByTestId('category-input'), { 
            target: { value: 'Test Category' } 
        });
        fireEvent.change(screen.getByTestId('price-input'), { 
            target: { value: 999 } 
        });
        
        // Test the submit button is not disabled
        fireEvent.click(screen.getByTestId('submit-button'));
        expect(screen.getByTestId('submit-button')).not.toBeDisabled();
    });

    it ('Tests validity of Form when fields is incorrect filled', async () => {

        render ( <ProductForm handleSubmit={handleSubmit}/>)

        // Mock user input in the form
        fireEvent.change(screen.getByTestId('name-input'), { 
            target: { value: 'Test Name' } 
        });
        fireEvent.change(screen.getByTestId('description-input'), { 
            target: { value: '' } 
        });
        fireEvent.change(screen.getByTestId('category-input'), { 
            target: { value: 'Test Category' } 
        });
        fireEvent.change(screen.getByTestId('price-input'), { 
            target: { value: 999 } 
        });
        
        // Test the submit button is disabled
        fireEvent.click(screen.getByTestId('submit-button'));
        expect(screen.getByTestId('submit-button')).toBeDisabled();
    });

    it ('Prepends Initial Values from Props to Form', async () => {
        let initialValues = {
            name: 'Test name ',
            description: 'Test Descroption ...',
            category: 'Test Category',
            price: 1000,
        };
        render ( <ProductForm handleSubmit={handleSubmit} initialValues={initialValues}/>)

        expect(screen.getByTestId('name-input')).toHaveValue('Test name ');
        expect(screen.getByTestId('description-input')).toHaveValue('Test Descroption ...');
        expect(screen.getByTestId('category-input')).toHaveValue('Test Category');
        expect(screen.getByTestId('price-input')).toHaveValue(1000);
    });


});
