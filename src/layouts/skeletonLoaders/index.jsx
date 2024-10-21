import React, { memo } from "react";

const componentMap = {
};

const CustomLoader = ({ count, name, ...rest }) => {
  const DynamicComponent = componentMap[name];

  if (!DynamicComponent) {
    return null;
  }

  return <DynamicComponent count={count} {...rest} />;
};

export default memo(CustomLoader);
