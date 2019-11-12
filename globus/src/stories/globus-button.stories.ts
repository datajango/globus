import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from '../../projects/globus-library/src/lib/button/button.component';

storiesOf('Globus Button', module)
  .add('basic', () => ({
    component: ButtonComponent,
    props: {
      text: 'Hello'
    }
  }))
  .add('disabled', () => ({
    component: ButtonComponent,
    props: {
      text: 'Disabled',
      disabled: true
    }
}));