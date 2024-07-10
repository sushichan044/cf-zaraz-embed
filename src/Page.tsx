import Instagram from "./Instagram";
import Twitter from "./Twitter";

const Page = () => {
  return (
    <main>
      <h1>Cloudflare Zaraz Embed Example</h1>
      <section>
        <h2>Twitter</h2>
        <Twitter tweetId="1811023824504127949" />
      </section>
      <section>
        <h2>Instagram</h2>
        <Instagram
          postUrl="https://www.instagram.com/cloudflare/p/C9PkJzks2lW"
          showCaption
        />
      </section>
    </main>
  );
};

export default Page;
