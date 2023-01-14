{

    let str: 'success' | 'error';

    str = 'success';
    str = 'error';
    // str = 'cock';


    let title: 'cock' | 'pussy' | 'ass';

    type TMessage = 'success' | 'error';

    let infoMessage: TMessage = 'success';

    type TFriendsType = 'Oleg' | 'Peter' | 'Serhio';

    let name: TFriendsType = 'Peter';
    // let name2: TFriendsType = 'Konstantin';

    // function isFriend(friend: TFriendsType | TMessage): friend is TFriendsType {
    //    const friends: string[] = ['Oleg', 'Peter', 'Serhio'];
    //    return friends.includes(friend);
    // }





















}

