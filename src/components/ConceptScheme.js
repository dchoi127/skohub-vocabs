/** @jsx jsx */
import { jsx } from '@emotion/core'
import Markdown from 'markdown-to-jsx'

import Concept from './Concept'
import { i18n, getDomId } from '../common'

const ConceptScheme = ({ pageContext: { node: conceptScheme, embed, language } }) => (
  <div className="content concept block" id={getDomId(conceptScheme.id)}>
    {embed && (
      embed.map(concept => (
        <Concept key={concept.json.id} pageContext={{ node: concept.json }} />
      ))
    )}
    <div>
      <h1>{i18n(language)(conceptScheme.title)}</h1>
      <h2>{conceptScheme.id}</h2>
      {conceptScheme.description
        && (
          <div className="markdown">
            <Markdown>
              {i18n(language)(conceptScheme.description)}
            </Markdown>
          </div>
        )
      }
    </div>
  </div>
)

export default ConceptScheme
