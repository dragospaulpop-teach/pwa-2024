import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/theory/')({
  component: () => <div>Hello /theory/!</div>,
})
