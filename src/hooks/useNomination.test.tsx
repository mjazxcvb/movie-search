import { renderHook } from '@testing-library/react'
import { mockMedia } from '../components/MediaCard/MediaCard.test'
import useNominations from './useNominations'


test('should useNomination', () => {
  const { result } = renderHook(() => useNominations())
  expect(result.current.isNominated(mockMedia)).toBe(false)
})
