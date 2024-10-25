import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/resources/')({
  component: () => <div>Hello /resources/!</div>,
})
