/**
 * Napisz funkcje createUserId i createPostId, które
 * tworzą branded types UserId i PostId. Następnie użyj ich
 * w funkcji, która akceptuje oba typy.
 */

// your code here:

// example usage:
const userId = createUserId('user123');
const postId = createPostId('post456');

processId(userId); // Powinno działać
processId(postId); // Powinno działać
processId('randomId'); // Powinno zgłosić błąd kompilacji
