/**
 * Napisz funkcje createUserId i createPostId, które
 * tworzą branded types UserId i PostId. Następnie użyj ich
 * w funkcji, która akceptuje oba typy.
 */

import { Brand } from '../../../helpers/Brand';

type UserId = Brand<string, 'UserId'>;
type PostId = Brand<string, 'UserId'>;

// your code here:
function createUserId(id: string) {
  return id as UserId;
}
function createPostId(id: string) {
  return id as PostId;
}

// example usage:
const userId = createUserId('user123');
const postId = createPostId('post456');

function processId(id: UserId | PostId) {
  console.log({ id });
}

processId(userId); // Powinno działać
processId(postId); // Powinno działać
processId('randomId'); // Powinno zgłosić błąd kompilacji
