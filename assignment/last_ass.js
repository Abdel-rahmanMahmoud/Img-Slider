let myJson = `[
    {
      "userId": 10,
      "title": "Article Title Number 1",
      "description": "Article Description Number 1"
    },
    {
      "userId": 5,
      "title": "Article Title Number 2",
      "description": "Article Description Number 2"
    },
    {
      "userId": 5,
      "title": "Article Title Number 3",
      "description": "Article Description Number 3"
    },
    {
      "userId": 5,
      "title": "Article Title Number 4",
      "description": "Article Description Number 4"
    },
    {
      "userId": 5,
      "title": "Article Title Number 5",
      "description": "Article Description Number 5"
    },
    {
      "userId": 5,
      "title": "Article Title Number 6",
      "description": "Article Description Number 6"
    },
    {
      "userId": 25,
      "title": "Article Title Number 7",
      "description": "Article Description Number 7"
    },
    {
      "userId": 25,
      "title": "Article Title Number 8",
      "description": "Article Description Number 8"
    },
    {
      "userId": 15,
      "title": "Article Title Number 9",
      "description": "Article Description Number 9"
    },
    {
      "userId": 15,
      "title": "Article Title Number 10",
      "description": "Article Description Number 10"
    }
  ]`;
let myPromise = new Promise((resolve, reject) => {
  if (JSON.parse(myJson).length == 10) {
    resolve(JSON.parse(myJson));
  }
});

myPromise.then((resolveValue) => {
  resolveValue.length = 5;
  console.log(resolveValue);
  for (let index = 0; index < resolveValue.length; index++) {
    let div = document.createElement("div");
    document.body.append(div);
    div.innerHTML = `<h3>${resolveValue[index].title}</h3>
    <p>${resolveValue[index].description}</p>`;
  }
});
