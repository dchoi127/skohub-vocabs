module.exports = {
  "@context": {
    "id": "@id",
    "type": "@type",
    "@vocab": "http://www.w3.org/2004/02/skos/core#",
    "title": {
      "@id": "http://purl.org/dc/terms/title",
      "@container": "@language"
    },
    "description": {
      "@id": "http://purl.org/dc/terms/description",
      "@container": "@language"
    },
    "prefLabel": {
      "@container": "@language"
    },
    "definition": {
      "@container": "@language"
    },
    "scopeNote": {
      "@container": "@language"
    },
    "narrower": {
      "@container": "@set"
    }
  }
}
