import React, { FC } from 'react';

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
  }
}

// eslint-disable-next-line unused-imports/no-unused-vars
const TodosTemplateMWeb: FC = () => {
  return <div>This is mobiel view</div>;
};

export { TodosTemplateMWeb };
