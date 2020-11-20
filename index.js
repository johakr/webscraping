const { JSDOM } = require('jsdom');

JSDOM.fromURL("https://support.apple.com/en-us/HT201222").then(dom => {
    const { document } = dom.window;

    const rows = [...document.querySelectorAll('#tableWraper table tbody tr')];

    rows.forEach(row => {
        const tds = [...row.querySelectorAll('td')];

        if (!tds.length) return;

        const software = tds[0].textContent;
        const devices = tds[1].textContent;
        const release = tds[2].textContent;

        console.log(software, devices, release);
    })
})