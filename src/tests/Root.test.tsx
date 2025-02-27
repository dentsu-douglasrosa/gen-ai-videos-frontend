/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, waitFor } from 'src/tests/';
import Root from 'src/pages/Root';
import { useRoot } from '../hooks/useRoot';
import '@testing-library/jest-dom';
import { UseRootReturn } from 'src/types/root.type';

describe('Root Component', () => {
  it.skip('should render sample correctly', async () => {
    const mockState: UseRootReturn["state"] = {
      title: "TITLE",
      description: "DESCRIPTION",
      isLoading: false,
      isReady: false,
      result: null,
      error: null,
      promptText: ''
    };

    (useRoot as jest.Mock).mockReturnValue({
      state: mockState,
      controller: {},
    });

    render(<Root />);

    await waitFor(() => {
      expect(screen.getByText(mockState.title)).toBeInTheDocument();
    })
  });
});
