import React, { memo } from "react";
import BlogEditorFormLoader from "./blogSkeletonLoader/BlogEditorFormLoader";
import BlogEditorViewLoader from "./blogSkeletonLoader/BlogEditorViewLoader";
import TableBodyLoader from "./tableSkeletonLoader/tableBodyLoader";

const componentMap = {
  BlogEditorFormLoader: BlogEditorFormLoader,
  BlogEditorViewLoader: BlogEditorViewLoader,
  TableBodyLoader: TableBodyLoader,
};

const CustomLoader = ({ count, name, ...rest }) => {
  const DynamicComponent = componentMap[name];

  if (!DynamicComponent) {
    return null;
  }

  return <DynamicComponent count={count} {...rest} />;
};

export default memo(CustomLoader);
