import React from 'react';
import { Box } from '@components';
import { Post } from '@domain';
import { PostHeader } from './components/postHeader';
import { PostImage } from './components/postImage';
import { PostActions } from './components/postActions';
import { PostBottom } from './components/postLegendComent';

export interface PropsPost {
	post: Post
}

export function PostItem({ post }: PropsPost) {
	return (
		<Box marginBottom='s24' paddingHorizontal='s24'>
			<PostHeader author={post.author} />
			<PostImage imageURL={post.imageURL} />
			<PostActions
				favoriteCount={post.favoriteCount}
				commentCount={post.commentCount}
				reactionCount={post.reactionCount}
			/>
			<PostBottom author={post.author} text={post.text} commentCount={post.commentCount} />
		</Box>

	);
}