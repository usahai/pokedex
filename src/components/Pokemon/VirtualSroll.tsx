import { useInView } from 'react-intersection-observer'

interface VirtualScrollProps {
  children: React.ReactNode
}

const VirtualScroll: React.FC<VirtualScrollProps> = ({ children }) => {
  const [ref, inView] = useInView()

  return <div ref={ref}>{inView ? children : null}</div>
}

export default VirtualScroll
