function Story(props) {
  return (
    <li className="story">
      <img className="story-icon" src={props.image} />
      <img className="background-icon" src="/assets/stories_background.jpg" />
      <p className="font-stories">{props.name}</p>
    </li>
  );
}

export default function Stories() {
  const storiesList = [
    { image: "/assets/storie1.jpg", name: "bisteca" },
    { image: "/assets/storie2.jpg", name: "cabeludo" },
    { image: "/assets/storie3.jpg", name: "vaidoso" },
    { image: "/assets/storie4.jpg", name: "charmosa" },
    { image: "/assets/storie5.jpg", name: "ursinho" },
    { image: "/assets/storie6.jpg", name: "curioso" },
    { image: "/assets/storie7.jpg", name: "dengosa" },
    { image: "/assets/storie8.jpg", name: "leo" },
  ];

  return (
    <ul className="stories">
      {storiesList.map((item) => (
        <Story image={item.image} name={item.name} />
      ))}
    </ul>
  );
}
