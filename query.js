const fetch = require(`node-fetch`)

function makeOptions() {
  const accessToken = `accessToken` //generate access token here

  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${accessToken}`,
    },
  }
}

async function Query() {
  try {
    const begin = Date.now()

    const options = makeOptions()

    const response = await fetch(
      `https://api-sdm-di.cfapps.ap10.hana.ondemand.com/browser/36d9efa7-79f4-414a-bcdf-344e5916dfb9/root?objectid=oW2lLHfnplKR7RXz9pgi0wuyKl4EOdQA4PEL0Jy_Ics`,
      options
    )

    const r = await response.blob().then((blob) => {
      return blob
    })

    const end = Date.now()

    console.log(`r:::`, r)

    return {
      response,
      execTime: `${(end - begin) / 1000}sec`,
      errors: [],
    }
  } catch (err) {
    return {
      errors: [{message: err.message || `Error`, status: err.status}],
    }
  }
}

async function main() {
  const r = await Query()
  console.log(`r:::`, r)
}

main()

//on client react use
// const blobToBase64 = (blob) => {
//   const reader = new FileReader()
//   reader.readAsDataURL(blob)
//   return new Promise((rs, rj) => {
//     reader.onloadend = () => {
//       rs(reader.result)
//     }
//     reader.onerror = rj
//   })
// }
// const dataURL = await blobToBase64(file)
