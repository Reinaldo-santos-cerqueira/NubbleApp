import { Post } from '@domain';
import React from 'react';
import { Pressable } from 'react-native';
import { Box, Text } from '@components';

type Props = Pick<Post, 'author' | 'commentCount' | 'text'>

export function PostBottom({ author, commentCount, text }: Props) {
	const commentText = getCommentText(commentCount);

	return (
		<Box mt='s16'>
			<Text preset='paragraphMedium' color='grayBlack' bold>{author.userName}</Text>
			<Text mb='s8' preset='paragraphMedium' color='gray1' semiBold>{text}</Text>
			<Pressable>
				<Text preset='paragraphSmall' bold color='primary'>{commentText}</Text>
			</Pressable>
		</Box>
	);
}

function getCommentText(commentCount: number): string | null {
	if (commentCount === 0) {
		return null;
	} else if (commentCount === 1) {
		return 'ver comentário';
	} else {
		return `ver ${commentCount} comentários`;
	}
}