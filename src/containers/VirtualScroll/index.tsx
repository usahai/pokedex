import { useInView } from 'react-intersection-observer'

interface VirtualScrollProps {
  children: React.ReactNode
  height: number
}

const VirtualScroll: React.FC<VirtualScrollProps> = ({ children, height }) => {
  const [ref, inView] = useInView()
  const style = {
    height: `${height}rem`,
    overflow: 'hidden',
  }

  return (
    <div style={style} ref={ref}>
      {inView ? children : null}
    </div>
  )
}

export default VirtualScroll
