const fetch = require(`node-fetch`)

function makeOptions() {
  const accessToken = `eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vcmdkZXYuYXV0aGVudGljYXRpb24uYXAxMC5oYW5hLm9uZGVtYW5kLmNvbS90b2tlbl9rZXlzIiwia2lkIjoiZGVmYXVsdC1qd3Qta2V5LTE3ODAxMDMwMjMiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3ODg1MTlkNDEyNzY0YmNhODViYTQ5MDI2NDlmMGQzZCIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiI5ZjA5MTEwYS1kOGQ5LTQwMGQtYjA3MS01ZTFhMjQzYzljOGMiLCJ6ZG4iOiJyZ2RldiIsInNlcnZpY2VpbnN0YW5jZWlkIjoiZmZkZTAyOGYtNWFjNC00NDQxLWE0Y2YtYmNkZGUzMDAyNzBlIn0sInN1YiI6InNiLWZmZGUwMjhmLTVhYzQtNDQ0MS1hNGNmLWJjZGRlMzAwMjcwZSFiMzg1fHNkbS1kaS1Eb2N1bWVudE1hbmFnZW1lbnQtc2RtX2ludGVncmF0aW9uIWIyNDciLCJhdXRob3JpdGllcyI6WyJzZG0tZGktRG9jdW1lbnRNYW5hZ2VtZW50LXNkbV9pbnRlZ3JhdGlvbiFiMjQ3LnNkbW1pZ3JhdGlvbmFkbWluIiwic2RtLWRpLURvY3VtZW50TWFuYWdlbWVudC1zZG1faW50ZWdyYXRpb24hYjI0Ny5zZG1hZG1pbiIsInNkbS1kaS1Eb2N1bWVudE1hbmFnZW1lbnQtc2RtX2ludGVncmF0aW9uIWIyNDcuc2RtdXNlciIsInVhYS5yZXNvdXJjZSJdLCJzY29wZSI6WyJzZG0tZGktRG9jdW1lbnRNYW5hZ2VtZW50LXNkbV9pbnRlZ3JhdGlvbiFiMjQ3LnNkbXVzZXIiLCJ1YWEucmVzb3VyY2UiLCJzZG0tZGktRG9jdW1lbnRNYW5hZ2VtZW50LXNkbV9pbnRlZ3JhdGlvbiFiMjQ3LnNkbW1pZ3JhdGlvbmFkbWluIiwic2RtLWRpLURvY3VtZW50TWFuYWdlbWVudC1zZG1faW50ZWdyYXRpb24hYjI0Ny5zZG1hZG1pbiJdLCJjbGllbnRfaWQiOiJzYi1mZmRlMDI4Zi01YWM0LTQ0NDEtYTRjZi1iY2RkZTMwMDI3MGUhYjM4NXxzZG0tZGktRG9jdW1lbnRNYW5hZ2VtZW50LXNkbV9pbnRlZ3JhdGlvbiFiMjQ3IiwiY2lkIjoic2ItZmZkZTAyOGYtNWFjNC00NDQxLWE0Y2YtYmNkZGUzMDAyNzBlIWIzODV8c2RtLWRpLURvY3VtZW50TWFuYWdlbWVudC1zZG1faW50ZWdyYXRpb24hYjI0NyIsImF6cCI6InNiLWZmZGUwMjhmLTVhYzQtNDQ0MS1hNGNmLWJjZGRlMzAwMjcwZSFiMzg1fHNkbS1kaS1Eb2N1bWVudE1hbmFnZW1lbnQtc2RtX2ludGVncmF0aW9uIWIyNDciLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6ImNlY2Q0YmE3IiwiaWF0IjoxNjA3OTk4ODg1LCJleHAiOjE2MDgwNDIwODUsImlzcyI6Imh0dHBzOi8vcmdkZXYuYXV0aGVudGljYXRpb24uYXAxMC5oYW5hLm9uZGVtYW5kLmNvbS9vYXV0aC90b2tlbiIsInppZCI6IjlmMDkxMTBhLWQ4ZDktNDAwZC1iMDcxLTVlMWEyNDNjOWM4YyIsImF1ZCI6WyJ1YWEiLCJzYi1mZmRlMDI4Zi01YWM0LTQ0NDEtYTRjZi1iY2RkZTMwMDI3MGUhYjM4NXxzZG0tZGktRG9jdW1lbnRNYW5hZ2VtZW50LXNkbV9pbnRlZ3JhdGlvbiFiMjQ3Iiwic2RtLWRpLURvY3VtZW50TWFuYWdlbWVudC1zZG1faW50ZWdyYXRpb24hYjI0NyJdfQ.NUtc6ExtsixWLqQscdgCJzGvgXVpg2nW825WMy5_6F6lSwQSJFIPvI3YO_wWj_6IxTD6HY7FevIDntC8wW2rdMSQozt2JhdV7FkQhL-vcoBQWWOxN5e0zpNwKavxTRYkjXskkpOkWTIMLt1yYwrTCIo5mupgftaBtyP4nVoxDu0kZiKf4VKXEWoC1xORSx-z1qeyfS-Zx69-s-hThCYnfj27tcupB24fhi5TG3n4gFDWvpSH-j5nW5CAaJuP6aujtPzhCMB6hoQ2a32tNSV_H-ZaUANfPOuJSxXOGJAdvdnxESHJgcXjH3TY33bfe3czmr0IRk2AwPC_VhlXz6dObg`

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
      .then((response) => response.buffer())
      .then((buffer) => {
        const base64 = buffer.toString("base64")
        return `data:image/png;base64,` + base64
      })

    const end = Date.now()

    console.log(`r:::`, response)

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
