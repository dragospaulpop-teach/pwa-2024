import { LabLayout } from "@/components/courses/lab-layout";
import { Loading } from "@/components/loading";
import {
  CatchNotFound,
  createLazyFileRoute,
  notFound,
  NotFoundError,
} from "@tanstack/react-router";
import { SkullIcon } from "lucide-react";
import { lazy, Suspense, useMemo } from "react";

export const Route = createLazyFileRoute("/labs/$course/$lab/$step")({
  component: LazyLabLoader,
});

function LazyLabLoader() {
  const { course, lab, step } = Route.useParams();

  const LabStep = useMemo(
    () =>
      lazy(() =>
        import(`@/components/courses/${course}/${lab}/${step}.tsx`).catch(
          () => {
            console.error(`Failed to load lab: ${course}/${lab}/${step}`);
            // Throw a specific not-found error to trigger notFoundComponent
            throw notFound();
          },
        ),
      ),
    [course, lab, step],
  );

  return (
    <CatchNotFound fallback={(error) => <NotFound error={error} />}>
      <LabLayout step={step} lab={lab} course={course}>
        <Suspense fallback={<Loading />}>
          <LabStep />
        </Suspense>
      </LabLayout>
    </CatchNotFound>
  );
}

const NotFound = ({ error }: { error: NotFoundError }) => (
  <div className="flex h-screen flex-col items-center justify-center">
    <h1 className="text-2xl font-bold">
      <SkullIcon className="h-24 w-24" strokeWidth={1} />
      Not Found
    </h1>
    <p className="text-lg">
      This lab step doesn't exist! {JSON.stringify(error)}
    </p>
  </div>
);
