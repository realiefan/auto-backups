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
'npub1w2fkh2057g032clzu5qp4t0xen36estz5nve4q3ayvwuvsdeuw6qn80sxn']
$('#fetch-and-broadcast').click(() => fetchAndBroadcastAll(pubkeys))
