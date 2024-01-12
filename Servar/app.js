const { setDefaultAutoSelectFamily } = require("net");

const BASE_URL = "http://localhost:7000";

async function getData() {
  let response = await axios(`${BASE_URL}/users`);
  console.log(response.data);
  console.log(response);
  dfhkj(response.data)
}

getData();

function dfhkj(elem) {
  let satisfies = {};
  satisfies.innerhtml = "";
 elem.forEach(element => {
    satisfies.innerhtml = `
    <div class="kupon">
    <div class="kuponlog">
      <div class="logsol"><i class="fa-solid fa-sliders"></i></div>
      <div class="logsag">
        High Quality <br />
        Hardware
      </div>
    </div>
    <div class="paraqraf">
      <p>
        Lorem ipsum dolor sit amet <br />
        consectetur is a nice adipisicing <br />
        elita ssumenda a similique <br />
        perferendis dolorem eos.
      </p>
    </div>
  </div>
    `;
 });
}
