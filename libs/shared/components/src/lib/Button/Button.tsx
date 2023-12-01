import {
  Button as ButtonBase,
  type ButtonProps,
} from '@btechlabs/fiber-components';

export function Button(props: ButtonProps) {
  return (
    <ButtonBase
      {...props}
      className="bg-gray-100 text-gray-900 text-2xl p-5 rounded my-7 shadow hover:text-gray-500 hover:scale-110"
    >
      {props.children}
    </ButtonBase>
  );
}

export default Button;
