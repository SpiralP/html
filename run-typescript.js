window.addEventListener("DOMContentLoaded", async () => {
  for (const tsScript of Array.from(
    document.querySelectorAll('script[type="text/typescript"]')
  )) {
    let tsCode;
    if (tsScript.src) {
      tsCode = await (await fetch(tsScript.src)).text();
      tsScript.removeAttribute("src");
    } else {
      tsCode = tsScript.innerHTML;
      tsScript.innerHTML = "";
    }

    const jsCode = ts.transpile(tsCode);

    tsScript.type = "text/javascript";
    tsScript.appendChild(document.createTextNode(jsCode));
  }
});
