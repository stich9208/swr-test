import useSWR from "swr";
import useSWRImmutable from "swr";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const { data } = useSWRImmutable(
    "postListState",
    () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
    { suspense: true }
  );

  return (
    <div>
      {data.map((eachData: any) => (
        <ol
          key={eachData.id}
          id={eachData.id}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`${eachData.id}`)}
        >
          {eachData.title}
        </ol>
      ))}
    </div>
  );
};

export default Post;
