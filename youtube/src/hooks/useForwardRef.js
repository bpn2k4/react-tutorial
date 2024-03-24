import { useState } from 'react'

const useForwardRef = () => {
  const [ref, _] = useState({})
  return ref
}

export default useForwardRef