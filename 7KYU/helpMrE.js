// CodeWars 2023-04-29 //

/*
Mr. E Ven only likes even length words. Please create a translator so that he doesn't have to hear those pesky odd length words. For some reason he also hates punctuation, he likes his sentences to flow.

Your translator should take in a string and output it with all odd length words having an extra letter (the last letter in the word). It should also remove all punctuation (.,?!) as well as any underscores (_).

"How did we end up here? We go?" translated becomes-> "Howw didd we endd up here We go"
*/

// SOLUTION //

function evenator(str) {
    let filtered = str.split('').filter(x => !'.,?!_'.includes(x)).join('')
    return filtered.split(' ').map(x => x.length % 2 ? x + x.slice(-1) : x).join(' ')
}

// END //