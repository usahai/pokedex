import Button from 'containers/Button'
import clsx from 'clsx'
import { ReactComponent as GitButton } from 'assets/github-mark.svg'

interface GithubButtonProps {}

const GithubButton: React.FC<GithubButtonProps> = () => {
  return (
    <Button
      className={clsx(
        'hover:fill-white',
        'dark:fill-white dark:hover:fill-black',
      )}
      onClick={() => window.open('https://github.com/usahai/infinite-loader')}
    >
      <GitButton
        className={clsx(
          'hover:fill-white',
          'dark:fill-white dark:hover:fill-black',
        )}
      />
    </Button>
  )
}

export default GithubButton
