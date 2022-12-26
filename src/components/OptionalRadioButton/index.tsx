import clsx from 'clsx'
import Button from 'containers/Button'
import { ButtonProps } from 'definitions/button'

interface OptionalRadioButtonProps extends ButtonProps {
  selected: boolean
}

const OptionalRadioButton: React.FC<OptionalRadioButtonProps> = ({
  selected,
  ...props
}) => (
  <Button
    className={clsx('font-bold', {
      '!bg-gray-400 dark:!bg-gray-400': selected,
    })}
    {...props}
  >
    {props.children}
  </Button>
)

export default OptionalRadioButton
