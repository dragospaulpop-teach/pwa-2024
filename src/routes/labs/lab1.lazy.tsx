import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/labs/lab1')({
  component: () => <div>Hello /labs/lab1!</div>,
})
