import { render, cleanup, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockPayloadGenerator, createMockEnvironment } from 'relay-test-utils';
import { RelayEnvironmentProvider } from 'react-relay';
import ProductEditForm from '../../components/Product/Form/Edit';
import { useRouter } from 'next/router';

    const mockRouter = { push: jest.fn() };
    jest.mock('next/router', () => ({
        useRouter: () => mockRouter,
    }));

    const existingProductId = 99; 

    const product = {
        id: existingProductId,
        name: 'Test Name',
        description: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
        category: 'Initial Category',
        price: 999,
        createdAt: '2021-09-01T12:00:00.000Z',
    };

    const initialValues = {
        name: 'Initial Name',
        description: 'Initial Description Should be at least 20 characters',
        category: 'Initial Category',
        price: 50,
        createdAt: '2021-09-01T12:00:00.000Z',
    };

afterEach(cleanup);

describe('Edit Product', () => {

    it ('Should Edit Product - Error', async () => {

        const environment = createMockEnvironment();

        render(
            <RelayEnvironmentProvider environment={environment}>
                <ProductEditForm initialValues={initialValues} product={product}/>
            </RelayEnvironmentProvider>
        );

        // Test the rendering of input fields
        await waitFor(async () => {

            fireEvent.change(await screen.findByTestId('category-input'), {
                target: { value: 'Updated Category' },
            });

            fireEvent.change(await screen.findByTestId('price-input'), {
                target: { value: 100 },
            });

            const submitButton = await screen.findByTestId('submit-button');
            fireEvent.click(submitButton);
        });

        const updatedData = {
            id: existingProductId,
            edits: {
                name: product.name,
                description: product.description,
                category: 'Updated Category',
                price: 100,
                createdAt: '2021-09-01T12:00:00.000Z',
            },
        };

        act(() => {    
            // Assert that the mutation was called with the right arguments
            const mutationInstance = environment.mock.getMostRecentOperation();

            // Assert that the operation is a mutation
            const operationVariables = mutationInstance.fragment.variables;

            // Assert that the variables in the operation are the same as the updated variables passed to the mutation
            expect(operationVariables).toEqual(updatedData);

            // Mock the server response
            environment.mock.rejectMostRecentOperation(new Error('Product was not updated ... Please try again'));

            // Ensure that the useRouter.push function was not called with the expected argument
            expect(mockRouter.push).not.toHaveBeenCalledWith({ pathname: '/' });
        });
    });

    it('Should Edit Product - Success', async () => {

        const environment = createMockEnvironment();

        render(
            <RelayEnvironmentProvider environment={environment}>
                <ProductEditForm initialValues={initialValues} product={product}/>
            </RelayEnvironmentProvider>
        );

        // Test the rendering of input fields
        await waitFor(async () => {

            fireEvent.change(await screen.findByTestId('category-input'), {
                target: { value: 'Updated Category' },
            });

            fireEvent.change(await screen.findByTestId('price-input'), {
                target: { value: 100 },
            });

            const submitButton = await screen.findByTestId('submit-button');
            fireEvent.click(submitButton);
        });

        const updatedData = {
            id: existingProductId,
            edits: {
                name: product.name,
                description: product.description,
                category: 'Updated Category',
                price: 100,
                createdAt: '2021-09-01T12:00:00.000Z',
            },
        };

        act(() => {
                
            // Assert that the mutation was called with the right arguments
            const mutationInstance = environment.mock.getMostRecentOperation();

            // Assert that the operation is a mutation
            const operationVariables = mutationInstance.fragment.variables;

            // Assert that the variables in the operation are the same as the updated variables passed to the mutation
            expect(operationVariables).toEqual(updatedData);

            // Mock the server response
            const mutationMockResolvers = {
                Mutation: () => ({
                    updateProduct: {
                        error: null,
                        success: 'Product updated successfully - You will be redirected to the home page',
                    },
                }),
            };

            // Resolve the operation with mocked data
            environment.mock.resolveMostRecentOperation((operation) =>
                MockPayloadGenerator.generate(operation, mutationMockResolvers)
            );

            // Ensure that the useRouter.push function was called with the expected argument
            expect(mockRouter.push).toHaveBeenCalledWith({ pathname: '/' });
        });
    });

  
});
