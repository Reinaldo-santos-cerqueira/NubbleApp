/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
	useEffect,
	useState
} from 'react';
import {
	PostItem,
	Screen
} from '@components';
import { AppTabScreenProps } from '@routes';
import { Post, postService } from '@domain';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { HomeHeader } from './components/homeHeader';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
	const [postList, setPostList] = useState<Post[]>([]);

	useEffect(() => {
		postService.getList().then((list) => setPostList(list));
	}, []);

	function renderItem({ item }: ListRenderItemInfo<Post>) {
		return (
			<PostItem post={item} />
		);
	}

	return (
		<Screen style={{ paddingBottom: 0, paddingTop: 0, paddingHorizontal: 0 }}>
			<FlatList
				data={postList}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={<HomeHeader />}
			/>
		</Screen>
	);
}