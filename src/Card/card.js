const card = ({
  alt_description,
  created_at,
  likes,
  urls,
  user,
  links,
}) => {
  import("./card.css");

  const templateGen = () => {

    const randomColors = () => Array.from({length: 3}, v => Math.floor(Math.random()*255));
    const rndmClr = randomColors();

    return `
    <div class="card" >
      <div class="relative">
        <div class="image" ><img loading="lazy" src="${urls.regular}" alt="${alt_description}" /></div>
        <div class="user" style="--random-color: rgb(${rndmClr.join(', ')})" ><img src="${user.profile_image.medium}" alt=""></div>
        <p>${user.name}</p>
        <p>
          <span><img src="../../public/icon-upload.svg" loading="lazy" alt="icon-upload" /> ${Intl.DateTimeFormat("ES-es").format(new Date(created_at))}</span>
        </p>
      </div>
      <div class="absolute">
      <div class="card-stats" >
        <div><img src="../../public/icon_camera_.svg" alt="icon-camera"><span>+60</span></div>
        <div><img src="../../public/icon_heart_.svg" alt="icon-heart"><span>${likes}</span></div>
      </div>
        <a href="${links.self}">Visitar</a>
      </div>
    </div>
        `;
  };

  const template = templateGen();
  return template;
};

export default card;
