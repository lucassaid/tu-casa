import { useCallback } from "react";
import Typed from 'typed.js'

export default function useTyped(options) {

  const elementRef = useCallback(async node => {
    if (node !== null) {
      new Typed(node, options)
    } else {
      // unmount
    }
  }, []);

  return {
    elementRef
  }
}