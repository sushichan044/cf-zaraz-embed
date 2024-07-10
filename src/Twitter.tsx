import { FC } from "hono/jsx";

type Props = {
  tweetId: string;
};

const Twitter: FC<Props> = ({ tweetId }) => {
  return <twitter-post tweet-id={tweetId}></twitter-post>;
};

export default Twitter;
