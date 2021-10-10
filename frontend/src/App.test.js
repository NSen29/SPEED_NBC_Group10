import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import CreateArticle from './pages/Submit-Article';
    import { render } from '@testing-library/react';


    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });

    it('able to edit form', () => {
      const { getByTestId } = render(<CreateArticle/>)
      const submitActive = getByTestId("submitForm");

      expect(submitActive.contentEditable).toBe(true);
    });

    it('on submit function receive data', () => {
      const { getByTestId } = render(<CreateArticle/>)
      const submitActive = getByTestId("submitForm");

      expect(submitActive.onsubmit.arguments).toBe(e);
    });

    it('submit inactive until form filled', () => {
      const { getByTestId } = render(<CreateArticle/>)
      const submitActive = getByTestId("submitForm");
      const button = getByTestId("Button");
       fireEvent.click(button)

      expect(submitActive.onsubmit).toBe(false);
    });