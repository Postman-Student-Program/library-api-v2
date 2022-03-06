/** Build raw SQL WHERE conditions for filters on getBooks */
export const buildAndWhere = (params: GetBooksParams) => {
  const { genre, checkedOut, search } = params
  const statements = []
  if (genre) {
    statements.push(`AND LOWER(genre) = '${genre.toLowerCase()}'`)
  }
  if (typeof checkedOut === 'boolean') {
    if (checkedOut) {
      statements.push(`AND "checkedOut" = 't'`)
    } else {
      statements.push(`AND "checkedOut" = 'f'`)
    }
  }
  if (search) {
    const searchLower = search.toLowerCase()
    if (search.length) {
      statements.push(
        `AND (LOWER(title) LIKE '%${searchLower}%' OR LOWER(author) LIKE '%${searchLower}%')`
      )
    }
  }
  return statements.join(' ')
}
