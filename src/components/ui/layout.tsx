import React, { ReactNode } from 'react';

export function Container({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return <div className="px-container">{children}</div>;
}

export function Divider(): React.ReactElement {
  return <hr className="my-4" />;
}
