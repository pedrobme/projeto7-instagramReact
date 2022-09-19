function SuggestedProfile(props) {
  return (
    <div class="suggested-profile">
      <div class="profile-info">
        <img src={props.image} />
        <div class="suggested-profiles-name">
          <p class="font-suggest-profile">{props.name}</p>
          <p class="font-follow-status">Segue você</p>
        </div>
      </div>
      <p class="font-follow">Seguir</p>
    </div>
  );
}

export default function Suggestions() {
  const suggestedProfilesList = [
    {
      image: "/assets/suggest1.png",
      name: "imavocato",
    },
    {
      image: "/assets/suggest1.png",
      name: "imavocato",
    },
  ];

  return (
    <>
      {suggestedProfilesList.map((item) => (
        <SuggestedProfile image={item.image} name={item.name} />
      ))}
    </>
  );
}
