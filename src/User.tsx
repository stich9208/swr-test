import React, { useEffect } from "react";
import { useSWRConfig } from "swr";

const User = () => {
  const { mutate } = useSWRConfig();

  useEffect(() => {
    (async () => {
      const postData = await mutate("postListState");
      console.log(postData);
    })();
  }, []);

  return <div>User</div>;
};

export default User;
