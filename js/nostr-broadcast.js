const fetchAndBroadcastAll = async (pubkeys) => {
  for (const pubkey of pubkeys) {
    // reset UI
    // ...
    
    // parse pubkey ('npub' or hexa)
    const parsedPubkey = parsePubkey(pubkey)
    if (!parsedPubkey) continue
    
    // inform user that app is fetching from relays
    $('#fetching-status').text(`Fetching from relays for pubkey ${pubkey}... `)
    
    // get all events from relays
    const filter = { authors: [parsedPubkey] }
    const data = await getEvents(filter)
    
    // inform user that backup file (js format) is being downloaded
    $('#file-download').html(`Downloading Backup file for pubkey ${pubkey}... `)
    downloadFile(data, `nostr-broadcast-${pubkey}.js`)
    
    
  }
}

const pubkeys = ['npub1ctpqas992k2ewy72f3qycnfveq8xewgx7kmyy9c8qcf2pjhzn33qauqp94',
'npub1cmmswlckn82se7f2jeftl6ll4szlc6zzh8hrjyyfm9vm3t2afr7svqlr6f',
'npub1x49mh0aekjeswrm9ghhpwxwtfxyj68k4qyufczay8wzfa8dx6w8qrp0g26',
'npub1um8xz4pjtd2wd8y50rzxeufgfcyn77gwvk9k5u8emahw6f67x3zqmnzp4e',
'npub105ptwm5sa4aggcyp8k0aqp6dnn03zlenyhtwntjzqhvmk9kfxwjs6zz4vt',
'npub137c5pd8gmhhe0njtsgwjgunc5xjr2vmzvglkgqs5sjeh972gqqxqjak37w',
'npub1m26flc5r6mlfvtktwv7vauagdmdrche4u2k4yd6w3lmqsjlfa7wqaterdu',
'npub1wcq7wsadgvkhs3c6c4chssp22lxn7w5jlvsghe770z909449we5s4tp3z5',
'npub12gu8c6uee3p243gez6cgk76362admlqe72aq3kp2fppjsjwmm7eqj9fle6',
'npub1w2fkh2057g032clzu5qp4t0xen36estz5nve4q3ayvwuvsdeuw6qn80sxn',
'npub1hnrvxekl7u7x8za2anslvq7uruueqdncyrdm2v4zk3avjs3qclnsl8cxml',
'npub13r5ny6sc2jyqwfyququr62tg7lp0r0rnaaadnxvlgqz9nt7q20wqq3tqd7',
'npub1renaud65zug8r570ndztde2xhk206z3v50a5mwa3kp2xshy3zmjqkqaw97',
'npub1ajv7m32k0cpgzha32qszsh304qusjvwwmavus0ttktzldms4xzusuftppj',
'npub148ut8u4vr8xqd4gefhg6eyc5636p5zthw3zfse2njfkezegczers59ty0w',
'npub1qznglvejddru5y054ag6ldjf54emh8uzk5rjg3kc5svrnhkmp58q658xzy',
'npub1j0edavp956frcvh2nx80mm70s4upljykrdadumdlq06rvffzza5q2djqnu',
'npub16dqpnqjq4k6m8q8uv6dkhmghuwphy3hk2wmgqhwsseak4l72wjsq80gmyu',
'npub15tvl09jxrcujd6pddlczvcd7tlzh60tt8vcmd2hhvdzdhq5quvcs7nnc0q',
'npub133ah8hpdmqz9u265tttga6ktecz4904mdvvkju0jut5vlxatft7qkrt7f4',
'npub1a5hfm8xst4farl5pf70vuxqn42flvxt2pqquselju02a2jfad4rqdv2dl7',
'npub1wl89d7yazg500lehg08p45dj2jzhhyqg2erj067458e3wd30djns4zn8lu',
'npub1xg23m9ez26ueekpzlm7fu734wpzktpwqjwyhlvy76xv6aynf4cpqf8qlrd']
$('#fetch-and-broadcast').click(() => fetchAndBroadcastAll(pubkeys))
