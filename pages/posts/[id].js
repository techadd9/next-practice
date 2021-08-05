import React from "react";
import Link from "next/link";

const index = ({ post }) => {
	// console.log("post :>> ", post);
	const { title, body } = post;

	return (
		<div>
			<h2>{title}</h2>
			<p>{body}</p>

			<p>
				<Link href="/">
					<a href="">go back</a>
				</Link>
			</p>
		</div>
	);
};

export const getServerSideProps = async (context) => {
	const { id } = context.params;
	// console.log(id);
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const post = await res.json();

	return {
		props: {
			post,
		},
	};
};

export default index;
