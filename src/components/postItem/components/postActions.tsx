import React from 'react';
import { Box, Icon, IconProps, Text, TouchableOpacityBox } from '@components';
import { Post } from '@domain';

type Props = Pick<Post, 'commentCount' | 'favoriteCount' | 'reactionCount'>


export function PostActions(
	{
		commentCount,
		favoriteCount,
		reactionCount
	}: Props
) {
	function favoritePost() {
		//TODO: implement
	}
	function commentPost() {
		//TODO: implement
	}

	function likePost() {
		//TODO: implement
	}

	return (
		<Box flexDirection='row'>
			<Item
				onPress={likePost}
				icon={{
					default: 'heart',
					marked: 'heartFill'
				}}
				text={reactionCount}
			/>
			<Item
				onPress={commentPost}
				icon={{
					default: 'comment',
					marked: 'comment'
				}}
				text={commentCount}
				marked={false}
			/>
			<Item
				onPress={favoritePost}
				icon={{
					default: 'bookmark',
					marked: 'bookmarkFill'
				}}
				text={favoriteCount}
			/>
		</Box>
	);
}

interface ItemProps {
	onPress: () => void;
	icon: {
		default: IconProps['name'];
		marked: IconProps['name'];
	}
	marked?: boolean;
	text: number
}

function Item({ onPress, text, icon, marked }: ItemProps) {
	return (
		<TouchableOpacityBox
			flexDirection='row'
			alignItems='center'
			onPress={onPress}
			mt='s16'
			mr='s24'
		>
			<Icon
				name={marked ? icon.marked : icon.default}
				color={marked ? 'marked' : undefined}
			/>
			{text > 0 && <Text ml='s4' preset='paragraphSmall' bold>{text}</Text>}
		</TouchableOpacityBox>
	);
}