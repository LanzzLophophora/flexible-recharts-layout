import React from 'react';
import { Cell, ErrorBar, LabelList } from 'recharts';

export function buildChildren(child, index) {
  switch (Object.keys(child)[0]) {
    case 'cell':
      return <Cell key={index} {...child.cell} />;

    case 'labelList':
      return <LabelList key={index} {...child.labelList} />;

    case 'errorBar':
      return <ErrorBar key={index} {...child.errorBar} />;

    default:
      return <div className="error">What exactly do you want to see here?</div>;
  }
}
