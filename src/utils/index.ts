import profanityFilter from '../lib/profanityFilter'

export const rmNewlines = (str: string): string =>
  str.replace(/(\r\n|\n|\r)/gm, '')

export const castGetBooksParams = (raw: GetBooksParamsRaw): GetBooksParams => {
  // cast checkedOut to boolean
  let checkedOut
  if (raw.checkedOut?.toLocaleLowerCase() === 'true') {
    checkedOut = true
  } else if (raw.checkedOut?.toLocaleLowerCase() === 'false') {
    checkedOut = false
  }
  const castParams = { ...raw, checkedOut }
  return castParams
}

export const filterObj = <T extends object>(obj: T, keys: string[]): T => {
  const filteredObj: { [key: string]: any } = {}
  Object.entries(obj).forEach(([k, v]) => {
    if (keys.includes(k)) {
      filteredObj[k] = v
    }
  })
  return filteredObj as T
}

export const filterProfanity = (str: string): string => {
  return profanityFilter.clean(str)
}

export const filterObjStringsForProfanity = <T extends { [key: string]: any }>(
  obj: T
): T => {
  const filtered: { [key: string]: any } = {}
  Object.entries(obj).forEach(([k, v]) => {
    filtered[k] = v
    if (typeof v === 'string') {
      filtered[k] = filterProfanity(v)
    }
  })
  return filtered as T
}
