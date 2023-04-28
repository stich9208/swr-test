import React from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    (url: string) => fetch(url).then((res) => res.json()),
    { suspense: true }
  );
  return (
    <div>
      {data.title}{" "}
      <button onClick={() => navigate("/user")}>go user page</button>
    </div>
  );
};

export default PostDetail;
