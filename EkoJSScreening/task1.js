const data = {
    users: [
        {
            id: 2,
            name: 'asdf',
        },
        {
            id: 1,
            name: 'sdf',
        }
    ],
    messages: [
        {
            id: 1,
            text: 'sd',
            userId: 2,
            receiverId: 4,
        },
        {
            id: 2,
            text: 'sd',
            userId: 2,
            receiverId: 4,
        }
    ]
};

//[{ messageText, userFromName, userToName }]

function normalizeReceivedData(receivedData) {

    const results = [];

    //If our data is organized in this format we can simply select a user based on their id. Preventing the need to traverse an array!!
    const users = toMap(receivedData.users);

    console.log(users)

    receivedData.messages.map((message) => {
        const formatedData = {
            messageText: message.text,
            userFromName: users.get(message.userId),
            userToName: users.get(message.receiverId)
        }
        results.push(formatedData);
    });

    return results;
}

/** we use reduce, which returns accumulator (obj), to which we append each item in the array using that items id.
 *  This will convert our array of objects into an object of objects. 
 */
function arrayToObject(array) {
    return array.reduce((obj, item) => {
        obj[item.id] = item.name
        return obj
    }, {});
}

function toMap(arr) {
    let map = new Map();
    for (var i = 0; i < arr.length; ++i) {
        let item = arr[i];
        map.set(item.id, item.name);
    }
    return map;
}

console.log(normalizeReceivedData(data))

let test = [2, 3, 4, 5, 6];

let tt = test;
test.length = 0;
console.log(tt);
console.log(test);