import { render, cleanup, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockPayloadGenerator, createMockEnvironment } from 'relay-test-utils';
import { RelayEnvironmentProvider } from 'react-relay';
import ProductCreateForm from '../../components/Product/Form/Create';
import { useRouter } from 'next/router';

const mockRouter = { push: jest.fn() };
jest.mock('next/router', () => ({
    useRouter: () => mockRouter,
}));

afterEach(cleanup);

describe('Create Product', () => {

  it('Should Create Product - Error', async () => {
    
    const environment = createMockEnvironment();

    render(
      <RelayEnvironmentProvider environment={environment}>
        <ProductCreateForm />
      </RelayEnvironmentProvider>
    );

    // Test the rendering of input fields
    await waitFor(async () => {
      fireEvent.change(await screen.findByTestId('name-input'), {
        target: { value: 'Name' },
      });

      fireEvent.change(await screen.findByTestId('description-input'), {
        target: {
          value: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
        },
      });

      fireEvent.change(await screen.findByTestId('category-input'), {
        target: { value: 'Modern' },
      });

      fireEvent.change(await screen.findByTestId('price-input'), {
        target: { value: 100 },
      });

      const submitButton = await screen.findByTestId('submit-button');
      fireEvent.click(submitButton);
    });

    const data = {
      input: {
        name: 'Name',
        description: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
        category: 'Modern',
        price: 100,
      },
    };

    act(() => {
        // Assert that the mutation was called with the right arguments
        const mutationInstance = environment.mock.getMostRecentOperation();

        // Assert that the operation is a mutation
        const operationVariables = mutationInstance.fragment.variables;

        // Assert that the variables in the operation are the same as the variables passed to the mutation
        expect(operationVariables).toEqual(data);

        // Mock the server response
        environment.mock.rejectMostRecentOperation(new Error('Product was not created... Please try again'));

        // Ensure that the useRouter.push function was not called with the expected argument
        expect(mockRouter.push).not.toHaveBeenCalledWith({ pathname: '/' });
    });
  });

  it('Should Create Product - Success', async () => {
    
    const environment = createMockEnvironment();

    render(
      <RelayEnvironmentProvider environment={environment}>
        <ProductCreateForm />
      </RelayEnvironmentProvider>
    );

    // Test the rendering of input fields
    await waitFor(async () => {
      fireEvent.change(await screen.findByTestId('name-input'), {
        target: { value: 'Name' },
      });

      fireEvent.change(await screen.findByTestId('description-input'), {
        target: {
          value: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
        },
      });

      fireEvent.change(await screen.findByTestId('category-input'), {
        target: { value: 'Modern' },
      });

      fireEvent.change(await screen.findByTestId('price-input'), {
        target: { value: 100 },
      });

      const submitButton = await screen.findByTestId('submit-button');
      fireEvent.click(submitButton);
    });

    const data = {
      input: {
        name: 'Name',
        description: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
        category: 'Modern',
        price: 100,
      },
    };

    act(() => {
        
      // Assert that the mutation was called with the right arguments
      const mutationInstance = environment.mock.getMostRecentOperation();

      // Assert that the operation is a mutation
      const operationVariables = mutationInstance.fragment.variables;

      // Assert that the variables in the operation are the same as the variables passed to the mutation
      expect(operationVariables).toEqual(data);

      // Mock the server response
      const mutationMockResolvers = {
        Mutation: () => ({
          addProduct: {
            error: null,
            success: 'Product created successfully - You will be redirected to the home page',
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
