import { FC } from "hono/jsx";

type Props = {
  postUrl: string;
  showCaption?: boolean;
};

const Instagram: FC<Props> = ({ postUrl, showCaption }) => {
  showCaption ??= false;

  return (
    <instagram-post post-url={postUrl} captions={showCaption}></instagram-post>
  );
};

export default Instagram;
