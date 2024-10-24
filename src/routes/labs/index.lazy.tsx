import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/labs/')({
  component: () => <div>Hello /labs/!</div>,
})
