import Layout from "example/containers/Layout";
import { ForbiddenIcon } from "icons";

function Page404() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200 mt-4">
          404
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          صفحه مورد نظر یافت نشد
        </p>
        <ForbiddenIcon
          className="w-12 h-12 mt-4 text-purple-200"
          aria-hidden="true"
        />
      </div>
    </Layout>
  );
}

export default Page404;
