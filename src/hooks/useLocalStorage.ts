import { Nullable } from 'definitions'

interface LocalStorageProps {
  setItem: (key: string, value: string) => void
  getItem: (key: string) => Nullable<string>
  removeItem: (key: string) => void
}

const useLocalStorage = (): LocalStorageProps => {
  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value)
  }

  const getItem = (key: string) => {
    let resp = localStorage.getItem(key)
    return resp || '""'
  }

  const removeItem = (key: string) => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      return
    }
  }

  return {
    setItem,
    getItem,
    removeItem,
  }
}

export default useLocalStorage
