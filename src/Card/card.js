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
    return `
    <div class="card" >
      <div class="relative">
        <div class="image" ><img src="${urls.regular}" alt="${alt_description}" /></div>
        <p>${user.name}</p>
        <p>
          <span><img src="../../public/icon-upload.svg" alt="icon-upload" /> ${Intl.DateTimeFormat("ES-es").format(new Date(created_at))}</span>
        </p>
      </div>
      <div class="absolute">
        <div><img src="../../public/icon_camera_.svg" alt="icon-camera"><span>+60</span></div>
        <div><img src="../../public/icon_heart_.svg" alt="icon-heart"><span>${likes}</span></div>
        <a href="${links.self}">Visitar</a>
        <div><img src="${user.profile_image.medium}" alt=""></div>
      </div>
    </div>
        `;
  };

  const template = templateGen();
  return template;
};

export default card;
