/** Run this script with npm run genJSON, anytime you alter schema.yaml. */
/** This will generate schema.json */

const yaml = require('js-yaml')
const { openApiToJsonSchema } = require('openapi-json-schema')
const fs = require('fs')
const path = require('path')

const jsonSchemaPath = path.resolve(
  __dirname,
  '..',
  'src',
  'generated',
  'schema.json'
)
const yamSchemaPath = path.resolve(__dirname, '..', 'src', 'schema.yaml')

try {
  // convert YAML schema to JSON
  const json = yaml.load(fs.readFileSync(yamSchemaPath, 'utf8'))

  const converted = openApiToJsonSchema(json)

  // write to JSON schema path
  fs.writeFileSync(jsonSchemaPath, JSON.stringify(converted))
} catch (e) {
  console.log(e)
}
