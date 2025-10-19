import Link from "next/link";

export default function Home({data}: {data: {recipes: {title: string}[]} | null
}) {
  // If data is missing, fallback to empty array
  
  const recipes = data?.recipes || [];
  return (
    <div>
      <p>Hello, this is the second statement</p>
      <div>Welcome to Next.js!</div>

      {recipes.length > 0 ? (
        <Link href="https://nextjs.org">
          {recipes[0].title}
        </Link>
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: {
        recipes: [{ title: "This is some static data" }],
      },
    },
  };
}
