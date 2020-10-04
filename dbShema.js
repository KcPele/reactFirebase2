let db = {
    users: [
        {
            userId: '',
            email: '',
            handle: '',
            imageUrl: '',
            bio: '',
            website: '',
            location: '',
            phoneNumber: ''
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is for user',
            createAt: '',
            likeCount: 4,
            commentCount: 3
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: '',
            body: '',
            createdAt: ''
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: '',
            type: 'like | comment',
            createdAt: ''
        }
    ]
}
const userDetails = {
//Redux data
       credential: {
            userId: '',
            email: '',
            handle: '',
            imageUrl: '',
            bio: '',
            website: '',
            location: '',
            phoneNumber: ''
        },
   likes: [
        {
            userHanhle: 'user',
            screamId: '',
        
        },
        {
            userHandle: 'user',
            screamId: ''
        }
    ]
}