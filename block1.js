alert('version 2.0 (9mm)')

const API_FILTERS = [
  {
    id: 1,
    name: 'SUV/Familjebuss i Hela Svergie',
    filter:
      'body_type=9&body_type=5&dealer_segment=3&location=0.300010&location=0.300020&location=0.300009&location=0.300021&location=0.300013&location=0.300023&location=0.300006&location=0.300008&location=0.300007&location=0.300012&location=0.300001&location=0.300004&location=0.300005&location=0.300003&location=0.300017&location=0.300024&location=0.300022&location=0.300019&location=0.300014&location=0.300018&mileage_to=47000&price_to=120000&year_from=1997',
  },
  {
    id: 2,
    name: '7 Sits Alt 1',
    filter:
      'dealer_segment=3&location=0.300010&location=0.300020&location=0.300009&location=0.300021&location=0.300013&location=0.300023&location=0.300006&location=0.300008&location=0.300007&location=0.300012&location=0.300001&location=0.300004&location=0.300005&location=0.300003&location=0.300017&location=0.300024&location=0.300022&location=0.300019&location=0.300014&location=0.300018&mileage_to=47000&price_to=120000&q=7+sits&year_from=1997',
  },
  {
    id: 3,
    name: '7 Sitsig Alt 2',
    filter:
      'dealer_segment=3&location=0.300010&location=0.300020&location=0.300009&location=0.300021&location=0.300013&location=0.300023&location=0.300006&location=0.300008&location=0.300007&location=0.300012&location=0.300001&location=0.300004&location=0.300005&location=0.300003&location=0.300017&location=0.300024&location=0.300022&location=0.300019&location=0.300014&location=0.300018&mileage_to=47000&price_to=120000&q=7+sitsig&year_from=1997',
  },
  {
    id: 4,
    name: '7-Sitsig Alt 3',
    filter:
      'dealer_segment=3&location=0.300010&location=0.300020&location=0.300009&location=0.300021&location=0.300013&location=0.300023&location=0.300006&location=0.300008&location=0.300007&location=0.300012&location=0.300001&location=0.300004&location=0.300005&location=0.300003&location=0.300017&location=0.300024&location=0.300022&location=0.300019&location=0.300014&location=0.300018&mileage_to=47000&price_to=120000&q=7-sitsig&year_from=1997',
  },
  {
    id: 5,
    name: 'Alla bilar med Automat förurom /SUV/Familjebuss',
    filter:
      'body_type=6&body_type=1&body_type=2&body_type=8&body_type=3&body_type=4&body_type=11&dealer_segment=3&location=0.300010&location=0.300020&location=0.300009&location=0.300021&location=0.300013&location=0.300023&location=0.300006&location=0.300008&location=0.300007&location=0.300012&location=0.300001&location=0.300004&location=0.300005&location=0.300003&location=0.300017&location=0.300024&location=0.300022&location=0.300019&location=0.300014&location=0.300018&mileage_to=47000&price_to=120000&transmission=2&transmission=583&year_from=1997',
  },
  {
    id: 6,
    name: 'Obesiktigade bilar Alt 1',
    filter:
      'dealer_segment=3&location=0.300010&location=0.300020&location=0.300009&location=0.300021&location=0.300013&location=0.300023&location=0.300006&location=0.300008&location=0.300007&location=0.300012&location=0.300001&location=0.300004&location=0.300005&location=0.300003&location=0.300017&location=0.300024&location=0.300022&location=0.300019&location=0.300014&location=0.300018&mileage_to=47000&price_to=120000&q=obesiktigad&year_from=1997',
  },
  {
    id: 7,
    name: 'Obes bilar Alt 2',
    filter:
      'dealer_segment=3&location=0.300010&location=0.300020&location=0.300009&location=0.300021&location=0.300013&location=0.300023&location=0.300006&location=0.300008&location=0.300007&location=0.300012&location=0.300001&location=0.300004&location=0.300005&location=0.300003&location=0.300017&location=0.300024&location=0.300022&location=0.300019&location=0.300014&location=0.300018&mileage_to=47000&price_to=120000&q=obes&year_from=1997',
  },
  {
    id: 8,
    name: 'Populära lättsålda bilar Manuell',
    filter:
      'dealer_segment=3&location=0.300010&location=0.300020&location=0.300009&location=0.300021&location=0.300013&location=0.300023&location=0.300006&location=0.300008&location=0.300007&location=0.300012&location=0.300001&location=0.300004&location=0.300005&location=0.300003&location=0.300017&location=0.300024&location=0.300022&location=0.300019&location=0.300014&location=0.300018&mileage_to=47000&price_to=120000&variant=1.744.2490&variant=1.744.4174&variant=1.744.2482&variant=1.744.2486&variant=1.744.2485&variant=1.744.2492&variant=1.744.2496&variant=1.744.2484&variant=1.744.2497&variant=1.744.2489&variant=1.744.2494&variant=1.744.2488&variant=1.749.7967&variant=1.749.2132&variant=1.749.2131&variant=1.749.3004&variant=1.749.2130&variant=1.749.2466&variant=0.757&variant=0.766&variant=0.767&variant=0.772&variant=0.777&variant=0.784&variant=0.785&variant=0.787&variant=0.792&variant=0.795&variant=0.796&variant=0.804&variant=0.806&variant=0.808&variant=0.813&variant=0.817&variant=0.818&variant=0.801&variant=0.8093&variant=0.752&variant=0.753&variant=0.754&variant=0.8079&variant=0.764&variant=0.7547&variant=0.771&variant=0.7672&variant=0.8065&variant=0.7280&variant=0.775&variant=0.776&variant=0.780&variant=0.781&variant=0.782&variant=0.7153&variant=0.7147&variant=0.805&variant=0.807&variant=0.7137&variant=0.7190&variant=1.810.2000206&variant=0.811&variant=0.8078&variant=0.2252&year_from=1997',
  },
  {
    id: 9,
    name: 'Populära lättsålda bilar Automat',
    filter:
      'dealer_segment=3&location=0.300010&location=0.300020&location=0.300009&location=0.300021&location=0.300013&location=0.300023&location=0.300006&location=0.300008&location=0.300007&location=0.300012&location=0.300001&location=0.300004&location=0.300005&location=0.300003&location=0.300017&location=0.300024&location=0.300022&location=0.300019&location=0.300014&location=0.300018&mileage_to=47000&price_to=120000&transmission=2&variant=1.744.2490&variant=1.744.4174&variant=1.744.2482&variant=1.744.2486&variant=1.744.2485&variant=1.744.2492&variant=1.744.2496&variant=1.744.2484&variant=1.744.2497&variant=1.744.2489&variant=1.744.2494&variant=1.744.2488&variant=1.749.7967&variant=1.749.2132&variant=1.749.2131&variant=1.749.3004&variant=1.749.2130&variant=1.749.2466&variant=0.757&variant=0.766&variant=0.767&variant=0.772&variant=0.777&variant=0.784&variant=0.785&variant=0.787&variant=0.792&variant=0.795&variant=0.796&variant=0.804&variant=0.806&variant=0.808&variant=0.813&variant=0.817&variant=0.818&variant=0.801&variant=0.8093&variant=0.752&variant=0.753&variant=0.754&variant=0.8079&variant=0.764&variant=0.7547&variant=0.771&variant=0.7672&variant=0.8065&variant=0.7280&variant=0.775&variant=0.776&variant=0.780&variant=0.781&variant=0.782&variant=0.7153&variant=0.7147&variant=0.805&variant=0.807&variant=0.7137&variant=0.7190&variant=1.810.2000206&variant=0.811&variant=0.8078&variant=0.2252&year_from=1997',
  },
  {
    id: 10,
    name: 'Populära lättsålda bilar Stockholm/Angränsade län Automat',
    filter:
      'dealer_segment=3&location=1.300001.310117&location=0.300004&location=0.300003&location=0.300019&location=0.300018&location=0.300005&location=0.300006&location=0.300021&mileage_to=470000&price_from=10000&price_to=120000&transmission=2&year_from=1997',
  },
]

const MESSAGE_1 = (price) => `Hej och hoppas allt väl :)

Mitt namn är Jan och är intresserad av er bil. Den ser supertrevlig ut, precis en sådan jag letar efter.

Priset verkar rimligt, dock är min budget lite begränsad och undrar om ni skulle kunna tänka er godta ett bud på ${price} kr?

Om ja, så garanterar jag en smidig och krångelfri affär redan idag. Jag kan även betala en handpenning för att visa att jag är seriös.

Ursäkta mitt lägre bud, men hoppas ni kan överväga det. Jag ser fram emot ert svar!

Vänliga hälsningar,
Jan M`

const MESSAGE_2 = (price) => `Hej och hoppas allt väl :)

Mitt namn är Jan och är intresserad av er bil. Den ser supertrevlig ut, precis en sådan jag letar efter.  
Priset verkar rimligt, dock är min budget lite begränsad och undrar om ni skulle kunna tänka er godta ett bud på ${price} kr?

Om ja, så garanterar jag en smidig och krångelfri affär redan idag. Jag kan även betala en handpenning för att visa att jag är seriös. 

Ursäkta mitt lägre bud, men hoppas ni kan överväga det. Jag ser fram emot ert svar!

Vänliga hälsningar,
Jan M`

const SUPPORTED_USERS = [
  'andreaslarson@live.se',
  'jan_dolbysound@outlook.com',
  'patricia.atanasio@icloud.com',
  'neodolinskii@icloud.com',
  'diamanta_d@hotmail.com',
  //'bilbuffen@gmail.com'
]

const DEFAULT_BARGAIN_RANGES = [
  { min: 0, max: 9999, bargain: 5000 },
  { min: 10000, max: 19999, bargain: 7000 },
  { min: 20000, max: 29999, bargain: 12000 },
  { min: 30000, max: 39999, bargain: 13000 },
  { min: 40000, max: 49999, bargain: 15000 },
  { min: 50000, max: 59999, bargain: 17000 },
  { min: 60000, max: 69999, bargain: 17000 },
  { min: 70000, max: 79999, bargain: 23000 },
  { min: 80000, max: 89999, bargain: 23000 },
  { min: 90000, max: 99999, bargain: 23000 },
  { min: 100000, max: 109999, bargain: 23000 },
  { min: 110000, max: 119999, bargain: 23000 },
  { min: 120000, max: 9999999, bargain: 23000 },
]

const DIVIDER = '\n\n=====================================\n\n'

;(async function run() {
  try {
    const LOCAL_STORAGE_KEY = 'crippo_repliedAdIds'
    const LIMIT_PER_RUN = 59

    if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]))
    }

    const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    const asyncQuerySelector = async (selectorCallback, timeout = 20000) => {
      let element = selectorCallback()

      await new Promise((resolve, reject) => {
        const timestamp = Date.now()
        const interval = setInterval(() => {
          if (!element) {
            element = selectorCallback()

            if (Date.now() - timestamp > timeout) {
              clearInterval(interval)
              reject('Kunde inte hitta elementet...')
            }
          } else {
            resolve()
            clearInterval(interval)
          }
        }, 100)
      })

      return element
    }

    const calculateBargainPrice = (price, bargainRanges) =>
      price -
      (bargainRanges
        .map((range) => (price >= range.min && price <= range.max ? range.bargain : undefined))
        .filter(Boolean)[0] || 1)

    const typeTextToInput = async (inputElement, text, extraAttempts = 3) => {
      for (let index = 0; index < text.length; index++) {
        const nextValue = inputElement.value + text.charAt(index)

        const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set

        inputElement.focus()
        setter.call(inputElement, nextValue)
        inputElement.dispatchEvent(new Event('input', { bubbles: true }))
        inputElement.dispatchEvent(new Event('change', { bubbles: true }))

        inputElement.scrollTo(0, inputElement.scrollHeight)
        await sleep(5)
      }

      if (inputElement.value !== text) {
        if (extraAttempts > 0) {
          inputElement.value = ''
          await typeTextToInput(inputElement, text, extraAttempts - 1)
        } else {
          throw new Error('Meddelandet skrevs inte korrekt!')
        }
      }

      await sleep(100)
    }

    const searchResultsType = prompt(
      'Vilka sökresultat ska den välja? Ange SENASTE eller MITTEN!',
      'MITTEN',
    )

    if (!['SENASTE', 'MITTEN'].includes(searchResultsType)) {
      alert('Måste vara SENASTE eller MITTEN! Ladda om sidan och försök igen!')
      return
    }

    const apiFilterNumber = prompt(
      `Vilket filter ska användas? (ange nummer)
      
${API_FILTERS.map((filter) => `${filter.id}. ${filter.name}`).join('\n')}

      `,
      1,
    )

    const apiFilter = API_FILTERS.find((filter) => filter.id === parseInt(apiFilterNumber))?.filter

    if (!apiFilter) {
      alert('Något blev fel när filtret sattes, ladda om sidan och försök igen!')
      return
    }

    const bargainRanges = DEFAULT_BARGAIN_RANGES.map((range) => ({
      ...range,
      bargain: parseInt(
        prompt(
          `Hur mycket ska prutas när priset är mellan ${range.min} och ${range.max}?`,
          range.bargain,
        ),
      ),
    }))

    if (!Object.values(bargainRanges).every((range) => Number.isInteger(range.bargain))) {
      alert('Alla värden måste anges i endast siffror! Ladda om sidan och försök igen!')
      return
    }

    if (document.querySelector('#crippo_popup')) {
      document.querySelector('#crippo_popup').remove()
    }
    document.querySelector('body').style = 'background: #000; overflow: hidden'

    const wrapper = document.createElement('div')
    wrapper.id = 'wrapper'
    document.body.prepend(wrapper)

    while (wrapper.nextSibling) {
      wrapper.appendChild(wrapper.nextSibling)
    }

    document.querySelector('#wrapper').style = 'opacity: 0.3; filter: blur(4px);'

    const popupElement = document.createElement('div')
    popupElement.id = 'crippo_popup'
    popupElement.style = `
      box-sizing: border-box; 
      width: calc(100% - 100px); 
      height: calc(100% - 100px); 
      background: #fff; 
      position: fixed; 
      top: 0; 
      left: 0; 
      padding: 20px;
      margin: 50px;
  `
    document.body.appendChild(popupElement)

    const popupInnerElement = document.createElement('div')
    popupInnerElement.style = `
      position: relative;
      width: 100%;
      height: 100%;
  `
    popupElement.appendChild(popupInnerElement)

    const iframeElement = document.createElement('iframe')
    iframeElement.tabIndex = -1
    iframeElement.style = `
      box-sizing: border-box;
      display: inline-block; 
      position: absolute; 
      width: 60%; 
      height: 100%;
      opacity: 0;
      transition: opacity 3s;
      border: 5px solid #000; 
      pointer-events: none;
  `

    iframeElement.src = 'https://www.blocket.se/'

    popupInnerElement.appendChild(iframeElement)

    const consoleElement = document.createElement('textarea')
    consoleElement.readOnly = true
    consoleElement.style = `
      font-family: 'Courier New', monospace; 
      font-size: 16px; 
      box-sizing: border-box; 
      background: #000;
      position: absolute;
      right: 0;
      transition: width 2s;
      overflow-y: scroll; 
      display: inline-block; 
      width: 100%;
      height: 100%; 
      color: #00f200; 
      padding: 3%;
      resize: none;
  `

    popupInnerElement.appendChild(consoleElement)

    const writeToConsole = async (text) => {
      for (let index = 0; index < text.length; index++) {
        consoleElement.value += text.charAt(index)
        consoleElement.scrollTop = consoleElement.scrollHeight
        await sleep(5)
      }
    }

    await writeToConsole(
      ` ░██████                                  
░██   ░██                                 
░██   ░██ ░█████████████  ░█████████████  
 ░███████ ░██   ░██   ░██ ░██   ░██   ░██ 
      ░██ ░██   ░██   ░██ ░██   ░██   ░██ 
░██   ░██ ░██   ░██   ░██ ░██   ░██   ░██ 
 ░██████  ░██   ░██   ░██ ░██   ░██   ░██ 
                                          
                                          
=====================================

👋 Hej, tänd ciggen nu så kör vi...`,
    )

    await sleep(1000)

    consoleElement.style.width = 'calc(40% - 20px)'

    iframeElement.style.opacity = 1

    await writeToConsole(`\n\n⏳ Hämtar annonserna...`)

    const PAGE_SIZE = 50

    const baseApiUrl = 'https://www.blocket.se/mobility/search/api/search/SEARCH_ID_CAR_USED?'

    const middlePages = await Promise.all(
      [1, 2].map((i) =>
        fetch(
          baseApiUrl +
            apiFilter +
            '&rows=' +
            PAGE_SIZE +
            '&page=' +
            (i + (searchResultsType === 'MITTEN' ? 20 : 0)),
        ),
      ),
    ).then(async (responses) => Promise.all(responses.map((response) => response.json())))

    const ads = middlePages.flatMap((d) => d.docs)

    await writeToConsole(DIVIDER)

    let sentThisRun = 0

    for (let index = 0; index < ads.length; index++) {
      const ad = ads[index]
      if (sentThisRun === LIMIT_PER_RUN) {
        break
      }

      if (iframeElement.contentDocument === null) {
        break
      }
      try {
        const adId = ad.id
        const adUrl = ad.canonical_url
        const adNewMessageUrl = '/messages/new/' + adId

        await writeToConsole(`⏳ Laddar annons ${index + 1}/${ads.length}: ${adUrl}`)

        if (!JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).includes(adId)) {
          iframeElement.src = adUrl

          await sleep(1500)

          iframeElement.src = adNewMessageUrl

          await writeToConsole('\n\n🖱️ Klickar på skicka meddelande knappen')

          await sleep(1000)

          await writeToConsole('\n\n⏳ Laddar...')

          if (index === 0) {
            await sleep(1000)
            await writeToConsole('\n\n🙃 Annars då? Gjort mycket beats på senaste?')
            await sleep(1000)
          }

          await sleep(1000)

          await writeToConsole('\n\n📝 Skriver meddelande...')

          const price = ad.price.amount

          const givenPrice = calculateBargainPrice(price, bargainRanges)
          const msg = (() => {
            switch (apiFilterNumber) {
              case '1':
              case '2':
              case '3':
              case '4':
              case '5':
              case '6':
              case '7':
              case '8':
              case '9':
              case '10':
                return MESSAGE_1(givenPrice)
              default:
                throw Error('JÄVLA SKIT!')
            }
          })()

          const messageInputElement = iframeElement.contentDocument.querySelector(
            'textarea[data-testid="text-area"]',
          )

          await typeTextToInput(messageInputElement, msg)

          await writeToConsole('\n\n⏳ Skickar meddelande...')

          await sleep(500)

          if ('user' !== 'andreaslarson@live.se') {
            messageInputElement.focus()
            messageInputElement.dispatchEvent(
              new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true,
                cancelable: true,
              }),
            )
          }

          localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify([...JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)), adId]),
          )

          sentThisRun++

          const minutesToWait = ((items) => items[Math.floor(Math.random() * items.length)])([
            0.7, 1.32, 1.77, 2.8,
          ])
          const minutesToWaitInMs = minutesToWait * 60000

          await writeToConsole(`\n\n😁 Meddelande ${sentThisRun} av ${LIMIT_PER_RUN} skickat!`)

          await sleep(1000)

          await writeToConsole(
            `\n\n⏳ Väntar lite tills ${new Date(Date.now() + minutesToWaitInMs).toLocaleTimeString()}, innan vi går vidare till nästa annons...`,
          )

          await sleep(minutesToWaitInMs)
        } else {
          await writeToConsole(
            '\n\n😏 Okej! Vi verkar redan ha svarat på den här annonsen, så vi drar till nästa!',
          )
        }

        await writeToConsole(DIVIDER)

        await sleep(1000)
      } catch (e) {
        await writeToConsole(
          `\n\n😱 Någonting gick åt helvete, provar nästa annons. Felmeddelande: ${e}`,
        )
        await writeToConsole(DIVIDER)
      }
    }

    if (iframeElement.contentDocument !== null) {
      alert('Klart! Ladda om sidan och kör programmet igen för svara på nya annonser!')
    }
  } catch (e) {
    console.error('Failed: ', e)
  }
})()
