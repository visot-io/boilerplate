import { ErrorTemplate } from "../../template/ErrorTemplate";
import { LoadingTemplate } from "../../template/LoadingTemplate";
import { SizeTable } from "../../template/SizeTable";
import { trpc } from "../../utils/trpc";
import { useSearchParams } from "react-router-dom";

export function Movies() {
  const [searchParams] = useSearchParams();
  let sizeUrl = searchParams.get("size");

  const initSize = 6;
  const finalSize = sizeUrl ? Number(sizeUrl) : initSize;

  const dataQuery = trpc.getMovies.useQuery({ size: finalSize });
  if (dataQuery.isLoading) return <LoadingTemplate />;
  if (dataQuery.isError)
    return <ErrorTemplate message={dataQuery.error.message} />;

  return (
    <div>
      <div className="flex justify-between mt-4">
        <p>
          This page is Public. You dont need to be logged in to see this page.
        </p>
        <SizeTable initSize={initSize} />
      </div>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            {dataQuery.data?.map((worker) => (
              <tr key={worker.id}>
                <td>{worker.id}</td>
                <td>{worker.movie}</td>
                <td>{worker.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
