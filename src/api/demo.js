


export async function demoFetch() {
    // const url = 'https://172.16.32.199:9090/api/common/from_ip';
    const url = 'http://175.182.21.220:5555/oauth2/api/common/from_ip';
    const data = {

    }
    // const response = await fetch("https://172.16.32.199:9090/api/from_ip");
    const response  = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });

    console.log('response: ', response);
    const jsonData = await response.json();
    console.log('jsonData: ', jsonData);
    // console.log(jsonData);
  }