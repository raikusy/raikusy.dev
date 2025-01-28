"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

export function Pagination({
  pageInfo,
}: {
  pageInfo: { hasNextPage: boolean; endCursor: string };
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleLoadMore = async () => {
    router.push(
      `/blog?q=${searchParams.get("q")}&cursor=${pageInfo.endCursor}`
    );
  };

  return (
    <div>
      {pageInfo?.hasNextPage ? (
        <Button onClick={handleLoadMore}>Load More</Button>
      ) : (
        ""
      )}
    </div>
  );
}
