import Filter from 'bad-words'

/** bad-words filters for these words automatically:
 ** https://github.com/web-mech/badwords/blob/master/lib/lang.json
 ** Specify any additional "bad words" in this array: */
const blacklist: string[] = []

const profanityFilter = new Filter()

if (blacklist.length) {
  profanityFilter.addWords(...blacklist)
}

export default profanityFilter
