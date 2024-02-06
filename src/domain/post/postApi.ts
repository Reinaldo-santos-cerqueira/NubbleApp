import { postListMock } from './postListMock';
import { Post } from './types';

async function getList(): Promise<Post[]> {
	console.log(1);

	const response = await fetch('http://192.168.100.36:3333/user/post', {
		method: 'GET',
		headers: {
			'Authorization': 'Bearer Mw.ZqMDrBCoclDy31Y7lGkIfTS43AntsFHk5rFylYM7zbQGINV4L9YCtHcEptfG'
		}
	});

	const data = await response.text();
	console.log(data);

	return postListMock;
}

export const postApi = {
	getList
};	