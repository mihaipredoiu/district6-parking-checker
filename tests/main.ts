/* -------------------------- ๐ Main parking check ------------------------- */

import { Selector } from 'testcafe'

fixture`Main parking check`.page(
  'https://parcari.adps6.ro/solicitare/solicitare-loc-de-parcare'
)

test('๐ Iuliu Maniu parking', async (t) => {
  const ADDRESS = 'Bulevardul Iuliu Maniu'
  const BUILDING = 'bl. 34, nr. 144-146, Bulevardul Iuliu Maniu'

  /** Search for address */
  await t
    .click(Selector('span').withText('Alege o stradฤ'))
    .typeText(
      Selector('input').withAttribute(
        'aria-controls',
        'select2-selectStreet-results'
      ),
      ADDRESS
    )
    .click(Selector('li').withText(ADDRESS))

  /** Search for building */
  await t
    .click(Selector('span').withText('Alege un imobil'))
    .typeText(
      Selector('input').withAttribute(
        'aria-controls',
        'select2-selectBuilding-results'
      ),
      BUILDING
    )
    .click(Selector('li').withText(BUILDING))

  /** Checking availability of parking place */
  await t
    .wait(3000)
    .expect(Selector('li').withText('Locul de parcare').exists)
    .notOk()
})
