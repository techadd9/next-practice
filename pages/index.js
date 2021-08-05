import Link from "next/link";

export default function Home({ posts }) {
	// console.log(posts);
	return (
		<div>
			<h1>Welcome to My Blog</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>
							<a>{post.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export const getServerSideProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=10");
	// const res = await fetch("http://localhost:8081/api/posts");
	const posts = await res.json(); // json으로 인코딩

	return {
		props: {
			posts,
		},
	};
};
