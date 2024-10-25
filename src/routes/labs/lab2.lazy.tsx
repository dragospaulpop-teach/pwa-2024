import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/labs/lab2')({
  component: () => <div>Hello /labs/lab2!</div>,
})
