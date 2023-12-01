import Layout from '../app/layout';
import { Checkbox } from '@blue-beetle-web/components';
import { CheckboxProps } from '@btechlabs/fiber-components';
import { useState } from 'react';

export default function CheckboxDemo() {
  const [checked, setChecked] = useState<CheckboxProps['checked']>(false);

  return (
    <Layout>
      <Checkbox
        checked={checked}
        onCheckedChange={() => {
          setChecked((checked) => {
            switch (checked) {
              case true:
                return false;
              case false:
                return 'indeterminate';
              case 'indeterminate':
                return true;
            }
          });
        }}
        aria-label="checkbox"
      />
    </Layout>
  );
}
