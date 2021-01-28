import * as React from 'react';
import styles from './Pro.module.scss';
import { IProProps } from './IProProps';

import Form from './form/Form';

export default class Pro extends React.Component<IProProps, {}> {
  public render(): React.ReactElement<IProProps> {
    return (
      <>
        <Form context={''} />
      </>
    );
  }
}
