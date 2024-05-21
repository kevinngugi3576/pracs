export const getServerSideProps = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = res.json();
      return { props: { data } };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { props: { data: [] } };
    }
  };